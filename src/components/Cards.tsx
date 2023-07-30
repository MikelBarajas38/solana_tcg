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

const connection = new Connection(clusterApiUrl(SOLANA_NETWORK))
const mx = Metaplex.make(connection)

const loadData = async (cardList: Array<any>) => {
  const promises = cardList.map((metadata: any) => mx.nfts().load({ metadata }))

  return Promise.all(promises)
}

const fetchCards = async () => {
  const everyNft = await mx.nfts().findAllByOwner({
    owner: new PublicKey(METAPLEX_TEST_OWNER_PUBKEY),
  })

  return loadData(everyNft)
}

function Card({ card }: { card: any }) {
  const { image, name } = card

  const CARD_WIDTH = 188
  const CARD_HEIGHT = 282

  return (
    <article
      className={`flex flex-col items-center justify-center overflow-hidden w-[${CARD_WIDTH}px] h-[${CARD_HEIGHT}px] min-w-[${CARD_WIDTH}px] min-h-[${CARD_HEIGHT}px] pl-1 pt-1 rounded-xl border-white/[.25] border-2 `}
    >
      <Image
        src={image}
        alt={name}
        className={`w-[${CARD_WIDTH}px] h-[${CARD_HEIGHT}px] min-w-[${CARD_WIDTH}px] min-h-[${CARD_HEIGHT}px] object-contain rounded-xl`}
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
      />
    </article>
  )
}

export function CardsGallery() {
  const {
    isLoading,
    data: cards,
    error,
  } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchCards,
    select: (cardsData: Array<any>) => {
      return cardsData
        .filter((card) => {
          const {
            json: { name },
          } = card

          const isOwnerCard = name === NFT_COLLECTION_OWNER_CARD_NAME

          if (isOwnerCard) return false

          return card.symbol === NFT_COLLECTION_SYMBOL
        })
        .map((card) => {
          const {
            json: { image },
          } = card

          return {
            ...card,
            image,
          }
        })
    },
  })

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
