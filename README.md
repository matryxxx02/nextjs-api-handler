# NextJS API Handler 

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i --save nextjs-api-handler
```

## Usage

Import :

```js
import { requestHandler } from "nextjs-api-handler";

export default async (req: NextApiRequest, res: NextApiResponse) => requestHandler(req, res, {
    GET: () => getHandler(req,res),
    POST: () => postHandler(req, res),
    // 
})
const getHandler = (req: NextApiRequest, res: NextApiResponse) => res.status(200).send("OK");
const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // handle your route
}
```

// TODO : usage of errorHandler
