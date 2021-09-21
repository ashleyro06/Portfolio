import { createStore } from 'vuex'
import projects from '@/store/projects'

export default createStore({
    modules: {
        projects: projects,
    },
})
