import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles ({
  buttonSpace: {
    marginTop: 30,
    textAlign: 'center',
  }
})

const TodoList = () => {
  const classes = useStyles();

  const history = useHistory();
  // const makeStyles = useStyles();
  const LinkToTodoAdd = path => history.push(path);

  return (
    <>
      {/* <TodoListTable /> */}
      <div className={classes.buttonSpace}>
        <Button variant="contained" color="primary" onClick={() => LinkToTodoAdd('/add')}>
          追加
        </Button>
      </div>
    </>
  )
}

export default TodoList;