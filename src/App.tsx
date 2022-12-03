import { useMemo, useState } from 'react'
import packageJson from '../package.json'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import TodoStats from './components/TodoStats'
import { TodoItemType } from './components/TodoItem'

export default function App() {
  const { displayName, version } = packageJson

  const [showCompleted, setShowCompleted] = useState(true)

  const [items, setItems] = useState<TodoItemType[]>([
    { id: '1', title: 'Go shopping', isDone: false },
    { id: '2', title: 'Buy christmas presents', isDone: true },
    { id: '3', title: 'Do some sports', isDone: false },
  ])

  const filteredItems = useMemo(() => {
    if (showCompleted) {
      return items
    }

    return items.filter((item) => !item.isDone)
  }, [items, showCompleted])

  const totalItems = useMemo(() => {
    return filteredItems.length
  }, [filteredItems])

  function addNewItem(newItem: TodoItemType) {
    setItems([...items, newItem])
  }

  function toggleCompleted() {
    setShowCompleted(!showCompleted)
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-gray-100 antialiased dark:bg-gray-800">
      <div className="text-lg font-medium text-gray-800 dark:text-white">
        {displayName}
      </div>

      <div className="flex flex-col gap-4">
        <TodoList items={filteredItems} />
        <TodoInput onSubmit={addNewItem} />
        <TodoStats
          total={totalItems}
          showCompleted={showCompleted}
          onShowToggle={toggleCompleted}
        />
      </div>

      <div className="text-xs font-light text-gray-400 dark:text-white/25">
        v{version}
      </div>
    </div>
  )
}
