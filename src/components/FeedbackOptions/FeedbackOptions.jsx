import React from 'react';
import { nanoid } from 'nanoid';
import { BtnWrapper, StyledBtn } from '../Feedback/Feedback.styled';

export class FeedbackOptions extends React.Component {
  render() {
    return (
      //   <BtnWrapper>
      //     {this.props.options.map(el => (
      //       <StyledBtn
      //         key={nanoid}
      //         name={el.name}
      //         onClick={this.props.onLeaveFeedback}
      //       >
      //         {el}
      //       </StyledBtn>
      //     ))}
      //   </BtnWrapper>
      <BtnWrapper>
        <StyledBtn
          key={nanoid()}
          name="good"
          onClick={this.props.onLeaveFeedback}
        >
          Good
        </StyledBtn>
        <StyledBtn
          key={nanoid()}
          name="neutral"
          onClick={this.props.onLeaveFeedback}
        >
          Neutral
        </StyledBtn>
        <StyledBtn
          key={nanoid()}
          name="bad"
          onClick={this.props.onLeaveFeedback}
        >
          Bad
        </StyledBtn>
      </BtnWrapper>
    );
  }
}
