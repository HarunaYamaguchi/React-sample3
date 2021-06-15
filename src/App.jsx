import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Router from './Router';


const App = () => {
  // const dispatch = useDispatch();
  // const selector = useSelector((state) => state);

  // console.log(selector.todos)

  return (
    <div className="app">
      <h1>TODOアプリを作ってみた</h1>
      <Router />
    </div>
  );
}

export default App;
