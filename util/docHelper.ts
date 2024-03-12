import { AsyncAPIDocumentInterface } from "@asyncapi/parser"

export const config = {
  runtime: "experimental-edge",
}

export default async function docHelper(
  document: AsyncAPIDocumentInterface
): Promise<{
  title: string | undefined
  description: string | undefined
  serverCount: number | undefined
  channelCount: number | undefined
  messageCount: number | undefined
  version: string | undefined
}> {
  try {
    const info = document.info()
    const servers = document.allServers()
    const channels = document.allChannels()
    const messages = document.allMessages()
    return {
      title: info ? info.title() : undefined,
      description: info ? info.description() : undefined,
      serverCount: servers ? servers.length : undefined,
      channelCount: channels ? channels.length : undefined,
      messageCount: messages ? messages.length : undefined,
      version: info ? info.version() : undefined,
    }
  } catch (error) {
    console.error("Error in docHelper:", error)
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
