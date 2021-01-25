import refreshTokens from './refreshTokens'
import API_ROUTE from '../config'

export default async function fetchData(url, method, body) {
  try {

    if(body) {
      body = await JSON.stringify(body)
    }
    
    const response = await fetch(API_ROUTE + url, {
      method: method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: body
    })

    let result = await response.json();

    //Checking if token expired (ExpiredTokenError 401)

    if (response.ok) {
      result.ok = true
    } else {

      if (result.error) {

        if (result.error.name === 'ExpiredTokenError') {

          const refresh = await refreshTokens()
          if (refresh.ok) {
    
            const response = await fetch(url, {
              method: method,
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: body
            })
        
            const result = await response.json();

            return result

          }

        }

      }

    }

    //result errors:
    // DBError 500
    // ServerError 500
    // UnathorizedError 401
    // NotFoundError 404
    // BadRequestError 400
    
    return result

  } catch (error) {
    console.error(error)
    return {
      ok: false,
      message: 'Server connection error'
    }
  }
}