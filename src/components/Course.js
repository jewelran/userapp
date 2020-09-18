import React, {useState}from 'react';
import './Course.css'
import Cart from './Cart/Cart';
const Courses = (props) => {
    const course = props.course;
    const [cart , setCart] = useState([]);
    const addCourseHandler= (courses) => {
        setCart([...cart, courses]);
    }
 
    // const total = cart.reduce((total, cart ) =>  total + cart.price, 0);

    return (
        <div className="full_container">
        <div className= "container">
            <h4> Very wonderful Online Course here for you.</h4>
         {
           course.map(courses =><div className= "aside_cart">
               <div className="img_container">
                   <img className="img" src={courses.images} alt=""/>
               </div>
            {courses.name}<br/>
            {courses.price}<br/>
            <span>contact : {courses.phone}</span> <br/>
            <button type="button" className="btn btn-danger" onClick={ () => addCourseHandler(courses)}>Enroll now</button>
            <br/>
            <br/>
           </div>)
         }
         </div>
         <div className="cart">
        <h3>Total course: {course.length}</h3>
         <Cart cart = {cart}></Cart>
         </div>
        </div>
    );
};

export default Courses;