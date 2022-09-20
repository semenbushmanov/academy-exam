import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

render(
  <StrictMode>
    <ToastContainer />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
