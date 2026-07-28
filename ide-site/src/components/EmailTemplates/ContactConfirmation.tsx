/**
 * E-mail de Confirmação do Formulário de Contato
 *
 * Enviado aos usuários após enviarem um formulário de contato para confirmar
 * que a mensagem deles foi recebida.
 */

import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Tailwind,
  Text,
} from '@react-email/components';
import { ContatoFormData } from '@/src/schemas/contato';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export function ContactConfirmationEmail({
  nome,
  email,
  assunto,
  mensagem,
}: ContatoFormData) {
  return (
    <Html lang="pt">
      <Head />
      <Preview>Recebemos sua mensagem - IDE</Preview>

      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-12 px-4 max-w-xl">
            <Img
              src={`${baseUrl}/imagens/logo-ide-roxo.png`}
              width="120"
              height="auto"
              alt="IDE Logo"
            />

            <Heading className="text-2xl font-bold text-gray-900 mt-8">
              Agradecemos o seu contato, {nome}!
            </Heading>

            <Text className="text-base text-gray-700 leading-6">
              Recebemos sua mensagem e retornaremos em breve!
            </Text>

            <Hr className="border-gray-200 my-6" />

            <Text className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Sua mensagem:
            </Text>
            <div className="bg-gray-50 p-4 rounded-md text-base text-gray-700 leading-6 break-words">
              <Text className="m-0 mb-2"><strong>Nome:</strong> {nome}</Text>
              <Text className="m-0 mb-2"><strong>E-mail:</strong> {email}</Text>
              <Text className="m-0 mb-2"><strong>Assunto:</strong> {assunto}</Text>
              <Text className="m-0 mb-1"><strong>Mensagem:</strong></Text>
              <Text className="m-0 text-gray-800 whitespace-pre-wrap">{mensagem}</Text>
            </div> 

            <Hr className="border-gray-200 my-6" />

            <Text className="text-sm text-gray-500">
              Esta é uma confirmação automática.
            </Text>

            <Row align="center" className="w-auto mt-4">
                <Column className="pr-3">
                    <Link href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide" target="_blank">
                    <Img
                        src={`${baseUrl}/imagens/linkedinIcon.png`}
                        width="24"
                        height="24"
                        alt="LinkedIn"
                    />
                    </Link>
                </Column>
                <Column>
                    <Link href="https://www.instagram.com/ide_jr" target="_blank">
                    <Img
                        src={`${baseUrl}/imagens/instaIcon.png`}
                        width="24"
                        height="24"
                        alt="Instagram"
                    />
                    </Link>
                </Column>
            </Row>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactConfirmationEmail;