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
  > h3 {
    margin: 0 0 0 0px;
    font-weight: 400;
    font-size: 18px;
  }
  > p {
    font-size: 14px;
    line-height: 18px;
  }
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
  > span {
    color: #656969;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.5epx;
  }
  > p {
    font-size: 14px;
    margin: 0;
  }
`;

const Button = styled.button`
  margin-top: 0;
  width: 100%;
  padding: 0 20px;
  background-color: #009E74;
  color: #FFFFFF !important;
  height: 42px;
  cursor: pointer;
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

const Hover = styled.div`
  display: block;
  background: rgba(0,158,116);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  cursor: pointer;
  > div {
    > p {
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
      padding: 0;
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Container = styled.div`
  position: relative;
  &:hover {
    > #hove {
      opacity: 0.9;
    }
  }
`;

class Pledge extends React.Component {
  constructor(props) {
    super(props);
    const { pledge } = this.props;
    this.state = {
      element: pledge,
      selected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      selected: true,
    });
  }

  render() {
    const { element } = this.state;
    const { selected } = this.state;
    return (
      <Container>
        {selected === false && (
          <Hover id="hove" onClick={this.handleClick}>
            <div>
              <p>
                Select this reward
              </p>
            </div>
          </Hover>
        )}
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
            {selected === true && (
              <div>
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
              </div>
            )}
          </PledgeMain>
        </Main>
      </Container>
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
