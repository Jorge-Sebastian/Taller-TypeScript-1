import { series } from "./data.js";
const seriesTableBody = document.getElementById("series-table-body");
const averageSeasonsElement = document.getElementById("average-seasons");
function renderSeries() {
    if (!seriesTableBody)
        return;
    let rows = "";
    series.forEach((serie) => {
        rows += `
      <tr>
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      </tr>
    `;
    });
    seriesTableBody.innerHTML = rows;
}
function calculateAverageSeasons() {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}
function renderAverageSeasons() {
    if (!averageSeasonsElement)
        return;
    const average = calculateAverageSeasons();
    const formattedAverage = Number.isInteger(average) ? average.toString() : average.toFixed(2);
    averageSeasonsElement.textContent = `Seasons average: ${formattedAverage}`;
}
renderSeries();
renderAverageSeasons();
