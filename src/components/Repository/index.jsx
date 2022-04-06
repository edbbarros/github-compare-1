import { useContext } from 'react';
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import { ThemeContext } from '../../contexts/ThemeContext';
import Header from './components/Header';
import Body from './components/Body';
import styles from './Repository.module.css';

function Repository(props) {
  const {
    repositoriesView,
    id,
    title,
    avatar,
    stars,
    forks,
    openIssues,
    age,
    lastCommit,
    license,
    language,
    isFavorite,
  } = props;

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <ClayCard
      key={id}
      className={
        repositoriesView === 'cards'
          ? isDarkTheme
            ? styles.cardDark
            : styles.card
          : isDarkTheme
          ? styles.listDark
          : null
      }
    >
      <Header
        repositoriesView={repositoriesView}
        id={id}
        title={title}
        avatar={avatar}
        isFavorite={isFavorite}
      />
      <Body
        repositoriesView={repositoriesView}
        stars={stars}
        forks={forks}
        openIssues={openIssues}
        age={age}
        lastCommit={lastCommit}
        licens={license}
      />
      <ClayLabel
        key={id}
        className={
          repositoriesView === 'cards' ? styles.cardLabel : styles.listLabel
        }
        displayType="warning"
        large
      >
        {language}
      </ClayLabel>
    </ClayCard>
  );
}

export default Repository;
