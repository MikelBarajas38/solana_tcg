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

export const useCards = () => {
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

  return {
    isLoading,
  cards,
  error,
  }
}
