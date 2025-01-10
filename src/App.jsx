import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Rodrigo Klein" content="Novo post maneirasso" />
          <Post author="Leonardo Ruza" content="Outro post muito dahora" />
        </main>
      </div>
    </div>
  );
}

export default App;