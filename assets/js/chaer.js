
   var options = {
  series: [
    {
      name: 'current week',
      data: [5,10, 18, 15, 10, 12, 15, 20, 22],
    },
     {
      name: 'previous week',
      data: [12,10, 8, 8, 10, 12, 13, 14, 15],
    },
  ],
  stroke: {
    width: 5,
    curve: 'smooth',
  },
    forecastDataPoints: {
    count: 2,
  },
  colors: ["#F97316", "#161616"],
  chart: {
    height: 350,
    width:'100%',
    type: 'line',
    zoom: {
      enabled: false,
    },
     toolbar: {
    show: false
  },
  dropShadow: {
    enabled: true,
    enabledOnSeries: [1],
    top: 4,        // vertical offset
    left: 0,       // horizontal offset
    blur: 10,       // how soft/spread the shadow is
    opacity: 0.2, // how visible the shadow is
    color: "#FEEAE0"  // shadow color
  }
  },
  dataLabels: {
    enabled: false,
  },
 
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yaxis: {
    min: 0,
    max: 30,
    tickAmount: 3,
    labels: {
      formatter: (v) => v === 0 ? "0" : v + "M",
      style: { colors: "#98A2B3", fontSize: "13px" }
    }
  },
  tooltip: {
    shared: false,
    y: { formatter: (v) => v != null ? "$" + v.toFixed(1) + "M" : "" }
  },
  legend: {
  show: false
}
}

var chart = new ApexCharts(document.querySelector('#chart1'), options)
chart.render()


  
  var options = {
  series: [10, 30, 40, 20],
  colors:["#6F82A6", "#F97316", "#0F172A", "#3F527B"],
  chart: {
     width: '100%',
    type: 'donut',
    height: 235,
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D'],
  legend: {
    show: false,
  },
    dataLabels: {
    enabled: false   // <-- this removes the % labels on the segments
  },
  title: {
     text: 'Total Sales',
     align: 'center',
     style: {
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'inherit',
    color: '#1C1C1C'
  }
  },
 
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 320,
        },
      },
    },
  ],
}

var chart = new ApexCharts(document.querySelector('#chart2'), options)
chart.render()