import React from 'react';

const Like = (props) => {
  let classes = 'fa-heart fa';
  classes += props.isLiked ? 's' : 'r';
  return <i className={classes} style={{ cursor: 'pointer' }} onClick={props.onLikeToggle}></i>;
};

export default Like;
