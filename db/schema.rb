# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141104144550) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attributes", force: true do |t|
    t.string   "name"
    t.string   "tag"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "courses_count"
    t.integer  "course_attributes_count"
  end

  create_table "course_attributes", force: true do |t|
    t.integer  "course_id"
    t.integer  "attribute_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "course_attributes", ["attribute_id"], name: "index_course_attributes_on_attribute_id", using: :btree
  add_index "course_attributes", ["course_id"], name: "index_course_attributes_on_course_id", using: :btree

  create_table "courses", force: true do |t|
    t.string   "title"
    t.string   "course_num"
    t.integer  "department_id"
    t.integer  "credits"
    t.boolean  "crosslisted"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "course_description"
    t.integer  "sections_count"
    t.integer  "course_attributes_count"
  end

  add_index "courses", ["department_id"], name: "index_courses_on_department_id", using: :btree

  create_table "departments", force: true do |t|
    t.string   "name"
    t.string   "tag"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "courses_count"
  end

  create_table "professors", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "courses_count"
    t.integer  "section_professors_count"
    t.integer  "sections_count"
  end

  create_table "section_professors", force: true do |t|
    t.integer  "section_id"
    t.integer  "professor_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "section_professors", ["professor_id"], name: "index_section_professors_on_professor_id", using: :btree
  add_index "section_professors", ["section_id"], name: "index_section_professors_on_section_id", using: :btree

  create_table "sections", force: true do |t|
    t.integer  "crn"
    t.integer  "open_seats"
    t.integer  "max_seats"
    t.string   "days_of_week"
    t.time     "start_time"
    t.time     "end_time"
    t.string   "location"
    t.integer  "section_num"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "course_id"
    t.integer  "professor_id"
  end

  add_index "sections", ["course_id"], name: "index_sections_on_course_id", using: :btree
  add_index "sections", ["professor_id"], name: "index_sections_on_professor_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "authentication_token"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
