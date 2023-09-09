const auth = firebase.auth()

document.getElementById("loginForm").addEventListener('submit', (event)=>{
    event.preventDefault()
})

auth.onAuthStateChanged((user)=>{
    if(user){
        location.replace('pomodrotimer.html')
    }
})


function login(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email, password)
}