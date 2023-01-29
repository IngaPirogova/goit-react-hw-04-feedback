import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div className={css.feedback__notification}>
      {<h3>{message}</h3>}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
