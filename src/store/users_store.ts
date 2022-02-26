import { defineStore } from 'pinia';
import firebase from 'firebase/compat';
import auth = firebase.auth;

export type usersStoreType = {
  isAuthenticated: boolean,
  username?: string,
  email?: string,
  password?: string,
};

const useUsersStore = defineStore('users', {
  state: (): usersStoreType => ({
    isAuthenticated: false,
    username: undefined,
    email: undefined,
    password: undefined,
  }),
  getters: {
    getIsAuthenticated: (state): boolean => state.isAuthenticated,
  },
  actions: {
    async register({ email, password }: { email: string, password: string }) {
      return new Promise((resolve) => {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(async (userData) => {
            if (userData) {
              this.isAuthenticated = true;
              this.email = email;
              this.password = password;

              resolve(true);
            }
          })
          .catch((authError) => {
            console.error(`Register error -> ${authError}`);

            resolve(false);
          });
      });
    },
    async authenticate({ email, password }: { email: string, password: string, }) {
      return new Promise((resolve) => {
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            this.isAuthenticated = true;
            this.email = email;
            this.password = password;

            resolve(true);
          })
          .catch((authError) => {
            console.error(`Authentication error -> ${authError}`);

            resolve(false);
          });
      });
    },
  },
});

export default useUsersStore;
