import FooterLink from "@/components/FooterLink";
import Data from "Data/Data.json";

export default function Footer(){
const a = Data.footer;

return (
<footer id="footerDiv">
<div className="top">
    <div className="footer-link-list">
            {a.map(x =>
                <div key={"fd-"+x.id} className="footer-col">
                    {x.children.map(y =>
                        y.title ? (<h3 className="footer-header" key={x.id+"-"+y.title}>{y.title}</h3>) : (<FooterLink key={x.id+"-"+y.href+"-"+y.text} Data={y} />)
                    )}
                </div>
            )}
    </div>
    <div id="footer-about">
        <h3 className="footer-header">ABOUT</h3>
        <p>We are a beauty brand based in science and deliver top-quality products free of the bad and filled with only the good.</p>
    </div>
</div>
    <div className="bot">
        <div className="footer-social-links">
            <a className="icon" target="_blank" href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a>
            <a className="icon" target="_blank" href="https://www.tiktok.com"><i className="fa-brands fa-tiktok"></i></a>
            <a className="icon" target="_blank" href="https://www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
        </div>
        <div className="footer-copyright">
            (C) 2023 NameOfWebsite
        </div>
    </div>
        </footer>
    )
}


