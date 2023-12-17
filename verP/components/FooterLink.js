
export default function FooterLink({Data}){
    // AHH
    if (Data === "spacer"){return <a className="footer-link" style={{opacity: 0}}>Data</a>}
    return (
        <a className="footer-link" href={Data.href}>{Data.text}</a>
    )
}


