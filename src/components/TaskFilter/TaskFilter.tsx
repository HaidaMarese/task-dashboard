import type { FilterOptions } from "../../types"

interface TaskFilterProps {
  filters: FilterOptions
  onChange: (filters: FilterOptions) => void
}

function TaskFilter({ filters, onChange }: TaskFilterProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    onChange({ ...filters, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded shadow">
      <input name="searchQuery" type="text" placeholder="Search..." value={filters.searchQuery}
        onChange={handleChange} className="p-2 border rounded w-full md:w-auto" />
      <select name="status" value={filters.status} onChange={handleChange} className="p-2 border rounded">
        <option value="all">All Status</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <select name="priority" value={filters.priority} onChange={handleChange} className="p-2 border rounded">
        <option value="all">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}
export default  TaskFilter;
