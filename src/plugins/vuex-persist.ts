import VuexPersistence from 'vuex-persist';
import { RootState } from '../store/types';

export const vuexPersistence = new VuexPersistence<RootState>({
    storage: window.localStorage,
    // Definimos los modulos que queremos, si borramos la propiedad modules, incorpora TODOS los modulos
    modules: [],
});
