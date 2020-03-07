import { action, observable } from 'mobx';

import { Alert } from 'react-native';

export default class HomeStore {
    @observable etanol = '';
    @observable gasolina = '';

    @action calculate = () => {
        let resultado;
        const { etanol, gasolina } = this;
        
        if (!isNaN(Number(etanol)) && !isNaN(Number(gasolina))) {
            const value = Number(etanol) / Number(gasolina);

            if (value > 0.70) {
                resultado = 'Vale a pena gasolina';
            } else if (value < 0.70) {
                resultado = 'Vale a pena etanol';
            } else {
                resultado = 'São equivalentes';
            }

            Alert.alert(
                'Resultado',
                resultado
            );
            
        }
    }

    @action handleForm = (input) => {
        const key = Object.keys(input)[0];
        const value = input[key];
        this[key] = value;
      }
}
const homeStore = new HomeStore();
export { homeStore };