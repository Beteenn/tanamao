import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditNoteView from '../views/EditNoteView.vue'
import NotesView from '@/views/NotesView.vue'
import SettingsView from '@/views/SettingsView.vue'
import ImportNotesView from '@/views/ImportNotesView.vue'
import NewNoteView from '@/views/NewNoteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/note/edit',
      name: 'edit-note',
      component: EditNoteView
    },
    {
      path: '/notes/:topicId',
      name: 'notes',
      component: NotesView,
      props: true
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/import',
      name: 'import',
      component: ImportNotesView
    },
    {
      path: '/note/new/:topicId',
      name: 'new-note',
      component: NewNoteView
    }
  ]
})

export default router
