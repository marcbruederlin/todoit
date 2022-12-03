export default function TodoItem({ title, isDone }: Props) {
  return (
    <li className="rounded-md py-3 px-5 outline outline-2 outline-gray-200 dark:outline-gray-500">
      {title}
    </li>
  )
}

type Props = {
  title: string
  isDone: boolean
}

export type TodoItemType = {
  id: string
  title: string
  isDone: boolean
}
