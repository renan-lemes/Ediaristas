import SafeEnvironment from './ui/styles/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from './ui/styles/components/data-display/PageTitle/PageTitle';
import UserInformation from './ui/styles/components/data-display/UserInformation/UserInformation';
import TextFieldMask from './ui/styles/components/inputs/TextFieldMask/TextFielMask'
import { Button, Typography, Container } from '@material-ui/core';
import { FormElementsContainer, ProfissionaisPaper } from './ui/styles/pages/index.style';
import { ProfissionaisContainer } from './ui/styles/pages/index.style';
import useIndex from './data/hooks/pages/useindex.page';

export default function Home() {
  const {cep, setCep} = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <Container>

        <FormElementsContainer>
          <TextFieldMask
            mask = {'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant = {'outlined'}
            value = {'cep'}
            onChange = {(event) => setCep(event.target.value)}
          />
          
          <Typography color = {'error'} >CEP inválido</Typography>
          <Button
            variant = {'contained'}
            color = {'secondary'}
            sx = {{width:'220px'}}
          >Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
                    name = {'Renan Lemes'}
                    picture = {'https://github.com/renan-lemes.png'}
                    rating = {4}
                    description = {'Guarapuava'}
                  
                  />
            <UserInformation
                    name = {'Renan Lemes'}
                    picture = {'https://github.com/renan-lemes.png'}
                    rating = {4}
                    description = {'Guarapuava'}
                  
                  />
            <UserInformation
                    name = {'Renan Lemes'}
                    picture = {'https://github.com/renan-lemes.png'}
                    rating = {4}
                    description = {'Guarapuava'}
                  
                  />
            <UserInformation
                    name = {'Renan Lemes'}
                    picture = {'https://github.com/renan-lemes.png'}
                    rating = {4}
                    description = {'Guarapuava'}
                  
                  />
            <UserInformation
                    name = {'Renan Lemes'}
                    picture = {'https://github.com/renan-lemes.png'}
                    rating = {4}
                    description = {'Guarapuava'}
                  
                  />
            <UserInformation
                    name = {'Renan Lemes'}
                    picture = {'https://github.com/renan-lemes.png'}
                    rating = {4}
                    description = {'Guarapuava'}
                  
                  />
          </ProfissionaisContainer>

        </ProfissionaisPaper>
      </Container>
    
    </div>
  );
}
