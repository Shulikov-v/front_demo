import React from 'react';
import useForm from 'react-hook-form';
import { connect } from 'react-redux';

import { history } from '../../store';

import { actionAddNewUserRequest } from '../../actions';

function AddUser({ addNewUser }) {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <div className="row">
        <button className="btn-small" onClick={history.goBack}>Back</button>
      </div>
      <h3>Add new user</h3>
      <form onSubmit={handleSubmit(addNewUser)}>
        <div className="form-group">
          <input type="text" placeholder="Name" className="input-block" name="name" ref={register({ required: true, maxlength: 20 })} />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" className="input-block" name="email" ref={register({ required: true })} />
        </div>
        <button type="submit" className="btn-secondary btn-block" >Save</button>
      </form>
    </div>
  )
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
  addNewUser: data => dispatch(actionAddNewUserRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
