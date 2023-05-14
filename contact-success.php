<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
  <meta name="generator" content="Hugo 0.72.0">
  <title>About</title>


  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
  <script src="bootstrap/js/bootstrap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>

  <link rel="stylesheet" href="css/style.css">
  <script src="js/contact-form.js"></script>
</head>

<body>

  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">what am i doing</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto mb-2 mb-md-0">
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>

  <main>

    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active bg-secondary">
          <div class="container">
            <div class="carousel-caption text-left">
              <h1 class="contact-header">success !</h1>
              <p>we will never get back to you with these details</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- credentials -->
    <div class="contact-form">
      <p>Check your details below and we will get back to you soon!</p>
      <p>Name: <?php echo $_POST["name"] ?> </p>
      <p>Email: <?php echo $_POST["email"] ?> </p>
      <p>Hp: <?php echo $_POST["hp"] ?> </p>
      <p>Message: <?php echo $_POST["msg"] ?> </p>
      <p>
        <?php 
          if (isset($_POST['subscribe']) && $_POST['subscribe'] == 1) {
            echo "Thanks for subscribing !! :D";
          }
          else {
            echo "you didnt subscribe to the newsletter :c";
          }
        ?> 
      </p>
    </div>  


    <div class="container">
        <hr class="featurette-divider">
    </div>
    

    <!-- FOOTER -->
    <footer class="container">
        <p>uohhhhhhhhhh</p>
        
    </footer>
  </main>



</body>

</html>