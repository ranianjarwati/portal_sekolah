import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import JurusanView from '../view/JurusanView.vue'
import PrestasiView from '../view/PrestasiView.vue'
import FasilitasView from '../view/FasilitasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/jurusan', name: 'Jurusan', component: JurusanView },
    { path: '/prestasi', name: 'Prestasi', component: PrestasiView },
    { path: '/fasilitas', name: 'Fasilitas', component: FasilitasView }
  ],
  // Mengatur perilaku scroll halaman secara halus (smooth)
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router