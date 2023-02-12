import { useNavigate } from 'react-router-dom'

import { Theme } from '../../components/Theme'
import { StepOneContainer } from './styles'

export function FormStep1() {
  const navigate = useNavigate()

  function handleNextStep() {
    navigate('/step2')
  }

  return (
    <Theme>
      <StepOneContainer>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com o seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input type="text" autoFocus />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </StepOneContainer>
    </Theme>
  )
}
