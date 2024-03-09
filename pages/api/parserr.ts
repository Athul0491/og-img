import helper from "../../util/helper"
import { NextApiRequest,NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Access the request body directly from req.body
    const { docurl } = req.body
    // const docurl = searchParams.get("docurl") ?? ""
    console.log("Request URL:", docurl)

    console.log("docurl:", docurl)
    const content = await helper(docurl)

    res.status(200).json({ content })
  }
}
