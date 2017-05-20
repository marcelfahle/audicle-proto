import React from 'react';
import Spinner from 'react-spinkit';
import styled from 'styled-components';
import moment from 'moment';
import classNames from 'classnames';
import 'moment-duration-format';

const PostWrapper = styled.div`
  position: relative;
  text-align: left;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid #aaa;

  &.generating {
    padding: 10px 20px 5px 20px;
    > .post__details { display: none; }
    > .post__status p { display: inline; }
    opacity: 0.7;
    .circle-wrapper {
     	width: 16px;
			height: 16px;
			position: relative;
			display: inline-block;
			margin-right: 10px;
			margin-bottom: -5px; 
    }

  }

  &.ready {
    cursor: pointer;
    &:hover {
      background-color: #F5F8FA;
      > .post__controls {
        display: block !important;
      }
    }
  }
`;

const PostTitle = styled.h5`
  display: inline-block;
	font-size: 17px;
  line-height: 23px;
  color: #333;
  font-weight: 400;
  max-width: 75%;
  margin: 0;
  margin-left: 24px;
  font-family: 'Open Sans', sans-serif;
`;

const PostControls = styled.div`
  position: absolute;
  display: none !important;
  top: 10px;
  right: 10px;
`;

const PostDuration = styled.p`
  position: absolute;
  text-align: right;
  top: 15px;
  right: 10px;
  color: #a7a7a7;
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
`;

const PostSource = styled.p`
  margin: 0;
  padding: 0;
  color: #a7a7a7;
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
  margin-left: 24px;

`;


const Post = ( { 
  id,
  title, 
  length, 
  author, 
  createdAt, 
  location, 
  handleClick, 
  handleRemove,
  status,
  duration = 0

} ) => {

  const postClasses = classNames({
    'generating': status === 'generating',
    'pt-interactive ready': status !== 'generating',
  });

  return(
    <PostWrapper 
      onClick={(e) => handleClick(location, title, e)} 
      className={`${postClasses}`}
    >
      <span className="status"></span>
      <PostTitle
        className="post__title"
      >
        {title}
      </PostTitle>
      
      {/*
      <PostControls className="pt-button-group pt-minimal post__controls">
        <a className="pt-button pt-icon-trash" 
          tabIndex="0" role="button"
          onClick={(e) => { e.stopPropagation(); if(confirm('Delete the Post?')) handleRemove( id ) }}
        ></a>
      </PostControls>
      */}


      <PostDuration>
        { (duration!==0)?  `${moment.duration(duration, 'seconds').format('mm:ss', { trim: false })}` : '' }
      </PostDuration>

      <PostSource>
        {author} - {moment(createdAt).fromNow()} 
        
      </PostSource>

      {
        (status === 'generating')?
          <div className="post__status"><Spinner spinnerName="circle" noFadeIn /><p>{ status }</p></div> :
          ''
      }

    </PostWrapper>
  )
};

export default Post;
