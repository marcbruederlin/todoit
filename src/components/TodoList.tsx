import { Fragment } from 'react'

import Icon from './common/Icon'
import TodoItem, { TodoItemType } from './TodoItem'

function TodoList({ items, onDelete, onCompletedToggle, ...rest }: Props) {
  return (
    <>
      {items.length > 0 ? (
        <ol className="flex flex-col gap-y-4" {...rest}>
          {items.map((item) => (
            <Fragment key={item.id}>
              <TodoItem
                id={item.id}
                title={item.title}
                isCompleted={item.isCompleted}
                onDelete={(id: string) => onDelete(id)}
                onCompletedToggle={(id: string) => onCompletedToggle(id)}
              />
            </Fragment>
          ))}
        </ol>
      ) : (
        <div className="flex flex-col items-center justify-center gap-1 rounded-md bg-indigo-50 py-5 text-center text-sm text-indigo-600 ring-1 ring-indigo-500">
          <Icon icon="smile" />
          <span>Create some todos</span>
        </div>
      )}
    </>
  )
}

type Props = {
  items: TodoItemType[]
  onDelete: (id: string) => void
  onCompletedToggle: (id: string) => void
}

export default TodoList
