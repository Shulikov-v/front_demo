import React from 'react';
import useForm from 'react-hook-form';
import { connect } from 'react-redux';

import { actionLoginRequest } from '../../actions';

function Login({onSubmit}) {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <h3>
        Login
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <div className="form-group">
          <input type="text" placeholder="Login" className="input-block" name="login" ref={register} />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" className="input-block" name="password" ref={register} />
        </div>
        <button type="submit" className="btn-secondary btn-block" >Login</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuth: true
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: data => dispatch(actionLoginRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);