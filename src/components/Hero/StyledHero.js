import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
  position: relative;

  @media (max-width: 768px) {
    height: 200px;
    padding: 2em;
  }
`;

export const Title = styled.p`
  color: #002eff;
  font-size: 56px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const BoldTitle = styled.span`
  font-weight: 600;
`;

export const Image = styled.img`
  position: relative;
  margin-top: 40px;

  @media (max-width: 768px) {
  width: 55%;
`;

export const Divisor = styled.div`
  position: absolute;
  bottom: 42px;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #cccccc;

  @media (max-width: 768px) {
    display: none;
  }
`;
