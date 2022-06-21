import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
`;

export const GenreArticle = styled.article`
  width: 76%;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (max-width: 1409px) {
    margin-top: 60px;
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 60px;
    width: 90%;
    align-items: flex-start;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 1400px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  width: 198px;
  height: 84px;
  font-weight: 700;
  font-size: 56px;
  line-height: 84px;
  @media screen and (max-width: 1400px) {
    width: 49px;
    height: 20px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-left: 40px;
  }
`;

export const Kinds = styled.div`
  width: 100%;
  height: 46px;
  margin-top: 30px;
  margin-left: 36px;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 1400px) {
    width: 80%;
    height: 40px;
    margin-top: 0;
    margin-left: 50px;
  }
`;

export const ArrowDiv = styled.div`
  padding-top: 10px;
  cursor: pointer;
`;

export const Kpop = styled.div`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  margin-top: 2px;
  cursor: pointer;
  @media screen and (max-width: 1400px) {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const Pop = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  cursor: pointer;
  @media screen and (max-width: 1400px) {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const Hiphop = styled(Pop)``;

export const Electronic = styled(Pop)``;

export const Classical = styled(Pop)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Add = styled.div`
  width: 40px;
  font-weight: 400;
  font-size: 56px;
  color: #000000;
  cursor: pointer;
  @media screen and (max-width: 1400px) {
    width: 20px;
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 45px;
    height: 45px;
    left: 645px;
    top: 1280px;
    padding: 0 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    color: #ffffff;
    border-radius: 50%;
    background: #545454;
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
  }
`;

export const MusicList = styled.div`
  width: 100%;
  margin-top: 56px;
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 30px;
  display: inline-grid;
  grid-template-columns: 5% 35% 40% 10% 10%;
  @media screen and (max-width: 1400px) {
    grid-template-columns: 5% 42% 33% 12% 10%;
  }
`;

export const ListName = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #4a4a4a;
  @media screen and (max-width: 1400px) {
    font-size: 18px;
  }
`;

export const Divide = styled.div`
  width: 100%;
  margin-top: 15px;
  border: 1px solid #bbbbbb;
`;

export const ListBody = styled.div`
  width: 100%;
  margin-top: 20px;
  display: inline-grid;
  grid-template-columns: 5% 8% 25% 40% 10% 10%;
  @media screen and (max-width: 1400px) {
    grid-template-columns: 5% 15% 25% 35% 8% 8%;
  }
`;

export const ListNumber = styled.div`
  width: 10px;
  height: 30px;
  margin-top: 15px;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #1e1e1e;
`;

export const MusicImage = styled.div`
  width: 84px;
  height: 80px;
  border-radius: 5px;
`;

export const MusicInfo = styled.div`
  width: 178px;
  height: 58px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const MusicTitle = styled.div`
  width: 300px;
  height: 30px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #1e1e1e;
  @media screen and (max-width: 1400px) {
    font-size: 18px;
  }
`;

export const Singer = styled.div`
  margin-top: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 275;
  font-size: 16px;
  line-height: 24px;
  color: #1e1e1e;
`;

export const Date = styled.div`
  margin-top: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #6f6f6f;
`;

export const Share = styled.div`
  display: flex;
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
`;

export const Like = styled.div`
  height: 102px;
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;

export const Cursor = styled.div`
  cursor: pointer;
`;

export const LikeCount = styled.div`
  width: 30px;
  height: 35px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  color: #6f6f6f;
`;

export const Div = styled.div`
  postion: relative;
  width: 100%;
  display: flex;
`;

export const DialogBox = styled.dialog`
  postion: absolute;
  top: 300px;
  left: 50px;
  width: 800px;
  height: 460px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

export const PlusDialogBox = styled.dialog`
  postion: absolute;
  top: 300px;
  left: 50px;
  width: 470px;
  height: 435px;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;
export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const DialogButton = styled.button`
  width: 50px;
  height: 48px;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const LMuiscImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 5px;
`;

export const LinkDiv = styled.div`
  width: 400px;
  height: 400px;
  margin-left: 40px;
`;

export const Listen = styled.div`
  width: 84px;
  height: 28px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;

export const share = styled.div`
  width: 50px;
  height: 28px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;

export const PageLink = styled.div`
  width: 78px;
  height: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const LinkSite = styled.div`
  width: 284px;
  height: 120px;
  margin-top: 14px;
  display: flex;
  gap: 60px;
`;

export const Tie = styled.div`
  width: 60px;
  height: 96px;
`;

export const YouCircle = styled.div`
  width: 60px;
  height: 60px;
  padding-top: 20px;
  border-radius: 50%;
  background: #f7f7f7;
  cursor: pointer;
`;

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  padding-top: 12px;
  border-radius: 50%;
  background: #f7f7f7;
  cursor: pointer;
`;

export const LinkName = styled.div`
  width: 74px;
  height: 18px;
  margin-top: 20px;
  margin-left: -5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
`;

export const LinkNames = styled(LinkName)`
  margin-top: 15px;
`;

export const LinkNames2 = styled(LinkName)`
  margin-top: 24px;
`;

export const LinkAddress = styled.div`
  width: 264px;
  height: 34px;
  display: flex;
  justify-content: space-between;
  padding: 6px 13px;
  margin-top: 16px;
  background: #f8f9fa;
  border-radius: 5px;
`;

export const Address = styled.div`
  width: 40px;
  height: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
`;

export const Recommend = styled.div`
  width: 305px;
  height: 32px;
  margin-left: 65px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;

export const SmallTitle = styled.div`
  width: 60px;
  height: 32px;
  margin-top: 48px;
  margin-left: 30px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const Input = styled.input`
  width: 390px;
  height: 45px;
  margin-left: 20px;
  padding-left: 18px;
  border: none;
  background: #f4f4f4;
  border-radius: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
`;

export const Confirm = styled.button`
  width: 75px;
  height: 35px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: 30px;
  background: #000000;
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;
