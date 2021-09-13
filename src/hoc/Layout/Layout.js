import React from 'react';
import style from './Layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';


class Layout extends React.Component {

  state = {
    menu: false,
  };

  toggleHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  closeMenuHandler = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    return (
      <div className={style['Layout']}>
        <Drawer
          isOpen={this.state.menu}
          closeMenuHandler={this.closeMenuHandler}
        />
        <MenuToggle
          onToggle={this.toggleHandler}
          isOpen={this.state.menu}
        />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;