import React from "react";
import {connect} from 'react-redux';


class Header extends React.Component {

  render() {
    const { user } = this.props;
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

const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.userId)}
}
export default connect(mapStateToProps)(Header);
