import docHelper from "../../util/docHelper"
import { NextApiRequest,NextApiResponse } from "next"
import baseHelper from "../../util/baseHelper"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Access the request body directly from req.body
    const { docurl } = req.body
    const searchParams = new URLSearchParams(new URL(docurl).search)
    let base64 = searchParams.get("base64")
    if (base64) {
      const doc = await baseHelper(base64)
      const content = await docHelper(doc)
      res.status(200).json({ content })
    } else {
      res.status(400).json({ error: "base64 parameter not found in the URL" })
    }
  }
}
