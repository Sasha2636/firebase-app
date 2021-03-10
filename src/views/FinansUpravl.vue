<template>
<div>
    
     <div>
   
  <el-input placeholder="Название" v-model="nazvanie" clearable v-on:click="proba(nazvanie,title,keywords,description,h1,relations,type_page,data)" >Название </el-input>

  <el-input placeholder="Title" v-on:click="proba(nazvanie,title,keywords,description,h1,relations,type_page,data)" v-model="title" clearable></el-input>
  
  <el-input placeholder="Ключевые слова(keywords)" v-on:click="proba(nazvanie,title,keywords,description,h1,relations,type_page,data)" v-model="keywords" clearable></el-input>
  
  <el-input placeholder="Описание" v-on:click="proba(nazvanie,title,keywords,description,h1,relations,type_page,data)" v-model="description" type="textarea"></el-input>
  
  <el-input placeholder="Заголовок(h1)" v-on:click="proba(nazvanie,title,keywords,description,h1,relations,type_page,data)" v-model="h1" clearable></el-input>

  <el-select v-model="relations"  placeholder="Связи" v-on:click="proba(nazvanie,title,keywords,description,h1,relations,type_page,data)">

    <el-option
     v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value" v-on:click="proba(nazvanie,title,keywords,description,h1,relations,type_page,data)">
   </el-option>

  </el-select>

  <el-select v-model="type_page" placeholder="Тип страницы" >

    <el-option v-for="item in typePages" :key="item.value" :label="item.label" :value="item.value" v-on:click="proba(nazvanie,title,keywords,description,h1,relations,type_page,data)">
      
   </el-option>

  </el-select>
  <Editor v-model="data" :image-provider="imageProvider" />

  <el-button placeholder="Отправить блять" type="primary" v-on:click="proba(nazvanie,title,keywords,description,h1,relations,type_page,data)">Отправить</el-button> 
    <!-- <button  v-on:click="proba()"> Пробная кнопка</button> -->
      
      
 

    
    <el-table
      :data="
        employeesData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%;"
    >
      <el-table-column label="Дата" prop="date"> </el-table-column>
      <el-table-column label="Имя" prop="nazvanie"> </el-table-column>
      <el-table-column align="right">
        
        <template slot="header" :slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template slot-scope="scope">         
         <el-popover
            placement="bottom"
            title="Edit Employee"
            width="200"
            trigger="click"
          >
            <el-input
              placeholder="Nazvanie"
              v-model="scope.row.nazvanie"
              @blur="updateEmployee(scope.row.id, scope.row.nazvanie,scope.row.title,scope.row.keywords,scope.row.description,scope.row.h1,scope.row.relations,scope.row.type_page)"
            ></el-input>

            <el-input
              placeholder="Title"
              v-model="scope.row.title"
              @blur="updateEmployee(scope.row.id, scope.row.nazvanie,scope.row.title,scope.row.keywords,scope.row.description,scope.row.h1,scope.row.relations,scope.row.type_page)"
            ></el-input>

            <el-input
              placeholder="Keywords"
              v-model="scope.row.keywords"
              @blur="updateEmployee(scope.row.id, scope.row.nazvanie,scope.row.title,scope.row.keywords,scope.row.description,scope.row.h1,scope.row.relations,scope.row.type_page)"
            ></el-input>

            <el-input
              placeholder="Description"
              v-model="scope.row.description"
              @blur="updateEmployee(scope.row.id, scope.row.nazvanie,scope.row.title,scope.row.keywords,scope.row.description,scope.row.h1,scope.row.relations,scope.row.type_page)"
            ></el-input>

            <el-input
              placeholder="H1"
              v-model="scope.row.h1"
              @blur="updateEmployee(scope.row.id, scope.row.nazvanie,scope.row.title,scope.row.keywords,scope.row.description,scope.row.h1,scope.row.relations,scope.row.type_page)"
            ></el-input>
            
            <el-input
              placeholder="Relation"
              v-model="scope.row.relations"
              @blur="updateEmployee(scope.row.id, scope.row.nazvanie,scope.row.title,scope.row.keywords,scope.row.description,scope.row.h1,scope.row.relations,scope.row.type_page)"
            ></el-input>

            <el-input
              placeholder="Type_page"
              v-model="scope.row.type_page"
              @blur="updateEmployee(scope.row.id, scope.row.nazvanie,scope.row.title,scope.row.keywords,scope.row.description,scope.row.h1,scope.row.relations,scope.row.type_page)"
            ></el-input>

            <el-button size="mini" slot="reference">Edit</el-button>
          </el-popover>
      


<!-- nazvanie,title,keywords,description,h1,relations,type_page -->




          <el-button
            size="mini"
            type="danger"
            @click="deleteEmployee(scope.row.id)"
            >Delete</el-button
            
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
     

    <router-view></router-view>
</div>
    
</template>

<script>
import Editor from '@baoshishu/vue-editor'
import { app } from "@/firebaseConfig.js"
import firebase from "firebase/app";
import 'firebase/firestore';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
const db = firebase.firestore(app);

export default {
  components: {
    Editor,
  },
  data() {
    return {
      data: '',
      imageProvider: {
        name: 'qiniu', // provider name
        token:
          '-qWchT63mkZEJch0ygm3bN9h3peInHqCcSAEMtvV:9YAz4dCiB3EAdYuoDVO0YvObtqY=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTkwMjAyODY1NX0=', // upload token
        domain: 'cdn-testing.zanquan.net', // upload domain
        modifier: ({ width, url }) => {
          if (width < 750) {
            return url
          } else {
            return `${url}?imageMogr2/thumbnail/750x/`
          }
        },
      },
      options: [{
          value: '1',
          label: 'Уровень 1'
        }, {
          value: '2',
          label: 'Уровень 2'
        }, {
          value: '3',
          label: 'Уровень 3'
       
        }],
        typePages: [{
          value: 'Текст',
          label: 'Текст'
        }, {
          value: 'Блог',
          label: 'Блог'
        }, {
          value: 'Блог+текст',
          label: 'Блог+текст'
       
        }],
        value: ''
        ,
      description:"",
      name: "",
      title:"",
      relations:"",
      nazvanie:"",
      keywords:"",
      dialogVisible: false,
      employeesData: [],
      search: "",
      type_page:"",
      h1:""
    };
  },
  methods: {
    
   
    proba(nazvanie,title,keywords,description,h1,relations,type_page,data) {
    
      if(this.nazvanie!="" && this.title!="" &&  this.keywords!="" && this.description!="" && this.h1!="" && this.relations!="" && this.type_page!="" && this.data!=""){
      db.collection('categorii').doc("dannie").collection("page")
      
      .add({nazvanie:nazvanie,title:title,keywords:keywords,description:description,h1:h1,relations:relations,type_page:type_page,data:data})
      .then(function () {
            console.log('Document Added ');
        })
        .catch(function (error) {
            console.error('Error adding document: ', error);
        });
        this.nazvanie=""
        this.type_page="" 
        this.relations="" 
        this.title="" 
        this.keywords="" 
        this.description="" 
        this.h1=""
        this.data=""
      }
         
    },





    readEmployees() {
      this.employeesData = [];
      db.collection('categorii').doc("dannie").collection("page")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.employeesData.push({
              id: doc.id,
              nazvanie: doc.data().nazvanie,
              title:doc.data().title,
              keywords:doc.data().keywords,
              description:doc.data().description,
              h1:doc.data().h1,
              relations:doc.data().relations,
              type_page:doc.data().type_page,
              data:doc.data().data

            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    updateEmployee(id, nazvanie,title,keywords,description,h1,relations,type_page) {
       db.collection("categorii").doc("dannie").collection("page")
        .doc(id)
        .update({
          nazvanie: nazvanie,
          title:title,
          keywords:keywords,
          description:description,
          h1:h1,
          relations:relations,
          type_page:type_page
         
        })
        .then(() => {
          alert(id)
          console.log("Document successfully updated!");
          this.readEmployees();
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
    deleteEmployee(id) {
      db.collection('categorii').doc("dannie").collection("page")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.readEmployees();
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
  },
  mounted() {
    this.readEmployees();
  },
};
</script>

<style>

</style>