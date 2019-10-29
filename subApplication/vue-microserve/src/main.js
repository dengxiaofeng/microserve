import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let instance = null

function render() {
  instance = new Vue({
    el: '#vueRoot',
    render: h => h(App)
  })
}

if(!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  // eslint-disable-next-line no-console
  console.log('vue app bootstraped')
}

export async function mount(props) {
  // eslint-disable-next-line no-console
  console.log('receive main application props', props);
  render()
}

export async function unmount() {
  instance.$destroy()
  instance = null
}
