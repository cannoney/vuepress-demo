import { defineClientConfig } from 'vuepress/client'
import hd2 from './components/hd2.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("hd2", hd2);
  }
})
