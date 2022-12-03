import TodoItem, { TodoItemType } from './TodoItem'

function TodoList({ items, ...rest }: Props) {
  return (
    <div className="w-96">
      <ol className="flex flex-col gap-y-3" {...rest}>
        {items.map((item) => (
          <TodoItem key={item.id} title={item.title} isDone={item.isDone} />
        ))}
      </ol>
    </div>
  )
}

type Props = {
  items: TodoItemType[]
}

export default TodoList
