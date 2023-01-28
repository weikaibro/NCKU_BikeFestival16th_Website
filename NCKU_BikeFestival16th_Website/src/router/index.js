import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomeView
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: () => import('../views/HomepageView.vue')
    },
    {
      path: '/Registration',
      children: [
        {
          path: '',
          name: 'Registration',
          component: () => import('../views/RegistrationView.vue')
        },
        {
          path: 'Linktree',
          children: [
            {
              path: '',
              name: 'Linktree',
              component: () => import('../views/RegistLinktree/LinktreeView.vue')
            },
            {
              path: 'MockInterview',
              name: 'MockInterview',
              component: () => import('../views/RegistLinktree/RegistPage/MockInterview.vue')  
            }
          ]
          
        },
      ]

    },
    {
      path: '/Information',
      name: 'Information',
      component: () => import('../views/InformationView.vue')
    },
    {
      path: '/Introduction',
      children: [
        {
          path: '',
          name: 'Introduction',
          component: () => import('../views/IntroductionView.vue'),
        },
        {
          path: 'InterviewView',
          component: () => import('../views/Introduction/InterviewView.vue'),
        },
        {
          path: 'DeepExperienceView',
          component: () => import('../views/Introduction/DeepExperienceView.vue'),
        },
        {
          path: 'StageView',
          component: () => import('../views/Introduction/StageView.vue'),
        },
        {
          path: 'ExpositionView',
          component: () => import('../views/Introduction/ExpositionView.vue'),
        },
        {
          path: 'BikeExperienceView',
          component: () => import('../views/Introduction/BikeExperienceView.vue'),
        },
        {
          path: 'MindShopView',
          component: () => import('../views/Introduction/MindShopView.vue'),
        },
        {
          path: 'CollegeChargeView',
          component: () => import('../views/Introduction/CollegeChargeView.vue'),
        },
        {
          path: 'SearchLearning',
          component: () => import('../views/Introduction/SearchLearning.vue'),
        },
        {
          path: 'EnergyBonusView',
          component: () => import('../views/Introduction/EnergyBonusView.vue'),
        }
      ]
    },
    {
      path: '/:domain(.*)*',
      name: 'NotFound',
      component: import('../views/404.vue')
    },
  ]
})

export default router
