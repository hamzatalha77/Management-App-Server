import { Request, Response } from 'express'
import { clerkClient } from '../index'

export const userUpdate = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params
  const userData = req.body
  try {
    const user = await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        userType: userData.publicMetadata.userType,
        settings: userData.publicMetadata.userType
      }
    })

    res.json({ message: 'User updated successfully', data: user })
  } catch (error) {
    res.status(500).json({ message: 'Error updating users', error })
  }
}
