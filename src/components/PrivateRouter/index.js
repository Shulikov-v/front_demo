import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { selectorIsAuth } from '../../selectors';

const PrivateRoute = ({ isAuth, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        isAuth ? 
            <Component {...innerProps} />
            :
            <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuth: selectorIsAuth(state)
});

export default connect(
  mapStateToProps,
)(PrivateRoute);