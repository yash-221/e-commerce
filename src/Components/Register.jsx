import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    onSubmit: values => {
      console.log('valie', values);
      // alert(JSON.stringify(values, null, 2));
      axios.post('https://example.com/api/Register', values)
        .then(result => {
          console.log(result)
        })

        .catch(error => {
          console.log(error)
        })
    },
  });
  return (
    <div>
      <div className="container mb-5">

        <div className="row">
          <div className="col-12 text-center py-2 my-4">
            <h1>Register Page</h1>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className=" col- 12 md-5 d-flex justify-content-center">

            <div className="col-3">

              <form onSubmit={formik.handleSubmit}>

                <div className="mb-4 mt-4">
                  <label htmlFor="Email">Email :</label>
                  <input
                    id="Email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>

                <div className="mb-3">

                  <label htmlFor="Password">Password</label>
                  <input
                    id="Password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
                <div className=" mb-5 mt-4 d-flex justify-content-center">
                  <button className='btn btn-dark' type="submit">Submit</button>
                </div>


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register