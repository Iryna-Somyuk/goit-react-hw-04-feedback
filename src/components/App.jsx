import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { ConteinerFeedback, FeedbackBtn } from './App.styled';

export class App extends Component {
  static defaultProps = {
    total: 0,
    positivePercentage: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  counterTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  counterPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.counterTotalFeedback();
    return (good * 100) / totalFeedback;
  };

  render() {
    return (
      <ConteinerFeedback>
        <Section title="Please leave feedback">
        <FeedbackBtn>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.counterFeedback}
          />
            </FeedbackBtn>
        </Section>
        <Section title="Statistics">
          {this.counterTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.counterTotalFeedback()}
              positivePercentage={this.counterPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </ConteinerFeedback>
    );
  }
}
