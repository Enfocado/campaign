import React from 'react';
import $ from 'jquery';
import Pledge from './pledge';

class Pledges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pledges: [],
    };
  }

  componentDidMount() {
    $.get('/project/1/section/offered_tiers', (data) => {
      this.setState({
        pledges: JSON.parse(data),
      });
    });
  }

  render() {
    const { pledges } = this.state;
    return (
      <div>
        <h1>
          Support
        </h1>
        <div>
          <h2>
            Make a pledge without a reward
          </h2>
          <table>
            <tr>
              <td>
                $
              </td>
              <td>
                <form>
                  <input type="number" />
                </form>
              </td>
            </tr>
          </table>
          <button type="submit">
            Continue
          </button>
        </div>
        {pledges.map(pledge => (
          <Pledge pledge={pledge} />
        ))}
      </div>
    );
  }
}

export default Pledges;
