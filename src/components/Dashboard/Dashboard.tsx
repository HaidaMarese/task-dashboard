import { useEffect, useState } from "react"
import type { Task, FilterOptions, TaskFormData } from "../../types"
import TaskForm from "../TaskForm/TaskForm"
import TaskFilter from "../TaskFilter/TaskFilter"
import TaskList from "../TaskList/TaskList"
import ThemeToggle from "./ThemeToggle"
import Footer from "./Footer"
import { filterTasks } from "../../utils/taskUtils"


function generateId(): string {
  return Date.now().toString() + Math.floor(Math.random() * 1000).toString()
}

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : []
  })

  const [filters, setFilters] = useState<FilterOptions>({
    status: "all",
    priority: "all",
    searchQuery: ""
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function handleAddTask(data: TaskFormData) {
    const newTask: Task = {
      ...data,
      id: generateId(),
      status: "pending"
    }
    setTasks((prev) => [...prev, newTask])
  }

  function handleToggleStatus(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "pending" ? "completed" : "pending" }
          : task
      )
    )
  }

  function handleDelete(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const visibleTasks = filterTasks(tasks, filters)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ThemeToggle />
      <h1 className="text-3xl font-bold mb-4 text-center">HaidaM- Task Management Dashboard</h1>
      <TaskForm onAdd={handleAddTask} />
      <TaskFilter filters={filters} onChange={setFilters} />
      <TaskList tasks={visibleTasks} onToggle={handleToggleStatus} onDelete={handleDelete} />
      <Footer />
    </div>
  )
}

export default Dashboard
