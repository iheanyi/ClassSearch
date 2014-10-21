require 'nokogiri'
require 'open-uri'
require 'httparty'
require 'http'
require 'faraday'
require 'chronic'

namespace :data do

  class_url = "https://class-search.nd.edu/reg/srch/ClassSearchServlet"
  @conn = Faraday.new(:url => class_url) do |faraday|
      faraday.request :url_encoded
      #faraday.response :logger
      #faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
      faraday.adapter :excon
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
    #fetch_html_response(Department.where(tag: 'PSY').take)
    Parallel.map(Department.all) do |dept|
      fetch_html_response(dept)
    end
  end

  desc "TODO"
  task update_course_attributes: :environment do
  end

  desc "Fetch Descriptions for each course"
  task fetch_course_description: :environment do
    Parallel.map(Course.all) do |course|
      fetch_course_description(course)
    end
  end

  desc "Fetch every attribute"
  task fetch_attributes: :environment do
    #response = HTTParty.get(class_url)
    response = @conn.get ''
    #puts response
    content = response.body.strip

    document = Nokogiri::HTML(content)
    attr_box = document.css('select[@name="ATTR"]')
    attributes = attr_box.css('option').drop(1)
    #attributes.shift
    #puts attributes

    attributes.each do |attribute|
      attr_tag = attribute.attr('value').strip
      if(attribute.text.include? "-")
        attr_split = attribute.text.split("-")
        if(attr_split.length > 2)
          attr_name = attr_split[1].strip + "-" + attr_split[2].strip
        else
          attr_name = attr_split[1].strip
        end
      else
        #puts attribute.text, attr_tag
        attr_split = attribute.text.split(":")
        attr_name = attr_split[1].strip + ": " + attr_split[2].strip
        #puts attr_name
      end
      attr_model = Attribute.find_or_create_by(:tag => attr_tag, :name => attr_name)
      puts attr_tag + " " + attr_name
    end

    depts =  Department.pluck(:tag)
    attrs = Attribute.pluck(:tag)
    mapping = depts.product(attrs)

    #mapping.collect { |d, a| puts "Department: #{d}, Attribute: #{a}" }
    puts depts.length
    puts attrs.length
    puts mapping.length
    #puts depts.product(attrs).collect { |d, a| puts d, a }
=begin
    response = @conn.post '', {
      :TERM => @term_field,
      :SUBJ => "DESN",
      #:SUBJ => "ARST",
      :DIVS => @divs_field,
      :CAMPUS => @campus_field,
      :CREDIT => @credit_field,
      :ATTR => "FNAR"
    }
=end


  # Call Collect { |x, y| f(x, y) to get results}
  end

  def fetch_course_attributes(dept, attribute)
    response = @conn.post '', {
      :TERM => @term_field,
      :SUBJ => "DESN",
      #:SUBJ => "ARST",
      :DIVS => @divs_field,
      :CAMPUS => @campus_field,
      :CREDIT => @credit_field,
      :ATTR => attribute
    }



  end
  def fetch_course_description(course)
    course_section = course.sections.first
    if(course_section != nil && course.course_description == nil)
      response = @conn.get '', {:CRN => course_section.crn, :TERM => "201410", }
      content = response.body.strip

      document = Nokogiri::HTML(content)

      basic_info = document.css('#basicInfo').first
      data_table = basic_info.css('.datadisplaytable').first

      table_data = data_table.css('tr')

      alt_table = document.xpath('//table[@class="datadisplaytable"]').first

      # Has a second data display table nested within
      #

      course_description = alt_table.xpath('./tr[2]/td/text()[3]').text.strip

      puts course_description

      course.course_description = course_description

      course.save()
    end
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

      course_status = cells[3].text.strip
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
#      puts cells[9], cells[9].text, cells[9].to_json

      if course_instructor.include?"\n"
        instructor = course_instructor.split("\n")[0]
      else
        instructor = course_instructor
      end

      course_time = cells[10].text
      course_timeslot = course_time.strip.split("-")
      course_days = course_timeslot[0].strip
      puts course_timeslot.size
      puts course_timeslot
      if course_timeslot.length <= 1
        course_days = "TBA"
        course_start_time = nil
        course_end_time = nil
      else
        course_start_time = Chronic.parse(course_timeslot[1].strip + "M")
        course_end_time = Chronic.parse(course_timeslot[2].strip + "M")
      end

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
      else
        puts "Already exists within database."
      end


      if instructor.eql? "TBA"
        professor_model = nil
      else
        names = instructor.strip.split(",")
        last_name = names[0].strip
        first_name = names[1].strip
        professor_model = Professor.where(:last_name => last_name, :first_name => first_name).first_or_create
      end

      section = course.sections.where(:crn => course_crn).first_or_initialize
      puts section

      if section.new_record?
        section.section_num = course_section_number
        section.crn = course_crn
        section.days_of_week = course_days
        section.start_time = course_start_time
        section.end_time = course_end_time
        section.professor = professor_model
        section.location = course_location
      else
        section.days_of_week = course_days
        section.start_time = course_start_time
        section.end_time = course_end_time
        section.professor = professor_model
        section.location = course_location
        puts "Section already in database"
      end

      section.open_seats = course_open_seats
      section.max_seats = course_max_seats
      if course_location.length > 255 || instructor.length > 255
        next
      end

      section.save!
      course.save!
      puts  "-"*50 + "\n"
    end
  end
end
