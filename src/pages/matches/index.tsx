import Header from "@/components/Header";
import { 
  Container,  
} from "../../styles/matches";
import { DayNavigation } from "./components/DayNavigation";
import Filter from "./components/Filter";
import League from "./components/League";


export default function Matches() {
  return (
    <>
      <Header />
      <div>
        <Filter />
        <DayNavigation />      
        <League />
      </div>
      <footer></footer>
    </>
  )
}
