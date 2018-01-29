import store from '@/store/'
import isLoadingModule from '@/store/modules/isLoading'
import * as mutation from '@/store/mutation-types'

describe('IsLoading component mutations:', () => {
  it('Should commit is loading', () => {
    store.commit(mutation.IS_LOADING_TODOS, true)

    expect(isLoadingModule.state.isLoading).toEqual(true)
  })
})
