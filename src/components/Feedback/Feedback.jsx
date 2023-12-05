// import React from 'react';
// import { nanoid } from 'nanoid';

// import { BtnWrapper, StyledBtn } from './Feedback.styled';

// export class UserFeedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onBtnClick = e => {
//     const name = e.target.name;

//     switch (name) {
//       case 'good':
//         this.setState(prevState => ({ good: this.state.good + 1 }));
//         break;
//       case 'neutral':
//         this.setState(prevState => ({ neutral: this.state.neutral + 1 }));
//         break;
//       case 'bad':
//         this.setState(prevState => ({ bad: this.state.bad + 1 }));
//         break;
//       default:
//     }
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     if (this.countTotalFeedback() === 0) {
//       return 0;
//     }
//     const percent = (this.state.good / this.countTotalFeedback()) * 100;
//     return percent.toFixed(0) + '%';
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedbackPerc = this.countPositiveFeedbackPercentage();

//     return (
//       <section>
//         <div>
//           <h1>Please leave feedback</h1>
//           <BtnWrapper>
//             <StyledBtn key={nanoid()} name="good" onClick={this.onBtnClick}>
//               Good
//             </StyledBtn>
//             <StyledBtn key={nanoid()} name="neutral" onClick={this.onBtnClick}>
//               Neutral
//             </StyledBtn>
//             <StyledBtn key={nanoid()} name="bad" onClick={this.onBtnClick}>
//               Bad
//             </StyledBtn>
//           </BtnWrapper>
//         </div>
//         <div>
//           <h1>Statistics</h1>
//           <p>Good: {good}</p>
//           <p>Neutral: {neutral}</p>
//           <p>Bad: {bad}</p>
//           <p>Total: {totalFeedback}</p>
//           <p>Positive feedback: {positiveFeedbackPerc}</p>
//         </div>
//       </section>
//     );
//   }
// }
