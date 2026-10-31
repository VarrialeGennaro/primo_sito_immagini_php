<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <title>Document</title>
</head>
<body>

<div class="sidebar">
    <div class="logo-details">
      <i class='bx bx-data icon'></i>
        <div class="logo_name">Image Free DB</div>
        <i class='bx bx-menu' id="btn" ></i>
    </div>
    <ul class="nav-list">
      <li>
          <i class='bx bx-search' ></i>
         <input type="text" placeholder="Cerca...">
         <span class="tooltip">Search</span>
      </li>
      <li>
        <a href="index.php">
          <i class='bx bx-home'></i>
          <span class="links_name">Home</span>
        </a>
         <span class="tooltip">Home</span>
      </li>
      <li>
       <a href="login.php">
         <i class='bx bx-user' ></i>
         <span class="links_name">Login</span>
       </a>
       <span class="tooltip">Login</span>
     </li>
     <li>
       <a href="#">
         <i class='bx bx-chat' ></i>
         <span class="links_name">Messaggi</span>
       </a>
       <span class="tooltip">Messaggi</span>
     </li>
     <li>
       <a href="#">
         <i class='bx bx-folder' ></i>
         <span class="links_name">Categorie</span>
       </a>
       <span class="tooltip">Categorie</span>
     </li>
     <li>
       <a href="contact.php">
         <i class='bx bx-phone' ></i>
         <span class="links_name">Contattaci</span>
       </a>
       <span class="tooltip">Contattaci</span>
     </li>
     <li>
       <a href="#">
         <i class='bx bx-heart' ></i>
         <span class="links_name">Preferiti</span>
       </a>
       <span class="tooltip">Preferiti</span>
     </li>
     <li>
       <a href="#">
         <i class='bx bx-cog' ></i>
         <span class="links_name">Impostazioni</span>
       </a>
       <span class="tooltip">Impostazioni</span>
     </li>
     <li class="profile">
         <div class="profile-details">
           <div class="name_job">
           </div>
         </div>
         <i class='bx bx-log-out' id="log_out" ></i>
     </li>
    </ul>
  </div>
  <section class="home-section">
      <div class="text"></div>



</body>
</html>