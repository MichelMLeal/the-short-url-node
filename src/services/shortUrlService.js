//client do prisma para consultar os dados do banco
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//exporta um objeto com as funções do banco de dados prisma
module.exports = {
  //função para consultar uma URL
  getShortUrl: async linkId => {
    return await prisma.urlShort.findMany({
      where: {
        linkId: linkId
      }
    })
  },
  //função para criar um shortURl
  createShortUrl: async (linkId, link, long_url, group) => {
    await prisma.urlShort.create({
      data: {
        linkId: linkId,
        link: link,
        long_url: long_url,
        group: group
      }
    })

    return await prisma.urlShort.findMany({
      where: {
        linkId: linkId
      }
    })
  },
  //função para consultar uma URL
  getLongUrl: async link => {
    return await prisma.urlShort.findMany({
      where: {
        link: link
      }
    })
  }
}
