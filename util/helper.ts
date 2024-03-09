import { Parser, fromURL } from "@asyncapi/parser"
export const config = {
  runtime: "experimental-edge",
}
export default async function helper(docurl: string): Promise<{
  name: string
  title: string | undefined
  description: string | undefined
  serverCount: number | undefined
  channelCount: number | undefined
  messageCount: number | undefined
  version: string | undefined
}> {
    //   const doc: string =
    //     '{"asyncapi":"2.4.0","info":{"title":"Example AsyncAPI specification","version":"0.1.0"},"channels":{"example-channel":{"subscribe":{"message":{"payload":{"type":"object","properties":{"exampleField":{"type":"string"},"exampleNumber":{"type":"number"},"exampleDate":{"type":"string","format":"date-time"}}}}}}}}'
    //   console.log("AsyncAPI Document:", doc)
    try {
      const parser = new Parser()
    const { document , diagnostics} = await fromURL(parser,docurl).parse();
    // const { document } = await parser.parse(doc)
    if (!document) {
      console.error("Parsed document is undefined")
      return {
        name: "hello wassss",
        title: undefined,
        description: undefined,
        serverCount: undefined,
        channelCount: undefined,
        messageCount: undefined,
        version: undefined,
      }
    }

    const docTitle = document.info().title()
    const description = document.info().description()
    const serverCount = document.allServers().length
    const channelCount = document.allChannels().length
    const messageCount = document.allMessages().length
    const version = document.info().version()
    console.log("Document Title:", docTitle) // Log the document title

    return {
      name: "hello wassss",
      title: docTitle,
      description: description,
      serverCount: serverCount,
      channelCount: channelCount,
      messageCount: messageCount,
      version: version,
    }
  } catch (error) {
    console.error("Error parsing AsyncAPI document:", error)
    return {
      name: "hello wassss",
      title: undefined,
      description: undefined,
      serverCount: undefined,
      channelCount: undefined,
      messageCount: undefined,
      version: undefined,
    }
  }
}
