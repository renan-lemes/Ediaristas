import { useState, useMemo } from "react";
import { UserShotInterface } from "pages/data/@types/UserInterface";
import { ValidationService } from "pages/data/services/ValidationService";

export default function useIndex(){
    const   [cep , setCep] = useState(''),
            cepValido = useMemo(() => {
                return ValidationService.cep(cep);
            }, [cep]),
            [erro,setErro] = useState(''),
            [buscaFeita,setBuscaFeita] = useState(false),
            [carregando,setCarregando] = useState(false),
            [diaristas, setDiaristas] = useState([] as UserShotInterface[]),
            [diaristasRestantes, setDiaristasRestantes] = useState(0);

    

    return{
        cep,
        setCep,
        cepValido,
    };
}