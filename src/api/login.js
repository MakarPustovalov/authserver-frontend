import API_ROUTE from '../config'

export default async function login (username, password) {
  try {

    const body = {
      username, password
    }
    
    const response = await fetch(API_ROUTE + 'auth/login', {
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