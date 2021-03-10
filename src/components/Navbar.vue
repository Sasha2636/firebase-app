<template>
  <nav>
      <Dropdown title="Главное" :items="main" />
      <Dropdown title="Об управлении" :items="upravlenie" />
      <Dropdown title="Деятельность" :items="deyatelnost" />
      <Dropdown title="Документы" :items="dokumenti" />
      <Dropdown title="Бюджет" :items="budzhet" />
      <Dropdown title="Отчеты" :items="otcheti" />
      <div class="menu-item" ><a href="/login">Логин</a></div>
     <div class="menu-item"><a href="/register">Регистрация</a></div>
  </nav>
</template>

<script>
import Dropdown from './Dropdown';

export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      services: [
        {
          title: 'Web',
          link: '#'
        },
        {
          title: 'Design',
          link:'/login'
        },
        {
          title: 'Videos',
          link: '#'
        }
      ],

      login:[{
            title:'Логин',
            link:'/login'
            }
          
      ],

      main:[
          {
              title:'Новости',
              link:'#'
          },
          {
              title:'О районе',
              link:'/history'
          },
          {
              title:'Финансовое управление',
              link:'#'
          },
      ],
      upravlenie:[
          {
              title:'Положение',
              link:'#'
          },
          {
              title:'Перечень НПА, определяющий полномочия, задачи и функции',
              link:'#'
          },
          {
              title:'Руководство',
              link:'#'
          },
          {
              title:'Организационная структура',
              link:'#'
          },
          {
              title:'Контактная информация',
              link:'#'
          },
          {
              title:'Муниципальная служба',
              link:'#'
          },
          {
              title:'Информационные системы',
              link:'#'
          },
          {
              title:'Информация о закупках',
              link:'#'
          },
          {
              title:'Финансовый контроль',
              link:'#'
          },
          {
              title:'Отчеты',
              link:'#'
          },
          {
              title:'Муниципальные программы',
              link:'#'
          },
          {
              title:'Муниципальный и финансовый контроль ',
              link:'#'
          },
      ],
      deyatelnost:[
          {
              title:'Бюджетный процесс',
              link:'#',
              
          },
          {
              title:'Бюджетный учет и отчетность',
              link:'#',
              
          },
          {
              title:'Муниципальный долг',
              link:'#',
             
          },
          {
              title:'Предоставляемые льготы',
              link:'#',
             
          },
          {
              title:'Электронный бюджет',
              link:'#',
             
          },
          {
              title:'Открытые данные',
              link:'#',
             
          },
          {
              title:'Бюджет для граждан',
              link:'#',
             
          },
        ],
        dokumenti:[
           {
              title:'Порядок обжалования нормативных правовых актов',
              link:'#',
              
          },
          {
              title:'Проекты документов',
              link:'#',
              
          },
          {
              title:'Приказы и письма управления',
              link:'#',
              
          },

          {
              title:'Приказы и письма Министерства финансов РФ',
              link:'#',
              
          },
          
          {
              title:'Муниципальные нормативные правовые акты',
              link:'#',
              
          },
         ],
        budzhet:[
          {
              title:'на 2014-2016 годы',
              link:'#',
              
          },

          {
              title:'на 2015-2017 годы',
              link:'#',
              
          },

          {
              title:'на 2016-2018год',
              link:'#',
              
          },

          {
              title:'на 2017-2019 годы',
              link:'#',
              
          },

          {
              title:'на 2018-2020 годы',
              link:'#',
              
          },

          {
              title:'на 2019-2021 годы',
              link:'#',
              
          },
          {
              title:'на 2021-2023 годы',
              link:'#',
              
          },
        ],
        otcheti:[
          {
            title:'Годовые отчеты',
            link:'#'
          },
          {
            title:'Месячные отчеты',
            link:'#'
          }
        ]
    }
  }
}
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
  
}
</style>