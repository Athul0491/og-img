import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"
import OGCard from "../../components/ogCard"

export const config = {
  runtime: "experimental-edge",
}

export default async function (req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const docurl = searchParams.get("docurl")
  const base64 = searchParams.get("base64")

  try {
    const responses = await Promise.all([
      docurl === null
        ? fetch("http://localhost:3000//api/base64", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              base64: base64,
            }),
          })
        : fetch("http://localhost:3000//api/urlparser", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              docurl: docurl,
            }),
          }),
    ])

    for (const response of responses) {
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
    }

    const data = await Promise.all(responses.map((response) => response.json()))
    const { title, description, serverCount, channelCount, messageCount, version } = data[0].content

    const img = new ImageResponse(
      (
        <OGCard
          title={title}
          description={description}
          numberOfServers={serverCount.toString()}
          numberOfChannels={channelCount.toString()}
          numberOfMessages={messageCount.toString()}
          version={version}
        />
      ),
      {
        width: 1200,
        height: 630,
      }
    )
    return img
  } catch (error) {
    throw new Error("Failed to generate image")
  }
}
