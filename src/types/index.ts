export interface Task {
  id: string
  title: string
  description: string
  status: 'pending' | 'completed'
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
}

export interface TaskFormData {
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
}

export interface FilterOptions {
  status: 'all' | 'pending' | 'completed'
  priority: 'all' | 'low' | 'medium' | 'high'
  searchQuery: string
}
