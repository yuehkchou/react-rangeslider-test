import React from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import Calculate from '../calculate/Calculate';

class InfoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { value } = this.props;
    return (
      <div className="container">
        <Row className="show-grid" id="info-bar">
          <Col xs={6} md={4}>
            <h4>Monthly Payment: </h4>
            <h5>${(Calculate.getLoanAmountInfo( value ).monthly_payment.low).toLocaleString()} - {(Calculate.getLoanAmountInfo( value ).monthly_payment.high).toLocaleString()} </h5>
          </Col>
          <Col xs={6} md={4}>
            <h4>Fee at Origination: </h4>
            <h5>${(Calculate.getLoanAmountInfo( value ).origination_fee.low).toLocaleString()} - {(Calculate.getLoanAmountInfo( value ).origination_fee.high).toLocaleString()}</h5>
          </Col>
          <Col xs={6} md={4}>
            <h4>Fixed APR: </h4>
            <h5> 6.99% - 29.99%* </h5>
          </Col>
        </Row>
      </div>
    )
  };
}
export default InfoGrid;
