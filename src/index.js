import React from 'react';
import ReactDOM from 'react-dom';
// import Lifecycle from './component/lifecycle';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Lifecycle from './component/lifecycle';
// import Crud from './crud';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './crud/NavbarComponent';
import Tabel from './crud/tabel';
import Formulir from './crud/formulir';


ReactDOM.render(
  <React.StrictMode>
    <NavbarComponent />
    <Tabel />
    <Formulir />
  </React.StrictMode>,
  document.getElementById('root')
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     <Lifecycle />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();