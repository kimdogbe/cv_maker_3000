export default function Education() {
  return <>
    <h2>Education History 🎓</h2>
    <form action="">
      <div>
        <label htmlFor='schoolName'> School Name </label>
        <input id='schoolName' type='text' placeholder='eg. Ghana International School'/>
      </div>
      <div>
        <label htmlFor='level'>Education Level </label>
        <input id='level' type='text' placeholder='eg. Primary, Secondary, Masters'/>
      </div>
      <div>
        <label htmlFor='startDate'>Start Date </label>
        <input id='startDate' type='date' />
      </div>
      <div>
        <label htmlFor='endDate'>End Date </label>
        <input id='endDate' type='date' max={Date.now()}/>
      </div>
      <button type='submit'>Add</button>
    </form>
  </>
}