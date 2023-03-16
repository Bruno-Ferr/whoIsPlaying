import { Container, DayButton, DayNav } from "./style"
import { format } from "date-fns"
import { useEffect, useState } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"
import { IconContext } from "react-icons/lib"

export function DayNavigation() {
  const [days, setDays] = useState<any>([])
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
  }, [days, round, count])

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
    <IconContext.Provider
      value={{ color: 'white', size: '50px' }}
    >
      <Container>
        <DayNav>
          <button className="Arrows" onClick={() => previousDate()}><GrPrevious size={26}/></button>
          {days.map((date: any) => {
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
      </Container>
    </IconContext.Provider>
  )
}