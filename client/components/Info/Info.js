import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Slider from 'react-rangeslider';
import InfoGrid from './InfoGrid'

class InfoBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 3000
    };
  }
  toggle() {
    this.setState({ show: !this.state.show });
  }
  componentDidMount(){
    const slider = document.getElementById('rangeslider');
    const childNode = document.createElement("div");
    slider.appendChild(childNode)
    childNode.setAttribute('id', 'slidervalue')
    slidervalue.innerHTML = '$' + this.state.value;

  }
  componentDidUpdate(){
    slidervalue.innerHTML = '$' + this.state.value;
  }

  handleChange = ( value ) => {
    this.setState({
      value: value
    });
  }

  render() {
    let { value } = this.state;
    let min = 3000
    let max = 35000

    return (
        <div className="bar-slider">
          <div className="container">
            <Slider
              min={min}
              max={max}
              value={value}
              onChange={this.handleChange}
              />
            <div ref="target" id="slider-range">
              <a id="min">${min}</a> <a id="max">${max}</a>
            </div>
            <br/>
            <br/>
            {/* <div id="value">Value: ${value.toLocaleString()}</div> */}

          </div>

          <InfoGrid value={this.state.value}/>
      </div>
    )
  };
}
export default InfoBar;
