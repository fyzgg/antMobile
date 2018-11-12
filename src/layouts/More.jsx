import React,{ Component } from 'react';
import { Icon, Popover } from 'antd-mobile';

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const Item = Popover.Item;
class More extends Component {
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = () => {
    const visible = this.state.visible;
    console.log(visible)
  };
  renderOverlay = () => {
    return(
      [
        (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
        (<Item key="5" value="qcode" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
        (<Item key="6" value="help" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
          <span style={{ marginRight: 5 }}>Help</span>
        </Item>),
      ]
    )
  }
  render() {
    const { children } = this.props;
    const align = {
      overflow: { adjustY: 0, adjustX: 0 },
      offset: [-10, 0],
    };

    return (
      <Popover mask
        overlayClassName="fortest"
        overlayStyle={{ color: 'currentColor' }}
        visible={this.state.visible}
        overlay={this.renderOverlay()}
        align={align}
        onVisibleChange={this.handleVisibleChange}
        onSelect={this.onSelect}
      >
        <div>
          {children}
        </div>
      </Popover>
    )
  }
} 

export default More;