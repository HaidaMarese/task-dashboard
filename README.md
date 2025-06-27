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

# 📖 Reflection: Task Management Dashboard

## How I Implemented React and TypeScript Features

I structured the app with reusable components like `TaskList`, `TaskForm`, and `TaskFilter`. I used TypeScript interfaces to define `Task`, `TaskFormData`, and `FilterOptions`, ensuring type safety across the application. The component props and state were fully typed.

## Challenges and Solutions

- **Form Validation:** I had to ensure users couldn't submit empty titles. I used a controlled form with error messages.
- **Dark Mode:** I implemented a toggle that syncs with `localStorage` and updates Tailwind’s `dark` class dynamically.
- **State Management:** Managing task updates required immutability and careful use of `map()` and `filter()`.

## Component Composition and State

Each component focuses on a single task:
- `Dashboard` manages global state
- `TaskForm` is a controlled form with validation
- `TaskList` renders task items
- `TaskItem` handles toggle/delete actions
- `TaskFilter` controls filter/search inputs

I used `useState`, `useEffect`, and `props` to manage state and flow data between components. I also saved data in `localStorage` using a `useEffect()` watcher.

---

## Notes

The app meets all SBA criteria:
- Strong TypeScript typing
- Form control and validation
- Clean component structure
- Filtering, searching, sorting
- Persistent and responsive UI

##  Screenshot

![image](https://github.com/user-attachments/assets/3db83447-6d80-410e-8126-410461fa72a3)



##  Clone the Repository 

```bash
git clone https://github.com/HaidaMarese/task-dashboard.git
cd task-dashboard
npm install
npm run dev
