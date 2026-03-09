import { useState } from 'react';
import Header from './components/Header';
import ChallengeHeader from './components/ChallengeHeader';
import DaySidebar from './components/DaySidebar';
import FeedList from './components/FeedList';
import { useTheme } from './hooks/useTheme';
import './App.css';

function BackstageApp() {
  const [currentDay, setCurrentDay] = useState(1);
  const { isDark, toggleTheme } = useTheme();

  const handleDayChange = (day) => {
    setCurrentDay(day);
  };

  return (
    <div className="app">
      <Header onThemeToggle={toggleTheme} isDark={isDark} />
      <ChallengeHeader
        currentDay={currentDay}
        totalDays={9}
        onThemeToggle={toggleTheme}
        isDark={isDark}
      />
      <div className="app-layout">
        <DaySidebar currentDay={currentDay} onDayChange={handleDayChange} />
        <main className="main-content" aria-label="Challenge feed">
          <FeedList />
        </main>
      </div>
    </div>
  );
}

export default BackstageApp;
