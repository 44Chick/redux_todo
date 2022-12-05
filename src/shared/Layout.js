import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeadTitle>
      <Link 
      style={{textDecoration:"none", color:"white"}}
      to='/'>
      <span>My Todo</span>
      </Link>
      <span>React</span>
    </HeadTitle>
  )
}
function Footer() {
  return (
    <div>
      <span>Copyright @44chick</span>
    </div>
  )
}
function Layout({children}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout;

const HeadTitle = styled.div`
  width: 1200px;
  padding: 5px;
  margin: auto;
  font-size: large;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

`;