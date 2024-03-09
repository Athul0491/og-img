import docHelper from "../../util/docHelper"
import { NextApiRequest, NextApiResponse } from "next"
import { Parser, fromURL } from "@asyncapi/parser"
import baseHelper from "../../util/baseHelper"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Access the request body directly from req.body
    const { base64 } = req.body
    const doc = await baseHelper(base64)
    const content = await docHelper(doc)

    res.status(200).json({ content })
  }
}
