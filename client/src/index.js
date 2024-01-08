import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './route';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from './config';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <React.StrictMode>
            <ChakraProvider>
        <RouterProvider router={router} />
            </ChakraProvider>
      </React.StrictMode>
        </AlertProvider>
      </Provider>
    </QueryClientProvider>
  </WagmiProvider>
);



