
document.addEventListener('DOMContentLoaded', function() {
    const mindmap = document.querySelector('.mindmap');
    const items = mindmap.querySelectorAll('li');

    items.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });

        if (item.querySelector('ul')) {
            const expandIcon = document.createElement('span');
            expandIcon.textContent = '+';
            expandIcon.className = 'expand-icon';
            item.insertBefore(expandIcon, item.firstChild);
        }
    });
});
