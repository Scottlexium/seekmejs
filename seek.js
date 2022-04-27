    const pwdType = document.querySelector('.pwd_seek');
        const pwdInput = document.querySelector('.password_input')
        const loadValidate = pwdType.checked;
        window.addEventListener('load', (e)=>{
            loadValidate?console.log('Text mode'):console.log('pwd mode');
        })
        pwdType.addEventListener('click', changeType);
        function changeType() {
            const clickValidate = pwdType.checked;
            switch (clickValidate) {
                case true:
                    console.log("Text Mode");
                    pwdInput.type = 'text';
                    break;
                case false:
                console.log("Password mode");
                pwdInput.type = 'Password';
                default:
                console.log("Hidden as default ");
                    break;
            }
        }

    