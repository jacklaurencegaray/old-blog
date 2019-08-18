import React from "react"
import styled from "styled-components"
import Title from "../components/title"
import Switcher from "../components/switcher"
import Search from "../components/search"
import HeaderContainer from "../components/header-container"
import { noop } from "../utils/noop"

interface Props {
  onOn: () => void
  onOff: () => void
  searchPlaceholder: string
  onSearch: () => void
  searchStyle?: React.CSSProperties
}

export default function Header({
  onOn = noop,
  onOff = noop,
  searchPlaceholder = "Search this blog",
  onSearch = noop,
  searchStyle = {},
}: Props) {
  return (
    <HeaderContainer>
      <Title title="Ventilatte" />
      <Controls>
        <Switcher onOn={onOn} onOff={onOff} />
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
