import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import Product from '../components/home/product';
import { setProducts, searchProducts } from '../actions-creators/products';

const ProductsStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 47px;
`;

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  width: 96%;
  background: var(--darkgray);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
`;
const InputStyled = styled.input`
  font-size: 14px;
  background: none;
  color: var(--black);
  width: 195px;
  height: 20px;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 6px 8px var(--black, 0.15);
  padding: 0.3rem;
  background: var(--lightgray);
`
function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.getIn(['products', 'data']));
  const results = useSelector(state => state.getIn(['products', 'results']));
  const productsList = results && results.size ? results : products

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data/index.json');
      const data = await response.json()
      dispatch(setProducts(data.products))
    }  
    if (!products.size) fetchData();
  }, []);

  const filterData = (e) => {
    const value = e.target.value
    dispatch(searchProducts(value))
  }
  return (
    <div>
      <HeaderStyled>
        <h1>Inventory</h1>
        <InputStyled type="text" name="search" id="search" onChange={filterData} placeholder="Search"/>
      </HeaderStyled>
      <ProductsStyled>
        {
          productsList.map(item => <Product key={item.get('code')} item={item}/>)
        }
      </ProductsStyled>
    </div>
  );
}

export default Home;
