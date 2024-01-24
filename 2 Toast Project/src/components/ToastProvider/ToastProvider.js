import React from 'react'
import useKeydown from '../../hooks/use-keydown.js'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'oh no!',
      variant: 'error'
    }, {
      id: crypto.randomUUID(),
      message: 'hey there',
      variant: 'success'
    }
  ])
  const handleEscape = React.useCallback(
    () => { setToasts([]) }, []
  )

  useKeydown('Escape', handleEscape)

  function createToast(message, variant) {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant
      }
    ])
  }
  function dismissToast(id) {
    setToasts(toasts.filter(toast => {
      return toast.id !== id
    }))
  }

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
