import { Inter } from "next/font/google"
import { Metaplex } from "@metaplex-foundation/js"
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

const METAPLEX_TEST_OWNER_PUBKEY =
  "3EqUrFrjgABCWAnqMYjZ36GcktiwDtFdkNYwY6C6cDzy"
const SOLANA_NETWORK = "devnet"

const connection = new Connection(clusterApiUrl(SOLANA_NETWORK))
const mx = Metaplex.make(connection)

const loadData = async (nftList: Array<any>) => {
  const promises = nftList.map((metadata: any) => mx.nfts().load({ metadata }))

  return Promise.all(promises)
}

const fetchNFTs = async () => {
  const everyNft = await mx.nfts().findAllByOwner({
    owner: new PublicKey(METAPLEX_TEST_OWNER_PUBKEY),
  })

  return loadData(everyNft)
}

function NFTsGallery() {
  const {
    isLoading,
    data: nfts,
    error,
  } = useQuery({
    queryKey: ["nfts"],
    queryFn: fetchNFTs,
    select: (nftsData: Array<any>) => {
      return nftsData.map((nft) => {
        const {
          json: { image },
        } = nft
        return {
          ...nft,
          image,
        }
      })
    },
  })

  if (isLoading) return <div>Loading NFTs...</div>

  if (error instanceof Error) {
    return <div>An error has occurred: ${error.message}</div>
  }

  console.log(nfts)

  return (
    <section className="grid grid-cols-3 gap-4">
      {nfts?.map((nft) => {
        const { image, name, address } = nft

        return (
          <article
            className="flex flex-col items-center justify-center overflow-hidden "
            key={address.toString()}
          >
            <Image
              src={image}
              alt={name}
              className="w-64 h-64"
              width={256}
              height={256}
            />
            <p className="text-center">{name}</p>
            {/* <p className="overflow-ellipsis  whitespace-nowrap">
                {mintAddress.toString()}
              </p> */}
          </article>
        )
      })}
    </section>
  )
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 gap-4 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold">NFTs</h1>
      <NFTsGallery />
    </main>
  )
}

// const getSerializableNftProps = (nft: any) => {
//   const { address, mintAddress, updateAuthorityAddress, ...serializableProps } =
//     nft
//
//   return serializableProps
// }
