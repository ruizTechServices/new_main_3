import { Pinecone } from '@pinecone-database/pinecone';

const apiKey = process.env.PINECONE_API_KEY;
if (!apiKey) {
  throw new Error('Missing PINECONE_API_KEY env var');
}

const pc = new Pinecone({ apiKey });
// You may also want to explicitly pass projectName, depending on your Pinecone org/setup:
// const pc = new Pinecone({ apiKey, projectName: process.env.PINECONE_PROJECT_NAME });

const index = pc.index('24Hourgpt');

export default index;
export { pc };
