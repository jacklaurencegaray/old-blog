import React from "react"
import styled from "styled-components"
import theme from "styled-theming"
import { light, dark } from "../assets/styles/colors"

interface Props {
  style?: React.CSSProperties
  onSearch?: () => void
  placeholder: string
}

export default function Search({
  placeholder = "Search",
  style,
  onSearch,
}: Props) {
  return (
    <Input
      onChange={onSearch}
      type="text"
      style={style}
      placeholder={placeholder}
    />
  )
}

const inputBackgroundColor = theme("mode", {
  dark: dark.secondaryBg,
  light: light.secondaryBg,
})

const inputHighlightColor = theme("mode", {
  dark: dark.primary,
  light: light.primary,
})

const inputColor = theme("mode", {
  dark: dark.fg,
  light: light.fg,
})

const Input = styled.input`
  background-color: ${inputBackgroundColor};
  color: ${inputColor};
  height: fit-content;
  width: fit-content;
  padding: 20px 20px;
  font-family: Graphik;
  font-weight: 600;
  border: none;
  font-size: 14px;
  border-radius: 8px;
  min-width: 200px;
  border: 3px solid ${inputBackgroundColor};

  @media screen and (max-width: 600) {
    width: auto;
  }

  &:focus {
    outline: none;
    border-bottom: 3px solid ${inputHighlightColor};
    box-shadow: none;
  }
`
