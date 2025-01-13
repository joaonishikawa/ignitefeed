import styles from "./Post.module.css";
import {Comment} from "./Comment"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://media.licdn.com/dms/image/v2/C4D03AQFW94wH5PTb3Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1658083457621?e=1741824000&v=beta&t=JWsqv3LK6ry_DeDjpQuHXXrgsX09u5m6QhJVM650Gag"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Juliana Nishikawa</strong>
            <span>Sells Manager</span>
          </div>
        </div>

        <time title="11 de Maio ás 08:13" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa. É um</p>
        projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀
        <p>
          <a href="#">jane.design/doctorcare </a>
        </p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>

        <textarea placeholder="Deixe um comentário"/>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commmentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
