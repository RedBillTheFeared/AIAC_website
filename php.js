document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    let mapContainer = document.getElementById('map-container');
    let observer = new IntersectionObserver((entries, observer) => {
        console.log("IntersectionObserver triggered");
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Map container is in view");
                let iframe = document.createElement('iframe');
                iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0475976490135!2d80.99258001505115!3d26.853113083151927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd6080c1d6a5%3A0x31ed8f6bb7fd4b0!2sJeevan%20Plaza!5e0!3m2!1sen!2sin!4v1622543760400!5m2!1sen!2sin';
                iframe.width = '100%';
                iframe.height = '450';
                iframe.style.border = '0';
                iframe.allowFullscreen = '';
                mapContainer.appendChild(iframe);
                observer.unobserve(mapContainer);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(mapContainer);
});

// Testimonial Slider
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showTestimonial(index) {
    console.log(`Showing testimonial index: ${index}`);
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.classList.add('active');
        } else {
            testimonial.classList.remove('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    console.log("Previous button clicked");
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    showTestimonial(currentIndex);
});

nextButton.addEventListener('click', () => {
    console.log("Next button clicked");
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    showTestimonial(currentIndex);
});
