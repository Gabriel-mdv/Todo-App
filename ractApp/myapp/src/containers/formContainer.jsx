import React from 'react'
import { useState } from 'react';


const FormContainer = () => {


    const [formData, setFormData] = useState({
        name: 'Gabby',
        email: 'kalaka@gmail.com',
        isGood: true,
        employment: ''
    })


    // function to handle changes in the form
    function handleChange(e){
        const {name, value, type, checked} = e.target

        setFormData((prev) => {
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData)
    }
  return (
    <div>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name='name'
            placeholder='Name' 
            value={formData.name}
            onChange={handleChange}/>
            <br/>
            <input type="email" 
            name='email'
            placeholder='email' 
            value={formData.email}
            onChange={handleChange}/>
            <br /><br />


            {/* then a checkbos  */}

           <label htmlFor="isGood">Is Good?</label>
           <input id='idGood' type='checkbox'
           name='isGood'
           checked= {formData.isGood}
           onChange={handleChange}
           /> <br />

           {/* then radio buttons  */}


           <fieldset>
            <legend>Employment Status</legend>
            <input type="radio"
            value= 'employed' 
            name='employment'
            id='employed'
            onChange={handleChange}
            checked = {formData.employment === 'employed'}
            />
            <label htmlFor="employed">Employed</label> <br />

            <input type="radio"
            value= 'unemployed' 
            name='employment'
            id='unemployed'
            onChange={handleChange}
            checked = {formData.employment === 'unemployed'}
            />
            <label htmlFor="unemployed">UnEmployed</label> <br />

            <input type="radio"
            value= 'part-employed' 
            name='employment'
            id='part-employed'
            onChange={handleChange}
            checked = {formData.employment === 'part-employed'}
            />
            <label htmlFor="part-employed">Part-Employed</label>
           </fieldset>


            <br /><br />

            <button>Submit</button>
            
        </form>


        <div>
            <p>name: {formData.name}</p>
            <p>email: {formData.email}</p>
            <p>isGood: {JSON.stringify(formData.isGood)}</p>
        </div>






    </div>
  )
}

export default FormContainer;