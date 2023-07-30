import { CardsGallery } from "@/components/Cards"
import { Cinzel } from "next/font/google"
import Image from "next/image"

const cinzel = Cinzel({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 gap-10 ${cinzel.className}`}
    >
      <h1 className="text-5xl font-normal">Solsticea</h1>
      <section className="flex gap-8 flex-1">
        <aside className="flex flex-col gap-2 py-5 px-10 items-center border-white/[.25] border-2 rounded-xl h-full">
          <Image
            src="/images/profile.png"
            width={96}
            height={96}
            className="object-contain aspect-square rounded-full"
            alt="Profile picture"
          />
          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
            >
              <path
                d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                fill="#F1F1F1"
              />
              <path
                d="M16 15.5C16 17.985 16 20 8 20C0 20 0 17.985 0 15.5C0 13.015 3.582 11 8 11C12.418 11 16 13.015 16 15.5Z"
                fill="#F1F1F1"
              />
            </svg>
          </article>
          <article></article>
        </aside>
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
// }
