import API_ROUTE from '../config'

export default async function refreshTokens () {
  try {
    
    const response = await fetch('http://localhost:4000/auth/refresh-tokens', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
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