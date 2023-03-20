import { Match, Divider, GameWinner, MatchInfos, OnLive, Scoreboard, TeamsLogos, TeamsNames, TeamsTest, TeamsScores } from "./style";
import Image from "next/image";

export default function Matche({ props }: any) {
  // Needs receive the teams [teamName, TeamImage], date
  return (
    <Match>
      <MatchInfos>
        <TeamsTest>
          <TeamsLogos>
            <Image src={props.Teams[0].Logo} width={10} height={10}  alt="" />
            <Image src={props.Teams[1].Logo} width={10} height={10} alt="" />
          </TeamsLogos>
          <TeamsNames>
            <h3>{props?.Teams[0]?.Name}</h3>
            <h3>{props?.Teams[1]?.Name}</h3>
          </TeamsNames>


          { props.isOngoing.Round ? (
            <TeamsScores>
              <h2>{props.isOngoing.score[0]}</h2>
              <h2>{props.isOngoing.score[1]}</h2>
            </TeamsScores>
          ) : props.hasFinished ? (
            <GameWinner>
              <Image src={props.Winner.Logo} width={1} height={1} alt="" />
              <h2>{props.Winner.Name}</h2>
              <h2>Won</h2>
            </GameWinner>
          ) : (
            <>
            </>
          )}

        </TeamsTest>
        <Divider></Divider>

        { props.isOngoing.Round ? (
            <Scoreboard>
              <OnLive></OnLive>
              <h3>Round {props.isOngoing.Round}</h3>
              <h5>Best of {props.isOngoing.MaxRounds}</h5>
            </Scoreboard>
          ) : props.hasFinished ? (
            <Scoreboard>
              <h3>Finished</h3>
              <h5></h5>
            </Scoreboard>
          ) : (
            <Scoreboard>
              <h3>16:30</h3>
              <h5></h5>
            </Scoreboard>
          )}
          
      </MatchInfos>
    </Match>
  )
}