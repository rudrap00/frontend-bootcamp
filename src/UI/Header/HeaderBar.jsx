import {
  HeadDiv,
  Header,
  HeadingDiv,
  InfoDiv,
  MenuDiv,
  SearchDiv,
} from "./HeaderBar.style";

export const HeaderBar = ({ page }) => {
  return (
    <>
      <Header>
        <HeadDiv>
          <HeadingDiv>{page}</HeadingDiv>
          <InfoDiv>
            <span className="material-symbols-outlined">help</span>
            <p>How it works</p>
          </InfoDiv>
        </HeadDiv>
        <SearchDiv>
          <input
            disabled={true}
            type="text"
            placeholder="Search features, tutorials, etc."
          />
        </SearchDiv>
        <MenuDiv>
          <div>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <div>
            <span className="material-symbols-outlined">sms</span>
          </div>
        </MenuDiv>
      </Header>
    </>
  );
};
