const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


document.getElementById('nombre-parts').addEventListener('input', function () {
	const parts = parseInt(this.value) || 0;
	const estimation = parts * 100; // Exemple : 1 part = 100 unités monétaires
	document.getElementById('estimation').value = estimation + ' FCFA';
  });
  


  document.addEventListener("DOMContentLoaded", () => {
	const openModalBtn = document.getElementById("open-modal-btn");
	const closeModalBtn = document.getElementById("close-modal-btn");
	const modal = document.getElementById("retrait-modal");
  
	// Ouvrir la fenêtre modale
	openModalBtn.addEventListener("click", () => {
	  modal.style.display = "flex";
	});
  
	// Fermer la fenêtre modale
	closeModalBtn.addEventListener("click", () => {
	  modal.style.display = "none";
	});
  
	// Fermer la fenêtre en cliquant à l'extérieur
	window.addEventListener("click", (event) => {
	  if (event.target === modal) {
		modal.style.display = "none";
	  }
	});
  });
  

  document.addEventListener("DOMContentLoaded", () => {
	const emailInput = document.getElementById("email");
	const avatar = document.getElementById("profile-avatar");
  
	// Générer les initiales à partir de l'email
	const generateInitials = (email) => {
	  const parts = email.split("@")[0].split(".");
	  return parts.map((part) => part.charAt(0)).join("").toUpperCase();
	};
  
	// Mettre à jour l'avatar lors du changement d'email
	const updateAvatar = () => {
	  const email = emailInput.value.trim();
	  avatar.textContent = email ? generateInitials(email) : "N/A";
	};
  
	// Initialiser les initiales avec une valeur par défaut
	emailInput.addEventListener("input", updateAvatar);
	updateAvatar(); // Initialisation
  });

  









  