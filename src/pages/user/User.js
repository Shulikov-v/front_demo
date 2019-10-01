import React from 'react'
import { connect } from 'react-redux';
import {useMount} from 'react-use';
import isEmpty from 'lodash/isEmpty';

import { history } from '../../store';

import PhotoListItem from '../../components/PhotoListItem';
import PhotoList from '../../components/PhotoList';

import { actionUserRequest } from '../../actions';

import { selectorProjects, selectorUser } from '../../selectors';

function User({user = {}, match, userRequest}) {
  useMount(() => userRequest(match.params.id));

  return (
    <div>
      <div className="row">
        <button className="btn-small" onClick={history.goBack}>Back</button>
      </div>
      <h3>{`Photos of ${user.name}`}</h3>
      <PhotoList>
        {user.images && user.images.map(image => (
          <PhotoListItem
            image={image}
            key={`img-${image.id}`}
          />
        ))}
      </PhotoList>
    </div>
  )
}

const mapStateToProps = state => ({
  user: selectorUser(state),
  projects: selectorProjects(state),
});

const mapDispatchToProps = (dispatch) => ({
  userRequest: data => dispatch(actionUserRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
