import './GLASSlOLLIPOPS/interfaces_GLASSlOLLIPOPS.scss'
import LiveBackgroundMod from './GLASSlOLLIPOPS/live_background'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
// достаю router
import router from './router'


let liveBackground = new LiveBackgroundMod()
liveBackground.Color.deleteALL()
liveBackground.Color.append(["292929"])
liveBackground.BackgroundPC.LightBulbs.flashing("#ea0000")
liveBackground.BackgroundPhone.LightBulbs.flashing("#ea0000")


const app = createApp(App)
// использую router
app.use(router)

app.mount('#app')
