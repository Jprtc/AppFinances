import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const FooterWrapper = styled.View`
  margin-top: -30px;
  padding: 0 32px;
  /* justify-content: space-between; */
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;
  text-align: center;
  margin-top: 45px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(20)}px;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 68px;
`;
