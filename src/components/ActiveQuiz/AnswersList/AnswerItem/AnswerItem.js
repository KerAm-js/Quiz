import React from 'react';
import style from './AnswerItem.module.css'

const AnswerItem = props => {
  let classes = [style.AnswerItem];

  if (props.state !== null) {
    classes.push(style[props.state]);
  };

  return (
    <li
      className={classes.join(' ')}
      onClick={() => { props.onAnswerClick(props.answer.id) }}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;