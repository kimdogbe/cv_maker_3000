import { useState } from "react"

export default function Education() {
  const [education, setEducation] = useState([]);
  const [currentEducation, setCurrentEducation] = useState({schoolName:'', level:'', achievements:[], startDate:'', endDate:''});
  const [currentAchievement, setCurrentAchievement] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    setEducation([...education, currentEducation]);
    setCurrentEducation({schoolName:'', level:'', achievements:[], startDate:'', endDate:''})
  }

  function handleRemove(index) {
    setEducation(education.filter((_, i) => i !== index));
  }

  function handleAddAchievement(e) {
    e.preventDefault();
    setCurrentEducation({...currentEducation, achievements: [...currentEducation.achievements, currentAchievement]})
    setCurrentAchievement('');
  }

  console.log(currentEducation);
  
  return <>
    <h2>Education History 🎓</h2>
    {education.map((establishment, index) => 
      <div key={index}>
        <EducationItem key={index}
          schoolName={establishment.schoolName}
          level={establishment.level}
          achievements={establishment.achievements}
          startDate={establishment.startDate}
          endDate={establishment.endDate}
        />
        <button onClick={() => handleRemove(index)}>Remove</button>
      </div>
    )}
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor='schoolName'> School Name </label>
        <input id='schoolName' type='text' placeholder='eg. Ghana International School' 
        value={currentEducation.schoolName} 
        onChange={e => setCurrentEducation({...currentEducation, schoolName: e.target.value})}/>
      </div>
      <div>
        <label htmlFor='level'>Education Level </label>
        <input id='level' type='text' placeholder='eg. Primary, Secondary, Masters'  
        value={currentEducation.level} 
        onChange={e => setCurrentEducation({...currentEducation, level: e.target.value})}/>
      </div>
      <div>
        <ul>
          {currentEducation.achievements.map( (achievement, index) => 
          <li key={index}>{achievement}</li>)}
        </ul>
        <label htmlFor='level'>Achievements </label>
        <input id='level' type='text' placeholder='eg. GCSE level: 9A*, 2As, 1B'  
        value={currentAchievement} 
        onChange={e => setCurrentAchievement(e.target.value)} />
        <button onClick={handleAddAchievement}>Add</button>
      </div>
      <div>
        <label htmlFor='startDate'>Start Date </label>
        <input id='startDate' type='date' 
        value={currentEducation.startDate} 
        onChange={e => setCurrentEducation({...currentEducation, startDate: e.target.value})} />
      </div>
      <div>
        <label htmlFor='endDate'>End Date </label>
        <input id='endDate' type='date' max={Date.now()} 
        value={currentEducation.endDate} 
        onChange={e => setCurrentEducation({...currentEducation, endDate: e.target.value})} />
      </div>
      <button type='submit'>Add</button>
    </form>
  </>
}

function EducationItem({ schoolName, level, achievements=[], startDate, endDate}) {
  return <>
    <div className="education-heading">
      <h3>{schoolName} ({level})</h3>
      <p>{startDate} - {endDate}</p>
    </div>

    {
      achievements.length > 0 ? 
      <>
      <h3>Achievements</h3>
      <ul>
        {achievements.map((achievement, index) => 
          <li key={index}>{achievement}</li>
        )}
      </ul>
      </> : null
    }
  </>
}