import { useEffect, useState } from "react";
import ApiContext from "./apiContext";

const ApiState = (props) => {
    const [topSlider, settopSlider] = useState();
    const [bannerForSale, setbannerForSale] = useState();
    const [anothercompanys, setanothercompanys] = useState();
    const [newProducts, setnewProducts] = useState();
    const [featuredProducts, setfeaturedProducts] = useState();
    const [scndBnrForSale, setscndBnrForSale] = useState();
    const [team, setteam] = useState();
    const [ourBlog, setourBlog] = useState();
    const [cartNum, setCartNum] = useState(0);
    const [allProducts, setAllProducts] = useState([]);


    useEffect(() => {
        (async () => {
            // fetch top slider
            const response1 = await fetch('http://localhost:5000/api/topSlider/fetchTopSlider', {
                method: 'GET'
            });
            let data = await response1.json()
            settopSlider(data)


            // fetch banner for sale
            const response2 = await fetch('http://localhost:5000/api/bannerForSale/fetchBannerForSale', {
                method: 'GET'
            });
            setbannerForSale(await response2.json())

            // fetch another companys
            const response3 = await fetch('http://localhost:5000/api/anotherCompanys/fetchAnotherCompanys', {
                method: 'GET'
            });
            setanothercompanys(await response3.json())

            // fetch new products
            const response4 = await fetch('http://localhost:5000/api/newProducts/fetchnewProducts', {
                method: 'GET'
            });
            setnewProducts(await response4.json())

            // fetch featured products
            const response5 = await fetch('http://localhost:5000/api/featuredProducts/fetchFeaturedProducts', {
                method: 'GET'
            });
            setfeaturedProducts(await response5.json())

            // fetch second banner for sale
            const response6 = await fetch('http://localhost:5000/api/secondBannerForSale/fetchSecondBannerForSale', {
                method: 'GET'
            });
            setscndBnrForSale(await response6.json())

            // fetch second banner for sale
            const response7 = await fetch('http://localhost:5000/api/team/fetchTeam', {
                method: 'GET'
            });
            setteam(await response7.json())

            // fetch our blog
            const response8 = await fetch('http://localhost:5000/api/ourBlog/fetchOurBlog', {
                method: 'GET'
            });
            setourBlog(await response8.json())

           
        })()
        }, [])
        
    // cart number change function....
    const handleCartNum = (P_M) => {
        let Num = cartNum + P_M;
        setCartNum(Num)
        
    }
    
    




    return (
        <ApiContext.Provider value={{ topSlider, bannerForSale, anothercompanys, newProducts, featuredProducts, scndBnrForSale, team, ourBlog, cartNum, handleCartNum }}>
            {props.children}
        </ApiContext.Provider>
    )


}

export default ApiState;