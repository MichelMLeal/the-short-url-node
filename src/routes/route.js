const express = require('express')
const router = express.Router()
const { createShortUrl, getOriginalUrl } = require('../controllers/shortUrlController')

//rota de encode
router.get('/encode', async (req, res) => {
  try {
    const data = req.body
    console.log(typeof data)
    const result = await createShortUrl(data)

    return res.json(result)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

//rota de decode
router.get('/decode', async (req, res) => {
  try {
    const { short_url } = req.body
    const result = await getOriginalUrl(short_url)

    return res.json(result)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

module.exports = router
