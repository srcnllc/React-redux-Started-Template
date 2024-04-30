import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.scss';
import App from './App';
import Layout from './components/Layout/Layout/Layout';
import { store } from './redux/store';
import { Provider } from'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Layout>
      <App />
    </Layout>
    </Provider>
  </React.StrictMode>
);
