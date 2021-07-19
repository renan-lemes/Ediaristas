import React from "react";
import { FooterStyled,FooterContainer, FooterTitle, AppList } from "./Footer.style";
import { Typography } from "@material-ui/core";

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <FooterTitle>
                    Quem somos
                </FooterTitle>
                <Typography>
                    E-Diaristas te ajuda a encontrar um profissional perfeito
                    para realizar a limpeza da sua casa. Garantimos a melhor 
                    profissional com o total seguraça a praticidade! são milhares 
                    de clientes satisfeitos por todo o pais.
                </Typography>

                <FooterTitle>Baixe nossos aplicativos</FooterTitle>
                <AppList>
                    <li>
                        <a
                            href = {'/'}
                            target = {'_blank'}
                            rel = {'nooperner noreferrer'}
                        >
                            <img 
                            src = {'/img/logos/app-store.png'} 
                            alt = {'App Store'} />
                        </a>
                    </li>
                    <li>
                        <a
                            href = {'/'}
                            target = {'_blank'}
                            rel = {'nooperner noreferrer'}
                        >
                            <img 
                            src = {'/img/logos/google-play.png'} 
                            alt = {'Google Play'} />
                        </a>
                    </li>
                </AppList>
            </FooterContainer>
        </FooterStyled>
    );
}

export default Footer;