import { Container } from "react-bootstrap"
import NavBar from "./NavBar"

interface Props {
    children:any
}

const Layout = ({ children }:Props) => {
    return (
        <>
          <NavBar />
          <Container>{children}</Container>
        </>
      )
}

export default Layout
