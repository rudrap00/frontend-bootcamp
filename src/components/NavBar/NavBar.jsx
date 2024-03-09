import { Outlet } from "react-router-dom";
import {
  IconDiv,
  NavBottomDiv,
  NavTopDiv,
  NavigationDiv,
  PagesDiv,
} from "./NavBar.style";
import { NavLinks } from "./NavLinks";

import { routes } from "../constants";

export const NavBar = () => {
  return (
    <>
      <NavigationDiv>
        <NavTopDiv>
          <IconDiv>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NS-DWb7NG9M6pY5VDbmCkPiUja90lR4tz7-JnXHGknUYUpr4MTDOccXbGqgCtflOknsh5RDmIlQ1KjGp~UaCzlgUB1z4tNxyk2wI65q49CC15ll0s-lUmSOKRKI2uHKh4xNypD8SPJb6Ur0Ld-yFMr3eRpeRftTYxMcngPcm5zYrDT~7ZRSJwD~OVoe--CRrtvtu7aOFe85wfAtvH0Jmwy~IfQReucLRHqSIl4~HXvyN4Scu7zStgM9DHlCgnpwtn~~sUwit7PIWoqdrkzASnpjJaDuAMSrtSPuQnFSKug3HoH-NBjMxfauxjZ64mQdyDcNDQ~xVsWkoCpbdzONaXg__"
                alt="Logo/Icon"
              />
            </div>
            <div>
              <div>Nishyan</div>
              <div>
                <a href=".">Visit Store</a>
              </div>
            </div>
            <div>
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </IconDiv>
          <PagesDiv>
            {routes.map((route) => (
              <NavLinks key={route} route={route} />
            ))}
          </PagesDiv>
        </NavTopDiv>
        <NavBottomDiv>
          <div className="wrapper">
            <div className="bottom-icon">
              <span className="material-symbols-outlined">
                account_balance_wallet
              </span>
            </div>
            <div className="credit">
              <div>Available Credits</div>
              <div>222.10</div>
            </div>
          </div>
        </NavBottomDiv>
      </NavigationDiv>
      <Outlet />
    </>
  );
};
