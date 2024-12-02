import { useState } from "react"

export default function BasicInfo() {
  const [info, setInfo] = useState({});
  const [editable, setEditable] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setEditable(!editable);
  }

  return <>
    <h2>Basic info 👩🏽‍💼</h2>
    {
      editable ? (
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name </label>
            <input id='firstName' type='text' placeholder='Kofi' value={info.firstName} onChange={e => setInfo({...info, firstName: e.target.value})}/>
          </div>
          <div>
            <label htmlFor='firstName'>Last Name </label>
            <input id='firstName' type='text' placeholder='Anan' value={info.lastName} onChange={e => setInfo({...info, lastName: e.target.value})}/>
          </div>
          <div>
            <label htmlFor='email'>Email Address </label>
            <input id='email' type='email' placeholder='kofi.anan@un.com' value={info.email} onChange={e => setInfo({...info, email: e.target.value})}/>
          </div>
          <div>
            <label htmlFor='phoneNumber'>Phone Number </label>
            <input id='phoneNumber' type='tel' placeholder='0244593100' value={info.phoneNumber} onChange={e => setInfo({...info, phoneNumber: e.target.value})}/>
          </div>
        </form>
    ) : (
        <div>
          <h3>Name: {info.firstName + info.lastName}</h3>
          <h3>Email: {info.email}</h3>
          <h3>Phone Number: {info.phoneNumber}</h3>
        </div>
    )
    }
    <button type='submit' onClick={handleSubmit}>{editable ? "Done" : "Edit"}</button>
  </>
}