import React from 'react';
import PropTypes from 'prop-types';
import CountrySelector from './countrySelector';

const moment = require('moment');

class Pledge extends React.Component {
  constructor(props) {
    super(props);
    const { pledge } = this.props;
    this.state = {
      element: pledge,
    };
  }

  render() {
    const { element } = this.state;
    return (
      <div key={element.id}>
        <h2>
          Pledge $
          {element.base_amount}
          {' '}
          or more
        </h2>
        <h3>
          {element.title}
        </h3>
        <p>
          {element.description}
        </p>
        <div>
          <div>
            <span>
              ESTIMATED DELIVERY
            </span>
            <br />
            <span>
              {moment(element.delivery_date).format('MMM YYYY')}
            </span>
          </div>
          <div>
            <span>
              SHIPS TO
            </span>
            <br />
            <span>
              {element.ships_to}
            </span>
          </div>
          <span>
            {element.max_backers}
            {' '}
            backers
          </span>
        </div>
        <div>
          <span>
            Shipping Destination
          </span>
          <br />
          <CountrySelector />
        </div>
        <div>
          <span>
            Pledge amount
          </span>
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
        </div>
        <button type="submit">
          Continue
        </button>
      </div>
    );
  }
}

Pledge.propTypes = {
  pledge: PropTypes.shape({
    base_amount: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    delivery_date: PropTypes.string,
    ships_to: PropTypes.string,
    max_backers: PropTypes.number,
  }).isRequired,
};

export default Pledge;
