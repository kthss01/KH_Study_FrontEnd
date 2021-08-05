import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/Test.vue'
import TodoPage from '@/components/TodoPage.vue'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/todos',
    name: 'TodoPage',
    component: TodoPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
