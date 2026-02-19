import { useEffect } from 'react';
import './NavButton.css';

function NavButton({ icon, title, subtitle, onClick }) {
    const createRipple = (event) => {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    const handleClick = (event) => {
        createRipple(event);
        onClick();
    };

    const isImageIcon = (icon) => {
        if (!icon) return false;
        return icon.includes('.') || icon.startsWith('/') || icon.startsWith('http');
    };

    return (
        <button className="nav-button" onClick={handleClick}>
            <div className="button-icon">
                {isImageIcon(icon) ? (
                    <img src={icon} alt={title} className="icon-img" />
                ) : (
                    icon
                )}
            </div>
            <div className="button-content">
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <div className="button-arrow">→</div>
        </button>
    );
}

export default NavButton;
