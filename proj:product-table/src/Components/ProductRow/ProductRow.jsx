import './ProductRow.css'

export default function ProductRow({ product }){
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>

    return (
        <tr className='row'>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}