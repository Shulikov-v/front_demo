import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import {useMount} from 'react-use';
import isEmpty from 'lodash/isEmpty';

import ProjectList from '../../components/ProjectList';
import ProjectListItem from '../../components/ProjectListItem';

import { actionProjectsRequest, actionLogOut } from '../../actions';

import { selectorProjects } from '../../selectors';

function Projects({ logOut, projectsRequest, projects = [] }) {
  useMount(projectsRequest);

  const [projectList, setProjectList] = useState(projects);

  useEffect(() => {
    setProjectList(projects)
  }, [projects]);

  const handleFilter = useCallback((event) => {
    const {value} = event.target;
    if (isEmpty(value)) {
      setProjectList(projects)
    } else {
      setProjectList(projects.filter(project => project.name && project.name.includes(value)))
    }
  }, [projects]);

  return (
    <div>
      <div className="row">
        <button className="btn-small" onClick={logOut}>Log out</button>
      </div>
      <h3>Projects</h3>
      <div className="row">
        <div className="sm-12 md-12">
          <input type="search" onChange={handleFilter} />
        </div>
      </div>
      <ProjectList>
        {projectList && projectList.map(project => (
          <ProjectListItem
            project={project}
            key={`pj-${project.id}`}
          />
        ))}
      </ProjectList>
    </div>
  )
}


const mapStateToProps = state => ({
  projects: selectorProjects(state),
});

const mapDispatchToProps = (dispatch) => ({
  projectsRequest: data => dispatch(actionProjectsRequest(data)),
  logOut: () => dispatch(actionLogOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);