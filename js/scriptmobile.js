document.addEventListener('DOMContentLoaded', function() {
				const menuToggle = document.getElementById('menu-toggle');
				const menuMobile = document.getElementById('menu-mobile');
				const closeMenu = document.getElementById('close-menu');
				const menuLinks = document.querySelectorAll('.menu-mobile a');

				menuToggle.addEventListener('click', function() {
					menuMobile.classList.add('active');
					document.body.style.overflow = 'hidden'; 
				});
				function closeMenuMobile() {
					menuMobile.classList.remove('active');
					document.body.style.overflow = 'auto';
				}

				closeMenu.addEventListener('click', closeMenuMobile);

				menuLinks.forEach(link => {
					link.addEventListener('click', closeMenuMobile);
				});

				menuMobile.addEventListener('click', function(e) {
					if (e.target === menuMobile) {
						closeMenuMobile();
					}
				});

				document.addEventListener('keydown', function(e) {
					if (e.key === 'Escape' && menuMobile.classList.contains('active')) {
						closeMenuMobile();
					}
				});
			});