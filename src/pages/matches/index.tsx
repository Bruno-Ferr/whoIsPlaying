import { 
  Container,  
} from "../../styles/matches";
import { DayNavigation } from "./components/DayNavigation";
import Filter from "./components/Filter";
import League from "./components/League";


export default function Matches() {
  return (
    <>
      <div>Header</div>
      <div>
        <Filter />
        <DayNavigation />      
        <League />
        <League />
        <League />
      </div>
      <footer></footer>
    </>
  )
}
