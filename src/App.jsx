import { useState, useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import ContentScreen from './components/ContentScreen';
import { screens } from './data/contentData';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [navigationHistory, setNavigationHistory] = useState([]);

  const navigateTo = (screenId) => {
    setNavigationHistory([...navigationHistory, currentScreen]);
    setCurrentScreen(screenId);
  };

  const navigateBack = () => {
    if (navigationHistory.length === 0) return;

    const previousScreen = navigationHistory[navigationHistory.length - 1];
    setNavigationHistory(navigationHistory.slice(0, -1));
    setCurrentScreen(previousScreen);
  };

  // Handle keyboard navigation (Escape key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && currentScreen !== 'home') {
        navigateBack();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentScreen, navigationHistory]);

  // Prevent pull-to-refresh on mobile
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchY = e.touches[0].clientY;
      const touchDiff = touchY - touchStartY;

      if (touchDiff > 0 && window.scrollY === 0) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Console welcome message
  useEffect(() => {
    console.log('%c¡Bienvenido a Mi App Móvil! 🚀', 'color: #6366f1; font-size: 20px; font-weight: bold;');
    console.log('%cDesarrollada con ❤️ usando React', 'color: #ec4899; font-size: 14px;');
  }, []);

  return (
    <div className="app">
      {currentScreen === 'home' ? (
        <HomeScreen screens={screens} onNavigate={navigateTo} />
      ) : (
        screens.map((screen) => (
          <ContentScreen
            key={screen.id}
            screen={screen}
            onBack={navigateBack}
            isActive={currentScreen === screen.id}
          />
        ))
      )}
    </div>
  );
}

export default App;
