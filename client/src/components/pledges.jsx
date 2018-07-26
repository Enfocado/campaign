import React from 'react';
import $ from 'jquery';

const moment = require('moment');

class Pledges extends React.Component {
  constructor() {
    super();
    this.state = {
      pledges: [],
    };
  }

  componentDidMount() {
    $.get('/project/1/section/offered_tiers', (data) => {
      this.setState({
        pledges: data,
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
        </div>
        <div>
          {pledges.map(pledge => (
            <div key={pledge.id}>
              <h2>
                Pledge $
                {pledge.base_amount}
                {' '}
                or more
              </h2>
              <h3>
                {pledge.title}
              </h3>
              <p>
                {pledge.description}
              </p>
              <div>
                <div>
                  <span>
                    ESTIMATED DELIVERY
                  </span>
                  <br />
                  <span>
                    {moment(pledge.delivery_date).format('MMM YYYY')}
                  </span>
                </div>
                <div>
                  <span>
                    SHIPS TO
                  </span>
                  <br />
                  <span>
                    {pledge.ships_to}
                  </span>
                </div>
                <span>
                  {pledge.max_backers}
                  {' '}
                  backers
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Pledges;
