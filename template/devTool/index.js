import React from 'react';
import ReactDom from 'react-dom';
import Viewer from './components/viewer'
import axios from 'axios'

// axios.get('./api/component-info').then(res => {
//   const components = {};
//   Object.entries(res.data || {}).map( ([tName, tPath]) => {
//     components[tName] = require(tPath);
//   })

// })

ReactDom.render(<Viewer />, document.getElementById('app'));













