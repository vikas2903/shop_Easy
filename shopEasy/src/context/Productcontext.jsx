import { createContext, useState, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from '../reducer/ProductReducer';

const AppContext = createContext();

const initialstate = {
  isLoading : false,
  isError:false,
  products :[],
  featureProducts: [],
}
  
const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialstate);

    let image_url = 'https://vikas2903.github.io/homeshop.in/images/'; 

    const API = "https://api.pujakaitem.com/api/products";

    const product_shoes = [
        {
          "id": 1,
          "description": "Fashion shoes",
          "image": image_url + 'shp1.jpg',
          "price": 23.3
        },
        {
          "id": 2,
          "description": "Men's Bouncer-01 Sports Latest Stylish Casual Sneakers, Lace up",
          "image": image_url + 'shp2.jpg',
          "price": 30.3
        },
        {
          "id": 3,
          "description": "Men's Air Series Mesh Casual Sports Shoes",
          "image": image_url + 'shp3.jpg',
          "price": 13.3
        },
        {
          "id": 4,
          "description": "Men's Air Wonder Series Mesh Casual Sports Sneakers Shoes for Men",
          "image": image_url + 'shp4.jpg',
          "price": 33.3
        },
        {
          "id": 5,
          "description": "Women's Running Shoes",
          "image": image_url + 'shp5.jpg',
          "price": 11.3
        },
        {
          "id": 6,
          "description": "Men's Running Shoes",
          "image": image_url + 'shp6.jpg',
          "price": 43.3
        },
        {
          "id": 7,
          "description": "Men's Loire-63 Running Shoes",
          "image": image_url + 'shp7.jpg',
          "price": 43.3
        },
        {
          "id": 8,
          "description": "Men's Wonder-13 Mesh Sports Running Shoes",
          "image": image_url + 'shp8.jpg',
          "price": 43.3
        }
      ]
      
    const products_bags= [
        {
          id: 1,
          image: image_url + 'b1.png',
          description: 'Black Genuine Leather Bags.',
          price: 23.3
        },
        {
          id: 2,
          image: image_url + 'b2.png',
          description: 'Orange Genuine Leather Bags.',
          price: 30.3
        },
        {
          id: 3,
          image: image_url + 'b3.png',
          description: 'Violet Genuine Leather Bags.',
          price: 13.3
        },
        {
          id: 4,
          image: image_url + 'b4.png',
          description: 'Pink Genuine Leather Bags.',
          price: 33.3
        },
        {
          id: 5,
          image: image_url + 'b5.png',
          description: 'Red Genuine Leather Bags.',
          price: 11.3
        },
        {
          id: 6,
          image: image_url + 'b6.png',
          description: 'Blue Genuine Leather Bags.',
          price: 43.3
        },
        {
          id: 7,
          image: image_url + 'b7.jpg',
          description: 'White Genuine Leather Bags.',
          price: 43.3
        },
        {
          id: 8,
          image: image_url + 'b8.jpg',
          description: 'Green Genuine Leather Bags.',
          price: 43.3
        }
      ];

      // console.log(products_bags);

      const getProducts = async(url) =>{
        dispatch({type: "SET_LOADING"});

        try{
          const response = await axios.get(url);
          const resProducts = await response.data;
          // console.log(resProducts);
          dispatch({type: "SET_API_DATA", payload: resProducts});

        }catch(error){
          console.log("The error is thrown" + `${error}`);
          dispatch({type: "API ERROR"});
        }  
      }
    
      useEffect(()=>{
        getProducts(API);

      },[]);

      const [bagsData, setbagsData] = useState(products_bags);
      const [shoesData, setshoesData] = useState(product_shoes);
      
      const setContextData = (newData)=>{
        setbagsData(newData);
      }
      const setshoesContextData = (newData) =>{
        setshoesData(newData)
      }
      


  return (
    <AppContext.Provider value={{ bagsData, setContextData , shoesData, setshoesContextData, ...state } } >
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
// const useProductContext = () => {
//   return useContext(AppContext);
// };

export { AppProvider, AppContext };