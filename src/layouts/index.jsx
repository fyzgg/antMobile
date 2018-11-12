import React,{ Component } from 'react';
import { NavBar, Icon, Popover } from 'antd-mobile';
import withRouter from 'umi/withRouter';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from './index.css';
import More from './More';

/*function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      { props.children }
    </div>
  );
}*/

class BasicLayout extends Component {
  leftClickHandler = () => {
    console.log('onLeftClick');
  }

  renderRightContent = () => {
    return (
      [
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <More  key="1"> <Icon type="ellipsis" /></More>,
      ]
    )
  }
  render() {
    const { children, location } = this.props;
    console.log(this.props)
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.leftClickHandler}
          rightContent={this.renderRightContent()}
        >
          NavBar
        </NavBar>
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="fade" timeout={3000}>
            { children }
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}
export default BasicLayout;
