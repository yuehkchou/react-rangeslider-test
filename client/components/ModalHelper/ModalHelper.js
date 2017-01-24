import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Button, Modal, Overlay, Tooltip } from 'react-bootstrap';

class ModalHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    let close = () => this.setState({show: false});
    const sharedProps = {
      show: this.state.show,
      container: this,
      target: () => ReactDOM.findDOMNode(this.refs.target)
    };
    return (
      <div className="container" style={{height: 200}}>
        <Button
          bsStyle="primary"
          bsSize="sm"
          onClick={() => this.setState({ show: true})}
        >
          Help
        </Button>
        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Helper Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Slide the Scrollbar to adjust the Monthly Payment and Origination Fee rate!
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
export default ModalHelper;
