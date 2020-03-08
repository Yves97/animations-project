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
              <a class="nav-link" href="#" @click.prevent="activeView='app-home'">Home <span class="sr-only">(current)</span></a>
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