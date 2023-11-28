import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id='header'>
      <img
        src={logo}
        alt='Logo prikazuje novčić'
      />

      <h1>Kalkulator Investicija</h1>
    </header>
  );
}
