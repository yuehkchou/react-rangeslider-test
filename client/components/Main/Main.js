import React from 'react';
import { render } from 'react-dom';
import NavBar from '../NavBar/NavBar';
import InfoBar from '../Info/Info';
import ModalHelper from '../ModalHelper/ModalHelper'

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main">
        <NavBar/>
        <ModalHelper />
        <InfoBar/>
      </div>

    )
  };
}
export default Main;
