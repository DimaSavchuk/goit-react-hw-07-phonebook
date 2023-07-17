import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 0px;
`;

export const Item = styled.li`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding-left: 0px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const Data = styled.p`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 12px;
  background-color: #af4c4c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
