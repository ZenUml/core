import parentLogger from './logger/logger';
import Vue from 'vue';
import { createApp } from 'vue';
import { createStore } from 'vuex';
import Store from './store/Store';
import DiagramFrame from './components/DiagramFrame/DiagramFrame.vue';
import SeqDiagram from './components/DiagramFrame/SeqDiagram/SeqDiagram.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './assets/tailwind.css';
import './components/Cosmetic.scss';
import './components/Cosmetic-blue.scss';
import './components/Cosmetic-black-white.scss';
import './components/Cosmetic-star-uml.scss';
import './components/theme-blue-river.scss';
import './themes/theme-dark.css';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Block from './components/DiagramFrame/SeqDiagram/MessageLayer/Block/Block.vue';
import Comment from './components/DiagramFrame/SeqDiagram/MessageLayer/Block/Statement/Comment/Comment.vue';
const logger = parentLogger.child({ name: 'core' });

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

interface IZenUml {
  get code(): string | undefined;
  get theme(): string | undefined;
  // Resolve after rendering is finished.
  // eslint-disable-next-line no-unused-vars
  render(code: string | undefined, theme: string | undefined): Promise<IZenUml>;
}

export default class ZenUml implements IZenUml {
  private readonly el: Element;
  private _code: string | undefined;
  private _theme: string | undefined;
  private readonly store: any;
  private readonly app: any;

  constructor(el: Element, naked: boolean = false) {
    this.el = el;
    this.store = createStore(Store());
    this.app = createApp(naked ? SeqDiagram : DiagramFrame);
    this.app.component('Comment', Comment);
    this.app.component('Block', Block);
    this.app.use(this.store);
    this.app.mount(this.el);
  }

  async render(code: string | undefined, theme: string | undefined): Promise<IZenUml> {
    logger.debug('rendering', code, theme);
    this._code = code || this._code;
    this._theme = theme || this._theme;
    // @ts-ignore
    this.store.state.theme = this._theme || 'default';
    // await dispatch will wait until the diagram is finished rendering.
    // It includes the time adjusting the top of participants for creation message.
    // $nextTick is different from setTimeout. The latter will be executed after dispatch has returned.
    // @ts-ignore
    await this.store.dispatch('updateCode', { code: this._code });
    return Promise.resolve(this);
  }

  get code(): string | undefined {
    return this._code;
  }

  get theme(): string | undefined {
    return this._theme;
  }

  async getPng(): Promise<string> {
    // @ts-ignore
    return this.el.children[0].__vue__.toPng();
  }
}

export const VueSequence = {
  createApp,
  createStore,
  Store,
  SeqDiagram,
  DiagramFrame,
};
