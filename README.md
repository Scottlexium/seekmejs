# SeekMeJs , by Scott Lexium

SeekMeJs is a Javascript library for dealing with mini DOM manipulation issues in html, usefull for form input relating to password type, with this library you can create a seek password function with no javascript code.


### Script
```html
<script src="https://cdn.jsdelivr.net/gh/Scottlexium/seekmejs/seek.js"></script>
```
### Notice
    You could add more class names as prefered to enable extended styling and maniputation of tags, this is just a very simple and small library, fast and super light.

#### Steps: 
   - Create an input field having class "password_input", this is just for the javascript code to detect the tag.
   - Create an Element it could be a span or a button, provided it has the class of "pwd_seek".

    


## Usage

```html
 <form action="">
        <fieldset>
            <legend>Username</legend>
            <input type="text" name="" id="" placeholder="username">
        </fieldset>
        <!-- password section -->
        <fieldset>
            <legend>Password</legend>
            <input class="password_input" type="password" name="" id="" placeholder="password">
            <!-- Span for the toggle switch -->
            <span class="">
                <!-- hidden checkbox -->
                <input hidden type="checkbox" class="pwd_seek" name="" id="eye">
                <label for="eye">seek</label>
            </span>
        </fieldset>
        <button>Login</button>
    </form>
```
## License
[MIT](https://choosealicense.com/licenses/mit/)