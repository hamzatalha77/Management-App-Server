import express from 'express'
import { userUpdate } from '../controllers/userClerkController'

const router = express.Router()
router.get('/:userId', userUpdate)

export default router
