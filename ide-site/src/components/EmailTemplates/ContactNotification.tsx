/**
 * E-mail de Notificação de Formulário de Contato
 *
 * Enviado ao proprietário do site quando alguém envia um formulário de contato.
 * Inclui todos os detalhes do formulário para facilitar o acompanhamento.
 */

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';
import { ContatoFormData } from '@/schemas/contato';

export function ContactNotificationEmail({
  nome,
  email,
  assunto,
  mensagem,
}: ContatoFormData) {
  return (
    <Html lang="pt">
      <Head />
      <Preview>Novo contato recebido pelo site</Preview>

      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-12 px-4 max-w-xl">
            <div className="bg-purple-50 border border-solid border-purple-200 rounded-md p-4 mb-6">
              <Text className="text-sm text-purple-800 m-0">
                Nova mensagem recebida pelo formulário do site!
              </Text>
            </div>

            <Hr className="border-gray-200 my-6" />

            <Heading className="text-xl font-bold text-gray-900">
              Resposta:
            </Heading>

              <Text className="m-0 mb-2"><strong>Nome:</strong> {nome}</Text>
              <Text className="m-0 mb-2"><strong>E-mail:</strong> {email}</Text>
              <Text className="m-0 mb-2"><strong>Assunto:</strong> {assunto}</Text>
              <Text className="m-0 mb-1"><strong>Mensagem:</strong></Text>
              <Text className="m-0 text-gray-800 whitespace-pre-wrap">{mensagem}</Text>

            <Hr className="border-gray-200 my-6" />
            
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactNotificationEmail;