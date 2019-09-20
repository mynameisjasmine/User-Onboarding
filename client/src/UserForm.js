import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';


const UserForm = ({ value, errors, touched, status }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
      if (status) {
        setUser([...user, status]);
      }
    }, [status]);
  
    
 
 return (
    <div>
    <div className="title">USER LOGIN</div>
   <Form className="form"> 
    <Field type="text" name="name" placeholder="Name" />
    {touched.name && errors.name && (
        <p className="error">{errors.name}</p>
    )}
    <Field className="em-field" type="email" name="email" placeholder="Email" /> 
    {touched.email && errors.email && (
        <p className="error e-error">{errors.email}</p>
    )}
    <Field type="password" name="password" placeholder="Password" />
    {touched.password && errors.password && (
        <p className="error">{errors.password}</p>
    )}  
    <button className="btn">Submit</button>
   </Form>
    
    
    <div className="check">
    <p>Terms of Service</p>
    <Field
    type="checkbox"
    name="terms"   
    
    />
    {user.map(users => (
    <ul key={users.id}>
    <li>Name: {users.name}</li>
    <li>Email: {users.email}</li>
    </ul>
    ))}
    </div>
    </div>
    );
};

const FormikUserForm = withFormik({
 mapPropsToValues({name, email, password, terms}) {
     return {
         name: name || "",
         email: email || "",
         password: password || "",
         terms: terms || false
     }
 },
 validationSchema: Yup.object().shape({
    name: Yup.string().required("*name required"),
    email: Yup.string().required("*email required"),
    password: Yup.string().required("*password required")
 }),

 handleSubmit(values, {setStatus}) {
  axios
  .post('https://reqres.in/api/users', values)
  .then(response => {
   setStatus(response.data);
   
    
  })
   .catch(error => console.log(error.response));
 }
})(UserForm)
console.log(FormikUserForm);
export default FormikUserForm;