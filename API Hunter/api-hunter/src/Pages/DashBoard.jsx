import React, { useContext, useEffect, useState } from 'react';
import ProductsTable from '../Components/ProductsTable';
import axios from 'axios';
import { AuthContextApi } from '../Context/AuthContext';

const DashBoard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const {token,logOut} = useContext(AuthContextApi)

    const getProductData = async () => {
        try {
            const { data: responseData } = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products');
            setData(responseData.data); // Assuming the API returns products in 'data' field
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch data');
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    return loading ? <h1>loading</h1> : error ? <h1>error</h1>:(
        <div>
          <h1>DashBoard</h1>
          <h2>Token : {token}</h2>
          <button onClick={logOut}>Logout</button>
            {data.map((item) => (
                <ProductsTable key={item.id} item={item} />
            ))}
        </div>
    );
};

export default DashBoard;
