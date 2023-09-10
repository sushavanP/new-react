import React from "react";
import ReactDom from 'react-dom/client'

const parent = React.createElement('h1', { id: 'child1' }, 'Sushavan is here!');

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(parent)