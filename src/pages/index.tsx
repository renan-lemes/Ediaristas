import Head from 'next/head';
import SafeEnvironment from './ui/styles/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from './ui/styles/components/data-display/PageTitle/PageTitle';

export default function Home() {
  return (
    <div>
      <SafeEnvironment/>
      <PageTitle 
        title = {'Conheça os profissionais'}
        subtitle = {'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />
    </div>
  );
}
