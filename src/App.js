import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import QuizList from './containers/QuizList/QuizList';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import Auth from './containers/Auth/Auth';
import Logout from './components/Logout/Logout';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { autoLogin } from './redux/actions/auth';

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  };

  render() {
    let routes =
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" exact component={QuizList} />
      </Switch>

    if (this.props.isAuthenticate) {
      routes =
        <Switch>
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" exact component={QuizList} />
          <Route path="/logout" component={Logout} />
          <Redirect to='/' />
        </Switch>
    };
    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
};

function mapStateToProps(state) {
  return {
    isAuthenticate: !!state.auth.token,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
