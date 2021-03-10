import Vue from 'vue'
import VueRouter from 'vue-router'
import guestMiddleware from "./middleware/guestMiddleware";
import authMiddleware from "./middleware/authMiddleware";
// import subscribersMiddleware from "./middleware/subscribersMiddleware";
import MiddlewarePlugin from "vue-router-middleware-plugin";
import Secret from "@/views/Secret.vue";
import Login from "@/views/Login.vue";
import FinansUpravl from "@/views/FinansUpravl.vue"
import AdminMenu from "@/views/AdminMenu.vue"

Vue.use(VueRouter)

const Home = () =>
  import(/* webpackChunkName: "MainBoard" */ "@/views/Home.vue");
// const BoardComponent = () =>
//   import(
//     /* webpackChunkName: "BoardComponent" */ "@/components/board/BoardComponent"
//   );

const clearAndUpper = (text) => text.replace(/-/, "").toUpperCase();
const toPascalCase = (text) => text.replace(/(^\w|-\w)/g, clearAndUpper);

const genAuthRoutes = ({ parent, tabs = [] }) => ({
  path: `/${parent}`,
  name: parent,
  component: () => import(/* webpackChunkName: "auth" */ "@/pages/Auth"),
  redirect: { name: tabs[0] },

  children: tabs.map((tab) => {
    const tabPascalCase = toPascalCase(tab);
    return {
      path: tab,
      name: tab,
      component: () =>
        import(
          /* webpackChunkName: "[request]" */ `@/components/${parent}/${tabPascalCase}`
        ),
      meta: {
        middleware: {
          ignore: [authMiddleware],
          attach: [guestMiddleware], 
        },
      },
    };
  }),
});
const routes = [
    genAuthRoutes({ parent: "auth", tabs: ["login", "register", "forgot"] }),
    {
      path: "/",
      name: 'Home',
      component: Home,
      children: [
                  {
                    path: "/novosti",
                    name: "novosti",
                    component: {
                      render: (h) => h("div", ["Страница с новостями", h("router-view")]),
                     
                    },
                    
                    meta: {
                      middleware: {
                        ignore: [authMiddleware],
                        attach: [guestMiddleware], 
                      },
                      title:"Новости",
                      content:"Контентыч",
                      
                    },
                },
                {
                  path: "/fin",
                  component:FinansUpravl,
                  meta: {
                    middleware: {
                      ignore: [authMiddleware],
                      attach: [guestMiddleware], 
                    },
                  }
                },
                {
                    path: "/history",
                    name: "history",
                    component: {
                      render: (h) => h("div", ["Страница с историей", h("router-view")]),
                    },
                    meta: {
                      middleware: {
                        ignore: [authMiddleware],
                        attach: [guestMiddleware], 
                      },
                      title:"История"
                    },
                  },

                  {
                    path: "/finansupravl",
                    name: "finansupravl",
                    components: {
                      default: { render: (h) => h("div", ["I'm Default"]) },
                      user: { render: (h) => h("div", ["I'm User"]) },
                      guest: { render: (h) => h("div", ["I'm Guest"]) },
                    },
                    meta: {
                      middleware: {
                        ignore: [authMiddleware],
                        attach: [guestMiddleware], 
                      },
                    },
                  },    
                ],
    },
    {
      path:"/aboutupravl",
      name:"aboutupravl",
      component:{
        render:(h)=>h("div",["Страница об управлении",h("router-view")])
      },
      children:[
        {
          path:"polozhenie",
          name:"polozhenie",
          component:{
            render:(h)=>h("div",["Страница с положением",h("router-view")])
          },
          meta: {
            middleware: {
              ignore: [authMiddleware],
              attach: [guestMiddleware], 
            },
          }
        },
        {
          path:"perechen-npa",
          name:"perechen-npa",
          component:{
            render:(h)=>h("div",["Страница с перечнем НПА",h("router-view")])
          },
        },
        {
          path:"rukovodstvo",
          name:"rukovodstvo",
          component:{
            render:(h)=>h("div",["Страница с руководством",h("router-view")])
          },
        },
        {
          path:"organizationstructure",
          name:"organizationstructure",
          component:{
            render:(h)=>h("div",["Страница с орг структурой",h("router-view")])
          },
        },
        {
          path:"contactinformation",
          name:"contactinformation",
          component:{
            render:(h)=>h("div",["Страница с контактной информацией",h("router-view")])
          },
        },
        {
          path:"municipalnayasluzhba",
          name:"municipalnayasluzhba",
          component:{
            render:(h)=>h("div",["Страница с муниципальной службой",h("router-view")])
          },
          children:[
            {
              path:'postuplenie',
              component:{
                render:(h)=>h("div",["Страница с поступлением",h("router-view")])
              },
            },
            {
              path:'trebovaniedolzhnost',
              component:{
                render:(h)=>h("div",["Страница с требованиями должности",h("router-view")])
              },
            },
            {
              path:'vakantniedolzhnosti',
              component:{
                render:(h)=>h("div",["Страница с вакантными должностями",h("router-view")])
              },
            },
            {
              path:'uslovieandresultatkonkurs',
              component:{
                render:(h)=>h("div",["Страница с условиями и результатами конкурса",h("router-view")])
              },
            },
          ],
        },
          {
            path:"informationsystem",
            name:"informationsystem",
            component:{
              render:(h)=>h("div",["Страница с информационнными системами",h("router-view")])
            },
          },
          {
            path:"informationzakupki",
            name:"informationzakupki",
            component:{
              render:(h)=>h("div",["Страница с информационнными закупками",h("router-view")])
            },
          },
          {
            path:"financecontrol",
            name:"financecontrol",
            component:{
              render:(h)=>h("div",["Страница с финансовым контролем",h("router-view")])
            },
          },
        
        
      ]
    },
    {
      path:"/secret",
      name:"secret",
      component:Secret,
      meta: {
        middleware: {
          ignore: [authMiddleware],
          attach: [guestMiddleware], 
        },
        title:"Секрет",
        content:"Контентыч",
        
      },
    },
    {
      path:"/login1",
      name:"login1",
      component:Login,
      meta: {
        middleware: {
          ignore: [authMiddleware],
          attach: [guestMiddleware], 
        },
        title:"Логин",
        content:"Контентыч",
        
      },
    },
    {
      path:"/adminmenu",
      name:"adminmenu",
      component:AdminMenu,
      meta: {
        middleware: {
          ignore: [authMiddleware],
          attach: [guestMiddleware], 
        },
        title:"Админ меню",
        
        
      },
    },
    

    {
      path: "/auth-required",
      name: "auth-required",
      component: { render: (h) => h("div", ["Auth required!"]) },
      meta: {
        middleware: {
          ignore: [authMiddleware],
        },
      },
    },
    
    {
      path: "/*",
      component: { render: (h) => h("div", ["404! Page Not Found!"]) },
      meta: {
        middleware: {
          ignore: [authMiddleware],
        },
      },
    },

   
    

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(async (to, from, next) => {
  const { title } = to.meta;
  
  document.content=to.meta.content;
  document.title = `${title ? title + "  " : ""}`;
  next();
});
Vue.use(MiddlewarePlugin, {
    router,
    middleware: [authMiddleware],
  });
export default router
