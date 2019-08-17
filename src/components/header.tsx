import React from "react"
import styled from "styled-components"

interface Props {
  children: React.ReactNode
}

export default function Header({ children }: Props) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 4vh 0;

  @media screen and (max-width: 600px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`
