import { Link } from "react-router-dom"

function ProductsTable({data}){

    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}
                    {data.map(({id,brand,category,price})=>(
                        <tr key={id}>
                            <td>{id}</td>
                            <td><Link to={`/singleProducts/${id}`} style={{textDecoration:'none'}}>{brand}</Link></td>
                            <td>{category}</td>
                            <td>{price}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
    )
}

export default ProductsTable