<template>
<div>
    <div v-if="error" class="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
        <h3>Добавление нового пользователя</h3>  
        <div class="email">
            <input type="email" v-model="email" placeholder="Е-mail">
        </div>

        <div class="password">
            <input type="password" v-model="password" placeholder="Пароль">
        </div>

        <button type="submit">Добавить пользователя</button>
    </form>
</div>
</template>
 

<script>
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

export default {
    methods:{
       async pressed(){
           try{
          
          const user= firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
            console.log(user)
            this.$router.replace({name:"secret"});
           }catch(err){
            console.log(err)
           }
        }
    },
    data(){
        return{
            email:"",
            password:'',
            error:''
        }
    }
}

</script>

<style lang="scss" scoped>

.error{
    color:red;
    font-size:18px;

}

input{
    width: 400px;
    padding:30px;
    margin:20px;
    font-size:21px;
}

button{
    width:400px;
    height: 75px;
    font-size:100%;
}




</style>