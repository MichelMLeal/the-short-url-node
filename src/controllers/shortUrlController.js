const connectApi = require('../connectApi')
const { createShortUrl, getShortUrl, getLongUrl } = require('../services/shortUrlService')

//exporta um objeto com as funções do banco de dados prisma
module.exports = {
  //função para inserir uam URL
  createShortUrl: async data => {
    const { long_url: long } = data
    //valida se n'ao esta vazio
    if (long === '') {
      throw new Error('Short url is required')
    }

    //faz uam requisicao no bitly para retornar um objeto com a url encurtada
    const { id, link, long_url, references } = await connectApi.connParameters(
      data,
      'https://api-ssl.bitly.com/v4/shorten'
    )

    const linkData = await getShortUrl(id)

    const linkId = linkData.length > 0 ? linkData[0].linkId : id

    // valida se ja existe no banco de dados
    if (linkId === id) {
      throw new Error('Url already exists')
    }

    return await createShortUrl(id, link, long_url, references.group)
  },
  //função para inserir uam URL
  getOriginalUrl: async link => {
    //valida se nao esta vazio
    if (link === '') {
      throw new Error('Short url is required')
    }

    //valida se existe no banco de dados
    const { resultLink } = await getLongUrl(link)
    if (resultLink === '') {
      throw new Error('Url not exists')
    }

    return await getLongUrl(link)
  }
}
