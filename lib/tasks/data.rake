require 'nokogiri'
require 'open-uri'
require 'httparty'
require 'http'
require 'faraday'

namespace :data do

  class_url = "https://class-search.nd.edu/reg/srch/ClassSearchServlet"
  @conn = Faraday.new(:url => class_url) do |faraday|
      faraday.request :url_encoded
      #faraday.response :logger
      faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
  end

  @term_field = "201410"
  @subj_field = "ACCT"
  @divs_field = "A"
  @campus_field = "M"
  @credit_field = "A"
  @attr_field = "0ANY"


  desc "Fetch all of the departments and update the database."
  task fetch_departments: :environment do
    response = HTTParty.get('https://class-search.nd.edu/reg/srch/ClassSearchServlet')
    content = response.body

    document = Nokogiri::HTML(content)
    subj_box = document.css('select[@name="SUBJ"]')
    departments = subj_box.css('option')

    departments.each do |dept|
      dept_tag = dept.attr('value').strip
      dept_name = dept.text.strip

      dept_model = Department.find_or_create_by(:tag => dept_tag, :name => dept_name)
      puts dept_model
    end
  end

  desc "Fetch every single course in Notre Dame's class search database and map it to a department"
  task fetch_courses: :environment do
    fetch_html_response(Department.where(tag: 'PSY').take)
    #Parallel.map(Department.all) do |dept|
      #Department.reset_counters(dept.id, :courses)
      #fetch_html_response(dept)
    #end
  end

  desc "TODO"
  task fetch_courses_tags: :environment do
    departments = Department.all.group_by(&:tag).keys
    puts departments
    fetch_html_response_group(departments)
  end

  desc "TODO"
  task update_course_attributes: :environment do
  end

  def fetch_html_response(dept)
    response = @conn.post '', {
      :TERM => @term_field,
      :SUBJ => dept.tag,
      :DIVS => @divs_field,
      :CAMPUS => @campus_field,
      :CREDIT => @credit_field,
      :ATTR => @attr_field
    }

    content = response.body.strip

    document = Nokogiri::HTML(content)

    result_table = document.css('#resulttable')
    rows = result_table.css('tbody').css('tr').each do |row|
      cells = row.css('td')

      course_section = cells[0].text.strip.split('-')
      course_title = cells[1].text.strip
      course_credits = cells[2].text.strip

      if course_credits == "V"
        course_credits = -1
      end

      course_number = course_section[0].strip
      course_section_number = course_section[1].strip.split[0].strip

      course_status = cells[3].strip
      course_max_seats = cells[4].text.strip
      course_open_seats = cells[5].text.strip
      course_crosslist = cells[6].text.strip
      if course_crosslist == "Y"
        course_crosslisting = true
      else
        course_crosslisting = false
      end
      #course_crosslist = "Y" ? true ? false
      course_crn = cells[7].text.strip
      course_instructor =  cells[9].text.strip

      if course_instructor.include?  "\n"
        instructors = puts course_instructor.split("\n")[0]
        break
      end

      course_timeslot = cells[10].text.strip
      course_begin = cells[11].text.strip
      course_end = cells[12].text.strip
      course_location = cells[13].text.strip


      print course_number, " ",  course_section_number, " ", course_title, " ", course_credits, " ", course_open_seats, " ", course_max_seats, " ",  course_crosslisting, " ",  course_crn, " ", course_instructor, " ",course_timeslot, " ",  course_begin, " ", course_end, " ", course_location, "\n"

      course = dept.courses.where(:course_num => course_number).first_or_initialize
      if course.new_record?
        puts "Creating new record"
        course.credits = course_credits
        course.title = course_title
        course.crosslisted = course_crosslisting
        course.save()
      else
        puts "Already exists within database."
      end

      puts  "-"*50 + "\n"
    end
  end

  def fetch_html_response_group(depts)
    response = @conn.post '', {
      :TERM => @term_field,
      :SUBJ => depts,
      :DIVS => @divs_field,
      :CAMPUS => @campus_field,
      :CREDIT => @credit_field,
      :ATTR => @attr_field
    }

    content = response.body.strip
    puts content

    document = Nokogiri::HTML(content)

    result_table = document.css('#resulttable')
    rows = result_table.css('tbody').css('tr').each do |row|
      cells = row.css('td')

      course_section = cells[0].text.strip.split('-')
      course_title = cells[1].text.strip
      course_credits = cells[2].text.strip

      if course_credits == "V"
        course_credits = -1
      end

      course_number = course_section[0].strip
      course_section_number = course_section[1].strip.split[0].strip

      course_max_seats = cells[4].text.strip
      course_open_seats = cells[5].text.strip
      course_crosslist = cells[6].text.strip
      if course_crosslist == "Y"
        course_crosslisting = true
      else
        course_crosslisting = false
      end
      #course_crosslist = "Y" ? true ? false
      course_crn = cells[7].text.strip
      course_instructor =  cells[9].text.strip
      course_timeslot = cells[10].text.strip
      course_begin = cells[11].text.strip
      course_end = cells[12].text.strip
      course_location = cells[13].text.strip


      print course_number, " ",  course_section_number, " ", course_title, " ", course_credits, " ", course_open_seats, " ", course_max_seats, " ",  course_crosslisting, " ",  course_crn, " ", course_instructor, " ",course_timeslot, " ",  course_begin, " ", course_end, " ", course_location, "\n"
      puts  "-"*50 + "\n"
    end
  end
end
