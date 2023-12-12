// import Product from "@/components/Product";
import Data from "Data/Data.json"
import {ScrollShadow} from "@nextui-org/react";
/*
    EXPECT:
    {
            id: "nc1234",
            tagline
}
 */

export default function ArticleList(){
    const a = Data.articles;

    return (
        <div id="articles">
            <div key={"article-"+a[0].id} className="article">
                <h2 className="article-title">{a[0].title}</h2>
                <p className="article-date">{a[0].date}</p>
                <ScrollShadow hideScrollBar={true} className="imagelist-div">
                <div className="article-text"  dangerouslySetInnerHTML={{__html: a[0].text}}></div>
                </ScrollShadow>
            </div>
        </div>
    )
}


