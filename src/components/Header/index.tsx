import Image from "next/image";
import { Container, NavMenu } from "./style";

export default function Header() {
  return (
    <Container>
      <div className="HeaderArea">
        <Image src="/images/Valorant.png" alt="" width={20} height={20} />
        <NavMenu>
          <nav>
            <a href="">Home</a>
            <a href="">Games</a>
            <a href="">Matches</a>
          </nav>
          <div className="Prf">
            <a href="" >
              <Image src="/images/Valorant.png" alt="" width={20} height={20} />
            </a>
          </div>
        </NavMenu>
      </div>
    </Container>
  )
}