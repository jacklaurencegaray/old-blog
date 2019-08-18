import React, { useContext } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import graphikFont from "../assets/fonts/graphik"
import globalStyle from "../assets/styles/global"
import styled from "styled-components"
import { dark, light } from "../assets/styles/colors"
import theme from "styled-theming"
import UserSettings, {
  initialValue as userSettingsInitialValue,
} from "../providers/user-settings"

const globalContainerColor = theme("mode", {
  dark: dark.bg,
  light: light.bg,
})

const GlobalStyle = createGlobalStyle`
      ${globalStyle}
    body {
      ${graphikFont}
      background-color: ${globalContainerColor};
      font-family: "Graphik";
    }
  `

const Test = ({ children }) => {
  const userSettings = useContext(UserSettings)
  return (
    <>
      <ThemeProvider theme={{ mode: userSettings.theme }}>
        <>
          <GlobalContainer>{children}</GlobalContainer>
          <GlobalStyle />
        </>
      </ThemeProvider>
    </>
  )
}

const GlobalContainer = styled.div`
  width: 100vw;
`

export default Test
