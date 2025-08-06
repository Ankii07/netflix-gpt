import OpenAI from 'openai';
import { OPENAI_API_KEY } from './constant';
// import { OPENAI_API_KEY } from ';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true, // This is required for browser usage
});

export default openai;
