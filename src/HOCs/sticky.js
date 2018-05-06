import React, { PureComponent } from 'react';

const sticky = WrappedComponent => {
  class StickyView extends PureComponent {
    state = {
      sticky: false
    };

    componentDidMount() {
      window.addEventListener("scroll", this.onScroll, false);
    };

    componentWillUnmount() {
      window.removeEventListener("scroll", this.onScroll, false);
    };

    onScroll = () => {
      if (window.scrollY > 1 && !this.state.sticky) {
        this.setState({ sticky: true });
      } else if (window.scrollY <= 0 && this.state.sticky) {
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
