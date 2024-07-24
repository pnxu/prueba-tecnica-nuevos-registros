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

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.9;
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  padding: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;

export const TableIcon = styled.i`
  display: flex;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const TableCounter = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 16px;
`;

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
`;
