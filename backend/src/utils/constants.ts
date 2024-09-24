import * as dotenv from 'dotenv';

dotenv.config();

export const BASE_URL = 'https://api3.twilightcyber.com';

export const INFECTIONS_URL = '/infections/_search';

export const API_KEY = process.env.API_KEY;
