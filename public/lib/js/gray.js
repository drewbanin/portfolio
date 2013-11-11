/**
 * Gray theme for Highcharts JS
 * @author Torstein Hønsi
 */

Highcharts.theme = {
	//colors: ["#F8766D", "#7CAE00", "#00BFC4", "#C77CFF"],
	colors: ["#00A0B0", "#6A4A3C", "#CC333F", "#EDC951"],
	chart: {
		plotBackgroundColor: "#eeeeee",
		plotShadow: false,
		plotBorderWidth: 0,
		borderWidth: 0
	},
	title: {
		style: {
			color: '#333',
			font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#333',
			font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	xAxis: {
		gridLineWidth: 2,
		gridLineColor: 'rgba(255, 255, 255, .7)',
		borderWidth: 0,
		minorTickInterval: null,
		tickColor: '#CCC',
		labels: {
			style: {
				color: '#333',
				fontWeight: 'bold'
			}
		},
		title: {
			style: {
				color: '#333',
				font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	yAxis: {
		alternateGridColor: null,
		minorTickInterval: null,
		gridLineColor: 'rgba(255, 255, 255, .7)',
		lineWidth: 2,
		tickWidth: 0,
		labels: {
			style: {
				color: '#333',
				fontWeight: 'bold'
			}
		},
		title: {
			style: {
				color: '#333',
				font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	legend: {
		itemStyle: {
			color: '#333',
		},
		itemHoverStyle: {
			color: '#FFF'
		},
		itemHiddenStyle: {
			color: '#333'
		}
	},
	labels: {
		style: {
			color: '#333',
		}
	},
	tooltip: {
		backgroundColor: '#333',
		borderWidth: 0,
		style: {
			color: '#FFF'
		}
	},


	plotOptions: {
		series: {
			shadow: false
		},
		line: {
			dataLabels: {
				color: '#333'
			},
			marker: {
				lineColor: '#333'
			}
		},
		spline: {
			marker: {
				lineColor: '#333'
			}
		},
		scatter: {
			marker: {
				lineColor: '#333'
			}
		},
		candlestick: {
			lineColor: 'white'
		}
	}
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
