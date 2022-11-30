import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Products from './pages/Products';
import OrderHistory from './pages/OrderHistory';
import Cart from './pages/Cart';
import Item from './pages/Item';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Navbar />
            <Provider store={store}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/OrderHistory" element={<OrderHistory />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Item" element={<Item />} />
            </Routes>
          
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
