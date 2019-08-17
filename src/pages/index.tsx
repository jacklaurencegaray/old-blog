import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import Title from "../components/title"
import Header from "../components/header"
import Search from "../components/search"
import Switcher from "../components/switcher"

const noop = () => {}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Content>
        <Header>
          <Title title="Ventilatte" />
          <Controls>
            <Switcher onOn={noop} onOff={noop} />
            <Search
              placeholder={"Search this blog"}
              onSearch={() => {}}
              style={{ justifySelf: "self-end" }}
            />
          </Controls>
        </Header>
        <PostContainer>
          <Post
            title="Quick todo list with hooks"
            subtitle="Learning by applying"
            date={new Date().toDateString()}
            keywords={["great", "amazing", "did", "you"]}
          />
          <Post
            title="The dark side of the Singleton pattern"
            subtitle="Learning by applying"
            date={new Date().toDateString()}
            keywords={["dark", "side", "singletons", "practices"]}
          />
          <Post
            title="Quick todo list with hooks"
            subtitle="Learning by applying"
            date={new Date().toDateString()}
            keywords={["new", "react", "update", "hooks"]}
          />
          <Post
            title="Quick todo list with hooks"
            subtitle="Learning by applying"
            date={new Date().toDateString()}
            keywords={["quick", "todo", "list", "hooks"]}
          />
        </PostContainer>
      </Content>
    </Container>
  </Layout>
)

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

const Controls = styled.div`
  display: grid;
  grid-template-columns: 10px 1fr;
  grid-column-gap: 20px;
`

export default IndexPage
