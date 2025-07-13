
// import './App.css'
// import Student from './Student.jsx'
// function App() {
//   return (
//     <>
//     <Student 
//       image="https://as1.ftcdn.net/jpg/01/03/97/52/1000_F_103975260_sOa1Cq2QNhenLiovsuFo39qRZbi0eXZM.jpg"
//       name="John Doe"
//       age={20} isStudent={0}/>  

// <Student 
//       image="https://as1.ftcdn.net/jpg/01/03/97/52/1000_F_103975260_sOa1Cq2QNhenLiovsuFo39qRZbi0eXZM.jpg"
//       name="John Doe"
//       age={20} isStudent={0}/>


//     </>
  
//   );
// }

// export default App




function Student(props) {
    return (
        <div className="student-card">
            <img className="student-image" src={props.image} alt="Student" />
            <h2 className="student-name">{props.name}</h2>
            <p className="student-age">Age:{props.age}</p>
            <p>Student: {props.isStudent ? "Yes":"No"}</p>
        </div>
    );

}
export default Student;