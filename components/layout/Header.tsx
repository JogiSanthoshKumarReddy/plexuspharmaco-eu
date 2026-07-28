import Container from "../common/Container";
import Logo from "../common/Logo";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <Container className="flex h-20 items-center justify-between">
          <Logo />
          <Navbar />
        </Container>
      </header>
    </>
  );
}