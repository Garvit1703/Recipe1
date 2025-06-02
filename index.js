function showTab(tabButton, contentId) {
    // Hide all content
    const contents = tabButton.parentElement.parentElement.querySelectorAll('.wireframe-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Remove active from all tabs
    const tabs = tabButton.parentElement.querySelectorAll('.nav-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected content and activate tab
    document.getElementById(contentId).classList.add('active');
    tabButton.classList.add('active');
}

// Add some interactive hover effects
document.querySelectorAll('.wireframe-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    });
});