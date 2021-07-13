import { Avatar } from "@material-ui/core";
import React from "react";
import {
    UserInformationContainer,
    UserName,
    UserDescription,
    AvatarStyled,
    RatingStyled,
} from './UserInformation.style'

interface UserInformationProps{
    picture: string;
    name: string;
    rating:number;
    description:string;
}
//pode usar a interface passando no lugar de props as variaveis da interface para não ficar repitida//

const UserInformation = (props) =>{
    return(
    <UserInformationContainer>
        <AvatarStyled src={props.picture}>{props.name[0]}</AvatarStyled>
        <UserName>{props.name}</UserName>
        <RatingStyled readOnly value={props.rating}/>
        <UserDescription>{props.description}</UserDescription>
    </UserInformationContainer>
    
    );
};

export default UserInformation;