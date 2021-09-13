import React from 'react';
import classes from './Drawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Drawer extends React.Component {
  clickHandler = () => {
    this.props.closeMenuHandler()
  };

  render() {
    let links = [
      { to: '/', label: 'Список', exact: true },
      { to: '/auth', label: 'Авторизация', exact: true },
    ];

    if (this.props.isAuthenticate) {
      links = [
        { to: '/quiz-creator', label: 'Создать тест', exact: true },
        { to: '/', label: 'Список', exact: true },
        { to: '/logout', label: 'Выйти', exact: true },
      ];
    };

    let cls = [
      classes['Drawer'],
    ];

    if (!this.props.isOpen) {
      cls.push(classes['close']);
    };

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {
              links.map((link, index) => {
                return (
                  <li key={index} >
                    <NavLink
                      to={link.to}
                      exact={link.exact}
                      onClick={this.clickHandler}
                      activeClassName={classes['active']}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </nav>
        {this.props.isOpen
          ? <Backdrop onClick={this.props.closeMenuHandler} />
          : null
        }
      </React.Fragment>
    );
  };
};

function mapStateToProps(state) {
  return {
    isAuthenticate: !!state.auth.token,
  };
};

export default connect(mapStateToProps)(Drawer);