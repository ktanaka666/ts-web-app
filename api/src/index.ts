import * as express from 'express'

const app: express.Express = express()

const port = 3000

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    msg: 'Hello, world',
  })
})

app.listen(port, () => console.log(`api listening on port ${port}`))
