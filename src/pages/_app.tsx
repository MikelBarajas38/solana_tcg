import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import Image from "next/image"

const queryClient = new QueryClient()

function BoardBackground() {
  return (
    <div className="fixed top-0 bottom-0 h-full w-full">
      <Image
        alt="Board"
        src="/images/board-bg.png"
        className="object-center object-cover h-full w-full"
        quality={100}
        fill={true}
      />
    </div>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" reverseOrder={false} />
      <BoardBackground />
      <div className="z-30 relative h-screen">
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  )
}
