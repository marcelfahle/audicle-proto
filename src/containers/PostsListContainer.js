import { connect } from 'react-redux';
import { getPostsByUser } from './../store/posts/actions';
import PostsList from './../PostsList.js';


const mapStateToProps = (state) => {
  return {
    postsList: state.posts.postsList,
    userId: state.user.user.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsByUser: (userId) => dispatch( getPostsByUser( userId ) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
