export const data = {
    datasets: [
      {
        label: "Dataset 1",
        borderColor: "rgb(15, 99, 13)",
        borderWidth: 1.5,
        data: [],
        fill: false,
        cubicInterpolationMode: 'monotone'
      }
    ]
  };
  
export const options = {
    scales: {
      xAxes: [
        {
          type: "realtime",
          realtime: {
            onRefresh: function() {
              const newData= {
                x: Date.now(),
                y: Math.random() * 100
              };
              data.datasets[0].data.push(newData);
            },
            delay: 1000,
            duration: 60000,
          }
        }
      ]
    },
    legend: {
      display: false
    }
  };