import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const britishInfo = (
    <p>
      Британська короткошерста — доволі велика порода, яку можна описати як
      приземкувату й кремезну. Багато ліній її тіла заокруглені морда та щоки,
      вуха, очі й голова, короткий широкий ніс, глибока грудна клітина та
      короткий товстий хвіст.
    </p>
  );
  const siamInfo = (
    <p>
      Це порода середнього розміру з довгим гнучким тілом. При всій граційності
      та елегантності сіамцімають добре розвинуту м'язову систему. Тіло добре
      збалансоване й атлетичне, лапи худі, а подушечки невеликі, овальної форми
    </p>
  );
  const maincoonInfo = (
    <p>
      Найбільша з усіх порід кішок, мейн-кун має сильне тіло з добре розвиненими
      м'язами та міцними лапами. У них квадратна морда з великими широко
      посадженими вухами. Хутро довге й щільне, підшерстя вкрите блискучою
      товстою та водонепроникною верхньою шерстю
    </p>
  );
  const ragdollInfo = (
    <p>
      Регдоли — це великі сильні та імпозантні кішки з характерними плямами на
      хутрі. Але ці коти надзвичайно спокійні та неквапливі, тому дещо нагадують
      ганчіркову ляльку (Ragdoll — «ганчіркова лялька»).
    </p>
  );

  return (
    <div>
      <Header text="Котячі породи" />

      <div className="contacts">
        <Contact
          image="british-short-hair.webp"
          breed="Британська короткошерста кішка"
          info={britishInfo}
        />
        <Contact image="siam.webp" breed="Сіамська" info={siamInfo} />
        <Contact image="maincoon.webp" breed="Мейн-кун" info={maincoonInfo} />
        <Contact image="ragdoll.webp" breed="Кішка Регдол" info={ragdollInfo} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
