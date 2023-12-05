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

  // function handleFormChange (event) {
  //   const { name, value } = event.target
  //   setFormValues({
  //     ...formValues,
  //     [name]: value
  //   })
  // }
  // const handleRoleChange = (event) => {
  //   setFormValues((valoresAnteriores) => ({
  //     ...valoresAnteriores,
  //     role: event.target.value
  //   }))
  // }
  return [formValues, setFormValues, handleFormChange]
}

export { useForm }
