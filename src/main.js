import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun'
import App from './App.vue'
Vue.use(Antd)
Vue.config.productionTip = false



/*new Vue({
  render: h => h(App),
}).$mount('#app')*/


let app = null

function render ({ appContent, loading }) {
  if (!app) {
    app = new Vue({
      el: '#app',
      data () {
        return {
          content: appContent,
          loading
        }
      },
      render (h) {
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading
          }
        })
      }
    })
  } else {
    app.content = appContent
    app.loading = loading
  }
}

function genActiveRule (routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix)
}

render({ loading: true })

const request = url =>
  fetch(url, {
    referrerPolicy: 'origin-when-cross-origin'
  })

registerMicroApps(
  [
    { name: 'react', entry: '//localhost:3000', render, activeRule: genActiveRule('/react') },
    { name: 'vue', entry: '//localhost:7104', render, activeRule: genActiveRule('/vue'), props: { a: 1, b: 2 } }
  ],
  {
    beforeLoad: [
      app => {
        // eslint-disable-next-line no-console
        console.log('before load', app)
      }
    ],
    beforeMount: [
      app => {
        // eslint-disable-next-line no-console
        console.log('before mount', app)
      }
    ],
    afterUnmount: [
      app => {
        // eslint-disable-next-line no-console
        console.log('after unload', app)
      }
    ]
  },
  {
    fetch: request
  }
)

setDefaultMountApp('/react')

// eslint-disable-next-line standard/object-curly-even-spacing
start({ prefetch: true, fetch: request, jsSandbox: true, singular: true })
