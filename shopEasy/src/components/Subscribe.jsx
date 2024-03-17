import React from "react";
import styled from "styled-components";

const Subscribe = () => {
  return <Wrapper>
		<h3>Subcribe For New Product Notification</h3>
		<div className="subcribe-input">
			<input placeholder="prasdvvikas@gmail.com" type="email" />
			<a className="subcribe-btn" href="#">Send</a>
		</div>
  </Wrapper>;
};

const Wrapper = styled.section`
width: 100%;
height: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-bottom: 2px solid rgba(0, 0, 0, 0.03);

 h3 {
    font-family: "Roboto", sans-serif;
    color: rgb(56, 56, 56);
    font-size: 3.2rem;
    margin-bottom: 2.5rem;
}
.subcribe-input {
    width: 500px;
    background-color: #fff;
    border-radius: 7% 7% 7% 7% / 50% 50% 50% 50%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-shadow: 2px 5px 30px rgba(0,0,0,0.1);
}
.subcribe-input input {
    width: 100%;
    height: 40px;
    box-shadow: none;
        text-transform: none;
    border: none;
    outline: none;
    background-color: transparent;
}
.subcribe-btn {
    width: 120px;
    height: 40px;
    background-color: #7A72FF;
    border-radius: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
    font-size: 1rem;
}
`;
export default Subscribe;