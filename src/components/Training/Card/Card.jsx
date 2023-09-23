import React from 'react';
import Choice from '../Choice/Choice';
import styles from "./Card.module.css";

const Card = ({ word }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Header}>
        <div className={styles.word}>{word.value}</div>
        <div className={styles.transcript}>{word.transcript}</div>
      </div>
      <div className={styles.Content}>
        <div>{word.description}</div>
        <i>{word.synonims}</i>
      </div>
      <div className={styles.Footer}>
        <Choice options={word.options} />
      </div>
    </div>
  )
}

export default Card