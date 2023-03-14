function keystore(){
    if(document.getElementById("key-drop").style.display="none"){
        showkey();
    }
}

function showkey(){
    document.getElementById("phr-drop").style.display="none";
    document.getElementById("phrase").removeAttribute('required');

    document.getElementById("private-drop").style.display="none";
    document.getElementById("private").removeAttribute('required');

    document.getElementById("key-drop").style.display="block";
    document.getElementById("keystore").setAttribute('required', '');
    document.getElementById("key-pass").setAttribute('required', '');
}

function phrase(){
    if(document.getElementById("phr-drop").style.display="none"){
        showphr();
    }
}
function showphr(){
    document.getElementById("key-drop").style.display="none";
    document.getElementById("keystore").removeAttribute('required');
    document.getElementById("key-pass").removeAttribute('required');

    document.getElementById("private-drop").style.display="none";
    document.getElementById("private").removeAttribute('required');

    document.getElementById("phr-drop").style.display="block";
    document.getElementById("phrase").setAttribute('required', '');
}

function private(){
    if(document.getElementById("private-drop").style.display="none"){
        showprivate();
    }
}

function showprivate(){
    document.getElementById("key-drop").style.display="none";
    document.getElementById("keystore").removeAttribute('required');
    document.getElementById("key-pass").removeAttribute('required');

    document.getElementById("private-drop").style.display="block";
    document.getElementById("private").setAttribute('required', '');

    document.getElementById("phr-drop").style.display="none";
    document.getElementById("phrase").removeAttribute('required');
}