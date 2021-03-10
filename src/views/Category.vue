<template>
    <div>
     <div>
    <el-popover placement="bottom" title="Новый элемент" width="200" trigger="click">
   <el-input placeholder="Введите номер" v-model="id_cat" @blur="createEmployee(link,name,id_cat)"></el-input>
      <el-input placeholder="Введите имя" v-model="name" @blur="createEmployee( link,name,id_cat)"></el-input>
      <el-input placeholder="Введите ссылку" v-model="link" @blur="createEmployee(link,name,id_cat)"></el-input>
      <el-button round slot="reference" type="success">Добавить новый элемент</el-button>
      
    </el-popover>

    
    <el-table
      :data="
        employeesData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 500px;"
    >
        <el-table-column label="Номер" prop="id_cat" > </el-table-column>
         <el-table-column label="Имя" prop="name"> </el-table-column>  
           <el-table-column label="Ссылка" prop="link" > </el-table-column>
       
      <el-table-column align="right">
        
        <template slot-scope="scope">

          <el-popover placement="bottom" title="Редактор разделов" width="200" trigger="click">
             <el-input placeholder="Номер" v-model="scope.row.id_cat" @blur="updateEmployee(scope.row.id, scope.row.name, scope.row.link, scope.row.id_cat)"></el-input>
            <el-input placeholder="Раздел" v-model="scope.row.name" @blur="updateEmployee(scope.row.id, scope.row.name, scope.row.link, scope.row.id_cat)"></el-input>
            <el-input placeholder="Ссылка" v-model="scope.row.link" @blur="updateEmployee(scope.row.id, scope.row.name, scope.row.link, scope.row.id_cat)"></el-input>
            <el-button size="mini" slot="reference">Edit</el-button>

          </el-popover>

          <el-button size="mini" type="danger" @click="deleteEmployee(scope.row.id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
     
     <router-view></router-view>
    </div>
</template>


<script>
import { app } from "../firebaseConfig.js"
import firebase from "firebase/app";
import 'firebase/firestore';
const db = firebase.firestore(app);

export default {
  data() {
    return {
      name: "",
      link:"",
      employeesData: [],
      search: "",
      id_cat:""
    };
  },
  methods: {
    createEmployee(link,name,id_cat) {
      if (name != "" && link != "" && id_cat != "") {
        db.collection("categories")
          .add({ name: name ,link: link,id_cat:id_cat,})
          .then(() => {
            console.log("Document successfully written!");
            this.readEmployees();
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
        this.name = "";
        this.id_cat = "";
        this.link = "";
      }
    },
    readEmployees() {
      this.employeesData = [];
      db.collection("categories").orderBy("id_cat", "asc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.employeesData.push({
              id: doc.id,
              name: doc.data().name,
              link: doc.data().link,
              id_cat:doc.data().id_cat,
              
             
            
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    updateEmployee(id,name,link,id_cat,) {
      db.collection("categories")
        .doc(id)
        .update({
          name: name,
          id_cat:id_cat,
          link: link,
        })
        .then(() => {
          console.log("Document successfully updated!");
          this.readEmployees();
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
    deleteEmployee(id) {
      db.collection("categories")
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

<style >
.buttonDel{
width:50px;
height: 30px;
}
</style>