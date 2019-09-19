import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


function userForm({ values, errors, touched }) {
 
    return(
    <div className="form">
   <Form> 
    <Field type="text" name="name" placeholder="Name" />
    <Field type="email" name="email" placeholder="Email" /> 
    <Field type="password" name="password" placeholder="Password" />  
   </Form>

    <Field
    type="checkbox"
    name="terms"   
    
    />
    </div>
    )
}

const FormikuserForm = withFormik({
 mapPropsToValues({name, email, password, terms}) {
     return {
         name: name || "",
         email: email || "",
         password: password || "",
         terms: terms || false
     }
 }
})(userForm)
export default FormikuserForm;