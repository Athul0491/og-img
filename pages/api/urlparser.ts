import docHelper from "../../util/docHelper"
import { NextApiRequest,NextApiResponse } from "next"
import { Parser, fromURL } from "@asyncapi/parser"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Access the request body directly from req.body
    const { docurl } = req.body
    // const docurl = searchParams.get("docurl") ?? ""
    console.log("Request URL:", docurl)

    console.log("docurl:", docurl)
    const parser = new Parser()
    const { document, diagnostics } = await fromURL(parser, docurl).parse()
    if(!document){
      res.status(400).json({ content: "Invalid" })
    }
    const content = await docHelper(document)

    res.status(200).json({ content })
  }
}
