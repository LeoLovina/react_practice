# Styling 
- conditional inline style. 
    - example: set a style value dynamically. ```  <label style={{ color: isVaild ? '' : 'red' }}>Course Goal</label> ```
- change class dynamically (template literal)
    - CSS
    ``` CSS
    .form-control.invalid input {
    border-color: red;
    background: #fad0ec;
    }
    ```
    - JS
    ``` javascript
    <div className={`form-control ${isValid? '': 'invalid'}`}>
        <input type="text" onChange={goalInputChangeHandler} />
    </div>
    ```
# styled component
https://styled-components.com/
- It dynamically generate styled class for the component.Every generated class name is unique so that it can spill over to other components of the app. The style set up will never be able to affect the number of component in the app.
- install extension: vscode-styled-components
- Basic sample
    ``` javascript 
    import styled from 'styled-components';
    const Button = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    
    &:focus {
    outline: none;
    }`;
    ```
    Generated HTML
    ``` html
    <button type="submit" class="sc-bcXHqe jxVSuL">Add Goal</button>
    ```
- Add class to styled component
    ``` javascript 
    const FormControl = styled.div`
    margin: 0.5rem 0;
    &.invalid input {
    border-color: red;
    background: #fad0ec;
    }

    &.invalid label {
    color: red;
    }`;

    <FormControl className={isValid?'':'invalid'}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
    </FormControl>
    ```
    When isValid is false, then add class name invalid to FormControl. The generated HTML:
    ``` HTML
    <div class="sc-gswNZR bqtgLL invalid"><label>Course Goal</label><input type="text"></div>
    ```
- use props in styled component. Changing parts of the styles based on some props that are passed
    ``` javascript
    const FormControl = styled.div`
    margin: 0.5rem 0;

    & input {
    display: block;
    width: 100%;
    border: 1px solid ${props=> props.invalid? 'red': '#ccc'} ;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    } `;

    <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
    </FormControl>
    ```

# CSS module
- https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
- A CSS Module is a CSS file in which all class names and animation names are scoped locally by default
- This project supports CSS Modules alongside regular stylesheets using the [name].module.css file naming convention.
- Example
    ``` javascript 
    import styles from './Button.module.css';

    const Button = props => {
    return (
        <button type={props.type} className={styles.button} onClick={props.onClick}>
        {props.children}
        </button>
    );
    };
    ```
    The HTML result
    ``` html 
    <button type="submit" class="Button_button__1u4-R">Add Goal</button>
    ```
- Example
    - CourseInput.module.css
    ``` CSS
    .form-control {
    margin: 0.5rem 0;
    }

    .form-control label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    }
    .form-control.invalid input {
    border-color: red;
    background: #fad0ec;
    }

    .form-control.invalid label {
    color: red;
    }

    ```
    - CourseInput.js
    ``` javascript
    <div className={`${styles['form-control']} ${!isValid && styles.invalid}`} >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
    </div>
    ```
    - output HTML
    ``` html
    <div class="CourseInput_form-control__1i2th CourseInput_invalid__3SJSD">
        <label>Course Goal</label>
        <input type="text">
    </div>
    ```



