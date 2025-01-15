/* eslint-disable react/jsx-key */
/* eslint(no-unused-vars) */

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

// Author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date & Time
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/joaonishikawa.png",
      name: "João Nishikawa",
      role: "Web Developer @ T2 Software",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-01-07 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rodkleins.png",
      name: "Rodrigo Klein",
      role: "CEO @ T2 Software",
    },
    content: [
      {
        type: "paragraph",
        content:
          "O Paradoxo da Indústria 4.0: Robôs inteligentes em fábricas que ainda usam papel?",
      },
      {
        type: "paragraph",
        content:
          "Vivemos uma era de avanços tecnológicos incríveis. Enquanto falamos de robôs, IA e automação inteligente no chão de fábrica, muitas empresas de diversos seguimentos ainda operam com processos manuais e sem sistemas digitais integrados.",
      },
      {
        type: "paragraph",
        content:
          "O paradoxo é claro: estamos na corrida pela Indústria 4.0, mas muitos ainda não deram o passo essencial de digitalizar seus processos básicos de produção. Não é raro encontrar fábricas onde documentos críticos, como instruções de fabricação, ainda são preenchidos à mão.",
      },
      {
        type: "paragraph",
        content:
          "Como equilibrar a implantação de tecnologias de ponta em ambientes que ainda operam de forma manual? Quais os desafios reais dessa transição?",
      },
      {
        type: "paragraph",
        content:
          "É hora de repensar e priorizar a transformação digital desde a base, para que a inovação realmente traga os resultados esperados.",
      },
    ],
    publishedAt: new Date("2025-01-14 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
