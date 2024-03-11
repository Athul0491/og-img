import docHelper from "../../util/docHelper"
import { NextApiRequest, NextApiResponse } from "next"
import baseHelper from "../../util/baseHelper"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).end()
    }

    const { base64 } = req.body
    const doc = await baseHelper(base64)
    const content = await docHelper(doc)

    res.status(200).json({ content })
  } catch (error) {
    console.error("Error processing request:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}