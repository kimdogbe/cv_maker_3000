export default function BasicInfo() {
  return <>
    <h2>Basic info 👩🏽‍💼</h2>
    <form action="">
      <div>
        <label htmlFor='firstName'>First Name </label>
        <input id='firstName' type='text' placeholder='Kofi'/>
      </div>
      <div>
        <label htmlFor='firstName'>Last Name </label>
        <input id='firstName' type='text' placeholder='Anan'/>
      </div>
      <div>
        <label htmlFor='email'>Email Address </label>
        <input id='email' type='email' placeholder='kofi.anan@un.com'/>
      </div>
      <div>
        <label htmlFor='phoneNumber'>Phone Number </label>
        <input id='phoneNumber' type='tel' placeholder='0244593100'/>
      </div>
      <button type='submit'>Submit</button>
    </form>
  </>
}