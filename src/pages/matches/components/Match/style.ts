import styled from "styled-components";

export const Match = styled.a`
  margin: 25px 30px 15px 0px;

  width: 403px;
  height: 110px;

  display: flex;
  align-items: center;

  border: 1px solid #BBB2B2;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #f8f8f8;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    border: 1px solid #C9981A;
    box-shadow: none;
  }
`

export const MatchInfos = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 12px;
`

export const TeamsTest = styled.div`
  display: flex;
  align-items: center;
  width: 272px; 
`

export const TeamsLogos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin: 5px 0;
    width: 19px;
    height: 19px;
    margin-right: 12px;
  }
`

export const TeamsNames = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    margin: 5px 0;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 600;
  }
`

export const TeamsScores = styled.div`
  width: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
      margin: 5px 0;
      font-family: Montserrat, sans-serif;
      font-size: 16px;
      font-weight: 600;
    }
`

export const GameWinner = styled.div`
  padding-right: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 19px;
    height: 19px;
  }

  h2 {
      font-family: Montserrat, sans-serif;
      font-size: 14px;
      font-weight: 600;
    }
`

export const Divider = styled.div`
  width: 2px;
  height: 70px;
  background: #BBB2B2; // #000000
`

export const Scoreboard = styled.div`
  position: relative;
  width: 102px;
  height: 72px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 600;
  }

  h5 {
    align-self: center;
    font-family: Montserrat, sans-serif;
    font-size: 12px;
    font-weight: 500;
  }
`

export const OnLive = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;

  margin: 0 7px;

  width: 20px;
  height: 3px;

  border-radius: 25%;
  background: #FF0000;
`