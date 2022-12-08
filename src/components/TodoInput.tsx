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
        isCompleted: false,
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
        className="block w-full rounded-md border border-gray-200 p-3 text-sm shadow-sm outline-none ring-1 ring-transparent transition-all focus:border-indigo-600 focus:ring-indigo-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
        value={title}
        onChange={handleChange}
      />
    </form>
  )
}

type Props = {
  onSubmit: (item: TodoItemType) => void
}
