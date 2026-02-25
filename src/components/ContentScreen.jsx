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
                            <li key={index} className={item.file ? 'file-item' : ''}>
                                {item.file ? (
                                    <a href={item.file} target="_blank" rel="noopener noreferrer" className="pdf-button">
                                        <span className="pdf-icon">📄</span>
                                        <div className="pdf-info">
                                            <span className="pdf-label">{item.label}</span>
                                            <span className="pdf-description">{item.description}</span>
                                        </div>
                                        <span className="pdf-arrow">→</span>
                                    </a>
                                ) : (
                                    <div className="item-text-content">
                                        {item.label && <strong>{item.label}</strong>} {item.description}
                                        {item.image && (
                                            <div className="item-image-container">
                                                <img src={item.image} alt={item.label || 'Imagen técnica'} className="item-image" />
                                            </div>
                                        )}
                                    </div>
                                )}
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
