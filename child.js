
        // Page Navigation
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const pages = document.querySelectorAll('.page');
            
            // Set up navigation
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetPage = this.getAttribute('data-page');
                    
                    // Update active nav link
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show target page
                    pages.forEach(page => {
                        page.classList.remove('active');
                        if (page.id === targetPage) {
                            page.classList.add('active');
                        }
                    });
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                });
            });
            
            // Set up grade card navigation
            const gradeCards = document.querySelectorAll('.grade-card');
            gradeCards.forEach(card => {
                card.addEventListener('click', function() {
                    const gradeLevel = this.getAttribute('data-grade');
                    
                    // Update nav to grades page
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    document.querySelector('.nav-link[data-page="grades"]').classList.add('active');
                    
                    // Show grades page
                    pages.forEach(page => {
                        page.classList.remove('active');
                        if (page.id === 'grades') {
                            page.classList.add('active');
                            
                            // Scroll to appropriate section
                            const section = document.querySelector(`#${gradeLevel}-school`);
                            if (section) {
                                setTimeout(() => {
                                    section.scrollIntoView({behavior: 'smooth'});
                                }, 100);
                            }
                        }
                    });
                });
            });
            
            // Set up explore button
            document.getElementById('explore-btn').addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update nav to courses page
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                document.querySelector('.nav-link[data-page="courses"]').classList.add('active');
                
                // Show courses page
                pages.forEach(page => {
                    page.classList.remove('active');
                    if (page.id === 'courses') {
                        page.classList.add('active');
                        window.scrollTo(0, 0);
                    }
                });
            });
            
            // Button click effect
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 200);
                });
            });
        });