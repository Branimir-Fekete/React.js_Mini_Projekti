// Ova funkcija očekuje JS objekt kao argument
// Objekt treba sadržavati sljedeće svojstva
// - initialInvestment: Početni iznos ulaganja
// - annualInvestment: Iznos koji se ulaže svake godine
// - expectedReturn: Očekivani (godišnji) postotak povrata
// - duration: Trajanje ulaganja (vremenski okvir)
export function calculateInvestmentResults(
  { initialInvestment, annualInvestment, expectedReturn, duration },
  results
) {
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    results.push({
      year: i + 1, // identifikator godine
      interest: interestEarnedInYear, // iznos kamata zarađenih te godine
      valueEndOfYear: investmentValue, // vrijednost ulaganja na kraju godine
      annualInvestment: annualInvestment, // ulaganje dodano te godine
    });
  }
}

// API za međunarodizaciju (Intl) dostupan u pregledniku koristi se za pripremu objekta formatera
// Ovaj objekt nudi "format()" metodu koja se može koristiti za oblikovanje brojeva kao valute
// Primjer korištenja: formatter.format(1000) => generira "1.000,00 kn"
export const formatter = new Intl.NumberFormat('hr-HR', {
  style: 'currency',
  currency: 'HRK', // Hrvatska kuna
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
