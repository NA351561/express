import React from 'react';
import ReactDOM from 'react-dom';
import App from './reactapp.jsx';
function tick() {
ReactDOM.render(
<App />,
document.getElementById('root')
);
}
setInterval(tick,1000);
