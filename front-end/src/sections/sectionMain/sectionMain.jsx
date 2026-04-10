import imgHero from "../../assets/images/img-hero.svg";
import { Button } from "../../components/button/button";
import './style.css'

export const SectionMain = () => {
  return (
    <section className="section-main">
      <img src={imgHero} alt="" />

      <div className="hero-content">
        <p className="hero-text">
          <h1>Explore o mundo de <span className="highlight">Rick and Morty</span></h1>
          <p>Descubra personagens, locais e episódios do multiverso.</p>
          <p>Explore informações detalhadas usando a API de Rick and Morty.</p>
        </p>
        <Button texto={"Explore os personagens"}></Button>
      </div>
    </section>
  );
};