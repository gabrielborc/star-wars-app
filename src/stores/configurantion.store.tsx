import { action, observable } from 'mobx';

import { dark as darkTheme, light as lightTeme } from '@eva-design/eva';

const themes = [
    darkTheme,
    lightTeme
];

export default class ConfigurationStore {
    @observable theme = darkTheme;
    @observable indexTheme = 0;
    
    @action updateThemes = (newIndexTheme) => {
        this.indexTheme = newIndexTheme;
        this.theme = themes[this.indexTheme];
    }
}

const configurationStore = new ConfigurationStore();
export { configurationStore };