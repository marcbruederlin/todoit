import { useEffect, useMemo, useState } from 'react'

import packageJson from '../package.json'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import TodoStats from './components/TodoStats'
import { TodoItemType } from './components/TodoItem'

export default function App() {
  const { version } = packageJson
  const localItems = localStorage.getItem('todos')

  const [showCompleted, setShowCompleted] = useState(true)

  const [items, setItems] = useState<TodoItemType[]>(
    localItems ? JSON.parse(localItems) : []
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items))
  }, [items])

  const filteredItems = useMemo(() => {
    const sortedItems = items.sort((a, b) =>
      a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
    )

    if (showCompleted) {
      return sortedItems
    }

    return sortedItems.filter((item) => !item.isCompleted)
  }, [items, showCompleted])

  const totalItems = useMemo(() => {
    return filteredItems.length
  }, [filteredItems])

  function handleCompleteToggle(id: string) {
    const nextItems: TodoItemType[] = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        }
      }

      return item
    })

    setItems(nextItems)
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-gray-100 antialiased dark:bg-gray-800">
      <div className="flex w-96 flex-col gap-3">
        <div className="flex flex-col gap-3">
          <TodoList
            items={filteredItems}
            onDelete={(id: string) =>
              setItems(items.filter((item) => item.id !== id))
            }
            onCompletedToggle={handleCompleteToggle}
          />
          <TodoInput
            onSubmit={(item: TodoItemType) => setItems([...items, item])}
          />
          <TodoStats
            total={totalItems}
            showCompleted={showCompleted}
            onShowToggle={() => setShowCompleted(!showCompleted)}
          />
        </div>
        <div className="flex items-center justify-center text-xs">
          <div className="font-light text-gray-400 dark:text-white/25">
            v{version}
          </div>
        </div>
      </div>
    </div>
  )
}
