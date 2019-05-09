import React, { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";

import { fetchPostsAndUsers } from '../actions';
import Header from "./Header";

class List extends Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList = () => {
    return this.props.list.map(item => {
      return (
        <div className="media mb-2 border-bottom" key={item.id}>
          <div className=".d-flex align-items-center mr-1">
            <i className="fas fa-user-secret" />
          </div>
          <div className="media-body">
            <div className="mt-0 mb-1">
              {" "}
              <span className="text-primary">Title</span>: {item.title}
            </div>
            <div className="mb-1">
              <span className="text-primary">Content</span>: {item.body}
            </div>
            <Header userId={item.userId} />
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="container">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { list: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts, fetchPostsAndUsers }
)(List);
