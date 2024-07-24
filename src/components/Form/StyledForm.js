import styled from "styled-components";

export const FormSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  max-width: 900px;
  width: 100%;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${(props) => (props.size === "large" ? "30px" : "20px")};
  font-weight: 600;
  color: black;
  

  @media (max-width: 768px) {
    margin-top: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #191919;
  margin-top: 20px;
`;

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
  align-items: center;
  margin-top: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const FormInput = styled.input`
  padding: 15px;
  margin: 15px 10px;
  border-radius: 5px;
  border: 2px solid #002eff;
  font-size: 16px;
  outline: none;
  transition: 0.3s;
  width: ${(props) => (props.size === "large" ? "540px" : "255px")};

  &:focus {
    border-color: #002eff;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background-color: #cccccc;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  padding: 12px 16px 12px 16px;
  background-color: #002eff;
  width: 140px;
  color: #fff;
  border: none;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  margin-bottom: 100px;

  &:hover {
    background-color: #001f5b;
  }

  @media (max-width: 768px) {
    width: 60%;
  }
`;
