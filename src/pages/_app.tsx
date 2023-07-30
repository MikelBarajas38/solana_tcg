import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" reverseOrder={false} />

      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
