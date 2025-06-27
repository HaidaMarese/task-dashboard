import { useState } from "react"
import type { TaskFormData } from "../../types"

interface TaskFormProps {
  onAdd: (data: TaskFormData) => void
}

const initialForm: TaskFormData = {
  title: '',
  description: '',
  priority: 'medium',
  dueDate: ''
}

function TaskForm({ onAdd }: TaskFormProps) {
  const [formData, setFormData] = useState(initialForm)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formData.title.trim()) {
      setError("Title is required")
      return
    }

    onAdd(formData)
    setFormData(initialForm)
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white dark:bg-gray-900 rounded shadow">
      <input name="title" placeholder="Task title" value={formData.title} onChange={handleChange}
        className="w-full p-2 border rounded" />
      <textarea name="description" placeholder="Description" value={formData.description}
        onChange={handleChange} className="w-full p-2 border rounded" />
      <div className="flex gap-4">
        <select name="priority" value={formData.priority} onChange={handleChange}
          className="p-2 border rounded">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input type="date" name="dueDate" value={formData.dueDate || ''} onChange={handleChange}
          className="p-2 border rounded" />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Task
      </button>
    </form>
  );
}
export default  TaskForm;
