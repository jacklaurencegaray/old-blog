import React, { useContext } from "react"
import styled from "styled-components"
import Title from "../components/title"
import Search from "../components/search"
import HeaderContainer from "../components/header-container"
import { noop } from "../utils/utilities"
import theme from "styled-theming"
import { dark, light } from "../assets/styles/colors"
import useToggle from "../hooks/use-toggle"
import Switch from "react-switch"
import { Twemoji } from "react-emoji-render"

interface Props {
  onOn: () => void
  onOff: () => void
  searchPlaceholder: string
  onSearch: () => void
  searchStyle?: React.CSSProperties
}

const switchOnColor = theme("mode", {
  dark: dark.secondary,
  light: light.secondary,
})

export default function Header({
  onOn = noop,
  onOff = noop,
  searchPlaceholder = "Search this blog",
  onSearch = noop,
  searchStyle = {},
}: Props) {
  const { status, toggle } = useToggle("OFF", onOn, onOff)
  // const { theme } = useContext(UserSettingsContext)

  return (
    <HeaderContainer>
      <Title title="Ventilatte" />
      <Controls>
        <Switch
          onColor={switchOnColor}
          onChange={toggle}
          checked={status === "ON"}
          checkedIcon={<Twemoji text={"🌛"} />}
          uncheckedIcon={<Twemoji text={"☀️"} />}
        />
        <StyledSearch
          placeholder={searchPlaceholder}
          onSearch={onSearch}
          style={searchStyle}
        />
      </Controls>
    </HeaderContainer>
  )
}

const Controls = styled.div`
  display: grid;
  grid-template-columns: 10px 1fr;
  grid-column-gap: 20px;
`

const StyledSearch = styled(Search)`
  justify-self: self-end;
`
