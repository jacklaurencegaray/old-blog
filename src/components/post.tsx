import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import theme from "styled-theming"
import { dark, light } from "../assets/styles/colors"
import Keyword from "./keyword"

interface Props {
  date: string
  title: string
  subtitle: string
  link?: string
  keywords: string[]
}

export default function Post({
  date,
  title,
  subtitle,
  link = "/",
  keywords = [],
}: Props) {
  return (
    <Container>
      <Details>
        <Date>{date}</Date>
      </Details>
      <Link to={link}>
        <Title>{title}</Title>
      </Link>
      <SubTitle>{subtitle}</SubTitle>
      {keywords.length ? (
        <KeywordContainer>
          {keywords.map(keyword => (
            <Link to={`/tags/${keyword}`}>
              <Keyword title={keyword} />
            </Link>
          ))}
        </KeywordContainer>
      ) : null}
    </Container>
  )
}

const detailColor = theme("mode", {
  light: light.fg,
  dark: dark.fg,
})

const subtitleColor = theme("mode", {
  light: light.fg,
  dark: dark.fg,
})

const titleColor = theme("mode", {
  light: light.primary,
  dark: dark.primary,
})

const titleHoverColor = theme("mode", {
  light: light.secondary,
  dark: dark.secondary,
})

const Container = styled.div`
  width: 100%;
  margin-top: 10vh;
  margin-bottom: 10vh;
`

const Title = styled.div`
  color: ${titleColor};
  font-size: 40px;
  font-family: Graphik;
  font-weight: bold;
  margin-bottom: 20px;
  width: fit-content;

  @media screen and (max-width: 600px) {
    font-size: 35px;
  }

  &:hover {
    color: ${titleHoverColor};
  }
`

const SubTitle = styled.div`
  color: ${subtitleColor};
  font-size: 18px;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`
const KeywordContainer = styled.div`
  padding-top: 12px;
`

const Details = styled.div`
  margin-bottom: 15px;
`

const Date = styled.span`
  color: ${detailColor};
  font-size: 16px;
  margin-right: 12px;
`
