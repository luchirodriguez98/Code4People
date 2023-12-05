import { useState } from 'react'

function useForm (initialValue) {
  const [formValues, setFormValues] = useState(initialValue)

  function handleFormChange (event) {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  return [formValues, handleFormChange]
}

export { useForm }
