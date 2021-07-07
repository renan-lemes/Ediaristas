import React from "react";
import { PageTitleContainer, PageTitleStyled } from './PageTitle.style'

interface PageTitleProps{
    title: string;
    subtitulo?: string;
}

const PageTitle: React.FC<PageTitleProps> = (props)=>{
    return(
        <PageTitleContainer>
           <PageTitleStyled> 
                {props.title}
           </PageTitleStyled>
           {props.subtitulo}
        </PageTitleContainer>
    );
}

export default PageTitle;