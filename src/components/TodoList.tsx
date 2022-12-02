import { useMemo, useState } from 'react'
import TodoItem, { TodoItemType } from './TodoItem'

function TodoList({ items, ...rest }: Props) {
  const [hideCompleted, setHideCompleted] = useState(false)

  const filteredItems = useMemo(() => {
    if (hideCompleted) {
      return items.filter((item) => !item.isDone)
    }

    return items
  }, [items, hideCompleted])

  const totalItems = useMemo(() => {
    return filteredItems.length
  }, [filteredItems])

  const hideCompletedLabel = useMemo(() => {
    return hideCompleted ? 'Show' : 'Hide'
  }, [hideCompleted])

  return (
    <div className="w-96">
      <ol {...rest}>
        {filteredItems.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ol>

      <div className="flex justify-between text-sm text-gray-600 dark:text-white/40">
        <div>{totalItems} items</div>
        <button onClick={() => setHideCompleted(!hideCompleted)}>
          {hideCompletedLabel} completed
        </button>
      </div>
    </div>
  )
}

type Props = {
  items: TodoItemType[]
}

export default TodoList
