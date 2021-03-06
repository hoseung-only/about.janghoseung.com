import React from "react";
import styled from "styled-components";

import { IExperience } from "../../interfaces/section/Experience";
import { ExperienceCardList } from "./ExperienceCardList";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";
import { TransitionContainer } from "../Layout/TransitionContainer";

export const ExperienceSection: React.FC<{
  experiences: IExperience[];
}> = ({ experiences }) => {
  return (
    <Container>
      <div className="summary">
        <TransitionContainer
          className="topic"
          effect="fadeInDown"
          translateY={50}
          duration={0.2}
          intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
        >
          EXPERIENCE
        </TransitionContainer>
        <TransitionContainer
          className="title"
          effect="fadeInDown"
          delay={0.2}
          translateY={50}
          duration={0.2}
          intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
        >
          저는 이런 경험을 쌓아왔습니다.
        </TransitionContainer>
      </div>
      <ExperienceCardList experiences={experiences} />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;

  padding: 200px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  > .summary {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 30px;

    > .topic {
      width: fit-content;

      margin-bottom: 20px;

      font-weight: 700;
      color: ${Color.DarkMint};
    }

    > .title {
      font-size: 1.35rem;
      font-weight: 700;
      color: ${Color.Black};
      word-break: keep-all;
    }
  }

  @media (max-width: ${Device.Tablet}px) {
    align-items: flex-start;

    padding: 150px 0;
    margin-left: 30%;

    > .summary {
      align-items: flex-start;
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    align-items: flex-start;

    padding: 100px 0;
    margin-left: 8%;

    > .summary {
      align-items: flex-start;
    }
  }
`;
