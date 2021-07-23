export const ValidationService = {
    cep(cep = ''): boolean{
        return cep.replace(/\D/g, '').length === 8; //D tudo que não for numeros se fosse d seria tudo que for numero e o g minusculo significa global//
        //tudo que não for numero substitui por vazio//
    }

}