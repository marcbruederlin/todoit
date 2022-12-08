import { useMemo } from 'react'

import Button from './common/Button'

export default function TodoStats({
  total,
  showCompleted,
  onShowToggle,
}: Props) {
  const showCompletedLabel = useMemo(() => {
    return showCompleted ? 'Hide' : 'Show'
  }, [showCompleted])

  return (
    <div className="mt-3 flex items-center justify-between border-t-2 border-gray-200 pt-3 text-sm text-gray-500 dark:border-gray-600">
      <div>{total} items</div>
      <Button type="link" onClick={onShowToggle}>
        {showCompletedLabel} completed
      </Button>
    </div>
  )
}

type Props = {
  total: number
  showCompleted: boolean
  onShowToggle: () => void
}
