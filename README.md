#  Task Management Dashboard

This is a task management dashboard built using **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Heroicons**.

## Folder Structure

task-dashboard/
    ├── src/
    │   ├── components/
    │   │   ├── TaskList/
    │   │   │   ├── TaskList.tsx
    │   │   │   └── TaskItem.tsx
    │   │   ├── TaskForm/
    │   │   │   └── TaskForm.tsx
    │   │   ├── TaskFilter/
    │   │   │   └── TaskFilter.tsx
    │   │   └── Dashboard/
    │   │       └── Dashboard.tsx
    │   ├── types/
    │   │   └── index.ts
    │   ├── utils/
    │   │   └── taskUtils.ts
    │   ├── App.tsx
    ├── main.tsx
    └── package.json

##  Features

- Add, complete, and delete tasks
- Filter tasks by status, priority, and search
- Sort and view task details
- Persistent storage with localStorage
- Light/Dark mode toggle
- Responsive UI

##  Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Heroicons
- localStorage

##  Run 

```bash
git clone https://github.com/HaidaMarese/task-dashboard.git
cd task-dashboard
npm install
npm run dev
