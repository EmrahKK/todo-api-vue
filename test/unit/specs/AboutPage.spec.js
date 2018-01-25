import Vue from 'vue'
import AboutPage from '@/components/About/AboutPage'

describe('About page component', () => {
  it('Should render about page', () => {
    const Constructor = Vue.extend(AboutPage)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('This is the about page')
  })
})
