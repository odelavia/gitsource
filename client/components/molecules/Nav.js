import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../../queries/CurrentUser';
import mutation from '../../mutations/Logout';

class Nav extends Component {
  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return <div />;
    } else if (user) {
      return <a onClick={this.onLogoutClick.bind(this)}>Logout</a>;
    } else {
      return (
        <div>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
        </div>
      );
    }
  }

  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  render() {
    console.log(this.props.data);
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo left'>
            GitSource
          </Link>
          <ul className='right'>
          {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(Nav)
);