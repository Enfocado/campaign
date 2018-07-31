import React from 'react';
import $ from 'jquery';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [],
    };
  }

  componentDidMount() {
    $.get('/project/1/section/about_components', (data) => {
      this.setState({
        components: JSON.parse(data),
      });
    });
  }

  render() {
    const { components } = this.state;
    return (
      <div>
        <h1>
          About
        </h1>
        <div>
          {components.map(component => (
            <div key={component.id}>
              {component.ele_type_id === 1 && (
                <p>
                  {component.ele_description}
                </p>
              )}
              {component.ele_type_id === 2 && (
                <h2>
                  {component.ele_description}
                </h2>
              )}
              {component.ele_type_id === 3 && (
                <b>
                  {component.ele_description}
                </b>
              )}
              {component.ele_type_id === 4 && (
                <img src={component.ele_description} alt="" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default About;
