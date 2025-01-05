import { Request, Response } from 'express'

export const ListCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { category } = req.query
  try {
    const courses = category && category !== 'all'
  } catch (error) {}
}
