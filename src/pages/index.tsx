import SafeEnvironment from './ui/styles/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from './ui/styles/components/data-display/PageTitle/PageTitle';
import UserInformation from './ui/styles/components/data-display/UserInformation/UserInformation';
import { UserInformationContainer } from './ui/styles/components/data-display/UserInformation/UserInformation.style';

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
      <UserInformation
        name = {'Renan Lemes'}
        picture = {'https://github.com/renan-lemes.png'}
        rating = {4}
        description = {'Guarapuava'}
      
      />
    </div>
  );
}
