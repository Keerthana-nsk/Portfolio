  (function() {
    emailjs.init("dWCMlSJO3GBGjq58y"); 
  })();

  const contactForm = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm("service_rv4kxo8", "template_slig09a", this)
      .then(() => {
        formMsg.textContent = "✅ Message sent successfully!";
        formMsg.classList.add("text-green-400");
        contactForm.reset();
      }, (error) => {
        formMsg.textContent = "❌ Failed to send message. Try again!";
        formMsg.classList.add("text-red-400");
        console.error(error);
      });
  });

    // small helpers
    document.getElementById('year').textContent = new Date().getFullYear();

    // mobile menu toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileBtn.addEventListener('click', ()=> mobileMenu.classList.toggle('hidden'));

const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalSummary = document.getElementById('modalSummary'); 
const modalLink = document.getElementById('modalLink');

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title || 'Project';
    modalDesc.textContent = card.dataset.description || "";
    modalSummary.textContent = card.dataset.summary || "";
    modalLink.href = card.dataset.link || 'https://github.com/Keerthana-nsk';
    modal.classList.remove('hidden');
    modal.classList.add('flex'); 
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') card.click();
  });
});

    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });

    
 

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
      if (document.documentElement.classList.contains('light')) {
        document.documentElement.classList.remove('light');
        document.body.classList.remove('bg-white','text-gray-900');
      } else {
        document.documentElement.classList.add('light');
        
        alert('Light theme toggle placeholder — you can wire this up to swap CSS variables or Tailwind classes.');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
  