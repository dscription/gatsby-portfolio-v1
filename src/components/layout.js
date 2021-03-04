import React from "react"
import { navy, peach } from "../components/utilities/Colors"
import styled from "styled-components"
import Header from "./layouts/Header"
import GlobalStyle from "./global"

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <GlobalStyle />
    </Container>
  )
}

const Container = styled.div`
  background: ${props => props.theme.colors.background};
`

const Main = styled.main`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  padding: 20px;
`

export default Layout
