import { Match, Divider, GameWinner, MatchInfos, OnLive, Scoreboard, TeamsLogos, TeamsNames, TeamsTest, TeamsScores } from "./style";
import Image from "next/image";

export default function Matche() {
  // Needs receive the teams [teamName, TeamImage], date
  return (
    <Match>
      <MatchInfos>
        <TeamsTest>
          <TeamsLogos>
            <Image src="/images/fnatic.png" width={10} height={10}  alt="" />
            <Image src="/images/Liquid.png" width={10} height={10} alt="" />
          </TeamsLogos>
          <TeamsNames>
            <h3>Fnatic</h3>
            <h3>Team Liquid</h3>
          </TeamsNames>


          {/* if ongoing */}
          {/* <TeamsScores>
            <h2>10</h2>
            <h2>8</h2>
          </TeamsScores> */}

        {/* if game finished  */}
          {/* <GameWinner>
            <Image src="/images/Gambit.png" width={1} height={1} alt="" />
            <h2>Gambit</h2>
            <h2>Won</h2>
          </GameWinner> */}
        </TeamsTest>

       

        <Divider></Divider>


        {/* if not started */}
        <Scoreboard>
          <h3>16:30</h3>
          <h5></h5>
        </Scoreboard>
        {/* if is ongoing */}
        {/* <Scoreboard>
          <OnLive></OnLive>
          <h3>Round 2</h3>
          <h5>Best of 5</h5>
        </Scoreboard> */}
        {/* if it ends */}
        {/* <Scoreboard>
          <h3>Finished</h3>
          <h5></h5>
        </Scoreboard> */}
      </MatchInfos>
    </Match>
  )
}