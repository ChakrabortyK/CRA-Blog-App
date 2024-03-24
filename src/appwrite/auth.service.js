import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const response = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (response) {
        // return response
        //return: login the user after creation
        return await this.login({ email, password });
      } else {
        return response;
      }
    } catch (error) {
      console.log("Error in createAccount service", error);
    }
  }

  async login({ email, password }) {
    // let data;
    try {
      const response = await this.account.createEmailSession(email, password);
      // data = { response: response, status: true };
      return response;
    } catch (error) {
      console.error("Error in login service", error);
      // data = { response: error.message, status: false };
      // return data;
      throw error;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Error in logout service", error);
    }
  }

  async getUserData() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Unable to get User Data");
      return false;
    }
  }
}

const authServiceObj = new AuthService();
export default authServiceObj;
