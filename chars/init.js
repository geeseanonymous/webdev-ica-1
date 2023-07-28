
function init() {

    var header = document.getElementsByTagName("header")[0];
    header.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
    <div class="container-fluid">
    <a class="navbar-brand" href="../index.html">archive archive</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto mb-2 mb-md-0">
        <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="../about.html">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../contact.html">Contact</a>
        </li>
        <li class="nav-item">
            <div class="dropdown">
            <a class="nav-link" aria-current="page" href="../chars.html">things</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="shun.html">shun</a>
                <a class="dropdown-item" href="koharu.html">koharu</a>
            </div>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../noskill.html">game</a>
        </li>
        </ul>
        <form class="d-flex" method="get" action="../search.html">
        <input name="query" class="form-control mr-2" type="search" placeholder="Search for a character!" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
    </div>
    </nav>
    `;


    var footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML = `
    <p>idk i dont have copyright on this</p>
            
    <a target="_blank" href="https://www.instagram.com/qeratey"><img class="social-media" src="../css/media/images/ig-icon.png" width="30"></a>
    `



}

window.onload = init;


