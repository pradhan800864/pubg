import Vue from 'vue'
import MainPage from '@/components/MainPage'

describe('MainPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MainPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
