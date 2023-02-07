import PropTypes from 'prop-types';
import { ListStatistics, ItemList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ListStatistics>
      <ItemList>Good: {good}</ItemList>
      <ItemList>Neutral: {neutral}</ItemList>
      <ItemList>Bad: {bad}</ItemList>
      <ItemList>Total: {total}</ItemList>
      <ItemList>
        Positive feedback:{' '}
        {positivePercentage ? Math.round(positivePercentage) : 0} %
      </ItemList>
    </ListStatistics>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
