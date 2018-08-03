import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CountrySelector from './countrySelector';

const moment = require('moment');

const Main = styled.div`
  border: 1px solid #DCDEDD;
  margin-bottom: 20px;
`;

const PledgeMain = styled.div`
  margin: 0 20px;
  padding: 20px 0;
`;

const TitleTwo = styled.h2`
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 20px;
  margin-top: 0px;
  font-size 18px;
`;

const PledgeDetails = styled.div`
  width: 50%;
  color: #020621;
  float: left;
`;

const Button = styled.button`
  margin-top: 0;
  width: 100%;
  padding: 0 20px;
  background-color: #009E74;
  color: #FFFFFF !important;
  height: 42px;
`;

const Table = styled.table`
  border: 1px solid #DCDEDD;
  width: 100%;
  height: 42px;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Currency = styled.td`
  width: 42px;
  heigth: 42px;
  text-align: center;
  border: 1px solid #DCDEDD;
`;

const InputAmount = styled.input`
  border: none;
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #020621;
`;

const Backers = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #020621;
`;

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
      <Main key={element.id}>
        <PledgeMain>
          <TitleTwo>
            Pledge $
            {element.base_amount}
            {' '}
            or more
          </TitleTwo>
          <h3>
            {element.title}
          </h3>
          <p>
            {element.description}
          </p>
          <div>
            <PledgeDetails>
              <span>
                ESTIMATED DELIVERY
              </span>
              <br />
              <p>
                {moment(element.delivery_date).format('MMM YYYY')}
              </p>
            </PledgeDetails>
            <PledgeDetails>
              <span>
                SHIPS TO
              </span>
              <br />
              <p>
                {element.ships_to}
              </p>
            </PledgeDetails>
            <br />
            <Backers>
              {element.max_backers}
              {' '}
              backers
            </Backers>
          </div>
          <div>
            <Label>
              Shipping Destination
            </Label>
            <br />
            <CountrySelector />
          </div>
          <div>
            <Label>
              Pledge amount
            </Label>
            <Table>
              <tbody>
                <tr>
                  <Currency>
                    $
                  </Currency>
                  <td>
                    <form>
                      <InputAmount type="number" />
                    </form>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Button type="submit">
            Continue
          </Button>
        </PledgeMain>
      </Main>
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
