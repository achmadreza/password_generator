const password= document.getElementById("password")
const passwordLength= document.getElementById("passwordLength")
const saveButton= document.getElementById("saveButton")





const genPassword = (length) =>{
    const data="1234567890!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let generator='';
    for (let i=0; i <length; i++ ){
        generator+= data[Math.floor(Math.random()* data.length)]
    }
  return generator
}

const getPassword = ()=>{
    const newPass= genPassword(passwordLength.value)
    password.value=newPass
    setTimeout(() => {
        alert("password hasbeen generated")
    }, 1000)
}

const savePassword = () => {
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
  }