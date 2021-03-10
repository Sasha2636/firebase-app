<template>
  <div>
<h2>Добавление главного уровня</h2>
<el-input placeholder="Название" v-model="title" clearable v-on:click="createMenu(title,id_category,sort,url,status)" >Название </el-input>
<el-input placeholder="ID Категории" v-model="id_category" clearable v-on:click="createMenu(title,id_category,url,sort,status)" >Сортировка </el-input>    
<el-input placeholder="URL" v-model="url" clearable v-on:click="createMenu(title,id_category,url,sort,status)" >URL </el-input>    
<el-input placeholder="Sort" v-model="sort" clearable v-on:click="createMenu(title,id_category,url,sort,status)" >Сортировка </el-input>     
<el-checkbox v-model="status" clearable v-on:click="createMenu(title,id_category,url,sort,status)">Статус</el-checkbox>
<br>
<el-button placeholder="Отправить " type="primary" v-on:click="createMenu(title,id_category,url,sort,status)">Отправить</el-button>     
<hr>
<h2 v-on:click="readEmployees()">Добавление дочернего элемента</h2>

<el-input placeholder="Название" v-model="title" clearable v-on:click="addChildMenu(title,value)" >Название </el-input>
 <el-select v-on:click="addChildMenu(title,value)" v-model="value" placeholder="Select" >
<el-option 
      v-for="item in employeesData"
      :key="item.title"
      :label="item.title"
      :value="item.id">
</el-option>   
</el-select>
<br>
<el-input placeholder="URL" v-model="url" clearable v-on:click="addChildMenu(title,value,url,sort,status)" >URL </el-input>    
<el-input placeholder="Sort" v-model="sort" clearable v-on:click="addChildMenu(title,value,url,sort,status)" >Сортировка </el-input>     
<el-checkbox v-model="status" clearable v-on:click="addChildMenu(title,value,url,sort,status)">Статус</el-checkbox>
<br>
<el-button placeholder="Отправить " type="primary" v-on:click="addChildMenu(title,value,url,sort,status)">Отправить</el-button>     

      <router-view/>
  </div>
</template>

<script>
import { app } from "@/firebaseConfig.js"
import firebase from "firebase/app";
import 'firebase/firestore';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
const db = firebase.firestore(app);

export default {
data(){
    return{
        title:"",
        id_category:"",
        sort:"",
        url:"",
        status:"",
        employeesData: [],
        value:""
    }
},
methods:{
    createMenu(title,id_category,url,sort,status){
        if(this.title!="" && this.id_category!="" &&  this.sort!="" && this.status!=""){
      db.collection('categorii').doc("dannie").collection("menu")
      .add({title:title,id_category:id_category,url:url,sort:sort,status:status})
      .then(function () {
            console.log('Document Added ');
            this.readEmployees();
        })
        .catch(function (error) {
            console.error('Error adding document: ', error);
        });
        this.title=""
        this.id_category="" 
        this.url=""
        this.sort="" 
        this.status="" 
      }
    },
    readEmployees() {
      this.employeesData = [];
      db.collection('categorii').doc("dannie").collection("menu").orderBy("sort", "asc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
                this.employeesData.push({
                id: doc.id,
                title:doc.data().title,
                id_category:doc.data().id_category,
                url:doc.data().url,
                sort:doc.data().sort,
                status:doc.data().status
            });
          
        console.log(doc.id, " => ", doc.data());
        
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    addChildMenu(title,value,url,sort,status){
      if(this.title!="" && this.value!="" && this.url!="" &&  this.sort!="" && this.status!=""){
      db.collection('categorii').doc("dannie").collection("menu")
      .add({title:title,value:value,url:url,sort:sort,status:status})
      .then(function () {
            console.log('Document Added -2 lvl ');
            this.readEmployees();
        })
        .catch(function (error) {
            console.error('Error adding document: ', error);
        });
        this.title=""
        this.value="" 
        this.url=""
        this.sort="" 
        this.status="" 
      }
     
    }
},
 beforeMount(){
    this.readEmployees();
 },

}
</script>

<style>

</style>