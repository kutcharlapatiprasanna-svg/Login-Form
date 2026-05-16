import React from 'react';
import "./Style.css";

const LoginFormOne = () => {

  return (

    <div className='img'>

      <nav className='formOne'>
        <h1>ONLINE JOB APPLICATION FORM</h1>
      </nav>

      <div className='mainBox'>

        <fieldset>

          <legend>Personal Information</legend>

          <table>

            <tr>
              <td>First Name</td>
              <td><input type='text' /></td>

              <td>Middle Name</td>
              <td><input type='text' /></td>

              <td>Last Name</td>
              <td><input type='text' /></td>
            </tr>

            <tr>
              <td>Fathers Name</td>
              <td><input type='text' /></td>

              <td>Mothers Name</td>
              <td><input type='text' /></td>
            </tr>

            <tr>
              <td>Current Address</td>
              <td><textarea></textarea></td>

              <td>Permanent Address</td>
              <td><textarea></textarea></td>
            </tr>

            <tr>
              <td colspan="6" className='heading'>
                Phone Numbers
              </td>
            </tr>

            <tr>
              <td>Landline Number</td>
              <td><input type='number' /></td>

              <td>Mobile Number</td>
              <td><input type='number' /></td>
            </tr>

            <tr>
              <td>Date Of Birth</td>
              <td><input type='date' /></td>

              <td>Place Of Birth</td>
              <td><input type='text' /></td>
            </tr>

            <tr>
              <td>Select Gender</td>

              <td>
                <input type='radio' name='gender' /> Male
              </td>

              <td>
                <input type='radio' name='gender' /> Female
              </td>
            </tr>

            <tr>
              <td>Highest Qualifications</td>
              <td><input type='text' /></td>

              <td>Year Of Passing</td>
              <td><input type='date' /></td>
            </tr>

            <tr>
              <td>Languages Known</td>

              <td>
                <input type='checkbox' /> Telugu
              </td>

              <td>
                <input type='checkbox' /> Hindi
              </td>

              <td>
                <input type='checkbox' /> English
              </td>
            </tr>

            <tr>
              <td>Select Ur Hobbies</td>

              <td>
                <input type='checkbox' /> Eating
              </td>

              <td>
                <input type='checkbox' /> Coding
              </td>

              <td>
                <input type='checkbox' /> Sleeping
              </td>
            </tr>

            <tr>
              <td>About Yourself</td>

              <td>
                <textarea></textarea>
              </td>
            </tr>

            <tr>
              <td>Nationality</td>

              <td>
                <select>
                  <option>Indian</option>
                  <option>American</option>
                  <option>Canadian</option>
                </select>
              </td>
            </tr>

          </table>

        </fieldset>

      </div>

    </div>
  );
}

export default LoginFormOne;