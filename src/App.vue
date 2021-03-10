<template>
  <div id="app">
    <div class="links">
      <router-link :to="{ name: 'register' }">Register</router-link>
      <router-link :to="{ name: 'login' }">Login</router-link>
      <router-link :to="{ name: 'forgot' }">Forgot</router-link>
     
      <router-link :to="{ name: 'license' }">License</router-link>
        <router-link :to="{ name: 'board' }">Board</router-link>
        <router-link :to="{ name: 'board-child', params: { id: 1 } }"
          >Board:33</router-link
        >
        <router-link :to="{ path: '/board/33/child' }"
          >Board:33/child</router-link
        >
      <template v-if="loggedIn">
       
        
        <router-link :to="{ path: '/404' }">404</router-link>
      </template>

      <label for="logged-in"
        >Logged In
        <input type="checkbox" id="logged-in" v-model="loggedIn" />
      </label>
      <label for="has-license"
        >Has License
        <input type="checkbox" id="has-license" v-model="hasLicense" />
      </label>
    </div>
    <!-- <router-link 
        v-for="tab in tabs"
        :key="tab.link"
        :to="tab.link"
        tag="button"
        class="button"
    ><p v-html="tab.name"></p></router-link> -->
    <Sidebar/>
<transition name="fade">
    <router-view />
    </transition>


   
       <h3>{{id}}</h3>
   



  </div>
</template>

<script>
import Sidebar from '@/views/Sidebar.vue'
export default {
  tabs: [{
        link: '/',
        title: 'Товары',
        body:"<h1>Товары</h1>",
        name:"proba"
    }, {
        link: '/categories',
        title: 'Категории' ,
        body:"<h1>Категория</h1>",
        name:"proba1"

    }, {
        link: '/brands',
        title: 'Бренды',
         body:"<h1>Бренды</h1>",
         name:"proba2"
    }],
  data() {
    return {
      loggedIn: !!window.localStorage.getItem("logged-in"),
      hasLicense: !!window.localStorage.getItem("has-license"),
      
    
      
    };
  },
  components:{
    Sidebar
  },
  created() {
    // загружаем данные, когда представление создано
    // и данные реактивно отслеживаются
    this.fetchData()
  },
  // computed:{
  //   id(){
  //     return this.$route.meta.content
  //   }
  // },
  watch: {
    loggedIn(e) {
      window.localStorage.setItem("logged-in", e ? true : "");
    },
    hasLicense(e) {
      window.localStorage.setItem("has-license", e ? true : "");
    },
    
  },
  
}

</script>

<style scoped>
.links > * {
  margin: 1em;
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>