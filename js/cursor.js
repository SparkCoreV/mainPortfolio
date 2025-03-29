document.addEventListener('DOMContentLoaded', () => {
    const cursorOuter = document.querySelector('.cursor-outer');
    const cursorInner = document.querySelector('.cursor-inner');
    const links = document.querySelectorAll('a, button, .menu-toggle, input, textarea');
    
    // Move cursor with mouse
    document.addEventListener('mousemove', (e) => {
        cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
    
    // Add hover effect to interactive elements
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorOuter.classList.add('cursor-hover');
            cursorInner.classList.add('cursor-hover');
        });
        
        link.addEventListener('mouseleave', () => {
            cursorOuter.classList.remove('cursor-hover');
            cursorInner.classList.remove('cursor-hover');
        });
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseout', (e) => {
        if (e.relatedTarget === null) {
            cursorOuter.style.opacity = '0';
            cursorInner.style.opacity = '0';
        }
    });
    
    document.addEventListener('mouseover', () => {
        cursorOuter.style.opacity = '1';
        cursorInner.style.opacity = '1';
    });
    
    // Add click effect
    document.addEventListener('mousedown', () => {
        cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(0.8)`;
    });
    
    document.addEventListener('mouseup', () => {
        cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1)`;
    });
}); 