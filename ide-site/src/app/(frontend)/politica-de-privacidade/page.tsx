import type { Metadata } from 'next';
import styles from './politica.module.css';
import EmailLink from '@/components/EmailLink/EmailLink';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Empresa Júnior IDE',
  description: 'Nossa política de coleta de dados e privacidade para garantir a transparência com os nossos usuários e clientes.',
};

export default function PoliticaDePrivacidade() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Política de Privacidade</h1>
      
      <div className={styles.content}>
        <p>A <strong>Empresa Júnior IDE</strong> respeita a sua privacidade e garante o sigilo total das informações que você nos fornece. Esta Política de Privacidade tem o intuito de esclarecer como coletamos, usamos e protegemos os seus dados, em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>

        <h2>1. Coleta de Dados Pessoais</h2>
        <p>Coletamos informações pessoais que você nos fornece voluntariamente através do nosso formulário de contato ou via WhatsApp. Esses dados incluem, mas não se limitam a:</p>
        <ul>
          <li><strong>Nome:</strong> Para sabermos como nos direcionar a você adequadamente.</li>
          <li><strong>E-mail:</strong> Para podermos retornar o seu contato, enviar orçamentos ou propostas referentes aos serviços de desenvolvimento.</li>
          <li><strong>Telefone/WhatsApp:</strong> Quando você inicia uma conversa conosco via botão de WhatsApp, a plataforma nos expõe o seu número para continuidade do atendimento.</li>
        </ul>
        <p>Nós não vendemos, alugamos ou repassamos seus dados de contato para terceiros.</p>

        <h2>2. Uso de Cookies e Ferramentas do Google</h2>
        <p>Nosso site utiliza ferramentas analíticas e de publicidade providas pelo Google, como o <strong>Google Analytics 4 (GA4)</strong> e o <strong>Google Ads</strong>. Essas ferramentas utilizam "cookies", que são pequenos arquivos de texto armazenados no seu dispositivo, com a finalidade de:</p>
        <ul>
          <li>Compreender o volume e comportamento de visitantes nas nossas páginas.</li>
          <li>Medir conversões e interações importantes, como cliques de botões ou envios de formulários bem-sucedidos.</li>
          <li>Melhorar a performance técnica do nosso site e a eficácia das nossas campanhas de mídia (anúncios).</li>
        </ul>
        <p>As informações coletadas por esses cookies são tipicamente tratadas de forma agregada e pseudonimizada pelas plataformas do Google. Nós utilizamos esses dados apenas para aprimorar os nossos serviços, e não para identificação pessoal abusiva.</p>

        <h2>3. Consentimento e Seus Direitos</h2>
        <p>Ao utilizar o nosso site e nos enviar os seus dados via formulário ou WhatsApp, você está consentindo com as práticas descritas nesta política.</p>
        <p>Você tem o direito de solicitar, a qualquer momento:</p>
        <ul>
          <li>A confirmação e o acesso aos dados que possuímos sobre você.</li>
          <li>A correção de dados incompletos ou desatualizados.</li>
          <li>A exclusão dos seus dados da nossa base de contatos.</li>
        </ul>

        <h2>4. Contato</h2>
        <p>Se você tiver alguma dúvida sobre a nossa Política de Privacidade ou desejar exercer seus direitos em relação aos seus dados, entre em contato conosco:</p>
        <p><strong>E-mail:</strong> <EmailLink href="mailto:contato@idejr.com.br" origin="politica">contato@idejr.com.br</EmailLink></p>

        <p><small><em>Última atualização: {new Date().toLocaleDateString('pt-BR')}</em></small></p>
      </div>
    </div>
  );
}

