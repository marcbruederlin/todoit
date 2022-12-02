import { useState } from 'react'
import packageJson from '../package.json'
import TodoList from './components/TodoList'
import { TodoItemType } from './components/TodoItem'

export default function App() {
  const { displayName, version } = packageJson

  const [todoItems, setTodoItems] = useState<TodoItemType[]>([
    { id: '1', title: 'Go shopping', isDone: false },
    { id: '2', title: 'Buy christmas presents', isDone: true },
    { id: '3', title: 'Do some sports', isDone: false },
  ])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-white antialiased dark:bg-gray-800">
      <div className="text-lg font-medium text-gray-800 dark:text-white">
        {displayName}
      </div>

      <TodoList items={todoItems} />

      <div className="text-xs font-light text-gray-400 dark:text-white/25">
        v{version}
      </div>
    </div>
  )
}
