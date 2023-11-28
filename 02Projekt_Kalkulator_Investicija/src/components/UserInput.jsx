// Funkcionalna komponenta za unos korisničkih podataka
export default function UserInput({ onChange, userInput }) {
  return (
    <section id='user-input'>
      {/* Grupa unosa podataka */}
      <div className='input-group'>
        <p>
          <label>Početna investicija</label>{' '}
          <input
            type='number'
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Godišnja investicija</label>{' '}
          <input
            type='number'
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange('annualInvestment', event.target.value)
            }
          />
        </p>
      </div>

      {/* Druga grupa unosa podataka */}
      <div className='input-group'>
        <p>
          <label>Očekivani povrat</label>{' '}
          <input
            type='number'
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label>Trajanje</label>
          <input
            type='number'
            required
            value={userInput.duration}
            onChange={(event) => onChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
