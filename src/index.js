import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./style.css"
import Navbar from './Navbar';
import Nav2 from './Nav2';
import Sidebar from './Sidebar';
import Content from './Content'
ReactDOM.render(
<>
<Navbar></Navbar>
<Nav2></Nav2>
<Sidebar></Sidebar>
<Content></Content>

</>, 
document.getElementById('root')
);

