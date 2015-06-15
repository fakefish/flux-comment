var React = require('react');

var Comments = require('./views/comments');
var CommentForm = require('./views/comment-form');

var App = React.createClass({

  render: function() {
    return (
      <Comments />
      <CommentForm />
    );
  }
});

React.render(<App />, document.getElementById('app'));
