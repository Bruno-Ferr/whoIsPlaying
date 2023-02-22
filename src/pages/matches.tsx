import { Container, DayNav, Filter, DayButton, LeagueMatches, LeagueInfos, Match, MatchInfos, Divider, OnLive, Scoreboard, AllMatches, SeeChampionship, GameWinner, TeamsNames, TeamsLogos, TeamsTest, TeamsScores } from "../styles/matches";
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useEffect, useState } from "react";
import { format } from "date-fns";


export default function Matches() {
  const [days, setDays] = useState([])
  const [count, setCount] = useState(-1)
  const [round, setRound] = useState(0)

  const [selectedDay, setSelectedDay] = useState(new Date())

  useEffect(() => {
    if (round < 7) {
      const date = new Date(new Date().getTime() + count * (24 * 60 * 60 * 1000))
      setCount(count + 1)
      setRound(round + 1)
      setDays([...days, date])
    }
  }, [days])

  function previousDate() {
    setRound(0)
    setCount(count - 7 * 2)
    setDays([])
  }

  function nextDate() {
    setRound(0)
    setDays([])
  }

  return (
    <>
      <div>Header</div>
      <Container>
        <Filter>
          <h3>Following</h3>
          <h3>Games</h3>
          <h3>All</h3>
        </Filter>
        <DayNav>
          <button className="Arrows" onClick={() => previousDate()}><GrPrevious size={26}/></button>
          {days.map(date => {
            const day = format(date, 'E. d')
            if (day === format(selectedDay, 'E. d')) {
              return (
                <DayButton key={day} disabled>{day}</DayButton>
              )
            } else {
              return (
                <DayButton key={day} onClick={() => setSelectedDay(date)}>{day}</DayButton>
              )
            }
          })}
          <button className="Arrows" onClick={() => nextDate()}><GrNext size={26} /></button>
        </DayNav>
        
        <LeagueMatches>
          <LeagueInfos>
            <img src="/images/Valorant.png" alt="" />
            <div>
              <h2>Master</h2>
              <h4>Quarter finals</h4>
            </div>
          </LeagueInfos>
          <AllMatches>
            <Match>
              <MatchInfos>
                <TeamsTest>
                  <TeamsLogos>
                    <img src="/images/fnatic.png" alt="" />
                    <img src="/images/Liquid.png" alt="" />
                  </TeamsLogos>
                  <TeamsNames>
                    <h3>Fnatic</h3>
                    <h3>Team Liquid</h3>
                  </TeamsNames>
                </TeamsTest>
                <Divider></Divider>
                <Scoreboard>
                  <h3>16:30</h3>
                  <h5></h5>
                </Scoreboard>
              </MatchInfos>
            </Match>
            <Match>
              <MatchInfos>
                <TeamsTest>
                    <TeamsLogos>
                      <img src="/images/Vitality.png" alt="" />
                      <img src="/images/Astralis.png" alt="" />
                    </TeamsLogos>
                    <TeamsNames>
                      <h3>Vitality</h3>                    
                      <h3>Astralis</h3>
                    </TeamsNames>
                    <TeamsScores>
                        <h2>10</h2>
                        <h2>8</h2>
                    </TeamsScores>
                  </TeamsTest>
                <Divider></Divider>
                <Scoreboard>
                  <OnLive></OnLive>
                  <h3>Round 2</h3>
                  <h5>Best of 5</h5>
                </Scoreboard>
              </MatchInfos>
            </Match>
            <Match>
              <MatchInfos>
                <TeamsTest>
                  <TeamsLogos>
                    <img src="/images/Gambit.png" alt="" />
                    <img src="/images/NaVi.png" alt="" />
                  </TeamsLogos>
                  <TeamsNames>
                    <h3>Gambit</h3>                    
                    <h3>NaVi</h3>
                  </TeamsNames>
                    <GameWinner>
                      <img src="/images/Gambit.png" alt="" />
                      <h2>Gambit</h2>
                      <h2>Won</h2>
                    </GameWinner>
                </TeamsTest>
                <Divider></Divider>
                <Scoreboard>
                  <h3>Finished</h3>
                  <h5></h5>
                </Scoreboard>
              </MatchInfos>
            </Match>
          </AllMatches>
          <SeeChampionship>See Championship <GrNext size={12} /></SeeChampionship>
        </LeagueMatches>
        <LeagueMatches>
          <LeagueInfos>
            <img src="/images/Valorant.png" alt="" />
            <div>
              <h2>Major</h2>
              <h4>Groups</h4>
            </div>
          </LeagueInfos>
          <AllMatches>
            <Match>
              <MatchInfos>
                <TeamsTest>
                  <TeamsLogos>
                    <img src="/images/fnatic.png" alt="" />
                    <img src="/images/Astralis.png" alt="" />
                  </TeamsLogos>
                  <TeamsNames>
                    <h3>Fnatic</h3>
                    <h3>Astralis</h3>
                  </TeamsNames>
                </TeamsTest>
                <Divider></Divider>
                <Scoreboard>
                  <h3>14:00</h3>
                  <h5></h5>
                </Scoreboard>
              </MatchInfos>
            </Match>
            <Match>
              <MatchInfos>
                <TeamsTest>
                    <TeamsLogos>
                      <img src="/images/Cloud9.png" alt="" />
                      <img src="/images/Vitality.png" alt="" />
                    </TeamsLogos>
                    <TeamsNames>
                      <h3>Cloud 9</h3>                    
                      <h3>Vitality</h3>
                    </TeamsNames>
                    <TeamsScores>
                        <h2>0</h2>
                        <h2>0</h2>
                    </TeamsScores>
                  </TeamsTest>
                <Divider></Divider>
                <Scoreboard>
                  <OnLive></OnLive>
                  <h3>Round 2</h3>
                  <h5>Best of 5</h5>
                </Scoreboard>
              </MatchInfos>
            </Match>
            <Match>
              <MatchInfos>
                <TeamsTest>
                  <TeamsLogos>
                    <img src="/images/Liquid.png" alt="" />
                    <img src="/images/Fnatic.png" alt="" />
                  </TeamsLogos>
                  <TeamsNames>
                    <h3>Team Liquid</h3>                    
                    <h3>Fnatic</h3>
                  </TeamsNames>
                    <GameWinner>
                      <img src="/images/Liquid.png" alt="" />
                      <h2>Team Liquid</h2>
                      <h2>Won</h2>
                    </GameWinner>
                </TeamsTest>
                <Divider></Divider>
                <Scoreboard>
                  <h3>Finished</h3>
                  <h5></h5>
                </Scoreboard>
              </MatchInfos>
            </Match>
          </AllMatches>
          <SeeChampionship>See Championship <GrNext size={12} /></SeeChampionship>
        </LeagueMatches>
      </Container>
      <footer></footer>
    </>
  )
}
