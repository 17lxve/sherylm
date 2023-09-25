import { Router } from 'express'
import { glassesDao } from '../DAO'

const router = Router()
const gd = new glassesDao()
router.get('/', async (req: any, res: any) => {
  try {
    res.status(200).json(await gd.getGlasses())
    // res.status(200).json({Wesh : "LA TERRE"})
  } catch (err: any) {
    res.status(500).json({ msg: err.message })
  }
})
router.get('/:num', async (req, res) => {
  try {
    res.status(200).json(await gd.getSomeGlasses(req.params.num))
  } catch (err: any) {
    res.status(500).json({ msg: err.message })
  }
})

export default router
