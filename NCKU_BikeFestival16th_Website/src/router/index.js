import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from '../views/HomepageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
     path: '/',
      name: 'homepage',
      component: HomepageView
    },
    {
      path: '/registration',
      name: 'registration',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegistrationView.vue')
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
    }
  ]
})

export default router
