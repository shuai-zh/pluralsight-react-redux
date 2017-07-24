import React, { Component } from "react";
import PropTypes from "prop-types";

class LoadingDots extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      frame: 1
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          frame: this.state.frame + 1
        }),
      this.props.interval
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = "";
    while (dots > 0) {
      text += ".";
      dots--;
    }
    return (
      <span>
        {text}&nbsp;
      </span>
    );
  }
}

LoadingDots.propTypes = {
  dots: PropTypes.number,
  interval: PropTypes.number
};

LoadingDots.defaultProps = {
  dots: 3,
  interval: 300
};

export default LoadingDots;
