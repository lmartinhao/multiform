import { ChangeEvent, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'

import { Theme } from '../../components/Theme'
import { Container } from './styles'

export function FormStep3() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      })
    }
  }, [])

  function handleNextStep() {
    if (state.email !== '' && state.github !== '') {
      navigate('/finished')
    } else {
      alert('Preencha os dados')
    }
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    })
  }

  function handleGithubChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    })
  }

  return (
    <Theme>
      <Container>
        <p>Passo 3/3</p>
        <h1>Legal, {state.name}, onde podemos te encontrar?</h1>
        <p>Preencha com suas informações para entrarmos em contato.</p>

        <hr />

        <label>
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </Container>
    </Theme>
  )
}
