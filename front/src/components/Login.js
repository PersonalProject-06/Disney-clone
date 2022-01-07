import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
      <Container>

          <Content>Content </Content>
      </Container>
    )
}



const Container = styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`
const Content = styled.section`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center

`
export default Login
