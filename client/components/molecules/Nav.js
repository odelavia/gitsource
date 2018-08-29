import React, { Component } from 'react';
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
      return <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>;
    } else {
      return (
        <div>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
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