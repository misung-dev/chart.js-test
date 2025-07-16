import "./App.css";

function App() {
  return (
    <div className="chartPage">
      <h1>통계</h1>
      <section>
        <article>
          <h3>전공별 참석 비율</h3>
          <div className="chartWrapper"></div>
        </article>
        <article>
          <h3>학번별 참석 비율</h3>
          <div className="chartWrapper"></div>
        </article>
        <article>
          <h3>전체 학생 중 이수 비율</h3>
          <div className="chartWrapper"></div>
        </article>
      </section>
    </div>
  );
}

export default App;
