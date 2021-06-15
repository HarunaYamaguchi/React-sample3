import React from 'react';
import { Switch, Route } from 'react-router';
import  TodoList from './templates/TodoList';

const Router = () => {
  return (
      <Switch>
        <Route path='/' exact component={TodoList} />
      </Switch>
  );
};

export default Router;