// 1. Context (a caixinha que vai armazenar os dados)
// 2. Reducer (agrupamento de ações específicas)
// 3. Provider (o ambiente)
// 4. Hook (vai simplificar o processo de acesso ao provider)
import { createContext, ReactNode, useContext, useReducer } from 'react'

type State = {
  currentStep: number
  name: string
  level: 0 | 1
  email: string
  github: string
}

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

type Action = {
  type: FormActions
  payload: any
}

type ContextType = {
  state: State
  dispatch: (action: Action) => void
}

type FormProviderProps = {
  children: ReactNode
}

const initialData: State = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: '',
}

// context
const FormContext = createContext<ContextType | undefined>(undefined)

// reducer
function formReducer(state: State, action: Action) {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload }
    case FormActions.setName:
      return { ...state, name: action.payload }
    case FormActions.setLevel:
      return { ...state, level: action.payload }
    case FormActions.setEmail:
      return { ...state, email: action.payload }
    case FormActions.setGithub:
      return { ...state, github: action.payload }
    default:
      return state
  }
}

// provider
export function FormProvider({ children }: FormProviderProps) {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

// context hook
export function useForm() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useForm precisa ser usado dentro do FormProvider')
  }
  return context
}
