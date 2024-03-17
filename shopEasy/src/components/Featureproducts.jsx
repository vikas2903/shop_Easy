import React,  {useContext, useEffect} from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/Productcontext';

const FeatureProducts = ({data}) =>{
 let image_url = 'https://vikas2903.github.io/homeshop.in/images/'

//  const { products } = useContext(AppContext);

//  const {bagsData, setContextData} = useContext(AppContext);
//  const {shoesData, setshoesContextData} = useContext(AppContext);
//  console.log(data);
 
//  useEffect(() => {
//     // Fetch or set data as needed
//     const newData = products; 
//     setContextData(newData);
// }, [setContextData, products]);

    return(
    <Wrapper>
     

        <section className="product" id="bags">
		
		<div className="p-heading">
			<h3>Trendy <font>Arri</font>vals</h3>
		</div>
	
		<div className="product-container">

            {data.map((product)=>{
                return(
                // console.log(product.image);
                <div className='p-box' productid={product.id}>
                    <img src={product.image} alt={`Product ${product.id}`} />
                    <p>{product.description}</p>
                    <a className='price' href="#">{`$${product.price}`}</a>
                    <a className="buy-btn" href="#">Add To Cart</a>
                </div>
                )
            })}

		</div>

	    </section>
    </Wrapper>
    )
}
const Wrapper = styled.section`
padding: 30px 0;

section.product {
    width: 85%;
    background-color: #FFFFFF;
    box-shadow: 2px 2px 30px rgba(167, 158, 245, 0.2);
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    margin-top: 0px;
    position: relative;
    background-image: url('https://vikas2903.github.io/homeshop.in/images/poduct bg.png');
    background-size: 1000px;
    background-position: center;
    border-radius: 10px;
}
.p-heading {
    margin: 20px;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.05);
}
.p-heading h3 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    font-size: 3.8rem;
    color: #323543;
}
.p-heading h3 font {
    color: #7A72FF;
}
.product-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0px;
    width: 100%;
}
.p-box {
    width: 250px;
    height: 330px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    position: relative;
    margin: 10px 30px;
}
.p-box img {
    height: 180px;
}
.p-box p {
    color: #4d4d4d70;
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    line-height: normal;
    margin: 10px 0;
    text-align:center;
}
.price {
    color: #2c2c2c;
    font-family: "Roboto", sans-serif;
    font-size: 1.8rem;
}
.buy-btn {
    position: absolute;
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.5rem;
    font-family: "Roboto", sans-serif;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
    border-radius: 15% 15% 15% 15% / 50% 50% 50% 50%;
    background: linear-gradient(120deg, #7A72FF 20%, #7A72FF);
    color: #FFFFFF;
    display: none;
    animation: fade 0.2s;
}
.p-box:hover {
    box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
    background-color: #FFFFFF;
}
.p-box:hover .buy-btn {
    display: flex;
}
`;
export default FeatureProducts; 