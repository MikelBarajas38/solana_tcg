import {
  METAPLEX_TEST_OWNER_PUBKEY,
  NFT_COLLECTION_OWNER_CARD_NAME,
  NFT_COLLECTION_SYMBOL,
  SOLANA_NETWORK,
} from "@/constants"
import { Metaplex } from "@metaplex-foundation/js"
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useCards } from "@/hooks/useCards"





export function Card({ card }: { card: any }) {

  const { image, name } = card

  const CARD_WIDTH = 188
  const CARD_HEIGHT = 282

  return (
    <article
      className={`flex flex-col items-center justify-center overflow-hidden pl-1 pt-1 rounded-xl border-white/[.25] border-2 `}
    >
      <Image
        src={image}
        alt={name}
        className={`min-w-[94px] min-h-[141px] object-contain rounded-xl`}
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
      />
    </article>
  )
}

export function CardsGallery() {
  const {isLoading, error, cards} = useCards()

  if (isLoading) return <div>Loading NFTs...</div>

  if (error instanceof Error) {
    return <div>An error has occurred: ${error.message}</div>
  }

  console.log(cards)

  return (
    <section className="flex flex-wrap gap-4 align-top place-items-start flex-1 w-full grow">
      {cards?.map((card: any) => {
        return <Card card={card} key={card.address} />
      })}
    </section>
  )
}
