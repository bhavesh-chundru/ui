import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import CancelIcon from "../../public/svg/CancelIcon.svg";


const OuterBox = styled.div
`
border-radius:16px 0 16px 16px;
background-color:#FFFFFF;
padding:1.5rem 1.438rem 1.5rem 1.438rem;
`
const Compo1 = styled.div
`
text-align:center;
background: #FFDFCC;
`
function MulticityBookingCancell(){
    return(
        <Container>
            <OuterBox>
                <Compo1>
                    <Image src={CancelIcon} alt="calen Icon"/>
                    
                </Compo1>
            </OuterBox>
        </Container>
    )
}
export default MulticityBookingCancell;