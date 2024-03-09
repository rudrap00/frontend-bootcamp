import styled from "styled-components";

export const NavigationDiv = styled.div`
  position: relative;
  max-width: 12.5rem;
  min-width: 12rem;
  height: 100vh;
  background-color: #1e2640;
  color: #d2d4d9;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  flex-grow: 1;
`;

export const NavTopDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 95%;
`;

export const IconDiv = styled.div`
  height: 2.5rem;
  width: 92%;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  :nth-child(1) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.25rem;
    }
  }

  :nth-child(2) {
    display: flex;
    flex-direction: column;
    height: 2.5rem;
    flex-grow: 1;
    gap: 0.25rem;

    :nth-child(1) {
      width: auto;
      font-size: 0.9rem;
      font-weight: 500;
      color: #ffffff;
    }

    :nth-child(2) > a {
      pointer-events: none;
      width: auto;
      font-size: 0.8rem;
      font-weight: 400;
      opacity: 80%;
      color: #ffffff;
    }
  }

  :nth-child(3) {
    width: 1.25rem;
    height: 1.25rem;
    justify-self: end;

    span {
      color: #ffffff;
      width: 1rem;
      height: auto;
    }
  }
`;

export const PagesDiv = styled.div`
  display: grid;
  gap: 0.25rem;
  width: 100%;
`;

export const NavBottomDiv = styled.div`
  background-color: #353c53;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  width: 90%;
  margin-top: auto;

  .wrapper {
    display: flex;
    gap: 0.6rem;
    align-items: center;

    .bottom-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      width: 2rem;
      background-color: #ffffff1a;
      border-radius: 0.25rem;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.25rem;
        width: 1.5rem;
        font-size: 1.5rem;
        font-weight: 500;
        align-self: center;
        justify-self: center;
        color: #ffffff;
      }
    }

    .credit {
      display: grid;
      gap: 0.1rem;
      width: 100%;
      margin: auto;

      :nth-child(1) {
        font-size: 0.8rem;
        font-weight: 400;
        opacity: 80%;
        line-height: 1rem;
        color: #ffffff;
      }

      :nth-child(2) {
        font-size: 1rem;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }
`;