import React from 'react';
import ReactDOM from 'react-dom';
import MotelActions from './actions/MotelActions';
import MotelGrid from './components/MotelGrid.jsx';

// Cada 5 segundos: recargar!
setInterval(function() {
    MotelActions.fetchList(); 
}, 5000);

ReactDOM.render(<MotelGrid />, document.getElementById('app'));