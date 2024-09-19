export default function ProductCard({
    brand,
    category,
    price,
    id
}){
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <td>
                {brand}
            </td>
            <td data-testid="category">
                {category}
            </td>
            <td data-testid="price">
                {price}
            </td>
                    </tr>
    )
}
