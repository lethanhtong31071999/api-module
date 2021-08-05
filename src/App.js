import './App.css';
import { useEffect } from 'react';
import productApi from './api/productApi.js';
import ListPage from './features/Todo/pages/ListPage';

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

      <h1>ToDo</h1>
      <ListPage />
    </div>
  );
}

export default App;
