import {
  Container,
  Footer,
  FooterWrapper,
  Header,
  SubTitle,
  Title,
} from "./styles";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { SignInButton } from "../../components/SignInButton";

export function Signin() {
  return (
    <Container>
      <Header>
        <LogoSvg width={RFValue(120)} height={RFValue(68)} />
        <Title>
          Controle suas {"\n"} finanças de forma {"\n"} muito simples
        </Title>
        <SubTitle>Faça o seu login {"\n"} com uma das contas abaixo</SubTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInButton title="Entre com Google" svg={GoogleSvg} />
          <SignInButton title="Entre com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
