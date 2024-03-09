import { NextPage } from "next"

const Home: NextPage = () => {
  
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center text-4xl font-black text-gray-800">
        Generate OG card here with my help because why not
        <div className="mt-8 text-center text-2xl font-black">
          There are two ways you can use this:
          <div className="mt-4 text-center text-xl font-black">
            <p className="mb-2 text-gray-700">
              1. If you have the URL of the AsyncAPI document like this:
            </p>
            <p className="text-blue-600">
              "https://studio.asyncapi.com/?base64=eyJhc3luY2Fwa..."
            </p>
            <p>
              Go to:{" "}
              <code className="text-green-600">
                /api/og?docurl=&#123;link_of_your_doc&#125;
              </code>
            </p>
          </div>
          <div className="mt-4 text-center text-xl font-black">
            <p className="mb-2 text-gray-700">
              2. If you have the base64 link of the AsyncAPI document, then
            </p>
            <p>
              Go to:{" "}
              <code className="text-green-600">
                /api/og?base64=&#123;base64&#125;
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
