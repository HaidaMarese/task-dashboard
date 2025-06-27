import type { Task } from "../../types"
import { TrashIcon } from "@heroicons/react/24/solid"


interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-2">
      <div>
        <h3 className={`font-bold ${task.status === 'completed' ? 'line-through text-gray-400' : ''}`}>
          {task.title}
        </h3>
        <p className="text-sm text-gray-500">{task.description}</p>
        <p className="text-xs mt-1">
          Priority: <span className="capitalize">{task.priority}</span> | Due: {task.dueDate ?? 'N/A'}
        </p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onToggle(task.id)} className="text-blue-500 hover:underline">
          {task.status === 'completed' ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700 flex items-center gap-1"
          title="Delete Task"
        >
          <TrashIcon className="h-5 w-5" />
        </button>

      </div>
    </div>
  );
}

export default TaskItem;
