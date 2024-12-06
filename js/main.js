var nameInput=document.getElementById('name')
var emailInput=document.getElementById('email')
var passwordInput=document.getElementById('password')

var signUpBtn =document.getElementById('signUpBtn')
var signinBtn =document.getElementById('signinBtn')


var LoginBtn =document.getElementById('LoginBtn')
var signUpBtn2 =document.getElementById('signUpBtn2')

var productContainer=[]

if(localStorage.getItem('users') !== null){
    productContainer=JSON.parse(localStorage.getItem('users'))
}


function Exist(){
    for(var i=0 ; i<productContainer.length ; i++){
        if(productContainer[i].email.toLowerCase() == emailInput.value.toLowerCase()){
            return false
        }
}
}


function signUp(){

    if(nameInput.classList.contains('is-valid') && emailInput.classList.contains('is-valid') && passwordInput.classList.contains('is-valid')){

        if(nameInput.value =='' || emailInput.value =='' || passwordInput.value == ''){
            document.getElementById('exist').innerHTML=`<span class="text-danger">All inputs is required</span>`
        }
        else{
            var obj={
                code:nameInput.value,
                email:emailInput.value,
                password:passwordInput.value,
            }
        
            if(productContainer.length == 0){
                productContainer.push(obj)
                localStorage.setItem('users',JSON.stringify(productContainer))
                document.getElementById('exist').innerHTML=`<span class="text-success">Success</span>`
            }
          
                
            if( Exist() == false){
                document.getElementById('exist').innerHTML=`<span class="text-danger">email already exists</span>`
                    
            }
            else{
                productContainer.push(obj)
                localStorage.setItem('users',JSON.stringify(productContainer))
                document.getElementById('exist').innerHTML=`<span class="text-success">Success</span>`
            }
        }
    
    }
    else{
        document.getElementById('exist').innerHTML=` <div class="w-50 m-auto text-danger">
                    <h5>Name or Email or Password is not valid</h5>
                    <ul>
                        
                        <li>Site name must contain at least 3 characters</li>
                        <li>Site email must be a valid one</li>
                        <li>Site password must contain at least 3 characters</li>
                    </ul>
                </div>`
    }
}



function Login(){

    if(emailInput.value =='' || passwordInput.value == ''){
            document.getElementById('correct').innerHTML=`<span class="text-danger">All inputs is required</span>`
    }
    else{
        var Login={
            email:emailInput.valve,
            password:password.value,
        }
        for(var i =0; i<productContainer.length ; i++){
            if(productContainer[i].email.toLowerCase() === emailInput.value.toLowerCase() && productContainer[i].password.toLowerCase() === passwordInput.value.toLowerCase()){
                window.location=('./index1.html')
            }
            else{
                document.getElementById('correct').innerHTML=`<span class="text-danger">incorrect email or password</span>`
            }
        }
    }
}


function validation(input){
        var regex={
            name:/^\w{3,}/,
            email:/^\w{3,}@gmail\.com/,
            password:/^\w{3,}/,
        }
        if(regex[input.id].test(input.value)){
                input.classList.add('is-valid')
                input.classList.remove('is-invalid')
                return true
            }
            else{
                input.classList.add('is-invalid')
                input.classList.remove('is-valid')
                return false
                }
       
    }
    