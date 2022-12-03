export default function Checkbox({ isChecked, onChange }: Props) {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      className="h-5 w-5 cursor-pointer appearance-none rounded-sm border border-gray-300 shadow-sm transition-all checked:border-indigo-600 checked:bg-indigo-600 checked:bg-check-icon hover:border-indigo-600"
      onChange={() => onChange()}
    />
  )
}

type Props = {
  isChecked: boolean
  onChange: () => void
}
