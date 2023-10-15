import { config } from 'dotenv';
import * as path from 'path';

const plog = path.join(__dirname, '../../', 'environments', 'dev.env');
config({ path: plog });
