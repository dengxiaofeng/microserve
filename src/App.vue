<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['react']" @click="handlerClick">
        <a-menu-item key="react" title="react">
          <a-icon type="user" />
          <span>应用1</span>
        </a-menu-item>
        <a-menu-item key="vue" title="vue">
          <a-icon type="video-camera" />
          <span>应用2</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content
              :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <div v-html="content"></div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  export default {
    props:{
      content:{
        type:String,
        default: ''
      }
    },
    data() {
      return {
        collapsed: false,
      };
    },
    methods:{
      handlerClick({ item, key, keyPath }) {
        // eslint-disable-next-line no-console
        console.log(item,key, keyPath)
       window.history.pushState({}, '', `/${key}`)
      }
    }
  };
</script>
<style>
  #components-layout-demo-custom-trigger {
    height: 100%;
  }
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
