import { calculateInvestmentResults, formatter } from '../util/investment.js';
export default function Results({ input }) {
  // Niz za pohranu izračunatih rezultata investicije
  const results = [];

  // Izračunaj rezultate investicije na temelju unesenih podataka
  calculateInvestmentResults(input, results);

  // Provjeri postoje li rezultati koje treba prikazati
  if (results.length === 0) {
    return <p className='center'>Pogrešni uneseni podaci.</p>;
  }

  // Izračunaj početnu investiciju za daljnje korištenje
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  // Prikaz rezultata investicije u obliku tablice
  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Godina</th>
          <th>Vrijednost Investicije</th>
          <th>Kamata (Godišnje)</th>
          <th>Ukupna Kamata</th>
          <th>Uloženi Kapital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          // Izračunaj ukupnu kamatu i ukupni uloženi iznos za svaku godinu
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          // Prikaz retka s podacima o investiciji za svaku godinu
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
