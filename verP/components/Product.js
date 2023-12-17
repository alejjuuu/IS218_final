// import Product from "@/components/Product";
import Data from "Data/Data.json"
import {ScrollShadow} from "@nextui-org/react";
/*
    EXPECT:
    {
      "id": "product1",
      "name": "4V Lipstick",
      "cat": "Lipstick",
      "price": 19.99,
      "desc": "This lipstick [outstanding feature]",
    }
 */

export default function Product({Data}){
    const p = Data;

    return (
        <div className="product-div">
            <h2 className="product-title">{p.name}</h2>
            <h3 className="product-category">{p.cat}</h3>
            <p className="product-price">{"$" + p.price}</p>
            <ScrollShadow hideScrollBar={true} size={0}>
                <p className="product-description">{p.desc}</p>
            </ScrollShadow>
        </div>
    )
}


