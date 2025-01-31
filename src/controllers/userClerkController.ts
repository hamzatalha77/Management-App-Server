import { Request, Response } from 'express'

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  const { courseId } = req.params
  try {
    const course = await Course.get(courseId)
    if (!course) {
      res.status(404).json({ message: 'Course not found' })
      return
    }

    res.json({ message: 'Course retrieved successfully', data: course })
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving course', error })
  }
}
