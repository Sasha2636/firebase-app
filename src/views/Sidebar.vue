<template>
  <div>
<ul>
      <router-link
      v-for="link in employeesData "
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact">
      <a href="#" >{{link.title}}</a>

      </router-link>
  </ul>


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
        employeesData: [],
        }
    },
    

    methods:{

    readEmployees() {
      this.employeesData = [];
      db.collection('categorii').doc("dannie").collection("menu")
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
    },
     beforeMount(){
    this.readEmployees();
 },
        

}
</script>

<style>

</style>