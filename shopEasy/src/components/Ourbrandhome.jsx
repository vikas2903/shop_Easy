import React from 'react';
import styled from 'styled-components';
const Ourbrandhome = () =>{
  return(
    <Wrapper>
    <div className="brand-text">
    
    <h3>Our Brand</h3>
    <h4>Small Shoes 2020 New Arrivals Mini Messenger <font>Classic Shoes</font>
    </h4>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, commodi maxime nemo molestias saepe
        sapiente eveniet quas consequatur incidunt repellendus amet iusto, alias iure, laboriosam cum. Ea
        facilis commodi quidem doloremque laboriosam id provident.</p>
</div>

<div className="brand-img"><img src="https://vikas2903.github.io/homeshop.in/images/mobile.png"/></div>

</Wrapper>
  )

}
const Wrapper = styled.section`
display: flex;
width: 85%;
margin: 30px auto;
justify-content: space-around;
align-items: center;
padding: 30px;

.brand-text {
    width: 40%;
    font-family: "Roboto", sans-serif;
}
.brand-text h3 {
    color: #333333;
    font-weight: 700;
    font-size: 6rem;
    margin: 0px;
    font-family: 'Roboto';
}
.brand-text h4 {
    color: #333333;
    font-weight: 400;
    font-size: 2.8rem;
    font-family: "Roboto", sans-serif;
    margin: 0px;
    line-height:normal;
}
.brand-text font {
    color: #8d83f9;
}
.brand-text p {
    font-size: 1.4rem;
    color: #bdbdbd;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.5px;
    padding-top: 10px;
    font-weight: 400;
}
.brand-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.brand-img {
    height: 500px;
    width: 50%;
    box-sizing: border-box;
}
`;


export default Ourbrandhome;