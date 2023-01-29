import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <ul className={css.statistics__list}>
      <li className={css.statistics__item}>
        Good: <span>{good}</span>
      </li>
      <li className={css.statistics__item}>
        Neutral: <span> {neutral} </span>{' '}
      </li>
      <li className={css.statistics__item}>
        Bad:<span> {bad} </span>{' '}
      </li>
      <li className={css.statistics__item}>
        Total: <span> {total} </span>{' '}
      </li>
      <li className={css.statistics__item}>
        Positive feedback:<span> {positivePercentage}% </span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
