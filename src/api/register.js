import API_ROUTE from '../config'

export default async function register (username, password) {
  try {

    const body = {
      username, password
    }
    
    const response = await fetch('http://localhost:4000/auth/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)
    })

    const result = await response.json();
    if (response.ok) {result.ok = true}
    
    return result

  } catch (error) {
    console.error(error)
    return {
      ok: false,
      message: 'Server connection error'
    }
  }
}