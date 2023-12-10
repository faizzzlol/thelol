document.addEventListener('DOMContentLoaded', function() {
    // Simulate fetching exchange rate from an API
    setTimeout(() => {
        document.getElementById('exchange-rate').innerText = '1 Diamond = 0.05 TL$';
    }, 2000);

    // Simulate loading a price chart using Highcharts
    setTimeout(() => {
        Highcharts.chart('chart-container', {
            title: {
                text: 'Price Chart'
            },
            series: [{
                data: [1, 2, 3, 4, 5],
                type: 'line'
            }]
        });
    }, 3000);
});
