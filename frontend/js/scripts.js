function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Mostrar la sección inicial
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});
