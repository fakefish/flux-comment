var React = require('react');
var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
  return {
    comments: CommentStore.getAll(),
  };
}

var Comments = React.createClass({

  onChange: function() {
    this.setState(getStateFromStore());
  },

  getInitialState: function() {
    return getStateFromStore();
  },

  commentDidMount: function() {
    CommentStore.addChangeListener(this.onChange);
  },

  commentWillUnmount: function() {
    CommentStore.removeChangeListener(this.onChange);
  },

  render: function() {
    return (
      <div className="comments">
      {this.state.comments.map(function(comment,index) {
        return (
          <div className="comment" key={'comment-' + index}>
            {comment.text}
          </div>
        );
      })}
      </div>
    );
  }

});

module.exports = Comments;
