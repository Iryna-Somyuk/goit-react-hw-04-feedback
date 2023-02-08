import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { ConteinerFeedback, FeedbackBtn } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = { good, neutral, bad };

  const counterFeedback = options => {
    if (options === 'good') {
      setGood(prevState => prevState + 1);
    } else if (options === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else if (options === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const counterTotalFeedback = () => {
    return good + neutral + bad;
  };

  const counterPositiveFeedbackPercentage = () => {
    const totalFeedback = counterTotalFeedback();
    return (good * 100) / totalFeedback;
  };

  return (
    <ConteinerFeedback>
      <Section title="Please leave feedback">
        <FeedbackBtn>
          <FeedbackOptions
            options={Object.keys(option)}
            onLeaveFeedback={counterFeedback}
          />
        </FeedbackBtn>
      </Section>
      <Section title="Statistics">
        {counterTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={counterTotalFeedback()}
            positivePercentage={counterPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </ConteinerFeedback>
  );
};
