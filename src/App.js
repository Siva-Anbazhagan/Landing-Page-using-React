import "./Style.css";
import { useState } from "react";
export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="App">
      <Header>
        <Logo />
        <Navbar setIsFormOpen={setIsFormOpen} />
      </Header>
      <ProfileContainer isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <Footer />
    </div>
  );
}
function Header({ children }) {
  return <div className="Header">{children}</div>;
}
function Logo() {
  return <div className="Logo">Gurvarul Thirumana Thagaval Maiam</div>;
}
function Navbar({ setIsFormOpen }) {
  return (
    <div className="Navbar">
      <Button onClick={() => setIsFormOpen(false)}>Home</Button>
      <Button>Signup/ Login</Button>
    </div>
  );
}
function Button({ children }) {
  return (
    <button
      className="nav-btn"
      onMouseEnter={(e) => e.target.classList.add("hover")}
      onMouseLeave={(e) => e.target.classList.remove("hover")}
    >
      {children}
    </button>
  );
}
function ProfileContainer({ isFormOpen, setIsFormOpen }) {
  return (
    <div
      className={isFormOpen ? "ProfileContainer formOpen" : "ProfileContainer"}
    >
      {isFormOpen ? (
        <>
          <label className={isFormOpen ? "slash slide" : "slash"}></label>
          <form className="form">
            <label>Name :</label>
            <label>Gender :</label>
            <label>DOB :</label>
            <label>Age :</label>
          </form>
        </>
      ) : (
        <>
          <>
            <Profile
              option={"Bride"}
              className={"left"}
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
            />
          </>
          <>
            <label className={isFormOpen ? "slash slide" : "slash"}></label>
            {/* <label className="right-slash slash"></label> */}
          </>
          <>
            <Profile
              option={"Groom"}
              className={"right"}
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
            />
          </>
        </>
      )}
    </div>
  );
}
function Profile({ option, className = "", isFormOpen, setIsFormOpen }) {
  return (
    <div className="Profile">
      <p className={className}>
        Looking for{" "}
        <button
          onClick={(e) => {
            setIsFormOpen(!isFormOpen);
          }}
          onMouseEnter={(e) => e.target.classList.add("hover")}
          onMouseLeave={(e) => e.target.classList.remove("hover")}
        >
          {option}
        </button>
      </p>
    </div>
  );
}
function Footer() {
  return (
    <div className="Footer">
      <label>Contact us: +91 9876543210</label>
      <label>About us: Name, Place</label>
    </div>
  );
}
