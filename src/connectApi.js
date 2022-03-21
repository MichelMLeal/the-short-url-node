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
      Authorization: 'Bearer 1671yh48h82j40k2092k14i4k4094ik424ik' // codigo de autorização do bit.ly
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
