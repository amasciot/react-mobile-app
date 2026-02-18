import './ContentScreen.css';

function ContentScreen({ screen, onBack, isActive }) {
    if (!screen) return null;

    const { title, content } = screen;

    return (
        <div className={`screen content-screen ${isActive ? 'active' : ''}`} id={screen.id}>
            <div className="screen-header">
                <button className="back-button" onClick={onBack}>
                    ← Volver
                </button>
                <h2>{title}</h2>
            </div>

            <div className="content">
                <div className="content-card">
                    <h3>{content.heading}</h3>
                    <p>{content.intro}</p>

                    <h4>{content.sectionTitle}</h4>
                    <ul>
                        {content.items.map((item, index) => (
                            <li key={index}>
                                <strong>{item.label}</strong> {item.description}
                            </li>
                        ))}
                    </ul>

                    <p>{content.conclusion}</p>
                </div>
            </div>
        </div>
    );
}

export default ContentScreen;
