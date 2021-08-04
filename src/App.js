import './App.css';
import { useEffect } from 'react';
import productApi from './api/productApi.js';

function App() {
  useEffect(function () {
    // Did mount
    async function fetchProducts() {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    }

    fetchProducts();

    // Unmount
    return () => {};
  }, []);

  return (
    <div className="App">
      <h1>API MODULE</h1>
    </div>
  );
}

export default App;
