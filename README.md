#  SBA-Task Management Dashboard

This is a task management dashboard built using **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Heroicons**.

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
- Node.js + npm

##  Project Structure

```text
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
```

##  Screenshot

![image](https://github.com/user-attachments/assets/200190aa-1128-4488-b7a4-44bf6397b24d)


##  Clone the Repository 

```bash
git clone https://github.com/HaidaMarese/task-dashboard.git
cd task-dashboard
npm install
npm run dev
