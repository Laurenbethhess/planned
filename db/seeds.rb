puts "🌱 Seeding todos.........."

Category.destroy_all

Category.create(id: 0, name: "not assigned")
Category.create(id: 1, name: "chores")
Category.create(id: 2, name: "work")
Category.create(id: 3, name: "exercise")
Category.create(id: 4, name: "misc")
Category.create(id: 5, name: "groceries")
Category.create(id: 6, name: "school")

Todo.create(id: 1, todo: "redo Todo List", importance: 1, category_id: 6)


puts "✅ Done seeding!"
