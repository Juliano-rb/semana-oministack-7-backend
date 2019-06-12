const express = require('express')
const multer = require('multer')
const uploadConfigs = require('./config/upload')
const PostController = require('./controllers/PostController')

const routes = new express.Router()
const upload = multer(uploadConfigs)

routes.get('/posts', upload.single('image'), PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)

module.exports = routes