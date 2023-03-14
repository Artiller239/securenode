var a;
function pass(){
    if(a==1){
        document.getElementById('key-pass').type='password';
        document.getElementById('pass-icon').src='Images/password-icon open.png';
        a=0;
    }
    else{
        document.getElementById('key-pass').type='text';
        document.getElementById('pass-icon').src='Images/password-icon closed.png';
        a=1;
    }
}