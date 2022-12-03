import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import Icon from './common/Icon'
import Button from './common/Button'
import Checkbox from './common/Checkbox'

export default function TodoItem({
  id,
  title,
  isCompleted,
  isDraggable,
  onDelete,
  onCompletedToggle,
}: Props) {
  const classObject = classNames({
    'cursor-move': isDraggable,
    'line-through opacity-50': isCompleted,
    'group flex w-full items-center justify-between rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-900 shadow-sm ring-1 ring-transparent transition-all hover:border-indigo-600 hover:ring-indigo-600':
      true,
  })

  return (
    <li draggable={isDraggable} className={classObject}>
      <div className="flex items-center gap-4">
        <Checkbox
          isChecked={isCompleted}
          onChange={() => onCompletedToggle(id)}
        />
        {title}
      </div>

      <Button
        className="invisible opacity-0 group-hover:visible group-hover:opacity-100"
        onClick={() => onDelete(id)}
      >
        <Icon icon="trash-2" />
      </Button>
    </li>
  )
}

type Props = {
  id: string
  title: string
  isCompleted: boolean
  isDraggable: boolean
  onDelete: (id: string) => void
  onCompletedToggle: (id: string) => void
}

export type TodoItemType = {
  id: string
  title: string
  isCompleted: boolean
}
