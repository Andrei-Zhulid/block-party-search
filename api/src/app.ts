import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

import SearchService from './services/SearchService';

const app: Application = express();

app.get('/api/v1/search', async (request: Request, response: Response) => {
  try {
    const places = await SearchService.search(<string>request.query.query);
    response.send(places);
  } catch (error) {
    console.log('GET /api/v1/search error', error);
    response.status(500).end();
  }
})

app.listen(process.env.PORT, () => console.log('Service is running'));