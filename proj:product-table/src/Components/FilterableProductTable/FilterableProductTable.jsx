import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";
import './FilterableProductTable.css'
import { useState } from "react";

export default function FilterableProductTable({ products }) {
    const [filteredText, setFilteredText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar 
                filteredText={filteredText} 
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilteredText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable 
                products={products} 
                filteredText={filteredText} 
                inStockOnly={inStockOnly} />
        </div>
        
    )
}