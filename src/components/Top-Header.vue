<template>
  
  <div>
      Авторизация:
      <span v-if="loggedIn">Да</span>
      <span v-else>Нет</span>
      <div>
          <button @click="signOut">Выйти </button>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
export default {
    created(){
        firebase.auth().onAuthStateChanged(user=>{
            this.loggedIn=!!user;
            // if(user){
            //     this.loggedIn=true;
            // }else{
            //     this.logged=false;
            // }
        })
    },
    data(){
        return{
            loggedIn:false
        }
    },
    methods:{
      async  signOut(){
          try{
            
            const data= await  firebase.auth().signOut();
            console.log(data);
            this.$router.replace({name:"login"})
          }catch(err){
              console.log(err)
          }
         

        }
    }
}
</script>

<style lang="scss" scoped>

</style>