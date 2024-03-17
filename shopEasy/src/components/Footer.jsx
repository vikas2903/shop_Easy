import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CiShop } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";

const Footer = () => {
	return (
		<>
			<Wrapper>
				<footer className="footer-distributed">

					<div className="footer-left">
						<div className="logo">shop<span>Easy</span></div>

						<p className="footer-links">
							<NavLink to="/">Home</NavLink>
							<NavLink to="/About">About</NavLink>
							<NavLink to="/Contact">Contact</NavLink>
							<NavLink to="/Products">Products</NavLink>
						</p>

						<p className="footer-company-name">shopEasy © 2024</p>
					</div>

					<div className="footer-center">

						<div>
							<i className="f-icon"><CiShop /></i>
							<p><span>Kotla Vihar Phase 4</span>Najafgarh, New Delhi 110041</p>
						</div>

						<div>
							<i className="f-icon"><IoIosPhonePortrait /></i>
							<p> <a href="tel: +91 9971146242<"> +91 9971146242</a></p>
						</div>

						<div>
							<i className="f-icon"><MdOutlineMailOutline /></i>
							<p><a href="mailto:prasadvvikas@gmail.com">prasadvvikas@gmail.com</a></p>
						</div>

					</div>

					<div className="footer-right">

						<p className="footer-company-about">
							{/* <span>About the company</span> */}
							Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.
							</p>

						<div className="footer-icons">

							<a href="#"><i className="f"><TiSocialFacebook /></i></a>
							<a href="#"><i className="f"><IoLogoInstagram /></i></a>
							<a href="#"><i className="f"><CiTwitter /></i></a>
							<a href="#"><i className="f"><LuGithub /></i></a>

						</div>

					</div>

				</footer>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.section`

.logo{
  color: #fff;
  font-family: "Asap", sans-serif;
  font-size: 2.2vw
}
.logo span {
  color: #7A72FF;
  font-weight: 600;
  letter-spacing: .5px;
  font-size: 2.3vw;
}
.footer-distributed{
	background: #000;
  border-top:2px solid #7A72FF;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px sans-serif;
	padding: 55px 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left{
	width: 40%;
}

/* The company logo */

.footer-distributed h3{
	color:  #ffffff;
	font: normal 36px 'Open Sans', cursive;
	margin: 0;
}

.footer-distributed h3 span{
	color:  lightseagreen;
}

/* Footer links */

.footer-distributed .footer-links{
	color:  #ffffff;
	margin: 20px 0 12px;
	padding: 0;
}

.footer-distributed .footer-links a{
	display:inline-block;
	line-height: 1.8;
  font-weight:400;
	text-decoration: none;
	color:  inherit;
	font-size:1.05vw;
	text-transform: uppercase;
}

.footer-distributed .footer-company-name{
	color:  #222;
	font-size: 1.05vw;
	font-weight: normal;
	margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center{
	width: 35%;
}

.footer-distributed .footer-center i{
	background-color: #33383b;
    color: #ffffff;
    font-size: 1.8px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    margin: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-distributed .footer-center i.fa-envelope{
	font-size: 1.05vwpx;
	line-height: 38px;
}

.footer-distributed .footer-center p{
	display: inline-block;
	color: #ffffff;
  font-weight:400;
	vertical-align: middle;
	margin:0;
	font-size:1.05vw;
}

.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:1.05vw;
	line-height:2;
}
.footer-center svg {
	background: #33383b;
    height: auto;
    width: 35px;
    border-radius: 6px;
    padding: 6px;
}
.footer-distributed .footer-center p a{
	color:  lightseagreen;
	text-decoration: none;;
}

.footer-distributed .footer-links a:before {
  content: "|";
  font-weight:300;
  font-size: 1.6vw;
  left: 0;
  color: #fff;
  display: inline-block;
  padding:0 7px;
}
.footer-distributed .footer-links a:first-child:before{display:none;}
.footer-distributed .footer-links .link-1:before {
  content: none;
}

/* Footer Right */

.footer-distributed .footer-right{
	width: 20%;
}

.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  #92999f;
	font-size: 1.05vw;
	font-weight: normal;
	margin: 0;
}

.footer-distributed .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 1.05vw;
	font-weight: bold;
	margin-bottom: 20px;
}

.footer-distributed .footer-icons{
	margin-top: 25px;
}
.footer-distributed .footer-center p a {
    color: #fff !important;
}
.footer-center div {
    display: flex;
    align-items: center;
    /* justify-content: center; */
}
.footer-distributed .footer-icons a{
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 1.9vw;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-right: 7px;
    margin-bottom: 0px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    display: inline-flex;
    border-radius: 6px;
	.f{
		display:flex;
	}
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {

	.footer-distributed{
		font: bold 14px sans-serif;
	}

	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right{
		display: block;
		width: 100%;
		margin-bottom: 40px;
		text-align: center;
	}

	.footer-distributed .footer-center i{
		margin-left: 0;
	}

}

`;

export default Footer;