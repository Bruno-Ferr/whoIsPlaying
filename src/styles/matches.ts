import styled from "styled-components";

export const Container = styled.main`
    max-width: 1440px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
    
`;

export const Filter = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #A89A9A;

  h3 {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 700;
    padding: 10px;
    margin: 0 13px;
  }
`

export const DayNav = styled.div`
  width: 100%;
  height: 131px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #A89A9A;

  .Arrows {
    background: none;
    border: 0;
    margin: 0 8px;
  }
`

export const DayButton = styled.button`
    width: 171px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px;

    border: ${(props) => props.disabled ?  '1px solid #FFEB38' : '0' }; 
    border-radius: 10px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 600;

    background: #fefefe;

    &:not(:disabled):Hover {
      border: 1px solid #A89A9A;
    }

    :disabled {
      opacity: 1;
      color: #000;
    }
`

export const LeagueMatches = styled.div`
  margin: 50px 60px;
`

export const LeagueInfos = styled.div`
  display: flex;
  align-items: center;

  div {
    margin: 7px;
    padding: 7px;

      h2 {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 20px;
      }

      h4 {
        font-family: Montserrat, sans-serif;
        font-weight: 500;
        font-size: 18px;
      }
  }
`

export const AllMatches = styled.div`
  display: flex;
  
`

export const Match = styled.a`
  margin: 25px 30px 15px 0px;

  width: 403px;
  height: 110px;

  display: flex;
  align-items: center;

  border: 1px solid #BBB2B2;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
  background: #000000;
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

export const SeeChampionship = styled.a`
  background: none;
  border: 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  transition: .2s;

  &:hover {
    opacity: .7;
  }
`

