import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from "./components/Nav";
import Header from "./components/Header";
import Layout from './Layout'
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Header/>
    <Layout />
    <Footer/>

  </React.StrictMode>
)
