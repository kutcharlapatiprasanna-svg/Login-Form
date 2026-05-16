import React from 'react';
import "./Style.css";

const LoginFormThree = () => {
  return (
    <div className='img'>

      <div className='mainBox'>

        <fieldset>

          <legend>Other Details</legend>

          <table>

            <tr>
              <td>Job type</td>

              <td>
                <input type="radio" name="job" /> Permanent
              </td>

              <td>
                <input type="radio" name="job" /> Contract
              </td>

              <td>
                <input type="radio" name="job" /> Other
              </td>
            </tr>


            <tr>
              <td>Date Of Joining</td>

              <td>
                <input type="date" />
              </td>

              <td>Time Of Joining</td>

              <td>
                <input type="time" />
              </td>
            </tr>


            <tr>
              <td>Preferred Job Location</td>

              <td>
                <input type="radio" name="location" /> Hyderabad
              </td>

              <td>
                <input type="radio" name="location" /> Bangalore
              </td>

              <td>
                <input type="radio" name="location" /> Others
              </td>
            </tr>


            <tr>
              <td>Willing to Relocate to Hyderabad?</td>

              <td>
                <input type="radio" name="relocate" /> Yes
              </td>

              <td>
                <input type="radio" name="relocate" /> No
              </td>
            </tr>


            <tr>
              <td colspan="4" className='declaration'>
                Iam here declaring that all the above <br />
                mentioned information is true as <br />
                per my knowledge
              </td>
            </tr>


            <tr>
              <td></td>

              <td>
                <button>Submit</button>
              </td>

              <td>
                <button type='reset'>Reset</button>
              </td>
            </tr>

          </table>

        </fieldset>

      </div>

    </div>
  );
}

export default LoginFormThree;