import { AllMatches, LeagueContainer, LeagueInfos, LeagueMatches, SeeChampionship } from "./style";
import Image from "next/image";
import { GrNext } from "react-icons/gr";
import Matche from "../Match";

const TodayMatchesArray = [{Team1Name: 'Sentinels', }]

export default function League() {
  return (
    <LeagueContainer>
      <LeagueMatches>
        <LeagueInfos>
          <Image src="/images/Valorant.png" width={10} height={10} alt="" />
          <div>
            <h2>Master</h2>
            <h4>Quarter finals</h4>
          </div>
        </LeagueInfos>
        <AllMatches>
          {/* array com as partidas passadas ao Match */}
          <Matche />
          <Matche />
          <Matche />
        </AllMatches>
        <SeeChampionship>See Championship <GrNext size={12} /></SeeChampionship>
      </LeagueMatches>
    </LeagueContainer>
  )
}