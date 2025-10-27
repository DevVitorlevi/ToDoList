import Container from "../components/container";
import Logo from "../assets/image/Logo.png"

export default function Header() {
  return (
    <Container as="header" className="mt-3 md:mt-20">
      <img src={Logo} className="h-16 md:h12" />
    </Container>
  )
}