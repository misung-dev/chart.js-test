import "./App.css";
import Chart from "chart.js/auto";
import { mockData } from "./data/mockData.js";

(async function () {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();

function App() {
  return (
    <div className="chartPage">
      <h1>chart.js</h1>
      <h3>전공별 참석 비율</h3>
      <section>
        <div className="chartWrapper">
          <canvas id="chart"></canvas>
        </div>
      </section>
      <section>
        <h3>학번별 참석 비율</h3>
        <div className="chartWrapper"></div>
      </section>
      <section>
        <h3>전체 학생 중 이수 비율</h3>
        <div className="chartWrapper"></div>
      </section>
    </div>
  );
}

export default App;
