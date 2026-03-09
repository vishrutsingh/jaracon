import { type ElementType, type HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  children: React.ReactNode
}

export default function Container({ as: Tag = 'div', children, className = '', ...props }: ContainerProps) {
  return (
    <Tag className={`container-site ${className}`} {...props}>
      {children}
    </Tag>
  )
}
