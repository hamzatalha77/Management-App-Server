import { Request, Response } from 'express'
import Course from '../models/courseModel'

export const ListCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { category } = req.query
  try {
    const courses =
      category && category !== 'all'
        ? await Course.scan('category').eq(category).exec()
        : await Course.scan().exec()
    res.json({ message: 'Courses retrieved successfully', data: courses })
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving courses', error })
  }
}
