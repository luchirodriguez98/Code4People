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
  const handleRoleChange = (event) => {
    setFormValues((valoresAnteriores) => ({
      ...valoresAnteriores,
      role: event.target.value
    }))
  }
  return [formValues, setFormValues, handleFormChange, handleRoleChange]
}

export { useForm }
