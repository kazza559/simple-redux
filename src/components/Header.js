import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class Header extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.userId);
  }
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div>
        <span className="text-info">Header name</span>: {this.props.user.name}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Header);
