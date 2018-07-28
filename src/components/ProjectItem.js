import React from 'react';
import ReactDom from 'react-dom';

const projectItemStyle = {
  boxShadow: '0 4px 8px 0 regba(0, 0, 0, 0.2)',
  width: '16rem',
  height: '18rem',
  margin: 'auto',
  textAlign: 'left',
  boxSizing: 'border-box',
  paddingLeft: '8px',
  paddingRight: '8px',
  border: 'solid 5px'

};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
}
class ProjectItem extends React.Component {
  render() {
    // console.log("test two") // Debugging
    // console.log(this.props) // Debugging
    return (
      <div className="columns project-item">
        <div className="item-wrap">
          <div style={projectItemStyle} >
            <img src={this.props.project.pictureLink} alt="Project Picture" />
            <h3>{this.props.project.title}</h3>
            <p style={pStyle}>{this.props.project.languages}</p>
            <p>{this.props.project.descirption}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
