import ProductsCard from "./ProductsCard"

const ProductsTable = ({item}) => {
  return (
    <div>
      <table>
        <tbody>
          <tr><ProductsCard item={item}/></tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable
