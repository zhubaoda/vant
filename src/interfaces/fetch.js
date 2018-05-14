import axios from 'axios'

export default function Fetch(host) {
  this.fetch = async (url, auth, data={}, method='GET') => {
  	let response = await this._request(url, auth, data, method)	
  	if (response.data && response.data.code === 403) {
  	  // token 过期了，重新调用接口
  	  localStorage.removeItem('token');
  	  return this.fetch(url, auth, data, method)	
  	}
  }
  
  this._request = async (url, auth, data, method) => {
    let headers = {}
  	if (auth) {
  	  headers['TEST-TOKEN'] = await this._getToken()
  	}
  	return axios({ url: url, data: data, headers: headers, method: method })
  }
  
  this.login = async () => {
  	let token = 'test-token' 
  	localStorage.setItem('token',JSON.stringify(token))
  	return token
  }
  
  this._getToken = async () => {
  	let token = '';
  	token = JSON.parse(localStorage.getItem('token')) 	
  	if (!token) {
  	  token = await this.login()
  	}	
  	return token
  }
}
