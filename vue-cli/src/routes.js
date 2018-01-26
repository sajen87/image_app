import FileSelector from './FileSelector.vue';
import PicWindow from './PicWindow.vue';
import Login from './Login.vue';

export const routes = [

    {path: '/picwindow', component: PicWindow},
    {path: '/fileselector', component: FileSelector},
    {path: '/', component: Login}

    ];
