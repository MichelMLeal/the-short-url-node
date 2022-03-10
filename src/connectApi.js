const axios = require('axios')
module.exports.connParameters = async (parameters, url) => {
  //transforma o dados(parametros) em json
  let data = JSON.stringify(parameters)

  //headers da requisicao, com os dados
  let configData = {
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 86b893538ce9e93fcda8b5c4738df9c8a4e827b6'
    },
    data: data
  }
  const result = axios(configData)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw new Error(error)
    })

  //retorna a requisicao como um objeto
  return result
}
