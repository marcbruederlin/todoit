export default function TodoItem({ item }: Props) {
  return <li>{item.title}</li>
}

type Props = {
  item: TodoItemType
}

export type TodoItemType = {
  id: string
  title: string
  isDone: boolean
}
