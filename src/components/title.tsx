import React from "react"
import styled from "styled-components"
import { light, dark } from "../assets/styles/colors"
import theme from "styled-theming"
import { Link } from "gatsby"

interface Props {
  title: string
  link?: string
}

export default function Title({ title = "", link = "/" }: Props) {
  return (
    <Link to={link}>
      <Container>{title}</Container>
    </Link>
  )
}

const containerBgColor = theme("mode", {
  dark: dark.secondaryBg,
  light: light.secondaryBg,
})

const containerFgColor = theme("mode", {
  dark: dark.fg,
  light: light.fg,
})

const Container = styled.div`
  background-color: ${containerBgColor};
  width: fit-content;
  color: ${containerFgColor};
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  padding: 3vh 3vw;
`
