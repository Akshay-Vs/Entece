import SideMargin from '../SideMargin';
import styles from './Home.module.scss';
const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      <SideMargin />
      <div className={styles.left}>
        <div className={styles.discover}>
          <h1 className={styles.shadow}>Discover</h1>
          <h1>Discover</h1>
          <h1 className={styles.shadow}>Discover</h1>
        </div>
      </div>
      <div className={styles.title}>
        <h1>
          The Art that <br />
          Inspires you
        </h1>
      </div>
      <div className={styles.right}></div>
    </main>
  );
};

export default Home;
