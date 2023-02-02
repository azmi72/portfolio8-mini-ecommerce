import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MyContext = createContext(null)

const Provider = ({children}) => {
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [banner, setBanner] = useState([])
    
    const getDataProduct = async () => {
        const response = await axios.get('https://calm-jade-anemone-cape.cyclic.app/product')
        setProduct(response.data)
    }

    const getDataCategory = async () => {
        const response = await axios.get('https://calm-jade-anemone-cape.cyclic.app/category')
        setCategory(response.data)
    }

    const getDataBanner = async () => {
        const response = await axios.get('https://calm-jade-anemone-cape.cyclic.app/banner')
        setBanner(response.data)
    }

    useEffect(() => {
        getDataProduct()
        getDataCategory()
        getDataBanner()
    })
    
    return (
        //Context Provider wajib diberi value dan jika object maka kurung kurawal di double
        <MyContext.Provider value={{product, category, banner}}> 
            {children}
        </MyContext.Provider>
    )
}

export {MyContext, Provider}