const lixeiraController = require('../../../controllers/lixeiraController')
const { pegarUsuarioSessao } = require('../../base/js-base')

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var data = new google.visualization.DataTable()
	data.addColumn('string', 'Localizacao')
	data.addColumn('number', 'Quantidade Ocupada')

	lixeiraController.get(pegarUsuarioSessao().idusuario, (err, lixeiras) => {
		if (err) {
			console.log(err);
		} else {
			lixeiras.forEach(lixeira => { data.addRow([lixeira.localizacao, lixeira.quantidadeOcupada]) })

			var options = {
				title: 'Gráfico da quantidade ocupada de cada lixeira',
				width: 800,
				height: 600,
				legend: 'none',
				position: 'none',
			}

			var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_material'))
			chart.draw(data, options)
		}
	})
}