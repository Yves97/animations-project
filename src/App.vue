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
              <a class="nav-link" href="#" @click.prevent="activeView='app-about'">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="activeView='app-portfolio'">Portofolio</a>
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
    <section id="services">
      <div class="container">
        <p>Our Services</p>
        <h3>Services</h3>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="box-service">
              <span>
                <i class="fa fa-gitlab" aria-hidden="true"></i>
              </span>
              <h3>Graphic design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime quis adipisci dolor itaque sed, ipsum quibusdam inventore earum, possimus iste autem nihil. Deleniti, dolor deserunt velit officia possimus quibusdam?</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="box-service">
              <span>
                <i class="fa fa-gitlab" aria-hidden="true"></i>
              </span>
              <h3>Graphic design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime quis adipisci dolor itaque sed, ipsum quibusdam inventore earum, possimus iste autem nihil. Deleniti, dolor deserunt velit officia possimus quibusdam?</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="box-service">
              <span>
                <i class="fa fa-gitlab" aria-hidden="true"></i>
              </span>
              <h3>Graphic design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime quis adipisci dolor itaque sed, ipsum quibusdam inventore earum, possimus iste autem nihil. Deleniti, dolor deserunt velit officia possimus quibusdam?</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="box-service">
              <span>
                <i class="fa fa-gitlab" aria-hidden="true"></i>
              </span>
              <h3>Graphic design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime quis adipisci dolor itaque sed, ipsum quibusdam inventore earum, possimus iste autem nihil. Deleniti, dolor deserunt velit officia possimus quibusdam?</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="box-service">
              <span>
                <i class="fa fa-gitlab" aria-hidden="true"></i>
              </span>
              <h3>Graphic design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime quis adipisci dolor itaque sed, ipsum quibusdam inventore earum, possimus iste autem nihil. Deleniti, dolor deserunt velit officia possimus quibusdam?</p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a href="#">
            <button>View All services</button>
          </a>
        </div>
      </div>
    </section>
    <section id="portfolio">
      <p>Awesome Works</p>
      <h3>Portfolio</h3>
      <div class="box-filter">
        <button>all</button>
        <button>web</button>
        <button>design</button>
        <button>brand</button>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <a href="#">
            <div class="box-portfolio">
              <span class="bg-black"></span>
              <img src="../public/images/sq_img_1.jpg" class="img-fluid " alt="">
            </div>
          </a>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <a href="#">
            <div class="box-portfolio">
              <img src="../public/images/sq_img_2.jpg" class="img-fluid " alt="">
            </div>
          </a>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 ">
          <a href="#">
            <div class="box-portfolio">
              <img src="../public/images/sq_img_3.jpg" class="img-fluid design" alt="">
            </div>
          </a>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <a href="#">
            <div class="box-portfolio">
              <img src="../public/images/sq_img_4.jpg" class="img-fluid brand" alt="">
            </div>
          </a>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <a href="#">
            <div class="box-portfolio">
              <img src="../public/images/sq_img_5.jpg" class="img-fluid brand" alt="">
            </div>
          </a>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <a href="#">
            <div class="box-portfolio">
              <img src="../public/images/sq_img_6.jpg" class="img-fluid " alt="">
            </div>
          </a>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <a href="#">
            <div class="box-portfolio">
              <img src="../public/images/sq_img_7.jpg" class="img-fluid" alt="">
            </div>
          </a>
        </div>
      </div>
    </section>
    <section id="agency">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div class="box-video">
              <button><i class="fa fa-play-circle" aria-hidden="true"></i></button>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div class="agency-content">
              <h3>WE ARE WEB AGENCY</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni architecto odio corrupti harum explicabo, enim a dolor beatae atque aliquid eius. Pariatur saepe illo molestiae alias sint. Eligendi, soluta ipsum?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam fugit labore obcaecati numquam veniam quidem rerum blanditiis molestiae, sequi doloremque dolores, ullam hic soluta iste alias, in et voluptas aut.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <div class="footer-content">
              <p>Yves Product</p>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Graphic design</a>
                </li>
                <li>
                  <a href="#">Front end Developper</a>
                </li>
                <li>
                  <a href="#">Ressources</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <div class="footer-content">
              <p>Yves Product</p>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Graphic design</a>
                </li>
                <li>
                  <a href="#">Front end Developper</a>
                </li>
                <li>
                  <a href="#">Ressources</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <div class="footer-content">
              <p>Yves Product</p>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Graphic design</a>
                </li>
                <li>
                  <a href="#">Front end Developper</a>
                </li>
                <li>
                  <a href="#">Ressources</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <div class="footer-content">
              <p>Yves Product</p>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Graphic design</a>
                </li>
                <li>
                  <a href="#">Front end Developper</a>
                </li>
                <li>
                  <a href="#">Ressources</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <keep-alive>
      <component :is="activeView"></component>
    </keep-alive>
  </div>
</template>

<script>
  // import About from './components/About'
  export default {
    data(){
      return{
        activeView : 'app-about'
      }
    },
    methods: {
      // wow(){
      //   console.log('yves')
      // }
    },
  }
</script>