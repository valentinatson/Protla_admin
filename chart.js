// Données pour le graphique à barres
const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Revenus (FCFA)',
        data: [1200000, 1500000, 1800000, 1700000, 1900000, 2100000, 2300000, 2500000, 2700000, 2900000, 3100000, 3300000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Configuration du graphique à barres
const barConfig = {
    type: 'bar',
    data: barData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Création du graphique à barres
const barChart = new Chart(
    document.getElementById('barChart'),
    barConfig
);

// Données pour le graphique circulaire
const pieData = {
    labels: ['Investi', 'Restant'],
    datasets: [{
        label: 'Capital',
        data: [12000000, 8000000], // Investi : 12 000 000, Restant : 8 000 000
        backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 99, 132, 0.6)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration du graphique circulaire
const pieConfig = {
    type: 'pie',
    data: pieData,
    options: {
        responsive: true
    }
};

// Création du graphique circulaire
const pieChart = new Chart(
    document.getElementById('pieChart'),
    pieConfig
);

// Configuration du diagramme en courbe (line chart)
const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        datasets: [{
            label: 'Nombre de ventes',
            data: [5, 10, 8, 15, 20, 25, 30, 28, 35, 40, 45, 50],
            borderColor: '#2ea75e',
            backgroundColor: 'rgba(46, 167, 94, 0.2)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Mois'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Ventes'
                },
                beginAtZero: true
            }
        }
    }
});