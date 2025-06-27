import type { Task, FilterOptions } from '../types'

export function filterTasks(tasks: Task[], filters: FilterOptions): Task[] {
  return tasks.filter(task => {
    const statusMatch = filters.status === 'all' || task.status === filters.status
    const priorityMatch = filters.priority === 'all' || task.priority === filters.priority
    const searchMatch = task.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
    return statusMatch && priorityMatch && searchMatch
  })
}

export function sortTasks(tasks: Task[], sortBy: 'title' | 'priority'): Task[] {
  return [...tasks].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
}
