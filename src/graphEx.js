import { useQuery, gql } from "@apollo/client"

const GET_ACTIVE_ITEMS = gql`
{
  activeItems(first: 5) {
    id
    buyer
    seller
    nftAddress
  }
  sellNfts(first: 5) {
    id
    nftContract
    nftId
    from
  }
}
`

export default function GraphEx() {
    const { loading, error, data } = useQuery(GET_ACTIVE_ITEMS)
    console.log(data)
    return <div>hi</div>
}