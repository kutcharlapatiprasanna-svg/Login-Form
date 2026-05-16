import React from 'react';
import "./Style.css";

const LoginFormTwo = () => {
    return (
        <div className='img'>

            <div className='mainBox'>
                <fieldset>

                    <legend>Education Details</legend>

                    <table>
                        <tr>

                            <td>S.NO</td>
                            <td>Qulifications</td>
                            <td>Institute/University</td>
                            <td>Year Of Passing</td>
                            <td>Marks(%)</td>
                        </tr>


                        <tr>

                            <td>1</td>

                            <td><input /></td>
                            <td><input /></td>
                            <td><input type='date' /></td>
                            <td><input /></td>

                        </tr>



                        <tr>

                            <td>2</td>

                            <td><input /></td>
                            <td><input /></td>
                            <td><input type='date' /></td>
                            <td><input /></td>

                        </tr>


                        <tr>

                            <td>3</td>

                            <td><input /></td>
                            <td><input /></td>
                            <td><input type='date' /></td>
                            <td><input /></td>

                        </tr>











                    </table>
                </fieldset>
            </div>

        </div>
    );
}

export default LoginFormTwo;
