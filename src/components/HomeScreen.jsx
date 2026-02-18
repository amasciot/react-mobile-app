import NavButton from './NavButton';
import './HomeScreen.css';

function HomeScreen({ screens, onNavigate }) {
    return (
        <div className="screen active" id="home-screen">
            <div className="header">
                <h1 className="app-title">Mi App Móvil</h1>
                <p className="app-subtitle">Selecciona una opción</p>
            </div>

            <div className="button-grid">
                {screens.map((screen) => (
                    <NavButton
                        key={screen.id}
                        icon={screen.icon}
                        title={screen.title}
                        subtitle={screen.subtitle}
                        onClick={() => onNavigate(screen.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomeScreen;
