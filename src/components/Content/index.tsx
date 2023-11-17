import React from "react";
import styles from './Content.module.css'
import Product from "../Product";
import {fakeData, IProduct} from "../../fakeData";


function Content() {
    const [searchText, setSearchText] = React.useState('')
    const [products, setProducts] = React.useState<IProduct[]>(fakeData)


    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    React.useEffect(() => {
        setProducts(fakeData.filter(product => {
            return product.name.toLowerCase().includes(searchText.toLowerCase())
        }))
    }, [searchText])

    return (
        <div className={styles.container}>
            <form className={styles.search_form}>
                <input value={searchText} onChange={(e) => inputHandler(e)} className={styles.search_input} />
            </form>
            <div className={styles.products_container}>
                { products.map(product => <Product {...product} />) }
            </div>
        </div>
    )
}

export default Content