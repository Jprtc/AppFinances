import React from "react";

import { HighlightCard } from "../../components/HiglightCard";

import {
  Container,
  Header,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  HighlightCards,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/13595261?s=400&v=4",
              }}
            />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>João Pedro</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 24 }}
      >
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de Abril"
          type="up"
        />
        <HighlightCard
          title="Saidas"
          amount="R$ 10.400,00"
          lastTransaction="Última saída dia 20 de Abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$ 7.000,00"
          lastTransaction="de 01 a 30 de Abril"
          type="total"
        />
      </HighlightCards>
    </Container>
  );
}
