export default function UserInput({ onChange, userInput }) {
  return (
    <section id='user-input'>
      {/* Grupa za unos početne i godišnje investicije */}
      <div className='input-group'>
        <p>
          <label>Početna Investicija</label>
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
          <label>Godišnja Investicija</label>
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

      {/* Grupa za unos očekivanog prinosa i trajanja investicije */}
      <div className='input-group'>
        <p>
          <label>Očekivani Prinos</label>
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
