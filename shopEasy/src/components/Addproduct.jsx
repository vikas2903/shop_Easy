import React from "react";
import styled from "styled-components";
function Addproduct() {
  return (
    <Wrapper>
      <div className="form-container">
        <h2>Add Product</h2>
        <form>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            //   value={FormData.name}
            //   onChange={handleChange}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="name"
            className="form-control"
            rows="4"
            //   value={FormData.description}
            //   onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            className="form-control"
            min="0"
            //   value={formData.stock}
            //   onChange={handleChange}
            required
          />
          <label htmlFor="singleImage">Single Image:</label>
          <input
            type="file"
            id="singleImage"
            name="singleImage"
            //   accept="image/*"
            //   onChange={handleChange}
            className="form-control"
            required
          />
          <label htmlFor="multipleImages">Multiple Images:</label>
          <input
            type="file"
            id="multipleImages"
            name="multipleImages"
            //   accept="image/*"
            //   multiple
            //   onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-control"
            step="100"
            min="10"
            //   value={formData.price}
            //   onChange={handleChange}
            required
          />
          <button type="submit" className="addproductbtn">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .form-container {
    margin: 5rem auto !important;
    width: 50%;
    margin: auto;
    padding: 2rem 5rem 4rem 5rem !important;
    border: 1px solid #eee;
  }
  label {
    display: block;
    font-size: 16px;
    margin: 0 0 6px;
    font-family: "Asap";
  }
  h2 {
    text-align: center;
    line-height: 30px;
    margin: 10px 0 20px;
    text-transform: uppercase;
    font-size: 30px;
    font-family: "Asap";
  }
  .form-container {
    width: 50%;
    margin: auto;
    border: 1px solid #eee;
    padding: 2rem 5rem;
  }
  .addproductbtn {
    width: 100%;
    height: 40px;
    background-color: #7a72ff;
    border-radius: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
    font-size: 1.8rem;
    border: navajowhite;
    cursor: pointer;
    margin-top: 2.4rem !important;
  }
  .form-control {
    width: 100%;
    display: block;
    margin-bottom: 13px;
    border: 1px solid #eee;
    box-shadow: none !important;
    max-width: 100%;
  }
`;
export default Addproduct;
