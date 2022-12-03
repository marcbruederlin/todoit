import { ReactNode } from 'react'

export default function Button({
  type = 'default',
  children,
  className,
  onClick,
  ...rest
}: Props) {
  return (
    <button
      className={`${className} font-medium text-indigo-600 outline-none transition-all hover:text-indigo-500 focus:text-indigo-500`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

type Props = {
  type?: 'default' | 'link'
  className?: string
  children: ReactNode
  onClick: () => void
}
