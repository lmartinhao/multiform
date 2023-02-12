import { BookOpen, Envelope, UserCircle } from 'phosphor-react'
import { Link } from 'react-router-dom'
import * as C from './styles'

type Props = {
  title: string
  description: string
  icon: string
  path: string
  active: boolean
}

export function SidebarItem({ title, description, icon, path, active }: Props) {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === 'profile' && <UserCircle weight="fill" />}
          {icon === 'book' && <BookOpen weight="fill" />}
          {icon === 'mail' && <Envelope weight="fill" />}
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  )
}
