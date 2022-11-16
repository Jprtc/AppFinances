import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled(RectButton)`
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 6px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
  /* gambi pra diminuir tamanho do botão */
  margin-right: 24px;
  margin-left: 24px;
`;

export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-color: ${({ theme }) => theme.colors.text};
  border-right-width: 1px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
