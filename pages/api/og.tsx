import { ImageResponse } from "@vercel/og"
import { NextRequest, NextResponse } from "next/server"
import OGCard from "../../components/ogCard"


export const config = {
  runtime: "experimental-edge",
}

export default async function (req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const docurl = searchParams.get("docurl") ?? ""
  let img: ImageResponse
  
  try{
    const response = await fetch("https://master--fav-og-img.netlify.app/api/parserr", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        docurl: docurl,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }
    const data = await response.json()
    const { title, description, serverCount, channelCount,messageCount, version } =data.content

    img = new ImageResponse(
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
    console.error("Error:", error)
    throw new Error("Failed to generate image")
  }
}