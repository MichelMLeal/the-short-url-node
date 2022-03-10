const { createShortUrl, getOriginalUrl } = require('../controllers/shortUrlController')
//teste para criar uma url e verificar se ela esta vazia
test('Long Url not exists', async () => {
  await expect(() => createShortUrl({ long_url: '', domain: 'domain' }).toThrow(Error))
})
//teste para ver se uma url existe
test('already exists', async () => {
  await expect(() =>
    createShortUrl({ long_url: 'http://localhost:3000/encode', domain: 'domain' }).toThrow(Error)
  )
})
//test para ver se uma short url esta vindo vazio
test('Short Url not exists', async () => {
  await expect(() => createShortUrl('').toThrow(Error))
})
//teste para ver se existe no banc de dados
test('Url not exists', async () => {
  await expect(() => createShortUrl('http://localhost:3000/encode').toThrow(Error))
})
