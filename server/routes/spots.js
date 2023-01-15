import express from 'express';

import { getSpots } from '../controllers/spots.js';

const router = express.Router();

router.get('/', getSpots);

export default router;