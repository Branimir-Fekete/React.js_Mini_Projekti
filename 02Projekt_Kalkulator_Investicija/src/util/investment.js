// Funkcija calculateInvestmentResults očekuje JS objekt kao argument
// Objekt treba sadržavati sljedeće svojstva
// - initialInvestment: Početni iznos investicije
// - annualInvestment: Iznos investiran svake godine
// - expectedReturn: Očekivani (godišnji) postotak povrata
// - duration: Trajanje investicije (vremenski okvir)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // identifikator godine
      interest: interestEarnedInYear, // iznos kamate zarađene te godine
      valueEndOfYear: investmentValue, // vrijednost investicije na kraju godine
      annualInvestment: annualInvestment, // investicija dodana te godine
    });
  }

  return annualData;
}

// Intl API koji pruža preglednik koristi se za pripremu formater objekta
// Ovaj objekt nudi metodu "format()" koja se može koristiti za oblikovanje brojeva kao valute
// Primjer korištenja: formatter.format(1000) => rezultira "$1,000"
export const formatter = new Intl.NumberFormat('hr-HR', {
  style: 'currency',
  currency: 'HRK',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
