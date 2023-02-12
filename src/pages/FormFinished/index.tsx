import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'

import { Theme } from '../../components/Theme'
import * as C from './styles'
import { EnvelopeSimpleOpen, GithubLogo, Laptop, User } from 'phosphor-react'

export function FormFinished() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4,
    })
  }, [])

  function handleNextStep() {
    navigate('/')
  }

  return (
    <Theme>
      <C.Container>
        <p>Formulário enviado!</p>
        <h1>Agradecemos seu cadastro</h1>
        <p>
          Em breve você receberá um email com as informações sobre seu novo
          emprego.
        </p>

        <hr />
        <C.UserData>
          <p>
            <User weight="fill" /> <strong>{state.name}</strong>
          </p>
          <p>
            <Laptop weight="fill" />{' '}
            {state.level === 0
              ? 'Iniciante em programação'
              : 'Programador(a) há mais de 2 anos'}
          </p>
          <p>
            <EnvelopeSimpleOpen weight="fill" /> {state.email}
          </p>
          <p>
            <GithubLogo weight="fill" /> {state.github}
          </p>
        </C.UserData>

        <button onClick={handleNextStep}>Refazer</button>
      </C.Container>
    </Theme>
  )
}
