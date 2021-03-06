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

ActiveRecord::Schema.define(version: 2018_10_22_161055) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "found_pet_comments", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "found_pet_id"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["found_pet_id"], name: "index_found_pet_comments_on_found_pet_id"
    t.index ["user_id"], name: "index_found_pet_comments_on_user_id"
  end

  create_table "found_pets", force: :cascade do |t|
    t.string "animal_type"
    t.string "city"
    t.string "state"
    t.string "area"
    t.string "gender"
    t.string "status"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "pet_image_file_name"
    t.string "pet_image_content_type"
    t.bigint "pet_image_file_size"
    t.datetime "pet_image_updated_at"
    t.index ["user_id"], name: "index_found_pets_on_user_id"
  end

  create_table "jwt_blacklist", force: :cascade do |t|
    t.string "jti", null: false
    t.index ["jti"], name: "index_jwt_blacklist_on_jti"
  end

  create_table "lost_pet_comments", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "lost_pet_id"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lost_pet_id"], name: "index_lost_pet_comments_on_lost_pet_id"
    t.index ["user_id"], name: "index_lost_pet_comments_on_user_id"
  end

  create_table "lost_pets", force: :cascade do |t|
    t.string "animal_type"
    t.string "name"
    t.string "gender"
    t.string "breed"
    t.string "city"
    t.string "state"
    t.string "personality"
    t.boolean "chipped", default: false
    t.string "status"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "pet_image_file_name"
    t.string "pet_image_content_type"
    t.bigint "pet_image_file_size"
    t.datetime "pet_image_updated_at"
    t.index ["user_id"], name: "index_lost_pets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "username", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "found_pet_comments", "found_pets"
  add_foreign_key "found_pet_comments", "users"
  add_foreign_key "found_pets", "users"
  add_foreign_key "lost_pet_comments", "lost_pets"
  add_foreign_key "lost_pet_comments", "users"
  add_foreign_key "lost_pets", "users"
end
