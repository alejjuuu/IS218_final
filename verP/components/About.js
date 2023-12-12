// import Product from "@/components/Product";
import {Tabs, Tab} from "@nextui-org/react";
import Data from "Data/Data.json"
/*
    EXPECT:
    {
            id: "nc1234",
            tagline
}
 */

export default function About(){
    const a = Data.about;

    return (<div id="about">
        <p className="about-tag">{a.tagline}</p>
        <Tabs className="about-tab-section" variant={"underlined"} size="lg" aria-label="About section tabs">
            {a.tabs.map(x => <Tab key={x.key} title={x.title} className={"about-section"}>
                <img className="about-section-image" alt={x.imgAlt} src={x.img} />
                <div className="about-section-text-div">
                <h2 className="about-section-header">{x.header}</h2>
                <p className="about-section-text">{x.text}</p>
                </div>
            </Tab> )}
        </Tabs>
    </div>)
}


