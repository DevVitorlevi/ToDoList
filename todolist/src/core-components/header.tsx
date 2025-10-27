import Container from "../components/container";
import Logo from "../assets/image/Logo.png"

export default function Header() {
  return (
    <Container as="header" className="mt-3 md:mt-20">
      <img src={Logo} className="h-12 md:h-16" />
    </Container>
  )
}