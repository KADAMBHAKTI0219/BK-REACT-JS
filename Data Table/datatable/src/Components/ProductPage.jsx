import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState(null);
  const [categories, setCategories] = useState(null);
  const [search, setSearch] = useState('');

  const getDataProduct = () => {
    axios.get('http://localhost:3000/product', {
      params: {
        _page: page,
        limit: 10,
        _sort: 'price',
        _order: order,
        category: categories,
        q: search
      }
    })
    .then(res => setProductData(res.data))
    .catch(err => console.log(err));
  };

  const deleteBtn = (id) => {
    axios.delete(`http://localhost:3000/product/${id}`)
      .then(() => {
        getDataProduct();
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getDataProduct();
  }, [page, categories, order, search]);

  useEffect(() => {
    setPage(1); // Reset page number to 1 when filters change
  }, [categories, order, search]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', margin: 'auto' }}>
        <div>
          <select onChange={(e) => setCategories(e.target.value)} value={categories} name='category'>
            <option >Select Your Category</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} style={{ display: 'inline' }} />
        </div>
        <div>
          <button onClick={() => setOrder('asc')}>LowToHigh</button>
          <button onClick={() => setOrder('desc')}>HighToLow</button>
        </div>
      </div>

      <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>Products</h1>
      <div className="product-grid">
        {productData.map((el) => (
          <div className="product-card" key={el.id}>
            <h1 className="product-title">{el.title}</h1>
            <Link to={`/description/${el.id}`}>
              <img src={el.image} alt={el.title} className="product-image" />
            </Link>
            <h2 className="product-price">${el.price}</h2>
            <button className="edit-button">
              <Link to={`/editProduct/${el.id}`}>EDIT</Link>
            </button>
            <button className="delete-button" onClick={() => deleteBtn(el.id)}>Delete</button>
          </div>
        ))}
      </div>

      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
        <span>{page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default ProductPage;
