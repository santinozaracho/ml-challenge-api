import express from 'express'
import config from 'config'
import bodyParser from 'body-parser'
import cors from 'cors'
import { mainRouter } from './routes'

const app = express()
const port = config.get('port')

app.use(cors())
app.use(bodyParser.json())

app.use('/api', mainRouter)

app.get('/test', (req, res) => {
  res.send({ project: 'ML' })
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`)
})
