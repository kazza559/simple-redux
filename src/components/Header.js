import React from "react";
import {connect} from 'react-redux';


class Header extends React.Component {

  render() {
    const { users, userId } = this.props;
    const user = users.find(user => user.id === userId)
    if (!user) {
      return null;
    }
    return (
      <div>
        <span className="text-info">Header name</span>: {user.name}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {users: state.users}
}
export default connect(mapStateToProps)(Header);
