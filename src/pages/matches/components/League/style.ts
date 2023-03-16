import styled from "styled-components"

export const Container = styled.main`
    margin: 0 auto;
    padding: 0 1rem 2.5rem 1rem;   
`;

export const LeagueContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

export const LeagueMatches = styled.div`
  margin: 50px 80px;
`

export const LeagueInfos = styled.div`
  display: flex;
  align-items: center;
  color: #f8f8f8;

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

export const SeeChampionship = styled.a`
  background: none;
  color: #f8f8f8;
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