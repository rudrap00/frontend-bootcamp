import styled from "styled-components";

export const Header = styled.div`
  flex-grow: 1;
  width: auto;
  height: 3.5rem;
  display: flex;
  padding: 0.5rem 1.6rem;
  gap: 1rem;
  border: 1px solid #d9d9d9;
  align-items: center;
`;

export const HeadDiv = styled.div`
  height: 1.4rem;
  width: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

export const HeadingDiv = styled.div`
  height: 100%;
  width: auto;
`;

export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  height: 1rem;
  width: auto;
  gap: 0.4rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.35rem;
    font-size: 0.85rem;
    border: none;
    outline: none;
    font-weight: 400;
  }

  span {
    font-size: 0.75rem;
    color: #4d4d4d;
  }
`;

export const SearchDiv = styled.div`
  height: 2.5rem;
  width: auto;
  padding: 0.5rem 1rem;
  display: flex;
  gap: 0.5rem;
  border-radius: 0.375rem;
  background-color: #f2f2f2;
  flex: 1.05;
  justify-self: center;

  input {
    flex-grow: 1;
    height: 1.35rem;
    width: auto;
    font-size: 0.9rem;
    border: none;
    background-color: #f2f2f2;
    outline: none;
  }
`;

export const MenuDiv = styled.div`
  height: 2.5rem;
  width: auto;
  flex: 0.6;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;

  div {
    height: 2.25rem;
    width: 2.25rem;
    background-color: #e6e6e6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-weight: 900;
      color: #4d4d4d;
    }
  }

  :nth-child(1) {
    span {
      font-size: 2rem;
    }
  }
`;
