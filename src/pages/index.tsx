import React, { useContext } from "react"
import styled from "styled-components"
import Layout from "../containers/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import { graphql } from "gatsby"
import Header from "../containers/header"
import UserSettings from "../providers/user-settings"
import { noop } from "../utils/noop"

export const query = graphql`
  query {
    allContentfulPosts {
      nodes {
        title
        subtitle
        keywords
        createdAt
        author {
          name
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const userSettings = useContext(UserSettings)

  const toggleTheme = () => {
    userSettings.theme = userSettings.theme === "dark" ? "light" : "dark"
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Content>
          <Header
            onOn={toggleTheme}
            onOff={toggleTheme}
            searchPlaceholder={"Search this blog"}
            onSearch={noop}
          />
          {data.allContentfulPosts.nodes.map(post => (
            <Post
              title={post.title}
              subtitle={post.subtitle}
              date={new Date(post.createdAt).toDateString()}
              keywords={post.keywords}
              author={post.author.name}
            />
          ))}
        </Content>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  width: 100vw;
`

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 868px;

  @media screen and (max-width: 1024px) {
    margin-left: 25px;
    margin-right: 25px;
  }
`

const PostContainer = styled.div``

export default IndexPage
