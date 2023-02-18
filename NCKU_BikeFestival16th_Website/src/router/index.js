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
              path: 'ExploreLearning2',
              name: 'ExploreLearning2',
              component: () => import('../views/RegistLinktree/RegistPage/ExploreLearning2.vue')
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
            },
            // for debugging
            {
              path: 'Debug',
              name: 'Debug',
              component: () => import('../views/RegistLinktree/RegistPage/Debug.vue')
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
      children: [
        {
          path: '',
          name: 'ThemeColumn',
          component: () => import('../views/ThemeColumnView.vue'),
        },
        {
          path: 'HealthRoom',
          name: 'HealthRoom',
          component: () => import('../views/ThemeColumn/Health/HealthRoom.vue'),
        },
        {
          path: 'StayUpStudy',
          name: 'StayUpStudy',
          component: () => import('../views/ThemeColumn/Health/StayUpStudy.vue'),
        },
        {
          path: 'AnxietyBeforeExam',
          name: 'AnxietyBeforeExam',
          component: () => import('../views/ThemeColumn/Health/AnxietyBeforeExam.vue'),
        },
        {
          path: 'DietGuide',
          name: 'DietGuide',
          component: () => import('../views/ThemeColumn/Health/DietGuide.vue'),
        },
        {
          path: 'LearningProcessStrategy',
          name: 'LearningProcessStrategy',
          component: () => import('../views/ThemeColumn/Enrollment/LearningProcessStrategy.vue'),
        },
        {
          path: 'EnrollmentForDummies',
          name: 'EnrollmentForDummies',
          component: () => import('../views/ThemeColumn/Enrollment/EnrollmentForDummies.vue'),
        },
        {
          path: 'AllRoadsLeadToRome',
          name: 'AllRoadsLeadToRome',
          component: () => import('../views/ThemeColumn/Enrollment/AllRoadsLeadToRome.vue'),
        },
        {
          path: 'StarPlan',
          name: 'StarPlan',
          component: () => import('../views/ThemeColumn/Enrollment/StarPlan.vue'),
        },
        {
          path: 'NotePro',
          name: 'NotePro',
          component: () => import('../views/ThemeColumn/SelfLearn/NotePro.vue'),
        },
        {
          path: 'PlatformForDummies',
          name: 'PlatformForDummies',
          component: () => import('../views/ThemeColumn/SelfLearn/PlatformForDummies.vue'),
        },
        {
          path: 'FinancialManagement',
          name: 'FinancialManagement',
          component: () => import('../views/ThemeColumn/SelfLearn/FinancialManagement.vue'),
        },
        {
          path: 'BookRecommend',
          name: 'BookRecommend',
          component: () => import('../views/ThemeColumn/SelfLearn/BookRecommend.vue'),
        },
        {
          path: 'TimeManagement',
          name: 'TimeManagement',
          component: () => import('../views/ThemeColumn/CollegeLife/TimeManagement.vue'),
        },
        {
          path: 'AfterClassInfo',
          name: 'AfterClassInfo',
          component: () => import('../views/ThemeColumn/CollegeLife/AfterClassInfo.vue'),
        },
        {
          path: 'Slashie',
          name: 'Slashie',
          component: () => import('../views/ThemeColumn/CollegeLife/Slashie.vue'),
        },
        {
          path: 'PartTimeJob',
          name: 'PartTimeJob',
          component: () => import('../views/ThemeColumn/CollegeLife/PartTimeJob.vue'),
        }
      ]
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
          children: [
            {
              path: '',
              name: 'BioscienceAndBiotechnology',
              component: () => import('../views/DeptManual/BioscienceAndBiotechnology.vue'),
            },
            {
              path: 'member1',
              component: () => import('../views/DeptManual/BioscienceAndBiotechnologyManual/member1.vue'),
            },
            {
              path: 'member2',
              component: () => import('../views/DeptManual/BioscienceAndBiotechnologyManual/member2.vue'),
            }
          ],
        },
        {
          path: 'ElectricalEngineeringAndComputerScience',
          children: [
            {
              path: '',
              name: 'ElectricalEngineeringAndComputerScience',
              component: () => import('../views/DeptManual/ElectricalEngineeringAndComputerScience.vue'),
            },
            {
              path: 'member1',
              component: () => import('../views/DeptManual/ElectricalEngineeringAndComputerScienceManual/member1.vue'),
            },
            {
              path: 'member2',
              component: () => import('../views/DeptManual/ElectricalEngineeringAndComputerScienceManual/member2.vue'),
            }
          ]
        },
        {
          path: 'Engineering',
          children: [
            {
              path: '',
              name: 'Engineering',
              component: () => import('../views/DeptManual/Engineering.vue'),
            },
            {
              path: 'member1',
              component: () => import('../views/DeptManual/EngineeringManual/member/member1.vue'),
            },
            {
              path: 'member2',
              component: () => import('../views/DeptManual/EngineeringManual/member/member2.vue'),
            },
            {
              path: 'member3',
              component: () => import('../views/DeptManual/EngineeringManual/member/member3.vue'),
            },
            {
              path: 'member4',
              component: () => import('../views/DeptManual/EngineeringManual/member/member4.vue'),
            },
            {
              path: 'member5',
              component: () => import('../views/DeptManual/EngineeringManual/member/member5.vue'),
            },
            {
              path: 'member6',
              component: () => import('../views/DeptManual/EngineeringManual/member/member6.vue'),
            },
            {
              path: 'member7',
              component: () => import('../views/DeptManual/EngineeringManual/member/member7.vue'),
            },
            {
              path: 'member8',
              component: () => import('../views/DeptManual/EngineeringManual/member/member8.vue'),
            },
            {
              path: 'member9',
              component: () => import('../views/DeptManual/EngineeringManual/member/member9.vue'),
            },
            {
              path: 'member10',
              component: () => import('../views/DeptManual/EngineeringManual/member/member10.vue'),
            },
            {
              path: 'member11',
              component: () => import('../views/DeptManual/EngineeringManual/member/member11.vue'),
            },
            {
              path: 'member12',
              component: () => import('../views/DeptManual/EngineeringManual/member/member12.vue'),
            },
            {
              path: 'member13',
              component: () => import('../views/DeptManual/EngineeringManual/member/member13.vue'),
            }
          ]

        },
        {
          path: 'LiberalArts',
          children: [
            {
              path: '',
              name: 'LiberalArts',
              component: () => import('../views/DeptManual/LiberalArts.vue'),
            },
            {
              path: 'member1',
              component: () => import('../views/DeptManual/LiberalArtsManual/member/member1.vue'),
            },
            {
              path: 'member2',
              component: () => import('../views/DeptManual/LiberalArtsManual/member/member2.vue'),
            },
            {
              path: 'member3',
              component: () => import('../views/DeptManual/LiberalArtsManual/member/member3.vue'),
            },
            {
              path: 'member4',
              component: () => import('../views/DeptManual/LiberalArtsManual/member/member4.vue'),
            }
          ]
          
        },
        {
          path: 'Management',
          children: [
            {
              path: '',
              name: 'Management',
              component: () => import('../views/DeptManual/Management.vue'),
            },
            {
              path: 'member1',
              component: () => import('../views/DeptManual/ManagementManual/member/member1.vue'),
            },
            {
              path: 'member2',
              component: () => import('../views/DeptManual/ManagementManual/member/member2.vue'),
            },
            {
              path: 'member3',
              component: () => import('../views/DeptManual/ManagementManual/member/member3.vue'),
            },
            {
              path: 'member4',
              component: () => import('../views/DeptManual/ManagementManual/member/member4.vue'),
            },
            {
              path: 'member5',
              component: () => import('../views/DeptManual/ManagementManual/member/member5.vue'),
            }
          ]
          
        },
        {
          path: 'Medicine',
          children: [
            {
              path: '',
              name: 'Medicine',
              component: () => import('../views/DeptManual/Medicine.vue'),
            },
            {
              path: 'member1',
              component: () => import('../views/DeptManual/MedicineManual/member/member1.vue'),
            },
            {
              path: 'member2',
              component: () => import('../views/DeptManual/MedicineManual/member/member2.vue'),
            },
            {
              path: 'member3',
              component: () => import('../views/DeptManual/MedicineManual/member/member3.vue'),
            },
            {
              path: 'member4',
              component: () => import('../views/DeptManual/MedicineManual/member/member4.vue'),
            },
            {
              path: 'member5',
              component: () => import('../views/DeptManual/MedicineManual/member/member5.vue'),
            },
            {
              path: 'member6',
              component: () => import('../views/DeptManual/MedicineManual/member/member6.vue'),
            },
            {
              path: 'member7',
              component: () => import('../views/DeptManual/MedicineManual/member/member7.vue'),
            }
          ]
          
        },
        {
          path: 'PlanningAndDesign',
          children: [
            {
              path: '',
              name: 'PlanningAndDesign',
              component: () => import('../views/DeptManual/PlanningAndDesign.vue'),
            },
            {
              path: 'member1',
              component: () => import('../views/DeptManual/PlanningAndDesignManual/member/member1.vue'),
            },
            {
              path: 'member2',
              component: () => import('../views/DeptManual/PlanningAndDesignManual/member/member2.vue'),
            },
            {
              path: 'member3',
              component: () => import('../views/DeptManual/PlanningAndDesignManual/member/member3.vue'),
            }
          ]
          
        },
        {
          path: 'Science',
          children: [
            {
              path: '',
              name: 'Science',
              component: () => import('../views/DeptManual/Science.vue'),
            },
            {
              path: 'member1',
              component: () => import('../views/DeptManual/ScienceManual/member/member1.vue'),
            },
            {
              path: 'member2',
              component: () => import('../views/DeptManual/ScienceManual/member/member2.vue'),
            },
            {
              path: 'member3',
              component: () => import('../views/DeptManual/ScienceManual/member/member3.vue'),
            },
            {
              path: 'member4',
              component: () => import('../views/DeptManual/ScienceManual/member/member4.vue'),
            },
            {
              path: 'member5',
              component: () => import('../views/DeptManual/ScienceManual/member/member5.vue'),
            }
          ]
          
        },
        {
          path: 'SocialScience',
          children: [
            {
              path: '',
              name: 'SocialScience',
              component: () => import('../views/DeptManual/SocialScience.vue'),
            },
            {
              path: 'member1',
              component: () => import('../views/DeptManual/SocialScienceManual/member/member1.vue'),
            },
            {
              path: 'member2',
              component: () => import('../views/DeptManual/SocialScienceManual/member/member2.vue'),
            },
            {
              path: 'member3',
              component: () => import('../views/DeptManual/SocialScienceManual/member/member3.vue'),
            },
            {
              path: 'member4',
              component: () => import('../views/DeptManual/SocialScienceManual/member/member4.vue'),
            }
          ]
          
        },
        {
          path: 'Undeclared',
          children: [
            {
              path: '',
              name: 'Undeclared',
              component: () => import('../views/DeptManual/Undeclared.vue'),
            },
            {
              path: 'member1',
              component: () => import('../views/DeptManual/UndeclaredManual/member1.vue'),
            }
          ]
          
        },
      ]

    },
    {
      path: '/Partner',
      name: 'Partner',
      component: () => import('../views/PartnerView.vue'),
    },
    {
      path: '/SouvenirPreorder',
      name: 'SouvenirPreorder',
      component: () => import('../views/SouvenirPreorderView.vue'),
    },
    {
      path: '/GroupRegistration',
      name: 'GroupRegistration',
      component: () => import('../views/GroupRegistrationView.vue'),
    },
    {
      path: '/:domain(.*)*',
      name: 'NotFound',
      component: () => import('../views/404.vue')
    },
  ],
  // solve: scrollY not be changed when route change
  // ref: https://router.vuejs.org/guide/advanced/scroll-behavior.html#delaying-the-scroll
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
