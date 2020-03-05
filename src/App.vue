<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-sm">
        <a class="navbar-brand" href="#">Scenic</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Portofolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="header-text">
        <h1>we are scenic</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, enim obcaecati autem vel atque incidunt dolorum libero aspernatur? Officiis reiciendis optio maxime asperiores fugiat quod, animi a laboriosam doloribus id?</p>
        <a href="#">
          <button>Get In touch</button>
        </a>
      </div>
    </header>
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-xl-6 col-lg-6">
            <div class="about-content">
              <small>About us</small>
              <h3>Who are you guys</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum laudantium modi reiciendis velit maiores consequuntur obcaecati similique ea facilis libero amet iste, dolorem hic voluptatibus veritatis aliquam possimus. Animi.</p>
              <a href="#">
                <span>Read more about us</span>
              </a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-xl-6 col-lg-6">
            <div class="about-content-2">
              <div class="box-img box-1">
                <img src="../public/images/sq_img_10.jpg" class="img-fluid" alt="">
              </div>
              <div class="box-img box-2">
                <img src="../public/images/sq_img_6.jpg" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <hr>
    </div>
    <section id="statistics">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div class="statistic-box">
              <h3>
                <i class="fa fa-mobile" aria-hidden="true"></i> 
                <span>2000</span>
              </h3>
              <p>Completed Project</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div class="statistic-box">
              <h3>
                <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                <span>2000</span>
              </h3>
              <p>Completed Project</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div class="statistic-box">
              <h3>
                <i class="fa fa-trophy" aria-hidden="true"></i>
                <span>2000</span>
              </h3>
              <p>Completed Project</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div class="statistic-box">
              <h3>
                <i class="fa fa-puzzle-piece" aria-hidden="true"></i>
                <span>2000</span>
              </h3>
              <p>Completed Project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>