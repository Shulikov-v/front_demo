import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import {useMount} from 'react-use';
import isEmpty from 'lodash/isEmpty';

import UserList from '../../components/UserList';
import UserListItem from '../../components/UserListItem';

import { history } from '../../store';

import { actionProjectRequest } from '../../actions';

import { selectorUsers, selectorProjects } from '../../selectors';

function Project({match, projectsRequest, users, projects = []}) {
  useMount(() => projectsRequest(match.params.id));

  const project = useMemo(() => {
    // eslint-disable-next-line eqeqeq
    return projects.find(project => project.id == match.params.id) || {}
  }, [projects, match]);

  const [userList, setUserList] = useState(users);

  useEffect(() => {
    setUserList(users)
  }, [users]);

  const handleFilter = useCallback((event) => {
    const {value} = event.target;
    if (isEmpty(value)) {
      setUserList(users)
    } else {
      setUserList(users.filter(user => user.name && user.name.includes(value)))
    }
  }, [users]);

  const handleAddUser = useCallback(() => history.push('/add-user'), []);

  return (
    <div>
      <div className="row">
        <button className="btn-small" onClick={history.goBack}>Back</button>
      </div>
      <h3>{`Project - ${project.name}`}</h3>
      <h4>Users</h4>
      <div className="row">
        <div className="sm-12 md-12">
          <input type="search" onChange={handleFilter} />
        </div>
      </div>
      <UserList>
        {userList && userList.map(user => (
          <UserListItem
            user={user}
            key={`user-${user.id}`}
          />
        ))}
      </UserList>
      <div className="row">
      <input type="button" className="btn-secondary" value="+ Add User" onClick={handleAddUser}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  users: selectorUsers(state),
  projects: selectorProjects(state),
});

const mapDispatchToProps = (dispatch) => ({
  projectsRequest: data => dispatch(actionProjectRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
