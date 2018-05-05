import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom';

const sticky = WrappedComponent => {
  class StickyView extends PureComponent {
    state = {
      sticky: false
    };

    componentDidMount() {
      this.nodeViewHeight = ReactDOM.findDOMNode(this).clientHeight / 2;
      window.addEventListener("scroll", this.onScroll, false);
    };

    componentWillUnmount() {
      window.removeEventListener("scroll", this.onScroll, false);
    };

    onScroll = () => {
      if (window.scrollY >= this.nodeViewHeight && !this.state.sticky) {
        this.setState({ sticky: true });
      } else if (window.scrollY < this.nodeViewHeight && this.state.sticky) {
        this.setState({ sticky: false });
      }
    };

    render() {
      return (
        <WrappedComponent {...this.props} {...this.state}/>
      )
    }
  }

  return StickyView;
};

export default sticky;
