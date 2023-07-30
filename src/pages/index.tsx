import { CardsGallery } from "@/components/Cards"
import { UserSidebar } from "@/components/User"
import { Cinzel } from "next/font/google"

const cinzel = Cinzel({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 gap-10 ${cinzel.className}`}
    >
      <h1 className="text-5xl font-normal">Solsticea</h1>
      <section className="flex gap-8 flex-1 w-full flex-wrap justify-center">
        <UserSidebar />
        <CardsGallery />
      </section>
    </main>
  )
}

// const getSerializableNftProps = (nft: any) => {
//   const { address, mintAddress, updateAuthorityAddress, ...serializableProps } =
//     nft
//
//   return serializableProps
// } return serializableProps
// }
