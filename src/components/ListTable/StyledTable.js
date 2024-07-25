import styled from "styled-components";

export const TableSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: ##191919;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #191919;
  margin-top: 20px;
`;

export const TableContainer = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableHeader = styled.th`
  padding: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.9;
  border-bottom: 1px solid #ddd;
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  padding: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  border-bottom: 1px solid #ddd;
  line-height: 2;
  color: ##191919;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const TableCounter = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 16px;
  color: #000;
  margin-bottom: 50px;
`;
