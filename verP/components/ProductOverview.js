import Product from "@/components/Product";
import Data from "Data/Data.json"

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {ScrollShadow} from "@nextui-org/react";
/*
    EXPECT:
    {
            id: "nc1234",
            tagline
}
 */

export default function ProductOverview(){
    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${
                size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
        };
    }
    const itemData = Data.productList.items;

    return (
        <div id="overview">
            <ScrollShadow hideScrollBar={true} className="imagelist-div">
            <ImageList
                sx={{ width: '100%', padding: '2rem' }}
                variant="quilted"
                cols={4}
                rows={4}
                className="imagelist"
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 100, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
                <div className="po-div">
                    <Product Data={Data.products[0]}></Product>
                </div>
            </ImageList>
            </ScrollShadow>
        </div>
    )
}


