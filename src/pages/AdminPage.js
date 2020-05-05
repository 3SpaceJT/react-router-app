import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const permission = true

const AdminPage = () => {
  return (
    <Route render={() => (
      permission ? (<h1 >Witamy w panelu administratora</h1>) : (
        <Redirect to="/login" />)
    )} />
  );
}

export default AdminPage;