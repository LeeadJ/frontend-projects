import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";
import './ProductTable.css'

export default function ProductTable({ products, filteredText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach(element => {
        if(element.name.toLowerCase().indexOf(filteredText.toLowerCase()) === -1){
            return;
        }

        if(inStockOnly && !element.stocked){
            return;
        }

        if (element.category !== lastCategory){
            rows.push(
                <ProductCategoryRow category={element.category} key={element.category}/>
            );
        }
        rows.push(
            <ProductRow product={element} key={element.name}/>
        );
        lastCategory = element.category;
    });
    console.log(rows)
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}