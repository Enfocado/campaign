import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import Pledge from './pledge';

const MainOne = styled.div`
  border: 1px solid #DCDEDD;
  margin-bottom: 20px;
`;

const FreePledge = styled.div`
  background: none;
  position: relative;
  z-index: 1;
  margin: 0 20px;
  padding: 20px 0;
  border-radius: 0;
`;

const FreePledgeTitle = styled.h2`
  margin: 0 0 0 0px;
  font-weight: 400;
  font-size: 18px;
`;

const Amount = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
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

const PledgeButton = styled.button`
  margin-top: 0;
  width: 100%;
  padding: 0 20px;
  background-color: #009E74;
  color: #FFFFFF !important;
  height: 42px;
`;

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
        <MainOne>
          <FreePledge>
            <FreePledgeTitle>
              Make a pledge without a reward
            </FreePledgeTitle>
          </FreePledge>
          <Amount>
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
            <PledgeButton type="submit">
              Continue
            </PledgeButton>
          </Amount>
        </MainOne>
        {pledges.map(pledge => (
          <Pledge pledge={pledge} key={pledge.id} />
        ))}
      </div>
    );
  }
}

export default Pledges;
