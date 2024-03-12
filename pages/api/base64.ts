import { NextApiRequest, NextApiResponse } from "next"
import baseHelper from "../../util/baseHelper"
import docHelper from "../../util/docHelper"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end()
  }
  const { base64 } = req.body
  if (!base64) {
    return res.status(400).json({ error: "base64 parameter is required" })
  }
  try {
    const document = await baseHelper(base64)
    const content = await docHelper(document)
    return res.status(200).json({ content })
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" })
  }
}
