import React from "react"
import styled from "styled-components"
import { light, dark } from "../assets/styles/colors"
import theme from "styled-theming"

interface Props {
  title: string
}

export default function Keyword({ title }: Props) {
  return <Container>{title}</Container>
}

const containerColor = theme("mode", {
  dark: dark.fg,
  light: light.fg,
})

const containerBgColor = theme("mode", {
  dark: dark.secondaryBg,
  light: light.secondaryBg,
})

const containerHoverBgColor = theme("mode", {
  dark: dark.primary,
  light: light.primary,
})

const Container = styled.span`
  color: ${containerColor};
  background-color: ${containerBgColor};
  padding: 8px 12px;
  font-size: 13px;
  border-radius: 8px;
  margin-right: 5px;
  border: 2px ${containerBgColor} solid;

  &:hover {
    margin-left: 12px;
    margin-right: 17px;
    border: 2px ${containerHoverBgColor} solid;
  }
`
