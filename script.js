var forms = document.querySelector('.php-email-form');
forms.onsubmit=(e)=>{
    e.preventDefault()
    // console.log(forms);
    var formdata = new FormData(forms);
    upload(formdata,".progress-bar");
}

function initierBar(params) { 
    params.style.width='0%';
  }  

function changerLaprogression(chargement,bar){
  bar.style.width=chargement+'%';
  }


function upload(formdata,progressionBar) {
    var bar =document.querySelector(progressionBar);
    //console.log(bar);
    var xhr = new XMLHttpRequest();
    initierBar(bar);
    xhr.open('POST','action.php', true);
    xhr.upload.onprogress = function(e) {
    if (e.lengthComputable) {
            var chargement = (e.loaded / e.total) * 100;
            console.log(chargement + '% uploaded');
             bar.innerHTML=chargement;
            changerLaprogression(chargement,bar);
          }
      };
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
             if (this.responseText=="OK") {
                
                forms.querySelector(".fichier_envoyer").classList.remove("d-none");
                }
        }
    }
    xhr.send(formdata);
}