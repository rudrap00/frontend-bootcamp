import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  width: auto;
  height: 2rem;
  color: #ffffff;
  opacity: 80%;
  border-radius: 0.25rem;

  &:hover {
    opacity: 100%;
    background-color: #ffffff11;
  }

  &.active {
    opacity: 100%;
    background-color: #ffffff1a;
  }
`;

export const NavLinkDiv = styled.div`
  padding: 0.25rem 0.8rem;
  height: 2rem;
  width: 100%;
  color: white;
  font-size: 0.9rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 0.25rem;
  align-items: center;
  font-weight: 500;
  line-height: 1.25rem;

  div > span {
    height: 1.25rem;
    width: 1.25rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }
`;
