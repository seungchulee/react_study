import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Rooms from './Rooms';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{padding:20, border:'5px solid gray'}}>
        <Link to="/">홈</Link>
        <br/>
        <Link to="/photo">사진</Link>
        <br/>
        <Link to="/rooms">방</Link>
        <br/>
      </div>
      <Route exact path="/" component={Home}></Route>
      <Route path="/photo" component={Photo}></Route>
      <Route path="/rooms" component={Rooms}></Route>
    </BrowserRouter>
  )
}

function Home({match}) {
  return <h2>이곳은 홈페이지</h2>
}
function Photo({match}) {
  return <h2>사진사진</h2>
}