import React, { Component, Fragment } from "react"; 
import { CSSTransition, TransitionGroup } from "react-transition-group"; 

class ReactTransition extends Component { 
  constructor(props) { 
    super(props); 
    this.state = {
      list: [] 
    }; 
    this.handleAddItem = this.handleAddItem.bind(this); 
  } 
  render() { return ( <Fragment>
    <button onClick={this.handleAddItem}>Toggle</button>
      <TransitionGroup>
        {this.state.list.map((item, index) => {
          return (
            <CSSTransition
                timeout={1000}
                classNames="fade" 
                unmountOnExit 
                onEntered={el => {
                  //这个属性可以给动画播放完毕后的组件执行一次js函数
                  el.style.color = "blue";
                }}
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </Fragment>
    );
  }
  handleAddItem() {
    this.setState(prevState => {
      return {
        list: [...prevState.list, "item"]
      };
    });
  }
}

export default ReactTransition;
