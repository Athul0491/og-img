import { AsyncAPIDocumentInterface } from "@asyncapi/parser"

export const config = {
  runtime: "experimental-edge",
}

export default async function docHelper(document: AsyncAPIDocumentInterface): Promise<{
  title: string | undefined
  description: string | undefined
  serverCount: number | undefined
  channelCount: number | undefined
  messageCount: number | undefined
  version: string | undefined
}> {
  try {

    const docTitle = document.info().title()
    const description = document.info().description()
    const serverCount = document.allServers().length
    const channelCount = document.allChannels().length
    const messageCount = document.allMessages().length
    const version = document.info().version()

    return {
      title: docTitle,
      description: description,
      serverCount: serverCount,
      channelCount: channelCount,
      messageCount: messageCount,
      version: version,
    }
  } catch (error) {
    return {
      title: undefined,
      description: undefined,
      serverCount: undefined,
      channelCount: undefined,
      messageCount: undefined,
      version: undefined,
    }
  }
}
