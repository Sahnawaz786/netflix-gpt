import OpenAI from 'openai';
import { OPEN_API } from './constants';

const openAPI = new OpenAI({
  apiKey: OPEN_API,
  dangerouslyAllowBrowser: true
});


export default openAPI;