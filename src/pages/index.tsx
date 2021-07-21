import SafeEnvironment from './ui/styles/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from './ui/styles/components/data-display/PageTitle/PageTitle';
import UserInformation from './ui/styles/components/data-display/UserInformation/UserInformation';
import TextFieldMask from './ui/styles/components/inputs/TextFieldMask/TextFielMask'
import { Button, Typography } from '@material-ui/core';
import { typography } from '@material-ui/system';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <TextFieldMask
        mask = {'99.999-999'}
        label={'Digite seu CEP'}
        fullWidth
        variant = {'outlined'}
      />
      <Typography color={'error'} >CEP inválido</Typography>
      <Button
        variant = {'contained'}
        color = {'secondary'}
        sx = {{width:'220px'}}
      >Buscar</Button>

      <UserInformation
        name = {'Renan Lemes'}
        picture = {'https://github.com/renan-lemes.png'}
        rating = {4}
        description = {'Guarapuava'}
      
      />
    </div>
  );
}
