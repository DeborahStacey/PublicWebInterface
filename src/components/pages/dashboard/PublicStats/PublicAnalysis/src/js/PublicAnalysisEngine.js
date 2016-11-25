/*-------
 Purpose: Testing Jasmine Framework
 Parameters: NONE
 Return: "Hello world!"
 -------*/
function helloWorld() {
    return "Hello world!";
}

function resetChart(){

}

function generateChart(){
	var chartId = document.getElementById("myChart");
			// create chart object
			
			// Chart Type: 'bar', 'pie', 'doughnut', 'line', 'radar', 'polarArea'
			var chartType = 'pie';
			var labels = ["One", "Two", "Three", "Four-Five", "Six+"];
			var data = [60, 400, 20, 100, 30]
			
			// Data of the chart
			var data = {
    			labels: labels,
    			datasets: [
        				{					
        					data: data,
            				backgroundColor: [
                				'rgba(255, 99, 132, 0.2)',
                				'rgba(54, 162, 235, 0.2)',
                				'rgba(255, 206, 86, 0.2)',
                				'rgba(75, 192, 192, 0.2)',
                				'rgba(153, 102, 255, 0.2)',
                				'rgba(255, 159, 64, 0.2)'
            				],
            				borderColor: [
                				'rgba(255,99,132,1)',
                				'rgba(54, 162, 235, 1)',
                				'rgba(255, 206, 86, 1)',
                				'rgba(75, 192, 192, 1)',
                				'rgba(153, 102, 255, 1)',
                				'rgba(255, 159, 64, 1)'
            				],
            				borderWidth: 1
        				}
    			]
			};

			// Options of the chart depending on chart type
			var options;
			if (chartType == 'pie'){
				options = {
				
				}
			}	
			
			// Create chart based on settings from above
			var chart = new Chart(chartId, {
    				type: chartType,
    				data: data,
    				options: options
				});
}