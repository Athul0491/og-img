interface Props {
  title: string
  description: string
  numberOfChannels: string
  numberOfServers: string
  numberOfMessages: string
  version: string
}
export const config = {
  runtime: "nodejs",
}
import logo from "../public/logo.svg"
import Image from "next/image"
const OGCard = ({
  title,
  description,
  numberOfChannels,
  numberOfServers,
  numberOfMessages,
  version,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        height: "420px",
        width: "1000px",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "mulish",
      }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          height: "590px",
          width: "1160px",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "14px",
          paddingTop: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <img
          style={{
            width: "128px",
            height: "128px",
            objectFit: "contain",
            marginBottom: "20px",
          }}
          alt="logo"
          src={"https://svgshare.com/i/145Z.svg"}
          width="128px"
          height="128px"
        />
        <h1
          style={{
            marginBottom: "10px",
            fontSize: "2rem",
            fontWeight: "bold",
            letterSpacing: "0.1rem",
            color: "#292F36",
            fontFamily: "alata",
            textAlign: "center",
          }}>
          {title + "  " + version}
        </h1>
        <h2
          style={{
            marginBottom: "4px",
            fontSize: "1.5rem",
            letterSpacing: "0.1rem",
            color: "#292F36",
            fontFamily: "mulish",
            textAlign: "center",
          }}>
          {description}
        </h2>
        <h2
          style={{
            marginBottom: "4px",
            fontSize: "1.5rem",
            letterSpacing: "0.1rem",
            color: "#292F36",
            fontFamily: "mulish",
            textAlign: "center",
          }}>
          {numberOfServers +
            " Servers | " +
            numberOfChannels +
            " Channels | " +
            numberOfMessages +
            " Messages"}
        </h2>
      </div>
    </div>
  )
}

export default OGCard
