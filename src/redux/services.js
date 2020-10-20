const config = {
  backendUrl: "http://localhost:3001"
}

export const appService = {
  login,
  logout
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  }

  return fetch(`${config.backendUrl}/login`, requestOptions)
  .then(handleResponse)
  .then(user => {
    return user
  })
}

function logout() {
}

function handleResponse(response) {
  return response.text().then(text => {
    console.log(response)
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
