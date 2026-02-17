import { Button } from "../../components/Button/Button.tsx";
import "./MainPage.css";

export function MainPage() {
  return (
    <section className="main-page-container">
      <h1 className="main-menu-title">TIC-TAC-TOE</h1>
      <div className="buttons">
        <Button height='large'>PLAY</Button>
        <Button height='large'>HOW TO PLAY</Button>
        <Button height='large'>QUIT</Button>
      </div>
    </section>
  );
}
