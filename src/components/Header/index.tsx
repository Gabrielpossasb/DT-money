
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransectioModal: () => void
}

export function Header({ onOpenNewTransectioModal }: HeaderProps) {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={onOpenNewTransectioModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}