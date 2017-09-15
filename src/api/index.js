// package.json jest.global.APP_CONFIG
const base = APP_CONFIG.api.url

const contentTypes = {
  form: 'multipart/form-data',
  json: 'application/json',
}

const request = (path, method, data, token, cType) => {
  const contentType = cType || contentTypes.json
  const url = `${ base }/${ path }`

  return fetch(url, {
    method,
    headers: {
      'Authorization': `Bearer ${ token }`,
      'Content-Type': `${ contentType }`,
    },
    body,
  })
  .then((result) => {
    return result.data
  })
  .catch((error) => {
    if (error.response) {
      throw (error.response.data)
    } else {
      throw (error.message)
    }
  })
}

export default {
  contentTypes,
  responseTypes,
  request,
}
