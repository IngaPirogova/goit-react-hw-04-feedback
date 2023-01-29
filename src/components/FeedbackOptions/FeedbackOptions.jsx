import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arr = Object.keys(options);

  return (
    <ul className={css.options__list}>
      {arr.map(option => (
        <li key={option}>
          <button
            type="button"
            name={option}
            className={css.options__btn}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
