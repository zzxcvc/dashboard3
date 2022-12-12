import {arrayTitle, arrayStock, getDummyData} from "./getdata.js"
const ctx = document.getElementById('myChart');

async function dummyChart() {
    await getDummyData()
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        
        data: {
           
            labels: arrayTitle,
            datasets: [{ 
                 label: "Stock Disponible",
                 data: arrayStock , //Eje Y
                 backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(55, 199, 132, 0.2)',
                        'rgba(155, 29, 202, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                 ],
                 borderColor: [
                    'rgba(255, 99, 132, 1)',
                        'rgba(55, 199, 132, 1)',
                        'rgba(155, 29, 202, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    
                 ],
                 borderWidth: 2
            }]
        },
        options: {
            plugins: {
                title:{
                    display: true,
                    text: 'Productos disponible: cantidad y modelo',
                        padding: {
                            top: 50,
                        bottom: 50,
                        left: 50,
        
                    },
                    font: {
                        size: 35,
                        style: 'normal'
                    }
                }
            }
        }
    })

}

dummyChart()





