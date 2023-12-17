// import Product from "@/components/Product";
import React from "react";
import Data from "Data/Data.json"
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,  Link, Button,  NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";
/*
    EXPECT:
    {
            id: "nc1234",
            tagline
}
 */

export default function Nav(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar id={"navbar"} shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarBrand>
                    <Link href="/" id={"nav-title"}>ForeverYou</Link>
                </NavbarBrand>
            </NavbarContent>


            <NavbarContent justify="center" className="hidden sm:flex gap-4">
                {Data.links.map(x => <NavbarItem key={"navbar-link-"+x.href}>
                    <Link
                        color={"foreground"}
                        href={x.href}> {x.text} </Link>  </NavbarItem>)}
            </NavbarContent>
        </Navbar>
    )
}


