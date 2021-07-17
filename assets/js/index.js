const monthlyWrapper = document.getElementById("monthlyCTX");
const activesWrapper = document.getElementById("activesCTX");
const revenueWrapper = document.getElementById("revenue");

const monthlyData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "monthly sales",
      data: [5, 14, 4, 8, 9, 6, 8],
      backgroundColor: [
        "#84e8f4",
        "#4f46ba",
        "#84e8f4",
        "#4f46ba",
        "#84e8f4",
        "#4f46ba",
      ],
      borderWidth: 1,
      borderRadius: 4,
    },
  ],
};
const monthlyOptions = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (val, i) {
          return this.getLabelForValue(val) + "k";
        },
      },
    },
  },
};

const activeData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "active users",
      data: [150, 200, 50, 400, 600, 500, 450],
      backgroundColor: [
        "#84e8f4",
        "#4f46ba",
        "#84e8f4",
        "#4f46ba",
        "#84e8f4",
        "#4f46ba",
      ],
      borderWidth: 1,
      borderRadius: 4,
    },
  ],
};

const activeOptions = {
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 600,
    },
  },
};

const revenueData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Revenue",
      data: [12, 24, 19, 31, 20, 27, 37],
      backgroundColor: [
        "#84e8f4",
        "#4f46ba",
        "#84e8f4",
        "#4f46ba",
        "#84e8f4",
        "#4f46ba",
      ],
      borderWidth: 1,
      borderRadius: 4,
    },
  ],
};

const revenueOptions = {
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 50,
    },
  },
};

const monthlyCTX = new Chart(monthlyWrapper, {
  type: "bar",
  data: monthlyData,
  options: monthlyOptions,
});

const activesCTX = new Chart(activesWrapper, {
  type: "line",
  data: activeData,
  options: activeOptions,
});

const revenueCTX = new Chart(revenueWrapper, {
  type: "line",
  data: revenueData,
  options: revenueOptions,
});
