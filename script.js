// Initialize with localStorage preferences
document.addEventListener('DOMContentLoaded', function() {
    // Load theme preference
    const savedTheme = localStorage.getItem('themePreference');
    if (savedTheme === 'light') {
        document.body.classList.remove('dark');
        document.querySelector('.mode').textContent = 'Dark🌙';
    }

    // Load animation preference
    const animationPref = localStorage.getItem('animationPreference');
    if (animationPref === 'enabled') {
        enableAnimations();
    }

    // Add slide-in animation to elements
    const elements = document.querySelectorAll('.coffee-item, form, header');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('slide-in');
        }, index * 200);
    });
});

// Theme toggle with localStorage
function ChangeMode() {
    let body = document.querySelector('body');
    body.classList.toggle('dark');

    const btn = document.querySelector('.mode');
    if (body.classList.contains('dark')) {
        btn.innerHTML = 'Light ☀';
        localStorage.setItem('themePreference', 'dark');
    } else {
        btn.innerHTML = 'Dark🌙';
        localStorage.setItem('themePreference', 'light');
    }
}

const btn = document.querySelector('.mode');
btn.addEventListener('click', ChangeMode);

// Enhanced RemoveMe function with animation
function RemoveMe() {
    const paragraph = document.querySelector('header p');
    if (paragraph) {
        paragraph.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => {
            paragraph.remove();
            const newParagraph = document.createElement('p');
            newParagraph.textContent = 'Enjoy our freshly brewed coffee! ☕';
            newParagraph.classList.add('slide-in');
            document.querySelector('header').appendChild(newParagraph);
        }, 500);
    }
}

document.querySelector('.remove').addEventListener('click', RemoveMe);

// Animation trigger with localStorage
function enableAnimations() {
    document.querySelectorAll('.coffee-item').forEach(item => {
        item.classList.add('pulse');
    });
    localStorage.setItem('animationPreference', 'enabled');
}

function disableAnimations() {
    document.querySelectorAll('.coffee-item').forEach(item => {
        item.classList.remove('pulse');
    });
    localStorage.setItem('animationPreference', 'disabled');
}

// Special animation trigger
document.getElementById('animateBtn').addEventListener('click', function() {
    const animatedElement = document.querySelector('.animated-element');
    animatedElement.classList.toggle('active');
    animatedElement.classList.toggle('color-change');
    
    // Store animation state
    if (animatedElement.classList.contains('active')) {
        localStorage.setItem('specialAnimation', 'active');
    } else {
        localStorage.setItem('specialAnimation', 'inactive');
    }
});

// Check for saved special animation state
if (localStorage.getItem('specialAnimation') === 'active') {
    document.querySelector('.animated-element').classList.add('active', 'color-change');
}

// Enhanced form validation with animations
function validationForm(event) {
    event.preventDefault();
    
    // Add submission animation
    const form = event.target;
    form.style.animation = 'shake 0.5s';
    setTimeout(() => {
        form.style.animation = '';
    }, 500);

    // Rest of validation logic...
}

// Coffee image click animation
document.querySelectorAll('.coffee-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.animation = 'bounce 0.5s';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
});

