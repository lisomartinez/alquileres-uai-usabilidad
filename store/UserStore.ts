import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { User } from '~/store/models'

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

@Module({
  name: 'UserStore',
  namespaced: true,
  stateFactory: true,
})
export default class UserStore extends VuexModule {
  isRegistered = false
  isLoggedIn = false
  isLogging = false
  user: User | null = null

  @Mutation
  register(value: boolean) {
    this.isRegistered = value
  }

  @Mutation
  login(user: User) {
    this.isLogging = false
    this.isLoggedIn = true
    this.user = user
  }

  @Mutation
  logout() {
    this.isLogging = false
    this.isLoggedIn = false
    this.user = null
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'register' })
  startRegistration(user: User) {
    console.log('user: ', user)
    return true
  }

  @Mutation
  setLogging(value: boolean) {
    this.isLogging = value
  }

  @Action({ commit: 'login' })
  async startLogin(email: string, password: string) {
    this.context.commit('setLogging', true)
    await sleep(10)
    return {
      name: 'Lisandro',
      lastName: 'Martinez',
      birthDate: '10-13-1984',
      password: 'C1s3t1',
      email: 'lm@localhost.com',
    }
  }

  get isUserRegistered(): boolean {
    return this.isRegistered
  }

  get isLogged(): boolean {
    return this.isLoggedIn
  }
}
