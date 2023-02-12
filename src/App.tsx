import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { FormProvider } from './contexts/FormContext'

export function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </FormProvider>
  )
}
