import './SearchBar.css'

export default function SearchBar({ filteredText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
    return (
        <form>
            <input 
                type="text" 
                placeholder="Search..."
                value={filteredText} 
                onChange={(e) => onFilterTextChange(e.target.value)}/>
            <label>
                <input 
                    type="checkbox" 
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Only Show products in stock
            </label>
        </form>
    )
}