import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { BsBag } from "react-icons/bs";

const Header = () =>{
  return(
    <MainHeader>
       <div className="container-fluid header-wrapper">
         <div className="h-left">
          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/About'>About</NavLink></li>
              <li><NavLink to='/Contact'>Contact</NavLink></li>
              <li><NavLink to='/Products'>Products</NavLink></li>
              <li><NavLink to='/featureproductspage'>shop</NavLink></li>
            </ul>
          </nav>
         </div>
         <div className="h-center">
           <div className="logo">shop<span>Easy</span></div>
         </div>
         <div className="h-right">
          <div className="signin">Account</div>
          <div className="cart-icon"><BsBag /></div>
         </div>
       </div>
    </MainHeader>
  )
}
const MainHeader = styled.header`
  .header-wrapper {
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #000;
    justify-content: space-between;
    border-bottom:2px solid #7A72FF;
  }
  .h-left ul {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .header-wrapper > div {
    flex-basis: calc(100% / 3);
  }
  .header-wrapper a {
    font-size: 1.05vw;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .5px;
    color:#fff;
    font-family:${({theme}) => theme.font.primaryfont};
}
.h-center {
  text-align: center;
  color: #fff;
  font-family:${({theme}) => theme.font.primaryfont};
  font-size: 2.2vw;
}

  span{
    color:#7A72FF;
    font-weight:600;
    letter-spacing: .5px;
    font-size:2.3vw;
  }
  .h-right {
    text-align: right;
    color: #fff;
    font-size: 1.05vw;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    text-transform:uppercase;
    gap:16px;

  .signin{
    font-family:${({theme}) => theme.font.primaryfont};
    font-weight:500;
    letter-spacing: .5px;
  }
  svg{
    font-size:1.6vw;
  }
}
`;

export default Header;