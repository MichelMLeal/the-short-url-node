const connectApi = require('../connectApi')
const { createShortUrl, getShortUrl, getLongUrl } = require('../services/shortUrlService')

//exporta um objeto com as funções do banco de dados prisma
module.exports = {
  //função para inserir uam URL
  createShortUrl: async data => {
    const { id, link, long_url, references } = await connectApi.connParameters(
      data,
      'https://api-ssl.bitly.com/v4/shorten'
    )

    const linkData = await getShortUrl(id)

    const linkId = linkData.length > 0 ? linkData[0].linkId : id
    console.log(linkId)
    if (linkId === id) {
      throw new Error('Url already exists')
    }

    return await createShortUrl(id, link, long_url, references.group)
  },
  //função para inserir uam URL
  getOriginalUrl: async link => {
    const { resultLink } = await getLongUrl(link)
    if (resultLink === '') {
      throw new Error('Url not exists')
    }

    return await getLongUrl(link)
  }
}
