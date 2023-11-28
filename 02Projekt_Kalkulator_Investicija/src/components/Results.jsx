import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ input }) {
  // Izračunavanje podataka o investiciji pomoću funkcije calculateInvestmentResults
  const resultsData = calculateInvestmentResults(input);

  // Izračunavanje početne investicije
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  // Prikaz tablice s rezultatima
  return (
    <table id='result'>
      {/* Zaglavlje tablice */}
      <thead>
        <tr>
          <th>Godina</th>
          <th>Vrijednost investicije</th>
          <th>Kamata (Godišnje)</th>
          <th>Ukupna Kamata</th>
          <th>Uloženi Kapital</th>
        </tr>
      </thead>
      {/* Tijelo tablice */}
      <tbody>
        {resultsData.map((yearData) => {
          // Izračunavanje ukupne kamate i uloženog kapitala za svaku godinu
          const totalIntrest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          const totalAmountInvested = yearData.valueEndOfYear - totalIntrest;

          // Prikaz reda tablice za svaku godinu
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td> {/* Stupac za godinu */}
              <td>{formatter.format(yearData.valueEndOfYear)}</td>{' '}
              {/* Stupac za vrijednost investicije */}
              <td>{formatter.format(yearData.interest)}</td>{' '}
              {/* Stupac za kamatu (godisnje) */}
              <td>{formatter.format(totalIntrest)}</td>{' '}
              {/* Stupac za ukupnu kamatu */}
              <td>{formatter.format(totalAmountInvested)}</td>{' '}
              {/* Stupac za uloženi kapital */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
