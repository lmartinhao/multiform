import { useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'

import { Theme } from '../../components/Theme'
import { StepOneContainer } from './styles'
import { ChangeEvent } from 'react'

export function FormStep1() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  function handleNextStep() {
    navigate('/step2')
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    })
  }

  return (
    <Theme>
      <StepOneContainer>
        <p>Passo 1/3 - {state.name}</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com o seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </StepOneContainer>
    </Theme>
  )
}
