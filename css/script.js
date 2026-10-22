function setLanguage(lang) {
            document.querySelectorAll("[data-id]").forEach(el => {
                const id = el.getAttribute("data-id");
                if (textData[lang] && textData[lang][id]) {
                    el.innerHTML = textData[lang][id];
                }
            });
        }

        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.addEventListener('DOMContentLoaded', () => {
            setLanguage('id'); 
        });
    

    
        document.addEventListener('DOMContentLoaded', function() {
            const sliderWrapper = document.querySelector('.slider-wrapper');
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const dotsContainer = document.querySelector('.slider-dots');

            // Cek jika elemen slider tidak ada, hentikan eksekusi
            if (!sliderWrapper) return;

            let currentIndex = 0;
            const totalSlides = slides.length;
            
            // Tentukan berapa slide yang terlihat berdasarkan lebar layar
            const getVisibleSlides = () => {
                if (window.innerWidth <= 768) return 1;
                if (window.innerWidth <= 992) return 2;
                return 3;
            };

            const maxIndex = totalSlides - getVisibleSlides();

            // Membuat dots navigasi
            for (let i = 0; i <= maxIndex; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateSlider();
                });
                dotsContainer.appendChild(dot);
            }
            const dots = document.querySelectorAll('.dot');

            // Fungsi utama untuk update posisi slider dan dots
            function updateSlider() {
                const slideWidth = slides[0].clientWidth; // Lebar satu slide termasuk padding
                sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

                // Update dot yang aktif
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }

            // Event listener untuk tombol next
            nextBtn.addEventListener('click', () => {
                if (currentIndex < maxIndex) {
                    currentIndex++;
                } else {
                    currentIndex = 0; // Kembali ke awal
                }
                updateSlider();
            });

            // Event listener untuk tombol prev
            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = maxIndex; // Lompat ke akhir
                }
                updateSlider();
            });

            // Panggil updateSlider saat pertama kali load dan saat ukuran window berubah
            updateSlider();
            window.addEventListener('resize', updateSlider);
        });

        // moal galerry
    // Get modal elements
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        const captionText = document.getElementById("caption");

        // Get all gallery images
        const galleryImages = document.querySelectorAll(".gallery-card img");
        
        // Loop through images and add click event listener
        galleryImages.forEach(img => {
            img.onclick = function() {
                const cardInfo = this.parentElement.querySelector('.card-info');
                const title = cardInfo.querySelector('h3').innerHTML;
                const description = cardInfo.querySelector('p').innerHTML;

                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
            }
        });

        // Get the close button
        const span = document.getElementsByClassName("close")[0];

        // Function to close the modal
        function closeModal() {
            modal.style.display = "none";
        }

        // Close the modal when 'x' is clicked
        span.onclick = closeModal;

        // Close the modal when clicking outside the image
        modal.onclick = function(event) {
            if (event.target === modal) {
                closeModal();
            }
        }