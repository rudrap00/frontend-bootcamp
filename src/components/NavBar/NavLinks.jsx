import { useIcon } from "../../hooks/useIcon";
import { NavLinkDiv, StyledLink } from "./NavLinks.style";

export const NavLinks = ({ route }) => {
  const icon = useIcon(route);

  return (
    <>
      <StyledLink
        className={(isActive) => (isActive ? "active" : "")}
        to={route === "Home" ? "" : route}
      >
        <NavLinkDiv>
          <div>
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          {route}
        </NavLinkDiv>
      </StyledLink>
    </>
  );
};
