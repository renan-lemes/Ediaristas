import React from "react";
import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from './PageTitle.style'

interface PageTitleProps{
    title: string;
    subtitulo?: string;
}

const PageTitle: React.FC<PageTitleProps> = (props)=>{
    return(
        <PageTitleContainer>
           <PageTitleStyled>{props.title}</PageTitleStyled>
           <PageSubtitleStyled>{props.subtitulo}</PageSubtitleStyled>
        </PageTitleContainer>
    );
}

export default PageTitle;