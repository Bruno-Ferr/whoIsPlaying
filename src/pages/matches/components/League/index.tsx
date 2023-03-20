import { AllMatches, LeagueContainer, LeagueInfos, LeagueMatches, SeeChampionship } from "./style";
import Image from "next/image";
import { GrNext } from "react-icons/gr";
import Matche from "../Match";

type MatchProps = {
  MatchId: string,
  Teams: {
    Name: string,
    Logo: string,
  }[],
  MatchTime: Date, 
  hasFinished: boolean, 
  isOngoing: {
    Round?: number,
    MaxRounds?: number,
    score?: number[]
  }, 
  Winner: string,
}

type TodayMatchesProps = {
  MatchId: string,
  Teams: {
    Name: string,
    Logo: string,
  }[],
  MatchTime: Date, 
  hasFinished: boolean, 
  isOngoing: {
    Round?: number,
    MaxRounds?: number,
    score?: number[]
  }, 
  Winner: string,
}[]

const TodayMatchesArray: any = [{
  MatchId: '1',
  Teams: [{Name: 'Sentinels', Logo: '/images/Valorant.png'}, {Name: 'Fnatic', Logo: '/images/fnatic.png'}], 
  MatchTime: new Date(), 
  hasFinished: false, 
  isOngoing: {
    Round: 2,
    MaxRounds: 5,
    score: [10, 5]
  }, 
  Winner: '',
}, {
  MatchId: '2',
  Teams: [{Name: 'Team Liquid', Logo: '/images/Liquid.png'}, {Name: 'NaVi', Logo: '/images/NaVi.png'}], 
  MatchTime: new Date(), 
  hasFinished: true, 
  isOngoing: {}, 
  Winner: {
    Name: 'Team Liquid',
    Logo: '/images/Liquid.png'
  },
}, {
  MatchId: '3',
  Teams: [{Name: 'Gambit', Logo: '/images/Gambit.png'}, {Name: 'Astralis', Logo: '/images/Astralis.png'}], 
  MatchTime: new Date(), 
  hasFinished: false, 
  isOngoing: {}, 
  Winner: '',
}
]

export default function League() {
  // Recebe Informações da liga e faz um fetch das partidas daquela liga

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
          {TodayMatchesArray.map((match: MatchProps) => {
            return <Matche key={match.MatchId} props={match}/>
          })}
        </AllMatches>
        <SeeChampionship>See Championship <GrNext size={12} /></SeeChampionship>
      </LeagueMatches>
    </LeagueContainer>
  )
}