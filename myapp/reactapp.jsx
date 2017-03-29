import React from 'react';
class reactapp extends React.Component{
render(){
return (
<div>
<h1>Hello World..</h1>
<h2>{new Date().toLocaleString()}</h2>
</div>
);
}
}
export default reactapp;
