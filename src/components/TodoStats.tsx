import { useMemo } from 'react'

export default function TodoStats({
  total,
  showCompleted,
  onShowToggle,
}: Props) {
  const showCompletedLabel = useMemo(() => {
    return showCompleted ? 'Hide' : 'Show'
  }, [showCompleted])

  return (
    <div className="dark:border-gray-00 mt-4 flex items-center justify-between border-t-2 border-gray-300 pt-2 text-sm text-gray-600 dark:text-white/40">
      <div>{total} items</div>
      <button
        className="rounded-md py-2 px-3 transition-colors hover:bg-black/5 hover:text-sky-600"
        onClick={onShowToggle}
      >
        {showCompletedLabel} completed
      </button>
    </div>
  )
}

type Props = {
  total: number
  showCompleted: boolean
  onShowToggle: () => void
}
