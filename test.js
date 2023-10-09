import { fileURLToPath } from 'url';
import path from 'path';
import Replicate from 'replicate';
import dotenv from 'dotenv';

dotenv.config();

// Get the directory name of the current script
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function main() {
  try {
    const output = await replicate.run(
      'nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b',
      {
        input: {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ethtigregch2.jpg/330px-Ethtigregch2.jpg",
        },
      }
    );
    

    console.log(output);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
