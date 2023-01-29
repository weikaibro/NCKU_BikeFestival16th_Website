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
            },
            {
              path: 'ExploreLearning',
              name: 'ExploreLearning',
              component: () => import('../views/RegistLinktree/RegistPage/ExploreLearning.vue')
            },
            {
              path: 'CollegeCharge',
              name: 'CollegeCharge',
              component: () => import('../views/RegistLinktree/RegistPage/CollegeCharge.vue')
            },
            {
              path: 'DepartmentTour',
              name: 'DepartmentTour',
              component: () => import('../views/RegistLinktree/RegistPage/DepartmentTour.vue')
            },
            {
              path: 'BikeExperience',
              name: 'BikeExperience',
              component: () => import('../views/RegistLinktree/RegistPage/BikeExperience.vue')
            },
            {
              path: 'DeepExperience',
              name: 'DeepExperience',
              component: () => import('../views/RegistLinktree/RegistPage/DeepExperience.vue')
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
          path: 'Interview',
          component: () => import('../views/Introduction/InterviewView.vue'),
        },
        {
          path: 'DeepExperience',
          component: () => import('../views/Introduction/DeepExperienceView.vue'),
        },
        {
          path: 'Stage',
          component: () => import('../views/Introduction/StageView.vue'),
        },
        {
          path: 'Exposition',
          component: () => import('../views/Introduction/ExpositionView.vue'),
        },
        {
          path: 'BikeExperience',
          component: () => import('../views/Introduction/BikeExperienceView.vue'),
        },
        {
          path: 'MindShop',
          component: () => import('../views/Introduction/MindShopView.vue'),
        },
        {
          path: 'CollegeCharge',
          component: () => import('../views/Introduction/CollegeChargeView.vue'),
        },
        {
          path: 'ExploreLearning',
          component: () => import('../views/Introduction/ExploreLearning.vue'),
        },
        {
          path: 'EnergyBonus',
          component: () => import('../views/Introduction/EnergyBonusView.vue'),
        }
      ]
    },
    {
      path: '/ThemeColumn',
      name: 'ThemeColumn',
      component: () => import('../views/ThemeColumnView.vue'),
    },
    {
      path: '/DeptManual',
      children: [
        {
          path: '',
          name: 'DeptManual',
          component: () => import('../views/DeptManualView.vue'),
        },
        {
          path: 'BioscienceAndBiotechnology',
          name: 'BioscienceAndBiotechnology',
          component: () => import('../views/DeptManual/BioscienceAndBiotechnology.vue'),
        },
        {
          path: 'ElectricalEngineeringAndComputerScience',
          name: 'ElectricalEngineeringAndComputerScience',
          component: () => import('../views/DeptManual/ElectricalEngineeringAndComputerScience.vue'),
        },
        {
          path: 'Engineering',
          name: 'Engineering',
          component: () => import('../views/DeptManual/Engineering.vue'),
        },
        {
          path: 'LiberalArts',
          name: 'LiberalArts',
          component: () => import('../views/DeptManual/LiberalArts.vue'),
        },
        {
          path: 'Management',
          name: 'Management',
          component: () => import('../views/DeptManual/Management.vue'),
        },
        {
          path: 'Medicine',
          name: 'Medicine',
          component: () => import('../views/DeptManual/Medicine.vue'),
        },
        {
          path: 'PlanningAndDesign',
          name: 'PlanningAndDesign',
          component: () => import('../views/DeptManual/PlanningAndDesign.vue'),
        },
        {
          path: 'Science',
          name: 'Science',
          component: () => import('../views/DeptManual/Science.vue'),
        },
        {
          path: 'SocialScience',
          name: 'SocialScience',
          component: () => import('../views/DeptManual/SocialScience.vue'),
        },
        {
          path: 'Undeclared',
          name: 'Undeclared',
          component: () => import('../views/DeptManual/Undeclared.vue'),
        },
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
