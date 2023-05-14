import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer";
import MainAbout from "./components/about/MainAbout";
import MainPortfolio from "./components/portfolio/MainPortfolio";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Layout/>
          <Routes>
              <Route exact path="/" element={<MainAbout/>}/>
              <Route exact path="/about" element={<MainAbout/>}/>
              <Route exact path="/portfolio" element={<MainPortfolio/>}/>
          </Routes>
      </Router>

    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
