<?php

session_start();
if ($_SESSION['ingelogd'] != true) {
  header("Location: login.php");
}

?>




<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="language" content="NL">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Luuk van Duijvenbode">
    <meta name="keywords" content="">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="css/rad.css">
</head>
       
<body>
<header>
        <nav>
            </ul>
            <li><a id="uitloggen" href="uitloggen.php">Uitloggen</a></li>
            <li><a class="menu" href="homepage.php">Homepage</a></li>
            <li><a class="menu" href="#">Over ons</a></li>
            <li><a class="menu" href="rekenpagina1.php">Eenvoudige rekenpagina</a></li>
            <li><a class="menu" href="#">Reeksen</a></li>
            <li><a class="menu" href="#">Complexe rekenpagina</a></li>
            <li><a class="menu" href="rad.php">Rad van fortuin</a></li>
            <li><a class="menu" href="#">Game pagina</a></li>
            </ul>
        </nav>
    </header>
    <div id="dRad1"></div>
    <input id="draai" style="width:50px; margin-left: 48vw; margin-top: 60vh; position: absolute;" type="button" value="DRAAI" onclick="draaiRad()"  />
    <div id="dRad2"></div>
    <div id="antwoord1"></div>
    <div id="antwoord2"></div>
    <script  type="text/javascript" src="javascript/rad.js"></script> 
    </body>
    </html>