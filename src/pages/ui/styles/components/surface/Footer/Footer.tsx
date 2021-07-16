import React from "react";
import { FooterStyled,FooterContainer, FooterTitle } from "./Footer.style";
import { Typography } from "@material-ui/core";

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <FooterTitle >
                    Quem somos
                </FooterTitle>
                <Typography>
                    E-Diaristas te ajuda a encontrar um profissional perfeito
                    para realizar a limpeza da sua casa. Garantimos a melhor 
                    profissional com o total seguraça a praticidade! são milhares 
                    de clientes satisfeitos por todo o pais.
                </Typography>
            </FooterContainer>
        </FooterStyled>
    );
}

export default Footer;