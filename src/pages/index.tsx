import { CardsGallery } from "@/components/Cards"
import { UserSidebar } from "@/components/User"
import { DefaultModal } from "@/components/Modal"
import { Cinzel } from "next/font/google"
import { useState } from "react"
import { useCards } from "@/hooks/useCards"

const cinzel = Cinzel({ subsets: ["latin"] })

export default function Home() {
  const [openModal, setOpenModal] = useState<string | undefined>('default')
  const {isLoading, error, cards} = useCards()

  return (
    <>
    <DefaultModal card={cards?.[0] ?? {}} openModal={openModal} closeModal={() => setOpenModal(undefined)} />
    <main
      className={`flex min-h-screen flex-col items-center p-24 gap-10 ${cinzel.className} md:container mx-auto`}
    >
      <h1 className="text-5xl font-normal">Solsticea</h1>
      <section className="flex gap-8 flex-1 w-full flex-wrap justify-center">
        <UserSidebar />
        <CardsGallery />
      </section>
    </main>
    </>
  )
}

// const getSerializableNftProps = (nft: any) => {
//   const { address, mintAddress, updateAuthorityAddress, ...serializableProps } =
//     nft
//
//   return serializableProps
// } return serializableProps
// }
