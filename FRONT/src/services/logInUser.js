async function logInUser (email, pass) {
  const baseUrl = 'http://localhost:5000'

  try {
    const resp = await fetch(`${baseUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, pass })
    })
    return await resp.json()
  } catch (error) {
    console.error(error.message)
  }
}

export { logInUser }
