import { useState } from 'react'

function useForm (initialValue) {
  const [formValues, setFormValues] = useState(initialValue)

  function handleFormChange (event) {
    const { name, value, type, checked } = event.target

    setFormValues((prevValues) => {
      if (type === 'checkbox') {
        return { ...prevValues, [name]: checked }
      } else {
        return { ...prevValues, [name]: value }
      }
    })
  }
  function reset (initialValue) {
    setFormValues(initialValue)
  }
  return { formValues, reset, handleFormChange }
}

export { useForm }
