<template>
      
  <div>

    <h3>Авторизация</h3>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="логин" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="пароль" v-model="password" />
      </div>
      <button type="submit">Войти</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
    
  </div>
  
</template>


<script>
import firebase from 'firebase/app';
import '@/firebaseConfig.js'
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
export default {
    data(){
      
        return{
            loggedIn: !!window.localStorage.getItem("logged-in"),
            email:'',
            password:'',
            error:''
        }
    },

    methods:{
     async pressed(){
         try{
       const val=   await   firebase.auth().signInWithEmailAndPassword(this.email,this.password)
        console.log(val);
        this.loggedIn=true;
        alert("Вход успешен")
        this.$router.replace({name:"secret"})
        }catch(err){
             console.log(err)
         }
            
        }
       
    },
    watch:{
      loggedIn(e) {
      window.localStorage.setItem("logged-in", e ? true : "");
    }
    }
}
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
.error {
  color: red;
}

</style>