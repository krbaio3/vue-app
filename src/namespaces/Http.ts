import Vue from 'vue';
import { AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosStatic } from 'axios';

export namespace Http {
    export class ApiJWTService {
        constructor () {
            this.request();
            this.response();
        }

        protected request () {
            Vue.axios.interceptors.request.use((config: AxiosRequestConfig) => {
                Vue.$log.debug('Axios resquest');
                return config;
            }, (error: any) => {
                Vue.$log.error('Axios resquest Error');
                return Promise.reject(error);
            });
        }
        protected response () {
            Vue.axios.interceptors.response.use((response: AxiosResponse) => {
                Vue.$log.debug('Axios resquest');
                return response;
            }, (error: any) => {
                Vue.$log.error('Axios resquest Error');
                return Promise.reject(error);
            });
        }
    }
}
