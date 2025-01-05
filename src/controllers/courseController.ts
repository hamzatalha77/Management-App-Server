import { Request, Response } from 'express'
import Course from '../models/courseModel'

export const ListCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { category } = req.query
  try {
    const courses = category && category !== 'all'
    ? await Course.scan('category').eq(category).exec()
  } catch (error) {}
}
