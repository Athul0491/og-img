import { Parser, AsyncAPIDocumentInterface } from "@asyncapi/parser"
export const config = {
  runtime: "experimental-edge",
}

export default async function baseHelper(base64: string): Promise<AsyncAPIDocumentInterface> {
  const parser = new Parser()
  let decoded = Buffer.from(base64, "base64").toString("utf-8")
  const { document, diagnostics } = await parser.parse(decoded)
  if (document === undefined) {
    throw new Error("Invalid")
  }
  return document
}