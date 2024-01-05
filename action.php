<?php
// var_dump($_FILES);
//donc le fichier est bien envoyé sur le serveur
//si c'etait pas  le cas la variable gloabale sera vide


   if(move_uploaded_file($_FILES["fichier"]["tmp_name"],'dossier/'.$_FILES["fichier"]["name"])){

    echo "OK";
   }

?>