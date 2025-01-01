import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import * as dynamoose from 'dynamoose'

dotenv.config()

const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  dynamoose.aws.ddb.local()
}
