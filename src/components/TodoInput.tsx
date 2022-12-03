import { FormEvent, useState } from 'react'
import { TodoItemType } from './TodoItem'

export default function TodoInput({ onSubmit }: Props) {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (title.length > 0) {
      onSubmit({
        id: crypto.randomUUID(),
        title: title,
        isDone: false,
      })

      setTitle('')
    }
  }

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setTitle(event.currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        placeholder="Enter a new todo"
        className="block w-full rounded-md py-3 px-5 text-sm text-gray-900 shadow-sm outline outline-1 outline-gray-200 transition-all focus:outline-sky-600 dark:outline-gray-500"
        value={title}
        onChange={handleChange}
      />
    </form>
  )
}

type Props = {
  onSubmit: (item: TodoItemType) => void
}
