// import Product from "@/components/Product";
import Data from "Data/Data.json"
import {Button, ButtonGroup, Input} from "@nextui-org/react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
/*
    EXPECT:
    {
            id: "nc1234",
            tagline
}
 */

export default function Hero(){
    const h = Data.hero;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div id="hero-section">
           <div className="hero-offer-div">
               <h2 className="hero-offer-title" dangerouslySetInnerHTML={{__html: h.title}} />
               <h3 className="hero-offer-subtext">{h.subtext}</h3>
               <Button onClick={handleOpen} disableAnimation={true} className="hero-button" endContent={<span className="icon material-symbols-outlined">chevron_right</span>}>Sign Up</Button>
               <Modal
                   open={open}
                   onClose={handleClose}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description"
                   className="email-modal"
               >
                   <Box className="email-modal-insides">
                        <div className={"left"}>
                            <h2>Sign up to be alerted when our store opens</h2>
                            <p>We'll throw in some goodies such as free articles and a coupon fora $50 Gift Bag when we official open our store. </p>
                        </div>
                        <div className={"right"}>
                            <Input type="email" variant="underlined" label="Email" />
                            <p>By subscribing to ForeverYou, you consent to receive our marketing email.</p>
                            <Button className="hero-button"  endContent={<span className="icon material-symbols-outlined">chevron_right</span>}>Subscribe</Button>
                        </div>
                   </Box>
               </Modal>
           </div>
        </div>
    )
}