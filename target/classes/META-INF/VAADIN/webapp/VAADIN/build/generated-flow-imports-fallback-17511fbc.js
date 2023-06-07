import{A as $h,h as L,D as Ot,P as F,S as Vh,a as ea,b as ia,C as gt,T as Ct,K as hs,i as us,F as Br,E as it,c as We,d as ji,o as Nr,m as ra,l as ds,L as zr,I as Gr,e as na,O as be,f as Oi,g as mc,R as $r,j as Vr,k as ft,n as Uh,p as jh,r as aa,q as sa,s as Ur,t as jr,u as gc,v as Ye,w as oa,V as Wh,x as _c,y as la,z as yc,B as Wr,G as bc,H as Dn,J as cs,M as Yr,N as Wi,Q as Yi,U as fn,W as xc,X as Yh,Y as qh,Z as Xh,_ as yr,$ as Ac,a0 as fs,a1 as Hh,a2 as Zh,a3 as Kh,a4 as Cc,a5 as wc,a6 as Qh,a7 as Ec,a8 as Ic,a9 as Mc,aa as Tc,ab as Sc,ac as Oc,ad as Rc,ae as Lc,af as Pc,ag as Fc,ah as kc,ai as Dc,aj as Bc,ak as Nc,al as zc,am as Jh,an as tu,ao as eu,ap as Ia}from"./generated-flow-imports-023205b9.js";import{i as S,r as M,T as z,B as ps,x as Di,a as iu,h as vs,j as ms,A as Gc}from"./indexhtml-56574c91.js";const ru=S`
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    outline: none;
    padding: var(--lumo-space-s) 0;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-secondary-text-color);
    background-color: inherit;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([disabled]),
  :host([disabled]) [part='toggle'] {
    color: var(--lumo-disabled-text-color);
    cursor: default;
  }

  @media (hover: hover) {
    :host(:hover:not([disabled])),
    :host(:hover:not([disabled])) [part='toggle'] {
      color: var(--lumo-contrast-80pct);
    }
  }

  [part='toggle'] {
    display: block;
    width: 1em;
    height: 1em;
    margin-left: calc(var(--lumo-space-xs) * -1);
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-s);
    line-height: 1;
    color: var(--lumo-contrast-60pct);
    font-family: 'lumo-icons';
    cursor: var(--lumo-clickable-cursor);
  }

  [part='toggle']::before {
    content: var(--lumo-icons-angle-right);
  }

  :host([opened]) [part='toggle'] {
    transform: rotate(90deg);
  }

  /* RTL styles */
  :host([dir='rtl']) [part='toggle'] {
    margin-left: var(--lumo-space-xs);
    margin-right: calc(var(--lumo-space-xs) * -1);
  }

  :host([dir='rtl']) [part='toggle']::before {
    content: var(--lumo-icons-angle-left);
  }

  :host([opened][dir='rtl']) [part='toggle'] {
    transform: rotate(-90deg);
  }

  /* Small */
  :host([theme~='small']) {
    padding-top: var(--lumo-space-xs);
    padding-bottom: var(--lumo-space-xs);
  }

  :host([theme~='small']) [part='toggle'] {
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='small'][dir='rtl']) [part='toggle'] {
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  /* Filled */
  :host([theme~='filled']) {
    padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);
  }

  /* Reverse */
  :host([theme~='reverse']) {
    justify-content: space-between;
  }

  :host([theme~='reverse']) [part='toggle'] {
    order: 1;
    margin-right: 0;
  }

  :host([theme~='reverse'][dir='rtl']) [part='toggle'] {
    margin-left: 0;
  }

  /* Filled reverse */
  :host([theme~='reverse'][theme~='filled']) {
    padding-left: var(--lumo-space-m);
  }

  :host([theme~='reverse'][theme~='filled'][dir='rtl']) {
    padding-right: var(--lumo-space-m);
  }
`;M("vaadin-details-summary",ru,{moduleId:"lumo-details-summary"});const $c=S`
  :host {
    padding: 0;
  }

  [part='content'] {
    padding: var(--lumo-space-s) 0;
  }
`;M("vaadin-accordion-heading",[ru,$c],{moduleId:"lumo-accordion-heading"});const nu=S`
  :host {
    margin: var(--lumo-space-xs) 0;
    outline: none;
  }

  :host([focus-ring]) ::slotted([slot='summary']) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) 0 var(--lumo-space-s);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  :host([theme~='filled']) {
    background-color: var(--lumo-contrast-5pct);
    border-radius: var(--lumo-border-radius-m);
  }

  :host([theme~='filled']) [part='content'] {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }

  :host([theme~='small']) [part$='content'] {
    font-size: var(--lumo-font-size-s);
  }
`;M("vaadin-details",nu,{moduleId:"lumo-details"});const Vc=S`
  :host {
    margin: 0;
    border-bottom: solid 1px var(--lumo-contrast-10pct);
  }

  :host(:last-child) {
    border-bottom: none;
  }

  :host([theme~='filled']) {
    border-bottom: none;
  }

  :host([theme~='filled']:not(:last-child)) {
    margin-bottom: 2px;
  }
`;M("vaadin-accordion-panel",[nu,Vc],{moduleId:"lumo-accordion-panel"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class so extends $h(Ot(z(F))){static get is(){return"vaadin-accordion-heading"}static get template(){return L`
      <style>
        :host {
          display: block;
          outline: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        button {
          display: flex;
          align-items: center;
          justify-content: inherit;
          width: 100%;
          margin: 0;
          padding: 0;
          background-color: initial;
          color: inherit;
          border: initial;
          outline: none;
          font: inherit;
          text-align: inherit;
        }
      </style>
      <button id="button" part="content" disabled$="[[disabled]]" aria-expanded$="[[__updateAriaExpanded(opened)]]">
        <span part="toggle" aria-hidden="true"></span>
        <slot></slot>
      </button>
    `}static get properties(){return{opened:{type:Boolean,reflectToAttribute:!0}}}_attachDom(e){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return t.appendChild(e),t}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","heading")}__updateAriaExpanded(e){return e?"true":"false"}}customElements.define(so.is,so);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Uc extends Vh{static generateId(e){return super.generateId(e,"content")}constructor(e){super(e,"",null,{multiple:!0})}}/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const au=r=>class extends r{static get properties(){return{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},_contentElements:{type:Array}}}static get observers(){return["_openedOrContentChanged(opened, _contentElements)"]}constructor(){super(),this._contentController=new Uc(this),this._contentController.addEventListener("slot-content-changed",t=>{const i=t.target.nodes||[];this._contentElements=i.filter(n=>n.parentNode===this)})}ready(){super.ready(),this.addController(this._contentController),this.addEventListener("click",({target:t})=>{const i=this.focusElement;i&&(t===i||i.contains(t))&&(this.opened=!this.opened)})}_openedOrContentChanged(t,i){i&&i.forEach(n=>{n.setAttribute("aria-hidden",t?"false":"true")})}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class su extends Vh{constructor(e,t){super(e,"summary",t)}setSummary(e){this.summary=e,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{summary:e}=this;e&&e.trim()!==""&&this.attachDefaultNode()}updateDefaultNode(e){e&&(e.textContent=this.summary),super.updateDefaultNode(e)}}/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ua extends au(ea(ia(z(gt(F))))){static get is(){return"vaadin-accordion-panel"}static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: none;
          overflow: hidden;
        }

        :host([opened]) [part='content'] {
          display: block;
          overflow: visible;
        }
      </style>

      <slot name="summary"></slot>

      <div part="content">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{summary:{type:String,observer:"_summaryChanged"}}}static get observers(){return["__updateAriaAttributes(focusElement, _contentElements)"]}static get delegateAttrs(){return["theme"]}static get delegateProps(){return["disabled","opened"]}constructor(){super(),this._summaryController=new su(this,"vaadin-accordion-heading"),this._summaryController.addEventListener("slot-content-changed",e=>{const{node:t}=e.target;this._setFocusElement(t),this.stateTarget=t,this._tooltipController.setTarget(t)}),this._tooltipController=new Ct(this),this._tooltipController.setPosition("bottom-start")}ready(){super.ready(),this.addController(this._summaryController),this.addController(this._tooltipController)}_setAriaDisabled(){}_summaryChanged(e){this._summaryController.setSummary(e)}__updateAriaAttributes(e,t){if(e&&t){const i=t[0];i&&(i.setAttribute("role","region"),i.setAttribute("aria-labelledby",e.id)),i&&i.id?e.setAttribute("aria-controls",i.id):e.removeAttribute("aria-controls")}}}customElements.define(Ua.is,Ua);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class oo extends hs(z(it(F))){static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-accordion"}static get properties(){return{opened:{type:Number,value:0,notify:!0,reflectToAttribute:!0},items:{type:Array,readOnly:!0,notify:!0}}}static get observers(){return["_updateItems(items, opened)"]}constructor(){super(),this._boundUpdateOpened=this._updateOpened.bind(this)}get focused(){return(this._getItems()||[]).find(e=>us(e.focusElement))}focus(){this._observer&&this._observer.flush(),super.focus()}ready(){super.ready(),this._observer=new Br(this,e=>{this._setItems(this._filterItems(Array.from(this.children))),this._filterItems(e.addedNodes).forEach(t=>{t.addEventListener("opened-changed",this._boundUpdateOpened)})})}_getItems(){return this.items}_filterItems(e){return e.filter(t=>t instanceof Ua)}_updateItems(e,t){if(e){const i=e[t];e.forEach(n=>{n.opened=n===i})}}_onKeyDown(e){this.items.some(t=>t.focusElement===e.target)&&super._onKeyDown(e)}_updateOpened(e){const t=this._filterItems(e.composedPath())[0],i=this.items.indexOf(t);if(e.detail.value){if(t.disabled||i===-1)return;this.opened=i}else this.items.some(n=>n.opened)||(this.opened=null)}}customElements.define(oo.is,oo);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jc=S`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`,ou=document.createElement("template");ou.innerHTML=`<style>${jc.toString().replace(":host","html")}</style>`;document.head.appendChild(ou.content);const lu=document.createElement("style");lu.textContent="html { --vaadin-avatar-size: var(--lumo-size-m); }";document.head.appendChild(lu);M("vaadin-avatar",S`
    :host {
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--lumo-primary-color-50pct);
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"});/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hu=document.createElement("template");hu.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-avatar-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(hu.content);/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lo extends We(it(z(gt(F)))){static get template(){return L`
      <style>
        :host {
          display: inline-block;
          flex: none;
          border-radius: 50%;
          overflow: hidden;
          height: var(--vaadin-avatar-size, 64px);
          width: var(--vaadin-avatar-size, 64px);
          border: var(--vaadin-avatar-outline-width) solid transparent;
          margin: calc(var(--vaadin-avatar-outline-width) * -1);
          background-clip: content-box;
          --vaadin-avatar-outline-width: 2px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        [part='icon'] {
          font-size: 5.6em;
        }

        [part='abbr'] {
          font-size: 2.2em;
        }

        [part='icon'] > text {
          font-family: 'vaadin-avatar-icons';
        }

        :host([hidden]) {
          display: none !important;
        }

        svg[hidden] {
          display: none !important;
        }

        :host([has-color-index]) {
          position: relative;
          background-color: var(--vaadin-avatar-user-color);
        }

        :host([has-color-index])::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
        }
      </style>
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">&#xea01;</text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-avatar"}static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},withTooltip:{type:Boolean,value:!1,observer:"__withTooltipChanged"},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean,__tooltipNode:Object}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)","__tooltipChanged(__tooltipNode, name, abbr)"]}ready(){super.ready(),this.__updateVisibility(),this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this._tooltipController=new Ct(this),this.addController(this._tooltipController),!this.name&&!this.abbr&&this.__setTooltip()}__colorIndexChanged(e){if(e!=null){const t=`--vaadin-user-color-${e}`;Boolean(getComputedStyle(document.documentElement).getPropertyValue(t))?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${t})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${e} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(e,t,i){this.__updateVisibility(),!(t&&t!==this.__generatedAbbr)&&(i?this.abbr=this.__generatedAbbr=i.split(" ").map(n=>n.charAt(0)).join(""):this.abbr=void 0)}__tooltipChanged(e,t,i){e&&(i&&i!==this.__generatedAbbr?this.__setTooltip(t?`${t} (${i})`:i):this.__setTooltip(t))}__withTooltipChanged(e,t){if(e){const i=document.createElement("vaadin-tooltip");i.setAttribute("slot","tooltip"),this.appendChild(i),this.__tooltipNode=i}else t&&(this.__tooltipNode.target=null,this.__tooltipNode.remove(),this.__tooltipNode=null)}__i18nChanged(e){e.base&&e.base.anonymous&&(this.__oldAnonymous&&this.__tooltipNode&&this.__tooltipNode.text===this.__oldAnonymous&&this.__setTooltip(),this.__oldAnonymous=e.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTooltip(e){const t=this.__tooltipNode;t&&(t.text=e||this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn(`<vaadin-avatar> The specified image could not be loaded: ${this.img}`),this.__imgFailedToLoad=!0,this.__updateVisibility())}}customElements.define(lo.is,lo);M("vaadin-avatar-group",S`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-group-overlap: 12px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-group-overlap: 10px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-group-overlap: 6px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-group-overlap: 4px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar-group"});const Wc=S`
  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;M("vaadin-avatar-group-overlay",[Nr,ra,Wc],{moduleId:"lumo-avatar-group-overlay"});M("vaadin-avatar-group-menu",ds,{moduleId:"lumo-avatar-group-menu"});M("vaadin-avatar-group-menu-item",[ji,S`
      :host {
        padding: var(--lumo-space-xs);
        padding-inline-end: var(--lumo-space-m);
      }

      [part='content'] {
        display: flex;
        align-items: center;
      }

      [part='content'] ::slotted(vaadin-avatar) {
        width: var(--lumo-size-xs);
        height: var(--lumo-size-xs);
        margin-inline-end: var(--lumo-space-s);
      }
    `],{moduleId:"lumo-avatar-group-menu-item"});/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ho extends zr(z(Ot(gt(F)))){static get is(){return"vaadin-avatar-group-menu"}static get template(){return L`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}customElements.define(ho.is,ho);/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class uo extends Gr(z(Ot(F))){static get is(){return"vaadin-avatar-group-menu-item"}static get template(){return L`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","menuitem")}}customElements.define(uo.is,uo);/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class co extends na(be){static get is(){return"vaadin-avatar-group-overlay"}}customElements.define(co.is,co);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qt=document.createElement("div");Qt.style.position="fixed";Qt.style.clip="rect(0px, 0px, 0px, 0px)";Qt.setAttribute("aria-live","polite");document.body.appendChild(Qt);let pn;function ve(r,e={}){const t=e.mode||"polite",i=e.timeout===void 0?150:e.timeout;t==="alert"?(Qt.removeAttribute("aria-live"),Qt.removeAttribute("role"),pn=Oi.debounce(pn,mc,()=>{Qt.setAttribute("role","alert")})):(pn&&pn.cancel(),Qt.removeAttribute("role"),Qt.setAttribute("aria-live",t)),Qt.textContent="",setTimeout(()=>{Qt.textContent=r},i)}/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ma=2;class fo extends $r(Vr(it(z(gt(F))))){static get template(){return L`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          --vaadin-avatar-group-overlap: 8px;
          --vaadin-avatar-group-overlap-border: 2px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          display: flex;
          position: relative;
          width: 100%;
          flex-wrap: nowrap;
        }

        ::slotted(vaadin-avatar:not(:first-child)) {
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          -webkit-mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
          mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
        }

        ::slotted(vaadin-avatar:not([dir='rtl']):not(:first-child)) {
          margin-left: calc(var(--vaadin-avatar-group-overlap) * -1 - var(--vaadin-avatar-outline-width));
          -webkit-mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
          mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
        }

        ::slotted(vaadin-avatar[dir='rtl']:not(:first-child)) {
          margin-right: calc(var(--vaadin-avatar-group-overlap) * -1);
          -webkit-mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
          mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
        }
      </style>
      <div id="container" part="container">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>
      <vaadin-avatar-group-overlay
        id="overlay"
        opened="{{_opened}}"
        position-target="[[_overflow]]"
        no-vertical-overlap
        on-vaadin-overlay-close="_onVaadinOverlayClose"
      ></vaadin-avatar-group-overlay>
    `}static get is(){return"vaadin-avatar-group"}static get properties(){return{items:{type:Array},maxItemsVisible:{type:Number},i18n:{type:Object,value:()=>({anonymous:"anonymous",activeUsers:{one:"Currently one active user",many:"Currently {count} active users"},joined:"{user} joined",left:"{user} left"})},_avatars:{type:Array,value:()=>[]},__maxReached:{type:Boolean,computed:"__computeMaxReached(items.length, maxItemsVisible)"},__items:{type:Array},__itemsInView:{type:Number,value:null},_overflow:{type:Object},_overflowItems:{type:Array,observer:"__overflowItemsChanged",computed:"__computeOverflowItems(items.*, __itemsInView, maxItemsVisible)"},_overflowTooltip:{type:Object},_opened:{type:Boolean,observer:"__openedChanged"}}}static get observers(){return["__itemsChanged(items.splices, items.*)","__i18nItemsChanged(i18n.*, items.length)","__updateAvatarsTheme(_overflow, _avatars, _theme)","__updateAvatars(items.*, __itemsInView, maxItemsVisible, _overflow, i18n)","__updateOverflowAbbr(_overflow, items.length, __itemsInView, maxItemsVisible)","__updateOverflowHidden(_overflow, items.length, __itemsInView, __maxReached)","__updateOverflowTooltip(_overflowTooltip, items.length, __itemsInView, maxItemsVisible)"]}ready(){super.ready(),this._overflowController=new ft(this,"overflow","vaadin-avatar",{initializer:t=>{t.setAttribute("aria-haspopup","menu"),t.setAttribute("aria-expanded","false"),t.addEventListener("click",n=>this._onOverflowClick(n)),t.addEventListener("keydown",n=>this._onOverflowKeyDown(n));const i=document.createElement("vaadin-tooltip");i.setAttribute("slot","tooltip"),t.appendChild(i),this._overflow=t,this._overflowTooltip=i}}),this.addController(this._overflowController);const e=this.$.overlay;e.renderer=this.__overlayRenderer.bind(this),this._overlayElement=e,Uh(this,()=>{this.__setItemsInView()})}disconnectedCallback(){super.disconnectedCallback(),this._opened=!1}__getMessage(e,t){return t.replace("{user}",e.name||e.abbr||this.i18n.anonymous)}__overlayRenderer(e){let t=e.firstElementChild;t||(t=document.createElement("vaadin-avatar-group-menu"),t.addEventListener("keydown",i=>this._onListKeyDown(i)),e.appendChild(t)),t.textContent="",this._overflowItems&&this._overflowItems.forEach(i=>{t.appendChild(this.__createItemElement(i))})}__createItemElement(e){const t=document.createElement("vaadin-avatar-group-menu-item"),i=document.createElement("vaadin-avatar");if(t.appendChild(i),i.setAttribute("aria-hidden","true"),i.setAttribute("tabindex","-1"),i.i18n=this.i18n,this._theme&&i.setAttribute("theme",this._theme),i.name=e.name,i.abbr=e.abbr,i.img=e.img,i.colorIndex=e.colorIndex,e.name){const n=document.createTextNode(e.name);t.appendChild(n)}return t}_onOverflowClick(e){e.stopPropagation(),this._opened?this.$.overlay.close():e.defaultPrevented||(this._opened=!0)}_onOverflowKeyDown(e){this._opened||/^(Enter|SpaceBar|\s)$/u.test(e.key)&&(e.preventDefault(),this._opened=!0)}_onListKeyDown(e){(e.key==="Escape"||e.key==="Tab")&&(this._opened=!1)}_onResize(){this.__setItemsInView()}_onVaadinOverlayClose(e){e.detail.sourceEvent&&e.detail.sourceEvent.composedPath().includes(this)&&e.preventDefault()}__renderAvatars(e){ps(Di`
        ${e.map(t=>Di`
              <vaadin-avatar
                .name="${t.name}"
                .abbr="${t.abbr}"
                .img="${t.img}"
                .colorIndex="${t.colorIndex}"
                .i18n="${this.i18n}"
                with-tooltip
              ></vaadin-avatar>
            `)}
      `,this,{renderBefore:this._overflow})}__updateAvatars(e,t,i,n){if(!n)return;const a=e.base||[],s=this.__getLimit(a.length,t,i);this.__renderAvatars(s?a.slice(0,s):a),this._avatars=[...this.querySelectorAll("vaadin-avatar")]}__computeOverflowItems(e,t,i){const n=e.base||[],a=this.__getLimit(n.length,t,i);return a?n.slice(a):[]}__computeMaxReached(e,t){return t!=null&&e>this.__getMax(t)}__updateOverflowAbbr(e,t,i,n){e&&(e.abbr=`+${t-this.__getLimit(t,i,n)}`)}__updateOverflowHidden(e,t,i,n){e&&e.toggleAttribute("hidden",!n&&!(i&&i<t))}__updateAvatarsTheme(e,t,i){e&&[e,...t].forEach(n=>{i?n.setAttribute("theme",i):n.removeAttribute("theme")})}__updateOverflowTooltip(e,t,i,n){if(!e)return;const a=this.__getLimit(t,i,n);if(a==null)return;const s=[];for(let o=a;o<t;o++){const l=this.items[o];l&&s.push(l.name||l.abbr||"anonymous")}e.text=s.join(`
`)}__getLimit(e,t,i){let n=null;const a=this.__getMax(i);return i!=null&&a<e?n=a-1:t&&t<e&&(n=t),Math.min(n,this.__calculateAvatarsFitWidth())}__getMax(e){return Math.max(e,Ma)}__itemsChanged(e,t){const i=t.base;this.__setItemsInView(),e&&Array.isArray(e.indexSplices)?e.indexSplices.forEach(n=>{this.__announceItemsChange(i,n)}):Array.isArray(i)&&Array.isArray(this.__oldItems)&&jh(i,this.__oldItems).forEach(a=>{this.__announceItemsChange(i,a)}),this.__oldItems=i}__announceItemsChange(e,t){const{addedCount:i,index:n,removed:a}=t;let s=[],o=[];i&&(s=e.slice(n,n+i).map(h=>this.__getMessage(h,this.i18n.joined||"{user} joined"))),a&&(o=a.map(h=>this.__getMessage(h,this.i18n.left||"{user} left")));const l=o.concat(s);l.length>0&&ve(l.join(", "))}__i18nItemsChanged(e,t){const{base:i}=e;if(i&&i.activeUsers){const n=t===1?"one":"many";i.activeUsers[n]&&this.setAttribute("aria-label",i.activeUsers[n].replace("{count}",t||0)),this._avatars.forEach(a=>{a.i18n=i})}}__openedChanged(e,t){e?(this._menuElement||(this._menuElement=this.$.overlay.querySelector("vaadin-avatar-group-menu")),this._openedWithFocusRing=this._overflow.hasAttribute("focus-ring"),this._menuElement.focus()):t&&(this._overflow.focus(),this._openedWithFocusRing&&this._overflow.setAttribute("focus-ring","")),this._overflow.setAttribute("aria-expanded",e===!0)}__overflowItemsChanged(e,t){(e||t)&&this.$.overlay.requestContentUpdate()}__setItemsInView(){const e=this._avatars,t=this.items;if(!t||!e||e.length<3)return;let i=this.__calculateAvatarsFitWidth();i===t.length-1&&(i=t.length),i>=t.length&&this._opened&&(this.$.overlay.close(),this.$.overlay._flushAnimation("closing")),this.__itemsInView=i}__calculateAvatarsFitWidth(){if(!this.shadowRoot||this._avatars.length<Ma)return Ma;const e=this._avatars,t=e[0].clientWidth,{marginLeft:i,marginRight:n}=getComputedStyle(e[1]),a=this.__isRTL?parseInt(n,0)-parseInt(i,0):parseInt(i,0)-parseInt(n,0);return Math.floor((this.$.container.offsetWidth-t)/(t+a))}}customElements.define(fo.is,fo);const Yc=S`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;M("vaadin-checkbox-group",[aa,sa,Yc],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class po extends Ur(We(jr(it(z(F))))){static get is(){return"vaadin-checkbox-group"}static get template(){return L`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0,observer:"__valueChanged"}}}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this)}get __checkboxes(){return this.__filterCheckboxes([...this.children])}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group"),this._observer=new Br(this,({addedNodes:e,removedNodes:t})=>{const i=this.__filterCheckboxes(e),n=this.__filterCheckboxes(t);i.forEach(this.__registerCheckbox),n.forEach(this.__unregisterCheckbox),this.__warnOfCheckboxesWithoutValue(i)}),this._tooltipController=new Ct(this),this.addController(this._tooltipController)}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(e){return e.filter(t=>t instanceof gc)}__warnOfCheckboxesWithoutValue(e){e.some(i=>{const{value:n}=i;return!i.hasAttribute("value")&&(!n||n==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(e){e.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(e.disabled=!0),e.checked?this.__addCheckboxToValue(e.value):this.value.includes(e.value)&&(e.checked=!0)}__unregisterCheckbox(e){e.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),e.checked&&this.__removeCheckboxFromValue(e.value)}_disabledChanged(e,t){super._disabledChanged(e,t),!(!e&&t===void 0)&&t!==e&&this.__checkboxes.forEach(i=>{i.disabled=e})}__addCheckboxToValue(e){this.value.includes(e)||(this.value=[...this.value,e])}__removeCheckboxFromValue(e){this.value.includes(e)&&(this.value=this.value.filter(t=>t!==e))}__onCheckboxCheckedChanged(e){const t=e.target;t.checked?this.__addCheckboxToValue(t.value):this.__removeCheckboxFromValue(t.value)}__valueChanged(e,t){e.length===0&&t===void 0||(this.toggleAttribute("has-value",e.length>0),this.__checkboxes.forEach(i=>{i.checked=e.includes(i.value)}),t!==void 0&&this.validate())}_shouldRemoveFocus(e){return!this.contains(e.relatedTarget)}_setFocused(e){super._setFocused(e),e||this.validate()}}customElements.define(po.is,po);const gs=S`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`;M("vaadin-combo-box-item",[ji,gs],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _s=S`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`,ys=S`
  [part='content'] {
    padding: 0;
  }

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }
`,uu=S`
  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;M("vaadin-combo-box-overlay",[Nr,ra,ys,_s,uu,S`
      :host {
        --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-combo-box-overlay"});const qc=S`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;M("vaadin-combo-box",[Ye,qc],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bs=r=>class extends r{static get properties(){return{index:{type:Number},item:{type:Object},label:{type:String},selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Function}}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._owner=this.parentNode.owner;const t=this._owner.getAttribute("dir");t&&this.setAttribute("dir",t)}requestContentUpdate(){if(!this.renderer)return;const t={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._owner,t)}__rendererOrItemChanged(t,i,n){n===void 0||i===void 0||(this._oldRenderer!==t&&(this.innerHTML="",delete this._$litPart$),t&&(this._oldRenderer=t,this.requestContentUpdate()))}__updateLabel(t,i){i||(this.textContent=t)}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class vo extends bs(z(Ot(F))){static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}}customElements.define(vo.is,vo);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xs=r=>class extends na(r){static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}connectedCallback(){super.connectedCallback();const t=this._comboBox,i=t&&t.getAttribute("dir");i&&this.setAttribute("dir",i)}_shouldCloseOnOutsideClick(t){const i=t.composedPath();return!i.includes(this.positionTarget)&&!i.includes(this)}_setOverlayWidth(t,i){if(t&&i){const n=this.localName;this.style.setProperty(`--_${n}-default-width`,`${t.clientWidth}px`);const a=getComputedStyle(this._comboBox).getPropertyValue(`--${n}-width`);a===""?this.style.removeProperty(`--${n}-width`):this.style.setProperty(`--${n}-width`,a),this._updatePosition()}}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-combo-box-overlay",S`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});let vn;class mo extends xs(be){static get is(){return"vaadin-combo-box-overlay"}static get template(){if(!vn){vn=super.template.cloneNode(!0);const e=vn.content.querySelector('[part~="overlay"]');e.removeAttribute("tabindex");const t=document.createElement("div");t.setAttribute("part","loader"),e.insertBefore(t,e.firstElementChild)}return vn}constructor(){super(),this.requiredVerticalSpace=200}}customElements.define(mo.is,mo);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ye=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const As=r=>class extends r{static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},owner:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const t=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[t.paddingBottom,t.borderBottomWidth].map(i=>parseInt(i,10)).reduce((i,n)=>i+n)}return this._cachedViewportTotalPaddingBottom}ready(){super.ready(),this.setAttribute("role","listbox"),this.id=`${this.localName}-${oa()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.addEventListener("click",t=>t.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new Wh({createElements:this.__createElements.bind(this),updateElement:this._updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(t){if(!(this.opened&&t>=0))return;const i=this._visibleItemsCount();let n=t;t>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(t),n=t-i+1):t>this.__virtualizer.firstVisibleIndex&&(n=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,n));const a=[...this.children].find(h=>!h.hidden&&h.index===this.__virtualizer.lastVisibleIndex);if(!a||t!==a.index)return;const s=a.getBoundingClientRect(),o=this.getBoundingClientRect(),l=s.bottom-o.bottom+this._viewportTotalPaddingBottom;l>0&&(this.scrollTop+=l)}_isItemSelected(t,i,n){return t instanceof ye?!1:n&&t!==void 0&&i!==void 0?this.get(n,t)===this.get(n,i):t===i}__itemsChanged(t){this.__virtualizer&&t&&(this.__virtualizer.size=t.length,this.__virtualizer.flush(),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__openedChanged(t){t&&this.requestContentUpdate()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(t,i){t!==i&&this.requestContentUpdate(),t>=0&&!this.loading&&this.scrollIntoView(t)}__rendererChanged(t,i){(t||i)&&this.requestContentUpdate()}__createElements(t){return[...Array(t)].map(()=>{const i=document.createElement(`${this.__hostTagName}-item`);return i.addEventListener("click",this.__boundOnItemClick),i.tabIndex="-1",i.style.width="100%",i})}_updateElement(t,i){const n=this.items[i],a=this.focusedIndex,s=this._isItemSelected(n,this.selectedItem,this.itemIdPath);t.setProperties({item:n,index:i,label:this.getItemLabel(n),selected:s,renderer:this.renderer,focused:!this.loading&&a===i}),t.id=`${this.__hostTagName}-item-${i}`,t.setAttribute("role",i!==void 0?"option":!1),t.setAttribute("aria-selected",s.toString()),t.setAttribute("aria-posinset",i+1),t.setAttribute("aria-setsize",this.items.length),this.theme?t.setAttribute("theme",this.theme):t.removeAttribute("theme"),n instanceof ye&&this.__requestItemByIndex(i)}__onItemClick(t){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:t.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",t=>{const i=this.scrollTop===0,n=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(i&&t.deltaY<0||n&&t.deltaY>0)&&t.preventDefault()})}__requestItemByIndex(t){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class go extends As(F){static get is(){return"vaadin-combo-box-scroller"}static get template(){return L`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}customElements.define(go.is,go);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const du=r=>class extends _c(r){static get properties(){return{pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cu=r=>class extends r{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new ye},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this._scroller.addEventListener("index-requested",t=>{const i=t.detail.index,n=t.detail.currentScrollerPos,a=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(i,a,n)&&i!==void 0){const s=this._getPageForIndex(i);this._shouldLoadPage(s)&&this._loadPage(s)}})}_dataProviderFilterChanged(t){if(this.__previousDataProviderFilter===void 0&&t===""){this.__previousDataProviderFilter=t;return}this.__previousDataProviderFilter!==t&&(this.__previousDataProviderFilter=t,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(t){t&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(t,i,n){return n!==0&&t>=n-i&&t<=n+i}_shouldLoadPage(t){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const i=this.filteredItems[t*this.pageSize];return i!==void 0?i instanceof ye:this.size===void 0}_loadPage(t){if(this._pendingRequests[t]||!this.dataProvider)return;const i={page:t,pageSize:this.pageSize,filter:this.filter},n=(a,s)=>{if(this._pendingRequests[t]!==n)return;const o=this.filteredItems?[...this.filteredItems]:[];o.splice(i.page*i.pageSize,a.length,...a),this.filteredItems=o,!this.opened&&!this._isInputFocused()&&this._commitValue(),s!==void 0&&(this.size=s),delete this._pendingRequests[t],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)};this._pendingRequests[t]=n,this.loading=!0,this.dataProvider(i,n)}_getPageForIndex(t){return Math.floor(t/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const t=[];for(let i=0;i<(this.size||0);i++)t.push(this.__placeHolder);this.filteredItems=t,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(t=0){const i=(this.filteredItems||[]).slice(0,t);for(let n=0;n<t;n++)i[n]=i[n]!==void 0?i[n]:this.__placeHolder;this.filteredItems=i,this._flushPendingRequests(t)}_pageSizeChanged(t,i){if(Math.floor(t)!==t||t<1)throw this.pageSize=i,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(t,i){this._ensureItemsOrDataProvider(()=>{this.dataProvider=i}),this.clearCache()}_ensureItemsOrDataProvider(t){if(this.items!==void 0&&this.dataProvider!==void 0)throw t(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(t,i){if(t&&i!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const n=this.__getItemIndexByValue(this.filteredItems,i);(n<0||!this._getItemLabel(this.filteredItems[n]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(t){if(this._pendingRequests){const i=Math.ceil(t/this.pageSize);Object.entries(this._pendingRequests).forEach(([n,a])=>{parseInt(n)>=i&&a([],t)})}}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function _o(r){return r!=null}function yo(r,e){return r.findIndex(t=>t instanceof ye?!1:e(t))}const Cs=r=>class extends Vr(gt(la(yc(jr(r))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, filteredItems, loading)","_updateScroller(_scroller, filteredItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _nativeInput(){return this.inputElement}_inputElementChanged(t){super._inputElementChanged(t);const i=this._nativeInput;i&&(i.autocomplete="off",i.autocapitalize="off",i.setAttribute("role","combobox"),i.setAttribute("aria-autocomplete","list"),i.setAttribute("aria-expanded",!!this.opened),i.setAttribute("spellcheck","false"),i.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const t=()=>{requestAnimationFrame(()=>{this._overlayElement.bringToFront()})};this.addEventListener("mousedown",t),this.addEventListener("touchstart",t),Wr(this),this.addController(new bc(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach(t=>{t.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(t,i,n){super._propertiesChanged(t,i,n),i.filter!==void 0&&this._filterChanged(i.filter)}_initOverlay(){const t=this.$.overlay;t._comboBox=this,t.addEventListener("touchend",this._boundOnOverlayTouchAction),t.addEventListener("touchmove",this._boundOnOverlayTouchAction),t.addEventListener("mousedown",i=>i.preventDefault()),t.addEventListener("opened-changed",i=>{this._overlayOpened=i.detail.value}),this._overlayElement=t}_initScroller(t){const i=`${this._tagNamePrefix}-scroller`,n=this._overlayElement;n.renderer=s=>{s.firstChild||s.appendChild(document.createElement(i))},n.requestContentUpdate();const a=n.querySelector(i);a.owner=t||this,a.getItemLabel=this._getItemLabel.bind(this),a.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=a}_updateScroller(t,i,n,a,s,o,l,h,u){t&&(n&&(t.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),t.setProperties({items:n?i:[],opened:n,loading:a,selectedItem:s,itemIdPath:o,focusedIndex:l,renderer:h,theme:u}))}_openedOrItemsChanged(t,i,n){this._overlayOpened=!!(t&&(n||i&&i.length))}_overlayOpenedChanged(t,i){t?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):i&&this.filteredItems&&this.filteredItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(t,i){i!==void 0&&this._updateActiveDescendant(t)}_isInputFocused(){return this.inputElement&&us(this.inputElement)}_updateActiveDescendant(t){const i=this._nativeInput;if(!i)return;const n=this._getItemElements().find(a=>a.index===t);n?i.setAttribute("aria-activedescendant",n.id):i.removeAttribute("aria-activedescendant")}_openedChanged(t,i){if(i===void 0)return;t?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this._isInputFocused()&&!Dn&&this.focus(),this._overlayElement.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const n=this._nativeInput;n&&(n.setAttribute("aria-expanded",!!t),t?n.setAttribute("aria-controls",this._scroller.id):n.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(t){return t.composedPath()[0]===this.clearElement}__onClearButtonMouseDown(t){t.preventDefault(),this.inputElement.focus()}_onClearButtonClick(t){t.preventDefault(),this._onClearAction(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(t){t.preventDefault(),this.opened?this.close():this.open()}_onHostClick(t){this.autoOpenDisabled||(t.preventDefault(),this.open())}_onClick(t){this._isClearButton(t)?this._onClearButtonClick(t):t.composedPath().includes(this._toggleElement)?this._onToggleButtonClick(t):this._onHostClick(t)}_onKeyDown(t){super._onKeyDown(t),t.key==="Tab"?this._overlayElement.restoreFocusOnClose=!1:t.key==="ArrowDown"?(this._onArrowDown(),t.preventDefault()):t.key==="ArrowUp"&&(this._onArrowUp(),t.preventDefault())}_getItemLabel(t){let i=t&&this.itemLabelPath?this.get(this.itemLabelPath,t):void 0;return i==null&&(i=t?t.toString():""),i}_getItemValue(t){let i=t&&this.itemValuePath?this.get(this.itemValuePath,t):void 0;return i===void 0&&(i=t?t.toString():""),i}_onArrowDown(){if(this.opened){const t=this.filteredItems;t&&(this._focusedIndex=Math.min(t.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const t=this.filteredItems;t&&(this._focusedIndex=t.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const t=this.filteredItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(t),this._markAllSelectionRange()}}_setSelectionRange(t,i){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(t,i)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const t=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(t,t)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(t){const i=this._focusedIndex<0&&this._inputElementValue!==""&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;if(!this.allowCustomValue&&i){t.preventDefault(),t.stopPropagation();return}this.opened&&(t.preventDefault(),t.stopPropagation()),this._closeOrCommit()}_onEscape(t){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(t.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(t.stopPropagation(),this._onClearAction()):this.opened?(t.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(t.stopPropagation(),this._onClearAction())}_toggleElementChanged(t){t&&(t.addEventListener("mousedown",i=>i.preventDefault()),t.addEventListener("click",()=>{Dn&&!this._isInputFocused()&&document.activeElement.blur()}))}_onClearAction(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame(()=>{this._scrollIntoView(this._focusedIndex),this._updateActiveDescendant(this._focusedIndex)}),this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const t=this.filteredItems[this._focusedIndex];this.selectedItem!==t&&(this.selectedItem=t),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const t=[...this.filteredItems||[],this.selectedItem],i=t[this.__getItemIndexByLabel(t,this._inputElementValue)];if(this.allowCustomValue&&!i){const n=this._inputElementValue;this._lastCustomValue=n;const a=new CustomEvent("custom-value-set",{detail:n,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(a),a.defaultPrevented||(this.value=n)}else!this.allowCustomValue&&!this.opened&&i?this.value=this._getItemValue(i):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}_onInput(t){const i=this._inputElementValue,n={};this.filter===i?this._filterChanged(this.filter):n.filter=i,!this.opened&&!this._isClearButton(t)&&!this.autoOpenDisabled&&(n.opened=!0),this.setProperties(n)}_onChange(t){t.stopPropagation()}_itemLabelPathChanged(t){typeof t!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(t){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,t):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(t){if(t==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const i=this._getItemValue(t);if(this.value!==i&&(this.value=i,this.value!==i))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(t)}this.filteredItems&&(this._focusedIndex=this.filteredItems.indexOf(t))}_valueChanged(t,i){t===""&&i===void 0||(_o(t)?(this._getItemValue(this.selectedItem)!==t&&this._selectItemForValue(t),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=t),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(t,i){this._ensureItemsOrDataProvider(()=>{this.items=i}),t?this.filteredItems=t.slice(0):i&&(this.filteredItems=null)}_filteredItemsChanged(t,i){const n=i?i[this._focusedIndex]:null,a=this.__getItemIndexByValue(t,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&a>=0&&(this.selectedItem=t[a]);const s=this.__getItemIndexByValue(t,this._getItemValue(n));s>-1?this._focusedIndex=s:this.__setInitialFocusedIndex()}__setInitialFocusedIndex(){const t=this._inputElementValue;t===void 0||t===this._getItemLabel(this.selectedItem)?this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this._getItemLabel(this.selectedItem)):this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(t,i){return t&&t.filter(a=>(i=i?i.toString().toLowerCase():"",this._getItemLabel(a).toString().toLowerCase().indexOf(i)>-1))}_selectItemForValue(t){const i=this.__getItemIndexByValue(this.filteredItems,t),n=this.selectedItem;i>=0?this.selectedItem=this.filteredItems[i]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&n===null&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(t){this._scroller&&this._scroller.scrollIntoView(t)}__getItemIndexByValue(t,i){return!t||!_o(i)?-1:yo(t,n=>this._getItemValue(n)===i)}__getItemIndexByLabel(t,i){return!t||!i?-1:yo(t,n=>this._getItemLabel(n).toString().toLowerCase()===i.toString().toLowerCase())}_overlaySelectedItemChanged(t){t.stopPropagation(),!(t.detail.item instanceof ye)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(t.detail.item),this.close())}_onFocusout(t){if(!(t.relatedTarget&&t.relatedTarget.localName===`${this._tagNamePrefix}-item`)){if(t.relatedTarget===this._overlayElement){t.composedPath()[0].focus();return}if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}}_onTouchend(t){!this.clearElement||t.composedPath()[0]!==this.clearElement||(t.preventDefault(),this._onClearAction())}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-combo-box",Yi,{moduleId:"vaadin-combo-box-styles"});class bo extends cu(Cs(du(cs(z(it(F)))))){static get is(){return"vaadin-combo-box"}static get template(){return L`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-combo-box-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Yr(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Wi(this.inputElement,this._labelController)),this._tooltipController=new Ct(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(e=>!e.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_setFocused(e){super._setFocused(e),e||this.validate()}_shouldRemoveFocus(e){return e.relatedTarget===this._overlayElement?(e.composedPath()[0].focus(),!1):!0}_onClearButtonClick(e){e.stopPropagation(),super._onClearButtonClick(e)}_onHostClick(e){const t=e.composedPath();(t.includes(this._labelNode)||t.includes(this._positionTarget))&&super._onHostClick(e)}}customElements.define(bo.is,bo);const Xc=S`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {
    padding-top: 0;
  }

  [part='header'],
  [part='header-content'],
  [part='footer'] {
    gap: var(--lumo-space-xs) var(--lumo-space-s);
    line-height: var(--lumo-line-height-s);
  }

  [part='header'] {
    padding: var(--lumo-space-m);
    background-color: var(--lumo-base-color);
    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */
  }

  [part='footer'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-contrast-5pct);
    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */
  }

  [part='title'] {
    font-size: var(--lumo-font-size-xl);
    font-weight: 600;
    color: var(--lumo-header-text-color);
    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0;
  }

  @media (min-height: 320px) {
    :host([overflow~='top']) [part='header'] {
      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);
    }
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;M("vaadin-dialog-overlay",[Nr,Xc],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-dialog-overlay",S`
    [part='header'],
    [part='header-content'],
    [part='footer'] {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex: none;
      pointer-events: none;
      z-index: 1;
    }

    [part='header'] {
      flex-wrap: nowrap;
    }

    ::slotted([slot='header-content']),
    ::slotted([slot='title']),
    ::slotted([slot='footer']) {
      display: contents;
      pointer-events: auto;
    }

    ::slotted([slot='title']) {
      font: inherit !important;
      overflow-wrap: anywhere;
    }

    [part='header-content'] {
      flex: 1;
    }

    :host([has-title]) [part='header-content'],
    [part='footer'] {
      justify-content: flex-end;
    }

    :host(:not([has-title]):not([has-header])) [part='header'],
    :host(:not([has-header])) [part='header-content'],
    :host(:not([has-title])) [part='title'],
    :host(:not([has-footer])) [part='footer'] {
      display: none !important;
    }

    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
      height: auto;
    }

    @media (min-height: 320px) {
      :host(:is([has-title], [has-header], [has-footer])) .resizer-container {
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
        flex: 1;
        overflow: auto;
      }
    }

    /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
    [part='content'] {
      min-width: 12em; /* matches the default <vaadin-text-field> width */
    }

    :host([has-bounds-set]) [part='overlay'] {
      max-width: none;
    }
  `,{moduleId:"vaadin-dialog-overlay-styles"});let or;class ja extends be{static get is(){return"vaadin-dialog-overlay"}static get template(){if(!or){or=super.template.cloneNode(!0);const e=or.content.querySelector('[part="content"]'),t=or.content.querySelector('[part="overlay"]'),i=document.createElement("section");i.id="resizerContainer",i.classList.add("resizer-container"),i.appendChild(e),t.appendChild(i);const n=document.createElement("header");n.setAttribute("part","header"),i.insertBefore(n,e);const a=document.createElement("div");a.setAttribute("part","title"),n.appendChild(a);const s=document.createElement("slot");s.setAttribute("name","title"),a.appendChild(s);const o=document.createElement("div");o.setAttribute("part","header-content"),n.appendChild(o);const l=document.createElement("slot");l.setAttribute("name","header-content"),o.appendChild(l);const h=document.createElement("footer");h.setAttribute("part","footer"),i.appendChild(h);const u=document.createElement("slot");u.setAttribute("name","footer"),h.appendChild(u)}return or}static get observers(){return["_headerFooterRendererChange(headerRenderer, footerRenderer, opened)","_headerTitleChanged(headerTitle, opened)"]}static get properties(){return{modeless:Boolean,withBackdrop:Boolean,headerTitle:String,headerRenderer:Function,footerRenderer:Function}}ready(){super.ready(),this.__resizeObserver=new ResizeObserver(()=>{this.__updateOverflow()}),this.__resizeObserver.observe(this.$.resizerContainer),this.$.content.addEventListener("scroll",()=>{this.__updateOverflow()})}__createContainer(e){const t=document.createElement("div");return t.setAttribute("slot",e),t}__clearContainer(e){e.innerHTML="",delete e._$litPart$}__initContainer(e,t){return e?this.__clearContainer(e):e=this.__createContainer(t),e}_headerFooterRendererChange(e,t,i){const n=this.__oldHeaderRenderer!==e;this.__oldHeaderRenderer=e;const a=this.__oldFooterRenderer!==t;this.__oldFooterRenderer=t;const s=this._oldOpenedFooterHeader!==i;this._oldOpenedFooterHeader=i,this.toggleAttribute("has-header",!!e),this.toggleAttribute("has-footer",!!t),n&&(e?this.headerContainer=this.__initContainer(this.headerContainer,"header-content"):this.headerContainer&&(this.headerContainer.remove(),this.headerContainer=null,this.__updateOverflow())),a&&(t?this.footerContainer=this.__initContainer(this.footerContainer,"footer"):this.footerContainer&&(this.footerContainer.remove(),this.footerContainer=null,this.__updateOverflow())),(e&&(n||s)||t&&(a||s))&&i&&this.requestContentUpdate()}_headerTitleChanged(e,t){this.toggleAttribute("has-title",!!e),t&&(e||this._oldHeaderTitle)&&this.requestContentUpdate(),this._oldHeaderTitle=e}_headerTitleRenderer(){this.headerTitle?(this.headerTitleElement||(this.headerTitleElement=document.createElement("h2"),this.headerTitleElement.setAttribute("slot","title"),this.headerTitleElement.classList.add("draggable")),this.appendChild(this.headerTitleElement),this.headerTitleElement.textContent=this.headerTitle):this.headerTitleElement&&(this.headerTitleElement.remove(),this.headerTitleElement=null)}requestContentUpdate(){super.requestContentUpdate(),this.headerContainer&&(this.headerContainer.parentElement||this.appendChild(this.headerContainer),this.headerRenderer&&this.headerRenderer.call(this.owner,this.headerContainer,this.owner)),this.footerContainer&&(this.footerContainer.parentElement||this.appendChild(this.footerContainer),this.footerRenderer&&this.footerRenderer.call(this.owner,this.footerContainer,this.owner)),this._headerTitleRenderer(),this.__updateOverflow()}setBounds(e){const t=this.$.overlay,i={...e};t.style.position!=="absolute"&&(t.style.position="absolute",this.setAttribute("has-bounds-set","")),Object.keys(i).forEach(n=>{typeof i[n]=="number"&&(i[n]=`${i[n]}px`)}),Object.assign(t.style,i)}getBounds(){const e=this.$.overlay.getBoundingClientRect(),t=this.getBoundingClientRect(),i=e.top-t.top,n=e.left-t.left,a=e.width,s=e.height;return{top:i,left:n,width:a,height:s}}__updateOverflow(){let e="";if(this.hasAttribute("has-header")||this.hasAttribute("has-footer")||this.headerTitle){const i=this.$.content;i.scrollTop>0&&(e+=" top"),i.scrollTop<i.scrollHeight-i.clientHeight&&(e+=" bottom")}const t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):t.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}}customElements.define(ja.is,ja);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Bn(r){return r.touches?r.touches[0]:r}function fu(r){return r.clientX>=0&&r.clientX<=window.innerWidth&&r.clientY>=0&&r.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hc=r=>class extends r{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:Dn},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(t){if(!(t.type==="touchstart"&&t.touches.length>1)&&this.draggable&&(t.button===0||t.touches)){const i=this.$.overlay.$.resizerContainer,n=t.target===i,a=t.offsetX>i.clientWidth||t.offsetY>i.clientHeight,s=t.target===this.$.overlay.$.content,o=t.composedPath().some((l,h)=>{if(!l.classList)return!1;const u=l.classList.contains(this.__dragHandleClassName||"draggable"),d=l.classList.contains("draggable-leaf-only"),c=h===0;return d&&c||u&&(!d||c)});if(n&&!a||s||o){o||t.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const l=Bn(t);this._originalMouseCoords={top:l.pageY,left:l.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(t){const i=Bn(t);if(fu(i)){const n=this._originalBounds.top+(i.pageY-this._originalMouseCoords.top),a=this._originalBounds.left+(i.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:n,left:a})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-dialog-overlay",S`
    [part='overlay'] {
      position: relative;
      overflow: visible;
      max-height: 100%;
      display: flex;
    }

    [part='content'] {
      box-sizing: border-box;
      height: 100%;
    }

    .resizer-container {
      overflow: auto;
      flex-grow: 1;
      border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
    }

    [part='overlay'][style] .resizer-container {
      min-height: 100%;
      width: 100%;
    }

    :host(:not([resizable])) .resizer {
      display: none;
    }

    :host([resizable]) [part='title'] {
      cursor: move;
      -webkit-user-select: none;
      user-select: none;
    }

    .resizer {
      position: absolute;
      height: 16px;
      width: 16px;
    }

    .resizer.edge {
      height: 8px;
      width: 8px;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    .resizer.edge.n {
      width: auto;
      bottom: auto;
      cursor: ns-resize;
    }

    .resizer.ne {
      top: -4px;
      right: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.e {
      height: auto;
      left: auto;
      cursor: ew-resize;
    }

    .resizer.se {
      bottom: -4px;
      right: -4px;
      cursor: nwse-resize;
    }

    .resizer.edge.s {
      width: auto;
      top: auto;
      cursor: ns-resize;
    }

    .resizer.sw {
      bottom: -4px;
      left: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.w {
      height: auto;
      right: auto;
      cursor: ew-resize;
    }

    .resizer.nw {
      top: -4px;
      left: -4px;
      cursor: nwse-resize;
    }
  `,{moduleId:"vaadin-dialog-resizable-overlay-styles"});const Zc=r=>class extends r{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(t=>{const i=document.createElement("div");this._resizeListeners.start[t]=n=>this._startResize(n,t),this._resizeListeners.resize[t]=n=>this._resize(n,t),this._resizeListeners.stop[t]=()=>this._stopResize(t),t.length===1&&i.classList.add("edge"),i.classList.add("resizer"),i.classList.add(t),i.addEventListener("mousedown",this._resizeListeners.start[t]),i.addEventListener("touchstart",this._resizeListeners.start[t]),this.$.overlay.$.resizerContainer.appendChild(i)})}_startResize(t,i){if(!(t.type==="touchstart"&&t.touches.length>1)&&(t.button===0||t.touches)){t.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const n=Bn(t);this._originalMouseCoords={top:n.pageY,left:n.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[i]),window.addEventListener("touchmove",this._resizeListeners.resize[i]),window.addEventListener("mouseup",this._resizeListeners.stop[i]),window.addEventListener("touchend",this._resizeListeners.stop[i]),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}_resize(t,i){const n=Bn(t);fu(n)&&i.split("").forEach(s=>{switch(s){case"n":{const o=this._originalBounds.height-(n.pageY-this._originalMouseCoords.top),l=this._originalBounds.top+(n.pageY-this._originalMouseCoords.top);o>40&&this.$.overlay.setBounds({top:l,height:o});break}case"e":{const o=this._originalBounds.width+(n.pageX-this._originalMouseCoords.left);o>40&&this.$.overlay.setBounds({width:o});break}case"s":{const o=this._originalBounds.height+(n.pageY-this._originalMouseCoords.top);o>40&&this.$.overlay.setBounds({height:o});break}case"w":{const o=this._originalBounds.width-(n.pageX-this._originalMouseCoords.left),l=this._originalBounds.left+(n.pageX-this._originalMouseCoords.left);o>40&&this.$.overlay.setBounds({left:l,width:o});break}}})}_stopResize(t){window.removeEventListener("mousemove",this._resizeListeners.resize[t]),window.removeEventListener("touchmove",this._resizeListeners.resize[t]),window.removeEventListener("mouseup",this._resizeListeners.stop[t]),window.removeEventListener("touchend",this._resizeListeners.stop[t]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const t=this.$.overlay.$.resizerContainer.scrollTop,{width:i,height:n}=getComputedStyle(this.$.overlay.$.overlay),a=this.$.overlay.$.content;a.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:s,height:o}=getComputedStyle(a);return a.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=t,{width:i,height:n,contentWidth:s,contentHeight:o}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wa extends Vr(iu(it(Hc(Zc(F))))){static get template(){return L`
      <style>
        :host {
          display: none !important;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        header-title="[[headerTitle]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String,value:""},renderer:Function,headerTitle:String,headerRenderer:Function,footerRenderer:Function,modeless:{type:Boolean,value:!1}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel, headerTitle)","_rendererChanged(renderer, headerRenderer, footerRenderer)"]}ready(){super.ready();const e=this.$.overlay;e.setAttribute("role","dialog"),e.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),e.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),this._overlayElement=e,Wr(this)}requestContentUpdate(){this.$&&this.$.overlay.requestContentUpdate()}_rendererChanged(e,t,i){this.$.overlay.setProperties({owner:this,renderer:e,headerRenderer:t,footerRenderer:i})}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.__restoreOpened=this.opened,this.opened=!1}_openedChanged(e){this.$.overlay.opened=e}_ariaLabelChanged(e,t){e||t?this.$.overlay.setAttribute("aria-label",e||t):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(e){e.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(e){this.noCloseOnOutsideClick&&e.preventDefault()}_handleEscPress(e){this.noCloseOnEsc&&e.preventDefault()}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}}customElements.define(Wa.is,Wa);M("vaadin-confirm-dialog-overlay",S`
    [part='header'] ::slotted(h3) {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
    }

    [part='message'] {
      width: 25em;
      min-width: 100%;
      max-width: 100%;
    }

    ::slotted([slot$='button'][theme~='tertiary']) {
      padding-left: var(--lumo-space-s);
      padding-right: var(--lumo-space-s);
    }

    [part='cancel-button'] {
      flex-grow: 1;
    }

    @media (max-width: 360px) {
      [part='footer'] {
        flex-direction: column-reverse;
        align-items: stretch;
        padding: var(--lumo-space-s) var(--lumo-space-l);
        gap: var(--lumo-space-s);
      }

      ::slotted([slot$='button']) {
        width: 100%;
        margin: 0;
      }
    }
  `,{moduleId:"lumo-confirm-dialog-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-confirm-dialog-overlay",S`
    :host {
      --_vaadin-confirm-dialog-content-width: auto;
      --_vaadin-confirm-dialog-content-height: auto;
    }

    [part='overlay'] {
      width: var(--_vaadin-confirm-dialog-content-width);
      height: var(--_vaadin-confirm-dialog-content-height);
    }

    /* Make buttons clickable */
    [part='footer'] > * {
      pointer-events: all;
    }
  `,{moduleId:"vaadin-confirm-dialog-overlay-styles"});let pi;const Kc=L`
  <div part="cancel-button">
    <slot name="cancel-button"></slot>
  </div>
  <div part="reject-button">
    <slot name="reject-button"></slot>
  </div>
  <div part="confirm-button">
    <slot name="confirm-button"></slot>
  </div>
`;class xo extends ja{static get is(){return"vaadin-confirm-dialog-overlay"}static get template(){if(!pi){pi=super.template.cloneNode(!0);const e=pi.content.querySelector('[part="header"]');e.innerHTML="";const t=document.createElement("slot");t.setAttribute("name","header"),e.appendChild(t);const i=pi.content.querySelector('[part="content"]'),n=i.querySelector("slot:not([name])"),a=document.createElement("div");a.setAttribute("part","message"),i.appendChild(a),a.appendChild(n);const s=pi.content.querySelector('[part="footer"]');s.setAttribute("role","toolbar");const o=s.querySelector("slot");s.removeChild(o),s.appendChild(Kc.content.cloneNode(!0))}return pi}_headerFooterRendererChange(e,t,i){super._headerFooterRendererChange(e,t,i),this.setAttribute("has-header",""),this.setAttribute("has-footer","")}}customElements.define(xo.is,xo);class Ao extends Wa{static get is(){return"vaadin-confirm-dialog-dialog"}static get template(){return L`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-confirm-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-confirm-dialog-overlay>
    `}static get properties(){return{contentHeight:{type:String},contentWidth:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateContentHeight(contentHeight, _overlayElement)","__updateContentWidth(contentWidth, _overlayElement)"]}ready(){super.ready(),this._overlayElement=this.$.overlay}__updateDimension(e,t,i){const n=`--_vaadin-confirm-dialog-content-${t}`;i?e.style.setProperty(n,i):e.style.removeProperty(n)}__updateContentHeight(e,t){t&&this.__updateDimension(t,"height",e)}__updateContentWidth(e,t){t&&this.__updateDimension(t,"width",e)}}customElements.define(Ao.is,Ao);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Co extends it(iu(gt(F))){static get template(){return L`
      <style>
        :host,
        [hidden] {
          display: none !important;
        }
      </style>

      <vaadin-confirm-dialog-dialog
        id="dialog"
        opened="{{opened}}"
        overlay-class="[[overlayClass]]"
        aria-label="[[_getAriaLabel(header)]]"
        theme$="[[_theme]]"
        no-close-on-outside-click
        no-close-on-esc="[[noCloseOnEsc]]"
        content-height="[[_contentHeight]]"
        content-width="[[_contentWidth]]"
      ></vaadin-confirm-dialog-dialog>

      <div hidden>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="cancel-button"></slot>
        <slot name="reject-button"></slot>
        <slot name="confirm-button"></slot>
      </div>
    `}static get is(){return"vaadin-confirm-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},header:{type:String,value:""},message:{type:String,value:""},confirmText:{type:String,value:"Confirm"},confirmTheme:{type:String,value:"primary"},noCloseOnEsc:{type:Boolean,value:!1},rejectButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},rejectText:{type:String,value:"Reject"},rejectTheme:{type:String,value:"error tertiary"},cancelButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},cancelText:{type:String,value:"Cancel"},cancelTheme:{type:String,value:"tertiary"},overlayClass:{type:String},_cancelButton:{type:Object},_confirmButton:{type:Object},_headerNode:{type:Object},_messageNodes:{type:Array,value:()=>[]},_rejectButton:{type:Object},_contentHeight:{type:String},_contentWidth:{type:String}}}static get observers(){return["__updateConfirmButton(_confirmButton, confirmText, confirmTheme)","__updateCancelButton(_cancelButton, cancelText, cancelTheme, cancelButtonVisible)","__updateHeaderNode(_headerNode, header)","__updateMessageNodes(_messageNodes, message)","__updateRejectButton(_rejectButton, rejectText, rejectTheme, rejectButtonVisible)"]}constructor(){super(),this.__cancel=this.__cancel.bind(this),this.__confirm=this.__confirm.bind(this),this.__reject=this.__reject.bind(this)}get __slottedNodes(){return[this._headerNode,...this._messageNodes,this._cancelButton,this._confirmButton,this._rejectButton]}ready(){super.ready(),this._overlayElement=this.$.dialog.$.overlay,this._overlayElement.addEventListener("vaadin-overlay-escape-press",this._escPressed.bind(this)),this._overlayElement.addEventListener("vaadin-overlay-open",()=>this.__onDialogOpened()),this._overlayElement.addEventListener("vaadin-overlay-closed",()=>this.__onDialogClosed()),this._headerController=new ft(this,"header","h3",{initializer:e=>{this._headerNode=e}}),this.addController(this._headerController),this._messageController=new ft(this,"","div",{multiple:!0,observe:!1,initializer:e=>{this._messageNodes=[...this._messageNodes,e]}}),this.addController(this._messageController),this._cancelController=new ft(this,"cancel-button","vaadin-button",{initializer:e=>{this.__setupSlottedButton("cancel",e)}}),this.addController(this._cancelController),this._rejectController=new ft(this,"reject-button","vaadin-button",{initializer:e=>{this.__setupSlottedButton("reject",e)}}),this.addController(this._rejectController),this._confirmController=new ft(this,"confirm-button","vaadin-button",{initializer:e=>{this.__setupSlottedButton("confirm",e)}}),this.addController(this._confirmController)}__onDialogOpened(){const e=this._overlayElement;this.__slottedNodes.forEach(i=>{e.appendChild(i)});const t=e.querySelector('[slot="confirm-button"]');t&&t.focus()}__onDialogClosed(){this.__slottedNodes.forEach(e=>{this.appendChild(e)})}__setupSlottedButton(e,t){const i=`_${e}Button`,n=`__${e}`;this[i]&&this[i]!==t&&this[i].remove(),t.addEventListener("click",this[n]),this[i]=t}__updateCancelButton(e,t,i,n){e&&(e===this._cancelController.defaultNode&&(e.textContent=t,e.setAttribute("theme",i)),e.toggleAttribute("hidden",!n))}__updateConfirmButton(e,t,i){e&&e===this._confirmController.defaultNode&&(e.textContent=t,e.setAttribute("theme",i))}__updateHeaderNode(e,t){e&&e===this._headerController.defaultNode&&(e.textContent=t)}__updateMessageNodes(e,t){if(e&&e.length>0){const i=e.find(n=>n===this._messageController.defaultNode);i&&(i.textContent=t)}}__updateRejectButton(e,t,i,n){e&&(e===this._rejectController.defaultNode&&(e.textContent=t,e.setAttribute("theme",i)),e.toggleAttribute("hidden",!n))}_escPressed(e){e.defaultPrevented||this.__cancel()}__confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.opened=!1}__cancel(){this.dispatchEvent(new CustomEvent("cancel")),this.opened=!1}__reject(){this.dispatchEvent(new CustomEvent("reject")),this.opened=!1}_getAriaLabel(e){return e||"confirmation"}}customElements.define(Co.is,Co);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pu=S`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;M("vaadin-custom-field",[aa,sa,pu],{moduleId:"lumo-custom-field"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qc=r=>r.split("	"),Jc=r=>r.join("	");class wo extends Ur(We(la(z(it(F))))){static get is(){return"vaadin-custom-field"}static get template(){return L`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
          /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-custom-field-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .inputs-wrapper {
          flex: none;
        }
      </style>

      <div class="vaadin-custom-field-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="inputs-wrapper" on-change="__onInputChange">
          <slot id="slot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{name:String,value:{type:String,observer:"__valueChanged",notify:!0},inputs:{type:Array,readOnly:!0},formatValue:{type:Function},parseValue:{type:Function}}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.setAttribute("role","group"),this.ariaTarget=this,this.__setInputsFromSlot(),this.__observer=new Br(this.$.slot,()=>{this.__setInputsFromSlot()}),this._tooltipController=new Ct(this),this.addController(this._tooltipController),this._tooltipController.setShouldShow(e=>!(e.inputs||[]).some(i=>i.opened))}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}_setFocused(e){super._setFocused(e),e||this.validate()}_shouldRemoveFocus(e){const{relatedTarget:t}=e;return!this.inputs.some(i=>t===(i.focusElement||i))}checkValidity(){return!(this.inputs.filter(t=>!(t.validate||t.checkValidity).call(t)).length||this.required&&!this.value.trim())}_onKeyDown(e){e.key==="Tab"&&(this.inputs.indexOf(e.target)<this.inputs.length-1&&!e.shiftKey||this.inputs.indexOf(e.target)>0&&e.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue())}__onInputChange(e){e.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0;const e=this.formatValue||Jc;this.value=e.apply(this,[this.inputs.map(t=>t.value)]),this.__settingValue=!1}__queryAllAssignedElements(e){const t=[];let i;return e.tagName==="SLOT"?i=e.assignedElements({flatten:!0}):(t.push(e),i=Array.from(e.children)),i.forEach(n=>t.push(...this.__queryAllAssignedElements(n))),t}__isInput(e){return!(e.getAttribute("slot")==="input"||e.getAttribute("slot")==="textarea")&&(e.validate||e.checkValidity)}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(e=>this.__isInput(e))}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__toggleHasValue(e){this.toggleAttribute("has-value",e!==null&&e.trim()!=="")}__valueChanged(e,t){if(this.__settingValue||!this.inputs)return;this.__toggleHasValue(e);const n=(this.parseValue||Qc).apply(this,[e]);if(!n||n.length===0){console.warn("Value parser has not provided values array");return}this.inputs.forEach((a,s)=>{a.value=n[s]}),t!==void 0&&this.validate()}}customElements.define(wo.is,wo);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-time-picker-item",[ji,gs],{moduleId:"lumo-time-picker-item"});M("vaadin-time-picker-overlay",[Nr,ra,ys,S`
      :host {
        --_vaadin-time-picker-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-time-picker-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-time-picker-overlay"});const tf=S`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;M("vaadin-time-picker",[Ye,tf],{moduleId:"lumo-time-picker"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Eo extends bs(z(Ot(F))){static get is(){return"vaadin-time-picker-item"}static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}}customElements.define(Eo.is,Eo);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Io extends As(F){static get is(){return"vaadin-time-picker-scroller"}static get template(){return L`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-time-picker-items-container-border-width);
          border-style: var(--_vaadin-time-picker-items-container-border-style);
          border-color: var(--_vaadin-time-picker-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}customElements.define(Io.is,Io);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-time-picker-overlay",S`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});let mn;class Mo extends xs(be){static get is(){return"vaadin-time-picker-overlay"}static get template(){return mn||(mn=super.template.cloneNode(!0),mn.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),mn}}customElements.define(Mo.is,Mo);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class To extends Cs(z(F)){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return L`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-time-picker-overlay>
    `}static get properties(){return{positionTarget:{type:Object}}}get _tagNamePrefix(){return"vaadin-time-picker"}get clearElement(){return this.querySelector('[part="clear-button"]')}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(e){super._inputElementValue=e,this._hasInputValue=e.length>0}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}}customElements.define(To.is,To);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const So="00:00:00.000",Oo="23:59:59.999";M("vaadin-time-picker",Yi,{moduleId:"vaadin-time-picker-styles"});class Bi extends du(cs(z(it(F)))){static get is(){return"vaadin-time-picker"}static get template(){return L`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          opened="{{opened}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          clear-button-visible="[[clearButtonVisible]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          overlay-class="[[overlayClass]]"
          position-target="[[_inputContainer]]"
          theme$="[[_theme]]"
          on-change="__onComboBoxChange"
          on-has-input-value-changed="__onComboBoxHasInputValueChanged"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},min:{type:String,value:""},max:{type:String,value:""},step:{type:Number},autoOpenDisabled:Boolean,overlayClass:{type:String},__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:e=>{if(!e)return;const t=(n=0,a="00")=>(a+n).substr((a+n).length-a.length);let i=`${t(e.hours)}:${t(e.minutes)}`;return e.seconds!==void 0&&(i+=`:${t(e.seconds)}`),e.milliseconds!==void 0&&(i+=`.${t(e.milliseconds,"000")}`),i},parseTime:e=>{const t="(\\d|[0-1]\\d|2[0-3])",i="(\\d|[0-5]\\d)",n=i,a="(\\d{1,3})",o=new RegExp(`^${t}(?::${i}(?::${n}(?:\\.${a})?)?)?$`,"u").exec(e);if(o){if(o[4])for(;o[4].length<3;)o[4]+="0";return{hours:o[1],minutes:o[2],seconds:o[3],milliseconds:o[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Yr(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Wi(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._tooltipController=new Ct(this),this._tooltipController.setShouldShow(e=>!e.opened),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}_inputElementChanged(e){super._inputElementChanged(e),e&&this.$.comboBox._setInputElement(e)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}checkValidity(){return!!(this.inputElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this._comboBoxValue||this.i18n.parseTime(this._comboBoxValue)))}_setFocused(e){super._setFocused(e),e||this.validate()}__validDayDivisor(e){return!e||24*3600%e===0||e<1&&e%1*1e3%1===0}_onKeyDown(e){if(super._onKeyDown(e),this.readonly||this.disabled||this.__dropdownItems.length)return;const t=this.__validDayDivisor(this.step)&&this.step||60;e.keyCode===40?this.__onArrowPressWithStep(-t):e.keyCode===38&&this.__onArrowPressWithStep(t)}_onEscape(){}__onArrowPressWithStep(e){const t=this.__addStep(this.__getMsec(this.__memoValue),e,!0);this.__memoValue=t,this.inputElement.value=this.i18n.formatTime(this.__validateTime(t)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(e){let t=(e&&e.hours||0)*60*60*1e3;return t+=(e&&e.minutes||0)*60*1e3,t+=(e&&e.seconds||0)*1e3,t+=e&&parseInt(e.milliseconds)||0,t}__getSec(e){let t=(e&&e.hours||0)*60*60;return t+=(e&&e.minutes||0)*60,t+=e&&e.seconds||0,t+=e&&e.milliseconds/1e3||0,t}__addStep(e,t,i){e===0&&t<0&&(e=24*60*60*1e3);const n=t*1e3,a=e%n;n<0&&a&&i?e-=a:n>0&&a&&i?e-=a-n:e+=n;const s=Math.floor(e/1e3/60/60);e-=s*1e3*60*60;const o=Math.floor(e/1e3/60);e-=o*1e3*60;const l=Math.floor(e/1e3);return e-=l*1e3,{hours:s<24?s:0,minutes:o,seconds:l,milliseconds:e}}__updateDropdownItems(e,t,i,n){const a=this.__validateTime(this.__parseISO(t||So)),s=this.__getSec(a),o=this.__validateTime(this.__parseISO(i||Oo)),l=this.__getSec(o);if(this.__dropdownItems=this.__generateDropdownList(s,l,n),n!==this.__oldStep){this.__oldStep=n;const h=this.__validateTime(this.__parseISO(this.value));this.__updateValue(h)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(e,t,i){if(i<15*60||!this.__validDayDivisor(i))return[];const n=[];i||(i=3600);let a=-i+e;for(;a+i>=e&&a+i<=t;){const s=this.__validateTime(this.__addStep(a*1e3,i));a+=i;const o=this.i18n.formatTime(s);n.push({label:o,value:o})}return n}_valueChanged(e,t){const i=this.__memoValue=this.__parseISO(e),n=this.__formatISO(i)||"";e!==""&&e!==null&&!i?this.value=t===void 0?"":t:e!==n?this.value=n:this.__keepInvalidInput?delete this.__keepInvalidInput:this.__updateInputValue(i),this._toggleHasValue(this._hasValue)}__comboBoxValueChanged(e,t){if(e===""&&t===void 0)return;const i=this.i18n.parseTime(e),n=this.i18n.formatTime(i)||"";i?e!==n?this._comboBoxValue=n:this.__updateValue(i):(this.value!==""&&e!==""&&(this.__keepInvalidInput=!0),this.value="")}__onComboBoxChange(e){e.stopPropagation(),this.validate(),this.__dispatchChange()}__onComboBoxHasInputValueChanged(){this._hasInputValue=this.$.comboBox._hasInputValue}__updateValue(e){const t=this.__formatISO(this.__validateTime(e))||"";this.value=t}__updateInputValue(e){const t=this.i18n.formatTime(this.__validateTime(e))||"";this._comboBoxValue=t}__validateTime(e){if(e){const t=this.__getStepSegment();e.hours=parseInt(e.hours),e.minutes=parseInt(e.minutes||0),e.seconds=t<3?void 0:parseInt(e.seconds||0),e.milliseconds=t<4?void 0:parseInt(e.milliseconds||0)}return e}__getStepSegment(){if(this.step%3600===0)return 1;if(this.step%60===0||!this.step)return 2;if(this.step%1===0)return 3;if(this.step<1)return 4}__formatISO(e){return Bi.properties.i18n.value().formatTime(e)}__parseISO(e){return Bi.properties.i18n.value().parseTime(e)}_timeAllowed(e){const t=this.i18n.parseTime(this.min||So),i=this.i18n.parseTime(this.max||Oo);return(!this.__getMsec(t)||this.__getMsec(e)>=this.__getMsec(t))&&(!this.__getMsec(i)||this.__getMsec(e)<=this.__getMsec(i))}_onClearButtonClick(){}_onChange(){}_onInput(){}}customElements.define(Bi.is,Bi);const ef=S`
  ::slotted([slot='date-picker']) {
    margin-inline-end: 2px;
    --vaadin-input-field-top-end-radius: 0;
    --vaadin-input-field-bottom-end-radius: 0;
  }

  ::slotted([slot='time-picker']) {
    --vaadin-input-field-top-start-radius: 0;
    --vaadin-input-field-bottom-start-radius: 0;
  }
`;M("vaadin-date-time-picker",[ef,aa,sa,pu],{moduleId:"lumo-date-time-picker"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-date-time-picker",Yi,{moduleId:"vaadin-date-time-picker"});function vu(r,e){for(;r;){if(r.properties&&r.properties[e])return r.properties[e];r=Object.getPrototypeOf(r)}}const mu=vu(Yh,"i18n").value(),On=vu(Bi,"i18n").value(),Ro=Object.keys(mu),Lo=Object.keys(On);class Po extends ft{constructor(e,t){super(e,`${t}-picker`,`vaadin-${t}-picker`,{initializer:(i,n)=>{const a=`__${t}Picker`;n[a]=i}})}}class Fo extends Ur(jr(We(z(it(F))))){static get template(){return L`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        .slots ::slotted([slot='date-picker']) {
          min-width: 0;
          flex: 1 1 auto;
        }

        .slots ::slotted([slot='time-picker']) {
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>({...mu,...On})},overlayClass:{type:String},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder, __datePicker)","__timePlaceholderChanged(timePlaceholder, __timePicker)","__stepChanged(step, __timePicker)","__initialPositionChanged(initialPosition, __datePicker)","__showWeekNumbersChanged(showWeekNumbers, __datePicker)","__requiredChanged(required, __datePicker, __timePicker)","__invalidChanged(invalid, __datePicker, __timePicker)","__disabledChanged(disabled, __datePicker, __timePicker)","__readonlyChanged(readonly, __datePicker, __timePicker)","__i18nChanged(i18n, __datePicker, __timePicker)","__autoOpenDisabledChanged(autoOpenDisabled, __datePicker, __timePicker)","__themeChanged(_theme, __datePicker, __timePicker)","__overlayClassChanged(overlayClass, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)"]}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this)}get __inputs(){return[this.__datePicker,this.__timePicker]}get __formattedValue(){const[e,t]=this.__inputs.map(i=>i.value);return e&&t?[e,t].join("T"):""}ready(){super.ready(),this._datePickerController=new Po(this,"date"),this.addController(this._datePickerController),this._timePickerController=new Po(this,"time"),this.addController(this._timePickerController),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus()),this.setAttribute("role","group"),this._tooltipController=new Ct(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(e=>e.__datePicker&&!e.__datePicker.opened&&e.__timePicker&&!e.__timePicker.opened),this.ariaTarget=this}focus(){this.__datePicker.focus()}_setFocused(e){super._setFocused(e),e||this.validate()}_shouldRemoveFocus(e){const t=e.relatedTarget,i=this.__datePicker._overlayContent;return!(this.__datePicker.contains(t)||this.__timePicker.contains(t)||i&&i.contains(t))}__syncI18n(e,t,i=Object.keys(t.i18n)){i.forEach(n=>{t.i18n&&t.i18n.hasOwnProperty(n)&&e.set(`i18n.${n}`,t.i18n[n])})}__changeEventHandler(e){e.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.__dispatchChange(),this.validate()),this.__dispatchChangeForValue=void 0}__addInputListeners(e){e.addEventListener("change",this.__changeEventHandler),e.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(e){e.removeEventListener("change",this.__changeEventHandler),e.removeEventListener("value-changed",this.__valueChangedEventHandler)}__isDefaultPicker(e,t){const i=this[`_${t}PickerController`];return i&&e===i.defaultNode}__datePickerChanged(e,t){e&&(t&&(this.__removeInputListeners(t),t.remove()),this.__addInputListeners(e),this.__isDefaultPicker(e,"date")?(e.placeholder=this.datePlaceholder,e.invalid=this.invalid,e.initialPosition=this.initialPosition,e.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(e,this,Ro)):(this.datePlaceholder=e.placeholder,this.initialPosition=e.initialPosition,this.showWeekNumbers=e.showWeekNumbers,this.__syncI18n(this,e,Ro)),e.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),e.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),e.validate=()=>{},e._validateInput=()=>{})}__timePickerChanged(e,t){e&&(t&&(this.__removeInputListeners(t),t.remove()),this.__addInputListeners(e),this.__isDefaultPicker(e,"time")?(e.placeholder=this.timePlaceholder,e.step=this.step,e.invalid=this.invalid,this.__syncI18n(e,this,Lo)):(this.timePlaceholder=e.placeholder,this.step=e.step,this.__syncI18n(this,e,Lo)),this.__updateTimePickerMinMax(),e.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const e=this.__parseDate(this.__datePicker.value),t=fn(this.__minDateTime,this.__maxDateTime),i=this.__timePicker.value;this.__minDateTime&&fn(e,this.__minDateTime)||t?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&fn(e,this.__maxDateTime)||t?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==i&&(this.__timePicker.value=i)}}__i18nChanged(e,t,i){t&&(t.i18n={...t.i18n,...e}),i&&(i.i18n={...i.i18n,...e})}__datePlaceholderChanged(e,t){t&&(t.placeholder=e)}__timePlaceholderChanged(e,t){t&&(t.placeholder=e)}__stepChanged(e,t){t&&t.step!==e&&(t.step=e)}__initialPositionChanged(e,t){t&&(t.initialPosition=e)}__showWeekNumbersChanged(e,t){t&&(t.showWeekNumbers=e)}__invalidChanged(e,t,i){t&&(t.invalid=e),i&&(i.invalid=e)}__requiredChanged(e,t,i){t&&(t.required=e),i&&(i.required=e)}__disabledChanged(e,t,i){t&&(t.disabled=e),i&&(i.disabled=e)}__readonlyChanged(e,t,i){t&&(t.readonly=e),i&&(i.readonly=e)}__parseDate(e){return xc(e)}__formatDateISO(e,t){return e?Yh.prototype._formatISO(e):t}__formatTimeISO(e){return On.formatTime(e)}__parseTimeISO(e){return On.parseTime(e)}__parseDateTime(e){const[t,i]=e.split("T");if(!(t&&i))return;const n=this.__parseDate(t);if(!n)return;const a=this.__parseTimeISO(i);if(a)return n.setHours(parseInt(a.hours)),n.setMinutes(parseInt(a.minutes||0)),n.setSeconds(parseInt(a.seconds||0)),n.setMilliseconds(parseInt(a.milliseconds||0)),n}__formatDateTime(e){if(!e)return"";const t=this.__formatDateISO(e,""),i=this.__dateToIsoTimeString(e);return`${t}T${i}`}__dateToIsoTimeString(e){return this.__formatTimeISO(this.__validateTime({hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}))}__validateTime(e){if(e){const t=this.__getStepSegment();e.seconds=t<3?void 0:e.seconds,e.milliseconds=t<4?void 0:e.milliseconds}return e}checkValidity(){const e=this.__inputs.some(i=>!i.checkValidity()),t=this.required&&this.__inputs.some(i=>!i.value);return!(e||t)}__getStepSegment(){const e=this.step==null?60:parseFloat(this.step);if(e%3600===0)return 1;if(e%60===0||!e)return 2;if(e%1===0)return 3;if(e<1)return 4}__dateTimeEquals(e,t){return fn(e,t)?e.getHours()===t.getHours()&&e.getMinutes()===t.getMinutes()&&e.getSeconds()===t.getSeconds()&&e.getMilliseconds()===t.getMilliseconds():!1}__handleDateTimeChange(e,t,i,n){if(!i){this[e]="",this[t]="";return}const a=this.__parseDateTime(i);if(!a){this[e]=n;return}this.__dateTimeEquals(this[t],a)||(this[t]=a)}__valueChanged(e,t){this.__handleDateTimeChange("value","__selectedDateTime",e,t),t!==void 0&&(this.__dispatchChangeForValue=e),this.toggleAttribute("has-value",!!e),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(e,t){this.__handleDateTimeChange("min","__minDateTime",e,t),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__maxChanged(e,t){this.__handleDateTimeChange("max","__maxDateTime",e,t),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__selectedDateTimeChanged(e){const t=this.__formatDateTime(e);if(this.value!==t&&(this.value=t),Boolean(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[n,a]=this.value.split("T");this.__datePicker.value=n||"",this.__timePicker.value=a||"",this.__ignoreInputValueChange=!1}}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const e=this.__formattedValue,[t,i]=e.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),t&&i?e!==this.value&&(this.value=e):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(e,t,i){t&&(t.autoOpenDisabled=e),i&&(i.autoOpenDisabled=e)}__themeChanged(e,t,i){!t||!i||[t,i].forEach(n=>{e?n.setAttribute("theme",e):n.removeAttribute("theme")})}__overlayClassChanged(e,t,i){!t||!i||(t.overlayClass=e,i.overlayClass=e)}__pickersChanged(e,t){!e||!t||this.__isDefaultPicker(e,"date")===this.__isDefaultPicker(t,"time")&&(e.value?this.__valueChangedEventHandler():this.value&&(this.__selectedDateTimeChanged(this.__selectedDateTime),(this.min||this.max)&&this.validate()))}}customElements.define(Fo.is,Fo);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ko extends qh(Ot(z(F))){static get is(){return"vaadin-details-summary"}static get template(){return L`
      <style>
        :host {
          display: block;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          pointer-events: none;
        }
      </style>
      <span part="toggle" aria-hidden="true"></span>
      <div part="content"><slot></slot></div>
    `}static get properties(){return{opened:{type:Boolean,reflectToAttribute:!0}}}}customElements.define(ko.is,ko);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Do extends au(ia(ea(it(z(gt(F)))))){static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: none;
        }

        :host([opened]) [part='content'] {
          display: block;
        }
      </style>

      <slot name="summary"></slot>

      <div part="content">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-details"}static get properties(){return{summary:{type:String,observer:"_summaryChanged"}}}static get observers(){return["__updateAriaControls(focusElement, _contentElements)","__updateAriaExpanded(focusElement, opened)"]}static get delegateAttrs(){return["theme"]}static get delegateProps(){return["disabled","opened"]}constructor(){super(),this._summaryController=new su(this,"vaadin-details-summary"),this._summaryController.addEventListener("slot-content-changed",e=>{const{node:t}=e.target;this._setFocusElement(t),this.stateTarget=t,this._tooltipController.setTarget(t)}),this._tooltipController=new Ct(this),this._tooltipController.setPosition("bottom-start")}ready(){super.ready(),this.addController(this._summaryController),this.addController(this._tooltipController)}_setAriaDisabled(){}_summaryChanged(e){this._summaryController.setSummary(e)}__updateAriaControls(e,t){if(e&&t){const i=t[0];i&&i.id?e.setAttribute("aria-controls",i.id):e.removeAttribute("aria-controls")}}__updateAriaExpanded(e,t){e&&e.setAttribute("aria-expanded",t?"true":"false")}}customElements.define(Do.is,Do);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rf=S`
  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;M("vaadin-email-field",[Ye,rf],{moduleId:"lumo-email-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nf=S`
  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-email-field",nf,{moduleId:"vaadin-email-field-styles"});class af extends Xh{static get is(){return"vaadin-email-field"}constructor(){super(),this._setType("email"),this.pattern="^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$"}ready(){super.ready(),this.inputElement&&(this.inputElement.autocapitalize="off")}}customElements.define("vaadin-email-field",af);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-field-outline",S`
    :host {
      transition: opacity 0.3s;
      -webkit-mask-image: none !important;
      mask-image: none !important;
    }

    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 0 2px var(--_active-user-color);
      border-radius: var(--lumo-border-radius-s);
      transition: box-shadow 0.3s;
    }

    :host([context$='checkbox'])::before {
      box-shadow: 0 0 0 2px var(--lumo-base-color), 0 0 0 4px var(--_active-user-color);
    }

    :host([context$='radio-button'])::before {
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--lumo-base-color), 0 0 0 5px var(--_active-user-color);
    }

    :host([context$='item'])::before {
      box-shadow: inset 0 0 0 2px var(--_active-user-color);
    }
  `,{moduleId:"lumo-field-outline"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-user-tags-overlay",S`
    [part='overlay'] {
      will-change: opacity, transform;
    }

    :host([opening]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-enter ease-out both;
    }

    @keyframes lumo-user-tags-enter {
      0% {
        opacity: 0;
      }
    }

    :host([closing]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-exit both;
    }

    @keyframes lumo-user-tags-exit {
      100% {
        opacity: 0;
      }
    }
  `,{moduleId:"lumo-user-tags-overlay"});M("vaadin-user-tag",S`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      border-radius: var(--lumo-border-radius-s);
      box-shadow: var(--lumo-box-shadow-xs);
      --vaadin-user-tag-offset: var(--lumo-space-xs);
    }

    [part='name'] {
      color: var(--lumo-primary-contrast-color);
      padding: 0.3em calc(0.3em + var(--lumo-border-radius-s) / 4);
      line-height: 1;
      font-weight: 500;
      min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    }
  `,{moduleId:"lumo-user-tag"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bo extends z(Ot(F)){static get is(){return"vaadin-user-tag"}static get template(){return L`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          margin: 0 0 var(--vaadin-user-tag-offset);
          opacity: 0;
          height: 1.3rem;
          transition: opacity 0.2s ease-in-out;
          background-color: var(--vaadin-user-tag-color);
          color: #fff;
          cursor: default;
          -webkit-user-select: none;
          user-select: none;
          --vaadin-user-tag-offset: 4px;
        }

        :host(.show) {
          opacity: 1;
        }

        :host(:last-of-type) {
          margin-bottom: 0;
        }

        [part='name'] {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 2px 4px;
          height: 1.3rem;
          font-size: 13px;
        }
      </style>
      <div part="name">[[name]]</div>
    `}static get properties(){return{name:{type:String},uid:{type:String},colorIndex:{type:Number,observer:"_colorIndexChanged"}}}ready(){super.ready(),this.addEventListener("mousedown",this._onClick.bind(this),!0)}_colorIndexChanged(e){e!=null&&this.style.setProperty("--vaadin-user-tag-color",`var(--vaadin-user-color-${e})`)}_onClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("user-tag-click",{bubbles:!0,composed:!0,detail:{name:this.name}}))}}customElements.define(Bo.is,Bo);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-user-tags-overlay",S`
    :host {
      background: transparent;
      box-shadow: none;
    }

    [part='overlay'] {
      box-shadow: none;
      background: transparent;
      position: relative;
      left: -4px;
      padding: 4px;
      outline: none;
      overflow: visible;
    }

    ::slotted([part='tags']) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    :host([dir='rtl']) [part='overlay'] {
      left: auto;
      right: -4px;
    }

    [part='content'] {
      padding: 0;
    }

    :host([opening]),
    :host([closing]) {
      animation: 0.14s user-tags-overlay-dummy-animation;
    }

    @keyframes user-tags-overlay-dummy-animation {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 1;
      }
    }
  `);class No extends na(be){static get is(){return"vaadin-user-tags-overlay"}ready(){super.ready(),this.$.overlay.setAttribute("tabindex","-1")}}customElements.define(No.is,No);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zo=(r,e)=>new Promise(t=>{const i=()=>{r.removeEventListener(e,i),t()};r.addEventListener(e,i)});class Go extends F{static get is(){return"vaadin-user-tags"}static get template(){return L`
      <style>
        :host {
          position: absolute;
        }
      </style>
      <vaadin-user-tags-overlay
        id="overlay"
        modeless
        opened="[[opened]]"
        no-vertical-overlap
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-user-tags-overlay>
    `}static get properties(){return{hasFocus:{type:Boolean,value:!1,observer:"_hasFocusChanged"},opened:{type:Boolean,value:!1},flashing:{type:Boolean,value:!1},target:{type:Object,observer:"__targetChanged"},users:{type:Array,value:()=>[]},duration:{type:Number,value:200},delay:{type:Number,value:2e3},__flashQueue:{type:Array,value:()=>[]},__isTargetVisible:{type:Boolean,value:!1}}}constructor(){super(),this.__targetVisibilityObserver=new IntersectionObserver(([e])=>{this.__onTargetVisibilityChange(e.isIntersecting)},{threshold:1})}get wrapper(){return this.$.overlay.querySelector('[part="tags"]')}connectedCallback(){super.connectedCallback(),this.target&&this.__targetVisibilityObserver.observe(this.target)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1,this.target&&this.__targetVisibilityObserver.unobserve(this.target)}ready(){super.ready(),this.$.overlay.renderer=e=>{if(!e.firstChild){const t=document.createElement("div");t.setAttribute("part","tags"),e.appendChild(t)}},this.$.overlay.requestContentUpdate()}__onTargetVisibilityChange(e){if(this.__isTargetVisible=e,e&&this.__flashQueue.length>0&&!this.flashing){this.flashTags(this.__flashQueue.shift());return}if(e&&this.hasFocus){this.opened=!0;return}!e&&this.opened&&(this.opened=!1)}__targetChanged(e,t){this.$.overlay.positionTarget=e,t&&this.__targetVisibilityObserver.unobserve(t),e&&this.__targetVisibilityObserver.observe(e)}_hasFocusChanged(e){e&&this.flashing&&this.stopFlash()}createUserTag(e){const t=document.createElement("vaadin-user-tag");return t.name=e.name,t.uid=e.id,t.colorIndex=e.colorIndex,t}getTagForUser(e){return Array.from(this.wrapper.children).find(t=>t.uid===e.id)}getChangedTags(e,t){const i=t.map(a=>this.getTagForUser(a));return{added:e.map(a=>this.getTagForUser(a)||this.createUserTag(a)),removed:i}}getChangedUsers(e,t){const i=[],n=[];t.forEach(o=>{o.removed.forEach(l=>{n.push(l)});for(let l=o.addedCount-1;l>=0;l--)i.push(e[o.index+l])});const a=i.filter(o=>!n.some(l=>o.id===l.id)),s=n.filter(o=>!i.some(l=>o.id===l.id));return{addedUsers:a,removedUsers:s}}applyTagsStart({added:e,removed:t}){const i=this.wrapper;t.forEach(n=>{n&&(n.classList.add("removing"),n.classList.remove("show"))}),e.forEach(n=>i.insertBefore(n,i.firstChild))}applyTagsEnd({added:e,removed:t}){const i=this.wrapper;t.forEach(n=>{n&&n.parentNode===i&&i.removeChild(n)}),e.forEach(n=>n&&n.classList.add("show"))}setUsers(e){this.requestContentUpdate();const t=jh(e,this.users);if(t.length===0)return;const{addedUsers:i,removedUsers:n}=this.getChangedUsers(e,t);if(i.length===0&&n.length===0)return;const a=this.getChangedTags(i,n);if(this.__flashQueue.length>0&&n.forEach((s,o)=>{a.removed[o]!==null&&this.__flashQueue.forEach(l=>{l.some(h=>h.uid===s.id)&&this.splice("__flashQueue",o,1)})}),this.opened&&this.hasFocus)this.updateTags(e,a);else if(i.length>0&&document.visibilityState!=="hidden"){const s=a.added,o=a.removed;this.updateTagsSync(e,{added:[],removed:o}),this.flashing||!this.__isTargetVisible?this.push("__flashQueue",s):this.flashTags(s)}else this.updateTagsSync(e,a)}_onOverlayOpen(){Array.from(this.wrapper.children).forEach(e=>{e.classList.contains("removing")||e.classList.add("show")})}flashTags(e){this.flashing=!0;const t=this.wrapper,i=Array.from(t.children);i.forEach(n=>{n.style.display="none"}),e.forEach(n=>{t.insertBefore(n,t.firstChild)}),this.flashPromise=new Promise(n=>{zo(this.$.overlay,"vaadin-overlay-open").then(()=>{this._debounceFlashStart=Oi.debounce(this._debounceFlashStart,yr.after(this.duration+this.delay),()=>{this.hasFocus||e.forEach(a=>a.classList.remove("show")),this._debounceFlashEnd=Oi.debounce(this._debounceFlashEnd,yr.after(this.duration),()=>{const a=()=>{i.forEach(s=>{s.style.display="block"}),this.flashing=!1,n()};this.hasFocus?a():(zo(this.$.overlay,"animationend").then(()=>{a()}),this.opened=!1)})})})}).then(()=>{if(this.__flashQueue.length>0){const n=this.__flashQueue[0];this.splice("__flashQueue",0,1),this.flashTags(n)}}),this.opened=!0}stopFlash(){this._debounceFlashStart&&this._debounceFlashStart.flush(),this._debounceFlashEnd&&this._debounceFlashEnd.flush(),this.$.overlay._flushAnimation("closing")}updateTags(e,t){this.applyTagsStart(t),this._debounceRender=Oi.debounce(this._debounceRender,yr.after(this.duration),()=>{this.set("users",e),this.applyTagsEnd(t),e.length===0&&this.opened&&(this.opened=!1)})}updateTagsSync(e,t){this.applyTagsStart(t),this.set("users",e),this.applyTagsEnd(t)}show(){this.hasFocus=!0,this.__isTargetVisible&&(this.opened=!0)}hide(){this.hasFocus=!1,this.opened=!1}requestContentUpdate(){this._debounceRender&&this._debounceRender.isActive()&&this._debounceRender.flush()}}customElements.define(Go.is,Go);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $o extends z(Ot(F)){static get is(){return"vaadin-field-outline"}static get template(){return L`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          --_active-user-color: transparent;
        }

        :host([has-active-user]) {
          opacity: 1;
        }
      </style>
    `}static get properties(){return{user:{type:Object,value:null,observer:"_userChanged"}}}ready(){super.ready(),this.setAttribute("part","outline"),this._field=this.getRootNode().host}_userChanged(e){this.toggleAttribute("has-active-user",Boolean(e));const t=e?`var(--vaadin-user-color-${e.colorIndex})`:"transparent",i="--_active-user-color";this.style.setProperty(i,t),this._field&&this._field.style.setProperty(i,t)}}customElements.define($o.is,$o);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sf=(r,e)=>{switch(e){case"vaadin-big-decimal-field":case"vaadin-combo-box":case"vaadin-date-picker":case"vaadin-email-field":case"vaadin-integer-field":case"vaadin-number-field":case"vaadin-password-field":case"vaadin-select":case"vaadin-text-area":case"vaadin-text-field":case"vaadin-time-picker":return r.shadowRoot.querySelector('[part="input-field"]');case"vaadin-checkbox":return r.shadowRoot.querySelector('[part="checkbox"]');case"vaadin-radio-button":return r.shadowRoot.querySelector('[part="radio"]');default:return r}},Ta=new WeakMap,of=r=>{if(!Ta.has(r)){const e=r.tagName.toLowerCase(),t=sf(r,e);t.style.position="relative",e.endsWith("text-area")&&(t.style.overflow="visible");const i=document.createElement("style");i.textContent=`
      :host([active]) [part="outline"],
      :host([focus-ring]) [part="outline"] {
        display: none;
      }
    `,r.shadowRoot.appendChild(i);const n=document.createElement("vaadin-field-outline");(t===r?r.shadowRoot:t).appendChild(n),n.setAttribute("context",e),Ta.set(r,{root:r,target:t,outline:n})}return Ta.get(r)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ws{constructor(e){this.component=e,this.initTags(e)}getFields(){return[this.component]}getFieldIndex(e){return this.getFields().indexOf(e)}getFocusTarget(e){return this.component}initTags(e){const t=document.createElement("vaadin-user-tags");e.shadowRoot.appendChild(t),t.target=e,this._tags=t,e.addEventListener("mouseenter",i=>{i.relatedTarget!==this._tags.$.overlay&&(this._mouse=!0,this._mouseDebouncer=Oi.debounce(this._mouseDebouncer,yr.after(200),()=>{this._mouse&&this._tags.show()}))}),e.addEventListener("mouseleave",i=>{i.relatedTarget!==this._tags.$.overlay&&(this._mouse=!1,this._hasFocus||this._tags.hide())}),e.addEventListener("vaadin-highlight-show",i=>{this._hasFocus=!0,this._debouncer&&this._debouncer.isActive()?this._debouncer.cancel():this._tags.show()}),e.addEventListener("vaadin-highlight-hide",i=>{this._hasFocus=!1,this._mouse||(this._debouncer=Oi.debounce(this._debouncer,yr.after(1),()=>{this._tags.hide()}))}),this._tags.$.overlay.addEventListener("mouseleave",i=>{i.relatedTarget!==e&&(this._mouse=!1,e.hasAttribute("focused")||this._tags.hide())})}setOutlines(e){const t=this.getFields();t.forEach((i,n)=>{const{outline:a}=of(i),s=t.length===1?0:e.map(o=>o.fieldIndex).indexOf(n);a.user=e[s]})}showOutline(e){this.fire("show",e)}hideOutline(e){this.fire("hide",e)}fire(e,t){this.component.dispatchEvent(new CustomEvent(`vaadin-highlight-${e}`,{bubbles:!0,composed:!0,detail:{fieldIndex:this.getFieldIndex(t)}}))}redraw(e){this._tags.setUsers(e),this.setOutlines(e)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qi extends ws{constructor(e){super(e),this.addListeners(e)}addListeners(e){e.addEventListener("focusin",t=>this.onFocusIn(t)),e.addEventListener("focusout",t=>this.onFocusOut(t))}onFocusIn(e){const t=this.getFocusTarget(e);this.showOutline(t)}onFocusOut(e){const t=this.getFocusTarget(e);this.hideOutline(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lf extends qi{getFields(){return this.component.__checkboxes}getFocusTarget(e){const t=this.getFields();return Array.from(e.composedPath()).find(i=>t.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gu extends ws{constructor(e){super(e),this.datePicker=e,this.fullscreenFocus=!1,this.blurWhileOpened=!1,this.addListeners(e)}addListeners(e){this.overlay=e.$.overlay,e.addEventListener("blur",t=>this.onBlur(t),!0),e.addEventListener("opened-changed",t=>this.onOpenedChanged(t)),this.overlay.addEventListener("focusout",t=>this.onOverlayFocusOut(t)),e.addEventListener("focusin",t=>this.onFocusIn(t)),e.addEventListener("focusout",t=>this.onFocusOut(t))}isEventInOverlay(e){return this.datePicker._overlayContent&&this.datePicker._overlayContent.contains(e)}onBlur(e){this.datePicker._fullscreen&&!this.isEventInOverlay(e.relatedTarget)&&(this.fullscreenFocus=!0)}onFocusIn(e){if(!this.isEventInOverlay(e.relatedTarget)){if(this.blurWhileOpened){this.blurWhileOpened=!1;return}this.showOutline(this.datePicker)}}onFocusOut(e){this.fullscreenFocus||this.isEventInOverlay(e.relatedTarget)||(this.datePicker.opened?this.blurWhileOpened=!0:this.hideOutline(this.datePicker))}onOverlayFocusOut(e){this.datePicker.contains(e.relatedTarget)||(this.blurWhileOpened=!0)}onOpenedChanged(e){e.detail.value===!0&&this.fullscreenFocus&&(this.fullscreenFocus=!1,this.showOutline(this.datePicker)),e.detail.value===!1&&this.blurWhileOpened&&(this.blurWhileOpened=!1,this.hideOutline(this.datePicker))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hf extends gu{constructor(e,t){super(e),this.component=t}getFieldIndex(){return 0}}class uf extends qi{constructor(e,t){super(e),this.component=t,this.timePicker=e}getFocusTarget(e){return this.timePicker}getFieldIndex(){return 1}}class df extends ws{constructor(e){super(e);const[t,i]=this.getFields();this.dateObserver=new hf(t,e),this.timeObserver=new uf(i,e)}getFields(){return this.component.__inputs}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cf extends qi{getFields(){return this.component.items||[]}getFocusTarget(e){const t=this.getFields();return Array.from(e.composedPath()).find(i=>t.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ff extends qi{getFields(){return this.component.__radioButtons}getFocusTarget(e){const t=this.getFields();return Array.from(e.composedPath()).find(i=>t.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pf extends qi{constructor(e){super(e),this.blurWhileOpened=!1,this.overlay=e._overlayElement}addListeners(e){super.addListeners(e),e.addEventListener("opened-changed",t=>{e._phone&&t.detail.value===!1&&this.hideOutline(e)})}onFocusIn(e){this.overlay.contains(e.relatedTarget)||!this.component._phone&&this.overlay.hasAttribute("closing")||super.onFocusIn(e)}onFocusOut(e){this.overlay.contains(e.relatedTarget)||super.onFocusOut(e)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vf=r=>{let e;switch(r.tagName.toLowerCase()){case"vaadin-date-picker":e=new gu(r);break;case"vaadin-date-time-picker":e=new df(r);break;case"vaadin-select":e=new pf(r);break;case"vaadin-checkbox-group":e=new lf(r);break;case"vaadin-radio-group":e=new ff(r);break;case"vaadin-list-box":e=new cf(r);break;default:e=new qi(r)}return e};class mf{constructor(e){this.host=e,this.user=null,this.users=[]}get user(){return this._user}set user(e){if(this._user=e,e){const t=`${e.name} started editing`,{label:i}=this.host;ve(i?`${t} ${i}`:t)}}hostConnected(){this.redraw()}addUser(e){e&&(this.users.push(e),this.redraw(),this.user=e)}setUsers(e){Array.isArray(e)&&(this.users=e,this.redraw(),this.user=e[e.length-1]||null)}removeUser(e){if(e&&e.id!==void 0){let t;for(let i=0;i<this.users.length;i++)if(this.users[i].id===e.id){t=i;break}t!==void 0&&(this.users.splice(t,1),this.redraw(),this.users.length>0?this.user=this.users[this.users.length-1]:this.user=null)}}redraw(){this.observer.redraw([...this.users].reverse())}}class gf extends HTMLElement{static init(e){if(!e._highlighterController){const t=new mf(e);e.setAttribute("has-highlighter",""),t.observer=vf(e),e.addController(t),e._highlighterController=t}return e._highlighterController}static addUser(e,t){this.init(e).addUser(t)}static removeUser(e,t){this.init(e).removeUser(t)}static setUsers(e,t){this.init(e).setUsers(t)}}customElements.define("vaadin-field-highlighter",gf);M("vaadin-grid-tree-toggle",S`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      transform: translateX(calc(var(--lumo-space-s) * -1));
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,{moduleId:"lumo-grid-tree-toggle"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _u=document.createElement("template");_u.innerHTML=`
  <style>
    @font-face {
      font-family: "vaadin-grid-tree-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(_u.content);class Vo extends z(Ot(F)){static get template(){return L`
      <style>
        :host {
          display: inline-flex;
          align-items: baseline;
          max-width: 100%;

          /* CSS API for :host */
          --vaadin-grid-tree-toggle-level-offset: 1em;
          --_collapsed-icon: '\\e7be\\00a0';
        }

        :host([dir='rtl']) {
          --_collapsed-icon: '\\e7bd\\00a0';
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([leaf])) {
          cursor: pointer;
        }

        #level-spacer,
        [part='toggle'] {
          flex: none;
        }

        #level-spacer {
          display: inline-block;
          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
        }

        [part='toggle']::before {
          font-family: 'vaadin-grid-tree-icons';
          line-height: 1em; /* make icon font metrics not affect baseline */
        }

        :host(:not([expanded])) [part='toggle']::before {
          content: var(--_collapsed-icon);
        }

        :host([expanded]) [part='toggle']::before {
          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
        }

        :host([leaf]) [part='toggle'] {
          visibility: hidden;
        }

        slot {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",e=>this._onClick(e))}_onClick(e){this.leaf||Ac(e.target)||e.target instanceof HTMLLabelElement||(e.preventDefault(),this.expanded=!this.expanded)}_levelChanged(e){const t=Number(e).toString();this.style.setProperty("---level",t)}}customElements.define(Vo.is,Vo);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _f=S`
  :host([step-buttons-visible]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([step-buttons-visible]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;M("vaadin-number-field",[Ye,fs,_f],{moduleId:"lumo-number-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yf=r=>class extends Hh(r){static get properties(){return{min:{type:Number},max:{type:Number},step:{type:Number},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const t=this.localName;return[`
          ${t} input[type="number"]::-webkit-outer-spin-button,
          ${t} input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          ${t} input[type="number"] {
            -moz-appearance: textfield;
          }

          ${t}[dir='rtl'] input[type="number"]::placeholder {
            direction: rtl;
          }

          ${t}[dir='rtl']:not([step-buttons-visible]) input[type="number"]::placeholder {
            text-align: left;
          }
        `]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Yr(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Wi(this.inputElement,this._labelController))}checkValidity(){return this.inputElement?this.inputElement.checkValidity():!this.invalid}_onDecreaseButtonTouchend(t){t.preventDefault(),this._decreaseValue()}_onIncreaseButtonTouchend(t){t.preventDefault(),this._increaseValue()}_onDecreaseButtonClick(){this._decreaseValue()}_onIncreaseButtonClick(){this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(t){if(this.disabled||this.readonly)return;const i=this.step||1;let n=parseFloat(this.value);this.value?n<this.min?(t=0,n=this.min):n>this.max&&(t=0,n=this.max):this.min===0&&t<0||this.max===0&&t>0||this.max===0&&this.min===0?(t=0,n=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?n=0:this.min>0?(n=this.min,this.max<0&&t<0&&(n=this.max),t=0):this.max<0&&(n=this.max,t<0?t=0:this._getIncrement(1,n-i)>this.max?n-=2*i:n-=i);const a=this._getIncrement(t,n);(!this.value||t===0||this._incrementIsInsideTheLimits(t,n))&&this._setValue(a)}_setValue(t){this.value=this.inputElement.value=String(parseFloat(t)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(t,i){let n=this.step||1,a=this.min||0;const s=Math.max(this._getMultiplier(i),this._getMultiplier(n),this._getMultiplier(a));n*=s,i=Math.round(i*s),a*=s;const o=(i-a)%n;return t>0?(i-o+n)/s:t<0?(i-(o||n))/s:i/s}_getDecimalCount(t){const i=String(t),n=i.indexOf(".");return n===-1?1:i.length-n-1}_getMultiplier(t){if(!isNaN(t))return 10**this._getDecimalCount(t)}_incrementIsInsideTheLimits(t,i){return t<0?this.min==null||this._getIncrement(t,i)>=this.min:t>0?this.max==null||this._getIncrement(t,i)<=this.max:this._getIncrement(t,i)<=this.max&&this._getIncrement(t,i)>=this.min}_isButtonEnabled(t){const i=t*(this.step||1),n=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(i,n)}_stepChanged(t,i){i&&(i.step=t||"any")}_valueChanged(t,i){t&&isNaN(parseFloat(t))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,i)}_onKeyDown(t){t.key==="ArrowUp"?(t.preventDefault(),this._increaseValue()):t.key==="ArrowDown"&&(t.preventDefault(),this._decreaseValue()),super._onKeyDown(t)}_setHasInputValue(t){const i=t.composedPath()[0];this._hasInputValue=i.value.length>0||i.validity.badInput}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bf=S`
  :host([readonly]) [part$='button'] {
    pointer-events: none;
  }

  [part='decrease-button']::before {
    content: '\\2212';
  }

  [part='increase-button']::before {
    content: '+';
  }

  [part='decrease-button'],
  [part='increase-button'] {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-number-field",[Yi,bf],{moduleId:"vaadin-number-field-styles"});class Ya extends yf(z(it(F))){static get is(){return"vaadin-number-field"}static get template(){return L`
      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_isButtonEnabled(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_onDecreaseButtonClick"
            on-touchend="_onDecreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_isButtonEnabled(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_onIncreaseButtonClick"
            on-touchend="_onIncreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Ct(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top")}}customElements.define(Ya.is,Ya);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Uo extends Ya{static get is(){return"vaadin-integer-field"}constructor(){super(),this.allowedCharPattern="[-+\\d]"}_valueChanged(e,t){if(e!==""&&!this.__isInteger(e)){console.warn(`Trying to set non-integer value "${e}" to <vaadin-integer-field>. Clearing the value.`),this.value="";return}super._valueChanged(e,t)}_stepChanged(e,t){if(e!=null&&!this.__hasOnlyDigits(e)){console.warn(`<vaadin-integer-field> The \`step\` property must be a positive integer but \`${e}\` was provided, so the property was reset to \`null\`.`),this.step=null;return}super._stepChanged(e,t)}__isInteger(e){return/^(-\d)?\d*$/u.test(String(e))}__hasOnlyDigits(e){return/^\d+$/u.test(String(e))}}customElements.define(Uo.is,Uo);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jo extends Gr(z(Ot(F))){static get template(){return L`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}constructor(){super(),this.value}ready(){super.ready(),this.setAttribute("role","option")}}customElements.define(jo.is,jo);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xf=r=>class extends zr(r){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:()=>[]}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",t=>this._onMultipleClick(t)),super.ready()}_enhanceMultipleItems(t,i,n,a){if(!(!t||!i)){if(a){const s=a.map(o=>t[o]);t.forEach(o=>{o.selected=s.includes(o)})}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){const t=this.selectedValues.slice(-1)[0];t&&!t.disabled&&this._scrollToItem(t)}_onMultipleClick(t){const i=this._filterItems(t.composedPath())[0],n=i&&!i.disabled?this.items.indexOf(i):-1;n<0||!this.multiple||(t.preventDefault(),this.selectedValues.includes(n)?this.selectedValues=this.selectedValues.filter(a=>a!==n):this.selectedValues=this.selectedValues.concat(n))}_multipleChanged(t,i){!t&&i&&(this.selectedValues=[],this.items.forEach(n=>{n.selected=!1}),this.removeAttribute("aria-multiselectable")),t&&!i&&(this.setAttribute("aria-multiselectable","true"),this.selected!==void 0&&(this.selectedValues=[...this.selectedValues,this.selected],this.selected=void 0))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wo extends it(xf(z(gt(F)))){static get template(){return L`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-list-box"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox"),setTimeout(this._checkImport.bind(this),2e3),this._tooltipController=new Ct(this),this.addController(this._tooltipController)}_checkImport(){const e=this.querySelector("vaadin-item");e&&!(e instanceof F)&&console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(Wo.is,Wo);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Af=S`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`;M("vaadin-password-field-button",[Zh,Af],{moduleId:"lumo-password-field-button"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cf=S`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;M("vaadin-password-field",[Ye,Cf],{moduleId:"lumo-password-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yo extends Kh{static get is(){return"vaadin-password-field-button"}static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot name="tooltip"></slot>
    `}}customElements.define(Yo.is,Yo);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wf=L`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let gn;class qo extends Xh{static get is(){return"vaadin-password-field"}static get template(){if(!gn){gn=super.template.cloneNode(!0);const e=wf.content.querySelector('[part="reveal-button"]');gn.content.querySelector('[part="input-field"]').appendChild(e)}return gn}static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n.*)"]}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonTouchend=this._onRevealButtonTouchend.bind(this)}get slotStyles(){const e=this.localName;return[...super.slotStyles,`
        ${e} [slot="input"]::-ms-reveal {
          display: none;
        }
      `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new ft(this,"reveal","vaadin-password-field-button",{initializer:e=>{e.disabled=this.disabled,e.addEventListener("click",this.__boundRevealButtonClick),e.addEventListener("touchend",this.__boundRevealButtonTouchend)}}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_shouldSetFocus(e){return e.target===this.inputElement||e.target===this._revealNode}_shouldRemoveFocus(e){return!(e.relatedTarget===this._revealNode||e.relatedTarget===this.inputElement&&e.target===this._revealNode)}_setFocused(e){if(super._setFocused(e),!e)this._setPasswordVisible(!1);else{const t=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!t)}}__updateAriaLabel(e){e.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",e.reveal)}__i18nChanged(e){this.__updateAriaLabel(e.base)}_revealButtonHiddenChanged(e){this._toggleRevealHidden(e)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonTouchend(e){e.preventDefault(),this._togglePasswordVisibility(),this.inputElement.focus()}_toggleRevealHidden(e){this._revealNode&&(e?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(e){this._revealNode&&this._revealNode.setAttribute("aria-pressed",e?"true":"false")}_passwordVisibleChanged(e){this._setType(e?"text":"password"),this._updateToggleState(e)}_disabledChanged(e,t){super._disabledChanged(e,t),this._revealNode&&(this._revealNode.disabled=e)}}customElements.define(qo.is,qo);const Ef=S`
  :host {
    max-width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='form'] {
    padding: var(--lumo-space-l);
  }

  [part='form-title'] {
    margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
  }

  ::slotted([slot='forgot-password']) {
    margin: var(--lumo-space-s) auto;
  }

  [part='error-message'] {
    background-color: var(--lumo-error-color-10pct);
    padding: var(--lumo-space-m);
    border-radius: var(--lumo-border-radius-m);
    margin-top: var(--lumo-space-m);
    margin-bottom: var(--lumo-space-s);
    color: var(--lumo-error-text-color);
  }

  :host(:not([dir='rtl'])) [part='error-message'] {
    padding-left: var(--lumo-size-m);
  }

  :host([dir='rtl']) [part='error-message'] {
    padding-right: var(--lumo-size-m);
  }

  [part='error-message']::before {
    content: var(--lumo-icons-error);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    position: absolute;
    width: var(--lumo-size-m);
    height: 1em;
    line-height: 1;
    text-align: center;
  }

  :host(:not([dir='rtl'])) [part='error-message']::before {
    /* Visual centering */
    margin-left: calc(var(--lumo-size-m) * -0.95);
  }

  :host([dir='rtl']) [part='error-message']::before {
    /* Visual centering */
    margin-right: calc(var(--lumo-size-m) * -0.95);
  }

  [part='error-message-title'] {
    margin: 0 0 0.25em;
    color: inherit;
  }

  [part='error-message-description'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
    margin: 0;
    opacity: 0.9;
  }

  [part='footer'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-secondary-text-color);
  }
`;M("vaadin-login-form-wrapper",[vs,ms,Ef],{moduleId:"lumo-login-form-wrapper"});M("vaadin-login-form",S`
    form > vaadin-button[theme~='submit'] {
      margin-top: var(--lumo-space-l);
      margin-bottom: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-login-form"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xo extends z(F){static get template(){return L`
      <style>
        :host {
          overflow: hidden;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='form'] {
          flex: 1;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        [part='form-title'] {
          margin: 0;
        }

        [part='error-message'] {
          position: relative;
        }
      </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form"></slot>

        <slot name="forgot-password"></slot>

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
    `}static get is(){return"vaadin-login-form-wrapper"}static get properties(){return{error:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object}}}}customElements.define(Xo.is,Xo);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yu=r=>class extends r{static get properties(){return{action:{type:String,value:null},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1},noAutofocus:{type:Boolean,value:!1},i18n:{type:Object,value(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}}},_preventAutoEnable:{type:Boolean,value:!1}}}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ho extends yu(it(z(F))){static get template(){return L`
      <style>
        vaadin-login-form-wrapper > form > * {
          width: 100%;
        }
      </style>
      <vaadin-login-form-wrapper theme$="[[_theme]]" error="[[error]]" i18n="[[i18n]]">
        <form method="POST" action$="[[action]]" slot="form">
          <input id="csrf" type="hidden" />
          <vaadin-text-field
            name="username"
            label="[[i18n.form.username]]"
            id="vaadinLoginUsername"
            required
            on-keydown="_handleInputKeydown"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
            autocomplete="username"
          >
            <input type="text" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-text-field>

          <vaadin-password-field
            name="password"
            label="[[i18n.form.password]]"
            id="vaadinLoginPassword"
            required
            on-keydown="_handleInputKeydown"
            spellcheck="false"
            autocomplete="current-password"
          >
            <input type="password" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-password-field>

          <vaadin-button theme="primary contained submit" on-click="submit" disabled$="[[disabled]]">
            [[i18n.form.submit]]
          </vaadin-button>
        </form>

        <vaadin-button
          slot="forgot-password"
          theme="tertiary small"
          on-click="_onForgotPasswordClick"
          hidden$="[[noForgotPassword]]"
        >
          [[i18n.form.forgotPassword]]
        </vaadin-button>
      </vaadin-login-form-wrapper>
    `}static get is(){return"vaadin-login-form"}static get observers(){return["_errorChanged(error)"]}connectedCallback(){super.connectedCallback(),this.noAutofocus||this.$.vaadinLoginUsername.focus()}_attachDom(e){this.appendChild(e)}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){const e=this.$.vaadinLoginUsername,t=this.$.vaadinLoginPassword;if(this.disabled||!(e.validate()&&t.validate()))return;this.error=!1,this.disabled=!0;const i={bubbles:!0,cancelable:!0,detail:{username:e.value,password:t.value}},n=this.dispatchEvent(new CustomEvent("login",i));if(this.action&&n){const a=document.querySelector("meta[name=_csrf_parameter]"),s=document.querySelector("meta[name=_csrf]");a&&s&&(this.$.csrf.name=a.content,this.$.csrf.value=s.content),this.querySelector("form").submit()}}_handleInputKeydown(e){if(e.key==="Enter"){const{currentTarget:t}=e,i=t.id==="vaadinLoginUsername"?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;t.validate()&&(i.validate()?this.submit():i.focus())}}_handleInputKeyup(e){const t=e.currentTarget;e.key==="Tab"&&t instanceof HTMLInputElement&&t.select()}_onForgotPasswordClick(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(Ho.is,Ho);const If=S`
  :host {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  [part='backdrop'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
  }

  [part='content'] {
    padding: 0;
  }

  [part='overlay'] {
    background: none;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
  }

  [part='card'] {
    width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='brand'] {
    padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
    min-height: calc(var(--lumo-size-m) * 5);
  }

  [part='description'] {
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-tint-70pct);
    margin-bottom: 0;
  }

  [part='content'] {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [part='card'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: var(--lumo-box-shadow-s);
    margin: var(--lumo-space-s);
    height: auto;
  }

  /* Small screen */
  @media only screen and (max-width: 500px) {
    [part='overlay'],
    [part='content'] {
      height: 100%;
    }

    [part='content'] {
      min-height: 100%;
      background: var(--lumo-base-color);
      align-items: flex-start;
    }

    [part='card'],
    [part='overlay'] {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }

    /* RTL styles */
    :host([dir='rtl']) [part='brand'] {
      padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
    }
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='card'] {
      flex-direction: row;
      align-items: stretch;
      max-width: calc(var(--lumo-size-m) * 16);
      width: 100%;
    }

    [part='brand'],
    [part='form'] {
      flex: auto;
      flex-basis: 0;
      box-sizing: border-box;
    }

    [part='brand'] {
      justify-content: flex-start;
    }

    [part='form'] {
      padding: var(--lumo-space-l);
      overflow: auto;
    }
  }

  /* Landscape really small screen */
  @media only screen and (max-height: 500px) and (min-width: 600px) and (orientation: landscape),
    only screen and (max-width: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='content'] {
      height: 100vh;
    }

    [part='card'] {
      margin: 0;
      width: 100%;
      max-width: none;
      height: 100%;
      flex: auto;
      border-radius: 0;
      box-shadow: none;
    }

    [part='form'] {
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  /* Handle iPhone X notch */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    [part='card'] {
      padding-right: constant(safe-area-inset-right);
      padding-right: env(safe-area-inset-right);

      padding-left: constant(safe-area-inset-left);
      padding-left: env(safe-area-inset-left);
    }

    [part='brand'] {
      margin-left: calc(constant(safe-area-inset-left) * -1);
      margin-left: calc(env(safe-area-inset-left) * -1);

      padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }

    /* RTL styles */
    :host([dir='rtl']) [part='card'] {
      padding-left: constant(safe-area-inset-right);
      padding-left: env(safe-area-inset-right);
      padding-right: constant(safe-area-inset-left);
      padding-right: env(safe-area-inset-left);
    }

    :host([dir='rtl']) [part='brand'] {
      margin-right: calc(constant(safe-area-inset-left) * -1);
      margin-right: calc(env(safe-area-inset-left) * -1);
      padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }
  }
`;M("vaadin-login-overlay-wrapper",[vs,ms,If],{moduleId:"vaadin-login-overlay-wrapper-lumo-styles"});const Mf=S`
  :host([theme~='with-overlay']) {
    min-height: 100%;
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    :host([theme~='with-overlay']) [part='form'] {
      height: 100%;
      -webkit-overflow-scrolling: touch;
      flex: 1;
      padding: 2px;
    }
  }
`;M("vaadin-login-form-wrapper",[vs,ms,Mf],{moduleId:"lumo-login-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-login-overlay-wrapper",S`
    [part='overlay'] {
      outline: none;
    }

    [part='card'] {
      max-width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    [part='brand'] {
      box-sizing: border-box;
      overflow: hidden;
      flex-grow: 1;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    [part='brand'] h1 {
      color: inherit;
      margin: 0;
    }
  `,{moduleId:"vaadin-login-overlay-wrapper-styles"});const Tf=L`
  <section part="card">
    <div part="brand">
      <slot name="title">
        <h1 part="title">[[title]]</h1>
      </slot>
      <p part="description">[[description]]</p>
    </div>
    <div part="form">
      <slot></slot>
    </div>
  </section>
`;let _n;class Zo extends be{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!_n){_n=super.template.cloneNode(!0);const e=Tf.content.querySelector("[part=card]"),t=_n.content.querySelector("#content");t.replaceChild(e,t.children[0])}return _n}}customElements.define(Zo.is,Zo);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ko extends yu(Vr(it(z(F)))){static get template(){return L`
      <vaadin-login-overlay-wrapper
        id="vaadinLoginOverlayWrapper"
        opened="{{opened}}"
        focus-trap
        with-backdrop
        title="[[title]]"
        description="[[description]]"
        theme$="[[_theme]]"
        on-vaadin-overlay-escape-press="_preventClosingLogin"
        on-vaadin-overlay-outside-click="_preventClosingLogin"
      >
        <vaadin-login-form
          theme="with-overlay"
          id="vaadinLoginForm"
          action="[[action]]"
          disabled="{{disabled}}"
          error="{{error}}"
          no-autofocus="[[noAutofocus]]"
          no-forgot-password="[[noForgotPassword]]"
          i18n="{{i18n}}"
          on-login="_retargetEvent"
          on-forgot-password="_retargetEvent"
        ></vaadin-login-form>
      </vaadin-login-overlay-wrapper>
    `}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._overlayElement=this.$.vaadinLoginOverlayWrapper}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.__restoreOpened=this.opened,this.opened=!1}__i18nChanged(e){const t=e.base;t&&(this.title=t.title,this.description=t.description)}_preventClosingLogin(e){e.preventDefault()}_retargetEvent(e){e.stopPropagation();const{detail:t,composed:i,cancelable:n,bubbles:a}=e;this.dispatchEvent(new CustomEvent(e.type,{bubbles:a,cancelable:n,composed:i,detail:t}))||e.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(e){const t=Array.from(e).map(i=>this.$.vaadinLoginOverlayWrapper.appendChild(i));return()=>{for(;t.length>0;)this.appendChild(t.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(Ko.is,Ko);const Sf=S`
  :host {
    margin: calc(var(--lumo-space-xs) / 2);
    margin-left: 0;
    border-radius: 0;
  }

  [part='label'] {
    width: 100%;
  }

  /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
  [part='label'] ::slotted(vaadin-menu-bar-item) {
    justify-content: center;
    background-color: transparent;
    height: var(--lumo-button-size);
    margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='small']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    min-height: var(--lumo-size-s);
    margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='tertiary']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0 calc((var(--lumo-button-size) / 6) * -1);
    padding-left: calc(var(--lumo-button-size) / 6);
    padding-right: calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline']) {
    margin-top: calc(var(--lumo-space-xs) / 2);
    margin-bottom: calc(var(--lumo-space-xs) / 2);
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='tertiary-inline']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0;
    padding: 0;
  }

  :host(:first-of-type) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

    /* Needed to retain the focus-ring with border-radius */
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host(:nth-last-of-type(2)),
  :host([slot='overflow']) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
  }

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    border-radius: var(--lumo-border-radius-m);
  }

  :host([slot='overflow']) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([slot='overflow']) ::slotted(*) {
    font-size: var(--lumo-font-size-xl);
  }

  :host([slot='overflow']) [part='prefix'],
  :host([slot='overflow']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL styles */
  :host([dir='rtl']) {
    margin-left: calc(var(--lumo-space-xs) / 2);
    margin-right: 0;
    border-radius: 0;
  }

  :host([dir='rtl']:first-of-type) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([dir='rtl']:nth-last-of-type(2)),
  :host([dir='rtl'][slot='overflow']) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
  }
`;M("vaadin-menu-bar-button",[Zh,Sf],{moduleId:"lumo-menu-bar-button"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-menu-bar-button",S`
    :host {
      flex-shrink: 0;
    }

    :host([slot='overflow']) {
      margin-inline-end: 0;
    }

    [part='label'] ::slotted(vaadin-menu-bar-item) {
      position: relative;
      z-index: 1;
    }
  `,{moduleId:"vaadin-menu-bar-button-styles"});class Qo extends Kh{static get is(){return"vaadin-menu-bar-button"}}customElements.define(Qo.is,Qo);const Of=S`
  [part='content'] {
    display: flex;
    /* tweak to inherit centering from menu bar button */
    align-items: inherit;
    justify-content: inherit;
  }

  [part='content'] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  [part='content'] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: var(--lumo-space-xs);
    box-sizing: border-box !important;
  }
`;M("vaadin-menu-bar-item",[ji,Cc,Of],{moduleId:"lumo-menu-bar-item"});M("vaadin-menu-bar-list-box",[ds,wc],{moduleId:"lumo-menu-bar-list-box"});const Rf=S`
  :host(:first-of-type) {
    padding-top: var(--lumo-space-xs);
  }
`;M("vaadin-menu-bar-overlay",[Qh,Ec,Rf],{moduleId:"lumo-menu-bar-overlay"});M("vaadin-menu-bar",S`
    :host([has-single-button]) ::slotted(vaadin-menu-bar-button) {
      border-radius: var(--lumo-border-radius-m);
    }

    :host([theme~='end-aligned']) ::slotted(vaadin-menu-bar-button:first-of-type),
    :host([theme~='end-aligned'][has-single-button]) ::slotted(vaadin-menu-bar-button) {
      margin-inline-start: auto;
    }
  `,{moduleId:"lumo-menu-bar"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Jo extends Gr(z(Ot(F))){static get is(){return"vaadin-menu-bar-item"}static get template(){return L`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem")}}customElements.define(Jo.is,Jo);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class tl extends zr(z(Ot(gt(F)))){static get is(){return"vaadin-menu-bar-list-box"}static get template(){return L`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}customElements.define(tl.is,tl);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-menu-bar-overlay",Ic,{moduleId:"vaadin-menu-bar-overlay-styles"});class el extends Mc(be){static get is(){return"vaadin-menu-bar-overlay"}}customElements.define(el.is,el);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class il extends Tc{static get is(){return"vaadin-menu-bar-submenu"}static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>

      <vaadin-menu-bar-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-vaadin-overlay-open="_onVaadinOverlayOpen"
        modeless="[[_modeless]]"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        model="[[_context]]"
        theme$="[[_theme]]"
      ></vaadin-menu-bar-overlay>
    `}constructor(){super(),this.openOn="opensubmenu"}get _tagNamePrefix(){return"vaadin-menu-bar"}_openedChanged(e){this.$.overlay.opened=e}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}customElements.define(il.is,il);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lf=r=>class extends hs($r(We(gt(r)))){static get properties(){return{openOnHover:{type:Boolean},_hasOverflow:{type:Boolean,value:!1},_overflow:{type:Object},_container:{type:Object}}}static get observers(){return["_itemsChanged(items, items.splices)","__hasOverflowChanged(_hasOverflow, _overflow)","__i18nChanged(i18n, _overflow)","_menuItemsChanged(items, _overflow, _container, items.splices)"]}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}get focused(){return(this._getItems()||[]).find(us)||this._expandedButton}get _vertical(){return!1}get _observeParent(){return!0}get _buttons(){return Array.from(this.querySelectorAll("vaadin-menu-bar-button"))}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}ready(){super.ready(),this.setAttribute("role","menubar"),this._overflowController=new ft(this,"overflow","vaadin-menu-bar-button",{initializer:n=>{n.setAttribute("hidden","");const a=document.createElement("div");a.setAttribute("aria-hidden","true"),a.innerHTML="&centerdot;".repeat(3),n.appendChild(a),this._overflow=n,this._initButtonAttrs(n)}}),this.addController(this._overflowController),this.addEventListener("mousedown",()=>this._hideTooltip()),this.addEventListener("mouseleave",()=>this._hideTooltip()),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this)),this._subMenu.$.overlay.addEventListener("keydown",this.__boundOnContextMenuKeydown);const i=this.shadowRoot.querySelector('[part="container"]');i.addEventListener("click",this.__onButtonClick.bind(this)),i.addEventListener("mouseover",n=>this._onMouseOver(n)),this._container=i}_getItems(){return this._buttons}disconnectedCallback(){super.disconnectedCallback(),this._hideTooltip(!0)}_onResize(){this.__detectOverflow()}__hasOverflowChanged(t,i){i&&i.toggleAttribute("hidden",!t)}_menuItemsChanged(t,i,n){!i||!n||t!==this._oldItems&&(this._oldItems=t,this.__renderButtons(t))}__i18nChanged(t,i){i&&t&&t.moreOptions!==void 0&&(t.moreOptions?i.setAttribute("aria-label",t.moreOptions):i.removeAttribute("aria-label"))}__getOverflowCount(t){return t.item&&t.item.children&&t.item.children.length||0}__restoreButtons(t){t.forEach(i=>{i.disabled=i.item&&i.item.disabled||this.disabled,i.style.visibility="",i.style.position="";const n=i.item&&i.item.component;n instanceof HTMLElement&&n.getAttribute("role")==="menuitem"&&this.__restoreItem(i,n)}),this.__updateOverflow([])}__restoreItem(t,i){t.appendChild(i),i.removeAttribute("role"),i.removeAttribute("aria-expanded"),i.removeAttribute("aria-haspopup"),i.removeAttribute("tabindex")}__updateOverflow(t){this._overflow.item={children:t},this._hasOverflow=t.length>0}__setOverflowItems(t,i){const n=this._container;if(n.offsetWidth<n.scrollWidth){this._hasOverflow=!0;const a=this.__isRTL;let s;for(s=t.length;s>0;s--){const l=t[s-1],h=getComputedStyle(l);if(!a&&l.offsetLeft+l.offsetWidth<n.offsetWidth-i.offsetWidth||a&&l.offsetLeft>=i.offsetWidth)break;l.disabled=!0,l.style.visibility="hidden",l.style.position="absolute",l.style.width=h.width}const o=t.filter((l,h)=>h>=s).map(l=>l.item);this.__updateOverflow(o)}}__detectOverflow(){const t=this._overflow,i=this._buttons.filter(o=>o!==t),n=this.__getOverflowCount(t);this.__restoreButtons(i),this.__setOverflowItems(i,t);const a=this.__getOverflowCount(t);n!==a&&this._subMenu.opened&&this._subMenu.close();const s=a===i.length||a===0&&i.length===1;this.toggleAttribute("has-single-button",s)}_removeButtons(){this._buttons.forEach(t=>{t!==this._overflow&&this.removeChild(t)})}_initButton(t){const i=document.createElement("vaadin-menu-bar-button"),n={...t};if(i.item=n,t.component){const a=this.__getComponent(n);n.component=a,a.item=n,i.appendChild(a)}else t.text&&(i.textContent=t.text);return i}_initButtonAttrs(t){t.setAttribute("role","menuitem"),(t===this._overflow||t.item&&t.item.children)&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"))}_setButtonDisabled(t,i){t.disabled=i,t.setAttribute("tabindex",i?"-1":"0")}_setButtonTheme(t,i){let n=i;const a=t.item&&t.item.theme;a!=null&&(n=Array.isArray(a)?a.join(" "):a),n?t.setAttribute("theme",n):t.removeAttribute("theme")}__getComponent(t){const i=t.component;let n;const a=i instanceof HTMLElement;if(a&&i.localName==="vaadin-menu-bar-item"?n=i:(n=document.createElement("vaadin-menu-bar-item"),n.appendChild(a?i:document.createElement(i))),t.text){const s=n.firstChild||n;s.textContent=t.text}return n}__renderButtons(t=[]){this._removeButtons(),t.length!==0&&(t.forEach(i=>{const n=this._initButton(i);this.insertBefore(n,this._overflow),this._setButtonDisabled(n,i.disabled),this._initButtonAttrs(n),this._setButtonTheme(n,this._theme)}),this.__detectOverflow())}_showTooltip(t,i){const n=this._tooltipController.node;n&&n.isConnected&&(n.generator===void 0&&(n.generator=({item:a})=>a&&a.tooltip),this._subMenu.opened||(this._tooltipController.setTarget(t),this._tooltipController.setContext({item:t.item}),n._stateController.open({hover:i,focus:!i})))}_hideTooltip(t){const i=this._tooltipController&&this._tooltipController.node;i&&i._stateController.close(t)}_setExpanded(t,i){t.toggleAttribute("expanded",i),t.toggleAttribute("active",i),t.setAttribute("aria-expanded",i?"true":"false")}_setTabindex(t,i){t.setAttribute("tabindex",i?"0":"-1")}_focusItem(t,i){const n=i&&this.focused===this._expandedButton;n&&this._close(),super._focusItem(t,i),this._buttons.forEach(a=>{this._setTabindex(a,a===t)}),n&&t.item&&t.item.children?this.__openSubMenu(t,!0,{keepFocus:!0}):t===this._overflow?this._hideTooltip():this._showTooltip(t)}_getButtonFromEvent(t){return Array.from(t.composedPath()).find(i=>i.localName==="vaadin-menu-bar-button")}_setFocused(t){if(t){const i=this.querySelector('[tabindex="0"]');i&&this._buttons.forEach(n=>{this._setTabindex(n,n===i),n===i&&n!==this._overflow&&Sc()&&this._showTooltip(n)})}else this._hideTooltip()}_onArrowDown(t){t.preventDefault();const i=this._getButtonFromEvent(t);i===this._expandedButton?this._focusFirstItem():this.__openSubMenu(i,!0)}_onArrowUp(t){t.preventDefault();const i=this._getButtonFromEvent(t);i===this._expandedButton?this._focusLastItem():this.__openSubMenu(i,!0,{focusLast:!0})}_onEscape(t){t.composedPath().includes(this._expandedButton)&&this._close(!0),this._hideTooltip(!0)}_onKeyDown(t){switch(t.key){case"ArrowDown":this._onArrowDown(t);break;case"ArrowUp":this._onArrowUp(t);break;default:super._onKeyDown(t);break}}_itemsChanged(){const t=this._subMenu;t&&t.opened&&t.close()}_onMouseOver(t){const i=this._getButtonFromEvent(t);if(!i)this._hideTooltip();else if(i!==this._expandedButton){const n=this._subMenu.opened;i.item.children&&(this.openOnHover||n)?this.__openSubMenu(i,!1):n&&this._close(),i===this._overflow||this.openOnHover&&i.item.children?this._hideTooltip():this._showTooltip(i,!0)}}__onContextMenuKeydown(t){const i=Array.from(t.composedPath()).find(n=>n._item);if(i){const n=i.parentNode;t.keyCode===38&&i===n.items[0]&&this._close(!0),(t.keyCode===37||t.keyCode===39&&!i._item.children)&&(t.stopImmediatePropagation(),this._onKeyDown(t))}}__fireItemSelected(t){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:t}}))}__onButtonClick(t){t.stopPropagation();const i=this._getButtonFromEvent(t);i&&this.__openSubMenu(i,!1)}__openSubMenu(t,i,n={}){const a=this._subMenu,s=t.item;if(a.opened&&(this._close(),a.listenOn===t))return;const o=s&&s.children;if(!o||o.length===0){this.__fireItemSelected(s);return}a.items=o,a.listenOn=t;const l=a.$.overlay;l.positionTarget=t,l.noVerticalOverlap=!0,this._expandedButton=t,requestAnimationFrame(()=>{t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:o}})),this._hideTooltip(!0),this._setExpanded(t,!0)}),this.style.pointerEvents="auto",l.addEventListener("vaadin-overlay-open",()=>{n.focusLast&&this._focusLastItem(),n.keepFocus&&this._focusItem(this._expandedButton,!1),i||l.$.overlay.focus(),l._updatePosition()},{once:!0})}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){const t=this._subMenu.$.overlay.firstElementChild,i=t.items[t.items.length-1];i&&i.focus()}__onItemSelected(t){t.stopPropagation(),this._close(),this.__fireItemSelected(t.detail.value)}__onEscapeClose(){this.__deactivateButton(!0)}__deactivateButton(t){const i=this._expandedButton;i&&i.hasAttribute("expanded")&&(this._setExpanded(i,!1),t&&this._focusItem(i,!1),this._expandedButton=null)}_close(t){this.style.pointerEvents="",this.__deactivateButton(t),this._subMenu.opened&&this._subMenu.close()}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rl extends Lf(jr(it(z(F)))){static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: nowrap;
          overflow: hidden;
        }
      </style>

      <div part="container">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>
      <vaadin-menu-bar-submenu is-root overlay-class="[[overlayClass]]"></vaadin-menu-bar-submenu>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-menu-bar"}static get properties(){return{items:{type:Array,value:()=>[]},i18n:{type:Object,value:()=>({moreOptions:"More options"})},overlayClass:{type:String}}}static get observers(){return["_themeChanged(_theme, _overflow, _container)"]}ready(){super.ready(),this._tooltipController=new Ct(this),this._tooltipController.setManual(!0),this.addController(this._tooltipController)}_disabledChanged(e,t){super._disabledChanged(e,t),t!==e&&this.__updateButtonsDisabled(e)}_themeChanged(e,t,i){t&&i&&(this._buttons.forEach(n=>this._setButtonTheme(n,e)),this.__detectOverflow()),e?this._subMenu.setAttribute("theme",e):this._subMenu.removeAttribute("theme")}__updateButtonsDisabled(e){this._buttons.forEach(t=>{t.disabled=e||t.item&&t.item.disabled})}}customElements.define(rl.is,rl);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pf=S`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;M("vaadin-text-area",[Ye,Pf],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ff extends ft{constructor(e,t){super(e,"textarea","textarea",{initializer:(i,n)=>{const a=n.getAttribute("value");a&&(i.value=a);const s=n.getAttribute("name");s&&i.setAttribute("name",s),i.id=this.defaultId,typeof t=="function"&&t(i)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kf=r=>class extends $r(Hh(r)){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}get clearElement(){return this.$.clearButton}_onResize(){this.__scrollPositionUpdated()}_onScroll(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new Ff(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Wi(this.inputElement,this._labelController)),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",t=>{const i=this._inputField.scrollTop;this._inputField.scrollTop+=t.deltaY,i!==this._inputField.scrollTop&&(t.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_onAnimationEnd(t){t.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(t,i){super._valueChanged(t,i),this._updateHeight()}_updateHeight(){const t=this.inputElement,i=this._inputField;if(!t||!i)return;const n=i.scrollTop,a=this.value?this.value.length:0;if(this._oldValueLength>=a){const o=getComputedStyle(i).height,l=getComputedStyle(t).width;i.style.display="block",i.style.height=o,t.style.maxWidth=l,t.style.height="auto"}this._oldValueLength=a;const s=t.scrollHeight;s>t.clientHeight&&(t.style.height=`${s}px`),t.style.removeProperty("max-width"),i.style.removeProperty("display"),i.style.removeProperty("height"),i.scrollTop=n}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const t=this.inputElement.value.match(this.pattern);return t?t[0]===t.input:!1}catch{return!0}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Df=S`
  :host {
    animation: 1ms vaadin-text-area-appear;
  }

  .vaadin-text-area-container {
    flex: auto;
  }

  /* The label, helper text and the error message should neither grow nor shrink. */
  [part='label'],
  [part='helper-text'],
  [part='error-message'] {
    flex: none;
  }

  [part='input-field'] {
    flex: auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  ::slotted(textarea) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;
    margin: 0;
    padding: 0 0.25em;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  /* Override styles from <vaadin-input-container> */
  [part='input-field'] ::slotted(textarea) {
    align-self: stretch;
    white-space: pre-wrap;
  }

  [part='input-field'] ::slotted(:not(textarea)) {
    align-self: flex-start;
  }

  /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
  :host([disabled]) ::slotted(textarea) {
    user-select: none;
  }

  @keyframes vaadin-text-area-appear {
    to {
      opacity: 1;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-text-area",[Yi,Df],{moduleId:"vaadin-text-area-styles"});class nl extends kf(z(it(F))){static get is(){return"vaadin-text-area"}static get template(){return L`
      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-scroll="_onScroll"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Ct(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(nl.is,nl);M("vaadin-message-input",S`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }

    ::slotted([slot='textarea']) {
      margin-inline-end: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-message-input"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class al extends it(z(gt(F))){static get properties(){return{value:{type:String,value:""},i18n:{type:Object,value:()=>({send:"Send",message:"Message"})},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},_button:{type:Object},_textArea:{type:Object}}}static get template(){return L`
      <style>
        :host {
          align-items: flex-start;
          box-sizing: border-box;
          display: flex;
          max-height: 50vh;
          overflow: hidden;
          flex-shrink: 0;
        }

        :host([hidden]) {
          display: none !important;
        }

        ::slotted([slot='button']) {
          flex-shrink: 0;
        }

        ::slotted([slot='textarea']) {
          align-self: stretch;
          flex-grow: 1;
        }
      </style>
      <slot name="textarea"></slot>

      <slot name="button"></slot>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-message-input"}static get observers(){return["__buttonPropsChanged(_button, disabled, i18n)","__textAreaPropsChanged(_textArea, disabled, i18n, value)"]}ready(){super.ready(),this._buttonController=new ft(this,"button","vaadin-button",{initializer:e=>{e.setAttribute("theme","primary contained"),e.addEventListener("click",()=>{this.__submit()}),this._button=e}}),this.addController(this._buttonController),this._textAreaController=new ft(this,"textarea","vaadin-text-area",{initializer:e=>{e.addEventListener("value-changed",i=>{this.value=i.detail.value}),e.addEventListener("keydown",i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),i.stopImmediatePropagation(),this.__submit())});const t=e.inputElement;t.removeAttribute("aria-labelledby"),t.setAttribute("rows",1),t.style.minHeight="0",this._textArea=e}}),this.addController(this._textAreaController),this._tooltipController=new Ct(this),this.addController(this._tooltipController)}__buttonPropsChanged(e,t,i){e&&(e.disabled=t,e.textContent=i.send)}__textAreaPropsChanged(e,t,i,n){if(e){e.disabled=t,e.value=n;const a=i.message;e.placeholder=a,a?e.inputElement.setAttribute("aria-label",a):e.inputElement.removeAttribute("aria-label")}}__submit(){this.value!==""&&(this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.value=""),this._textArea.focus()}}customElements.define(al.is,al);M("vaadin-message",S`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }

    ::slotted([slot='avatar']) {
      --vaadin-avatar-size: var(--lumo-size-m);
      margin-top: calc(var(--lumo-space-s));
      margin-inline-end: calc(var(--lumo-space-m));
    }
  `,{moduleId:"lumo-message"});M("vaadin-message-list",S``,{moduleId:"lumo-message-list"});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bf=r=>r??Gc;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qa extends We(it(z(gt(F)))){static get properties(){return{time:{type:String},userName:{type:String},userAbbr:{type:String},userImg:{type:String},userColorIndex:{type:Number},_avatar:{ttype:Object}}}static get template(){return L`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          outline: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          align-items: baseline;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        [part='name'] {
          font-weight: 500;
        }

        [part='message'] {
          white-space: pre-wrap;
        }

        ::slotted([slot='avatar']) {
          --vaadin-avatar-outline-width: 0px;
          flex-shrink: 0;
        }
      </style>
      <slot name="avatar"></slot>
      <div part="content">
        <div part="header">
          <span part="name">[[userName]]</span>
          <span part="time">[[time]]</span>
        </div>
        <div part="message"><slot></slot></div>
      </div>
    `}static get is(){return"vaadin-message"}static get observers(){return["__avatarChanged(_avatar, userName, userAbbr, userImg, userColorIndex)"]}ready(){super.ready(),this._avatarController=new ft(this,"avatar","vaadin-avatar",{initializer:e=>{e.setAttribute("tabindex","-1"),e.setAttribute("aria-hidden","true"),this._avatar=e}}),this.addController(this._avatarController)}__avatarChanged(e,t,i,n,a){e&&e.setProperties({name:t,abbr:i,img:n,colorIndex:a})}}customElements.define(qa.is,qa);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sl extends hs(it(z(F))){static get is(){return"vaadin-message-list"}static get properties(){return{items:{type:Array,value:()=>[],observer:"_itemsChanged"}}}static get template(){return L`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <slot></slot>
      </div>
    `}get _messages(){return[...this.querySelectorAll("vaadin-message")]}ready(){super.ready(),this.setAttribute("aria-relevant","additions"),this.setAttribute("role","log")}_getItems(){return this._messages}_itemsChanged(e,t){const i=e||[],n=t||[];if(i.length||n.length){const a=this._getIndexOfFocusableElement(),s=this.scrollHeight<this.clientHeight+this.scrollTop+50;this._renderMessages(i),this._setTabIndexesByIndex(a),requestAnimationFrame(()=>{i.length>n.length&&s&&this._scrollToLastMessage()})}}_renderMessages(e){ps(Di`
        ${e.map(t=>Di`
              <vaadin-message
                role="listitem"
                .time="${t.time}"
                .userAbbr="${t.userAbbr}"
                .userName="${t.userName}"
                .userImg="${t.userImg}"
                .userColorIndex="${t.userColorIndex}"
                theme="${Bf(t.theme)}"
                @focusin="${this._onMessageFocusIn}"
                >${t.text}</vaadin-message
              >
            `)}
      `,this,{host:this})}_scrollToLastMessage(){this.items.length>0&&(this.scrollTop=this.scrollHeight-this.clientHeight)}_onMessageFocusIn(e){const t=e.composedPath().find(i=>i instanceof qa);this._setTabIndexesByMessage(t)}_setTabIndexesByIndex(e){const t=this._messages[e]||this._messages[0];this._setTabIndexesByMessage(t)}_setTabIndexesByMessage(e){this._messages.forEach(t=>{t.tabIndex=t===e?0:-1})}_getIndexOfFocusableElement(){const e=this._messages.findIndex(t=>t.tabIndex===0);return e!==-1?e:0}}customElements.define(sl.is,sl);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nf=S`
  :host {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
    color: var(--lumo-body-text-color);
    border-radius: var(--lumo-border-radius-s);
    background-color: var(--lumo-contrast-20pct);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focused]) [part='remove-button'] {
    color: inherit;
  }

  :host([slot='overflow']) {
    position: relative;
    min-width: var(--lumo-size-xxs);
    margin-inline-start: var(--lumo-space-s);
  }

  :host([slot='overflow'])::before,
  :host([slot='overflow'])::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-left: calc(var(--lumo-space-s) / 4) solid;
    border-radius: var(--lumo-border-radius-s);
    border-color: var(--lumo-contrast-30pct);
  }

  :host([slot='overflow'])::before {
    left: calc(-1 * var(--lumo-space-s) / 2);
  }

  :host([slot='overflow'])::after {
    left: calc(-1 * var(--lumo-space-s));
  }

  :host([count='2']) {
    margin-inline-start: calc(var(--lumo-space-s) / 2);
  }

  :host([count='2'])::after {
    display: none;
  }

  :host([count='1']) {
    margin-inline-start: 0;
  }

  :host([count='1'])::before,
  :host([count='1'])::after {
    display: none;
  }

  [part='label'] {
    font-weight: 500;
    line-height: 1.25;
  }

  [part='remove-button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.3125em;
    margin-bottom: -0.3125em;
    margin-inline-start: auto;
    width: 1.25em;
    height: 1.25em;
    font-size: 1.5em;
    transition: none;
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }
`;M("vaadin-multi-select-combo-box-chip",[fs,Nf],{moduleId:"lumo-multi-select-combo-box-chip"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zf=S`
  @media (any-hover: hover) {
    :host(:hover[readonly]) {
      background-color: transparent;
      cursor: default;
    }
  }
`;M("vaadin-multi-select-combo-box-item",[ji,gs,zf],{moduleId:"lumo-multi-select-combo-box-item"});M("vaadin-multi-select-combo-box-overlay",[Nr,ra,ys,_s,uu,S`
      :host {
        --_vaadin-multi-select-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-multi-select-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-multi-select-combo-box-overlay"});const Gf=S`
  :host([has-value]) {
    padding-inline-start: 0;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--lumo-body-text-color) !important;
  }

  /* Override input-container styles */
  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    min-height: auto;
    padding: 0.3125em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-body-text-color);
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted([slot='chip']:not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  ::slotted([slot='chip']:not(:last-of-type)),
  ::slotted([slot='overflow']:not(:last-of-type)) {
    margin-inline-end: var(--lumo-space-xs);
  }

  ::slotted([slot='chip'][focused]) {
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }
`;M("vaadin-multi-select-combo-box",[Ye,Gf],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ol extends z(F){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return L`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          align-self: center;
          white-space: nowrap;
          box-sizing: border-box;
        }

        [part='label'] {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        :host([hidden]),
        :host(:is([readonly], [disabled], [slot='overflow'])) [part='remove-button'] {
          display: none !important;
        }
      </style>
      <div part="label">[[label]]</div>
      <div part="remove-button" role="button" on-click="_onRemoveClick"></div>
    `}_onRemoveClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}customElements.define(ol.is,ol);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-multi-select-combo-box-container",S`
    #wrapper {
      display: flex;
      width: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let yn;class ll extends Oc{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!yn){yn=super.template.cloneNode(!0);const e=yn.content,t=e.querySelectorAll("slot"),i=document.createElement("div");i.setAttribute("id","wrapper"),e.insertBefore(i,t[2]),i.appendChild(t[0]),i.appendChild(t[1])}return yn}}customElements.define(ll.is,ll);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hl extends bs(z(Ot(F))){static get is(){return"vaadin-multi-select-combo-box-item"}static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}}customElements.define(hl.is,hl);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-multi-select-combo-box-overlay",S`
    #overlay {
      width: var(
        --vaadin-multi-select-combo-box-overlay-width,
        var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
      );
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});let bn;class ul extends xs(be){static get is(){return"vaadin-multi-select-combo-box-overlay"}static get template(){if(!bn){bn=super.template.cloneNode(!0);const e=bn.content.querySelector('[part~="overlay"]');e.removeAttribute("tabindex");const t=document.createElement("div");t.setAttribute("part","loader"),e.insertBefore(t,e.firstElementChild)}return bn}}customElements.define(ul.is,ul);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dl extends As(F){static get is(){return"vaadin-multi-select-combo-box-scroller"}static get template(){return L`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-multi-select-combo-box-items-container-border-width);
          border-style: var(--_vaadin-multi-select-combo-box-items-container-border-style);
          border-color: var(--_vaadin-multi-select-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}_isItemSelected(e,t,i){return e instanceof ye||this.owner.readonly?!1:this.owner._findIndex(e,this.owner.selectedItems,i)>-1}_updateElement(e,t){super._updateElement(e,t),e.toggleAttribute("readonly",this.owner.readonly)}}customElements.define(dl.is,dl);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cl extends cu(Cs(z(F))){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return L`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-multi-select-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_target]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-multi-select-combo-box-overlay>
    `}static get properties(){return{filteredItems:{type:Array,notify:!0},loading:{type:Boolean,notify:!0},size:{type:Number,notify:!0},selectedItems:{type:Array,value:()=>[]},lastFilter:{type:String,notify:!0},_target:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}_initScroller(){const e=this.getRootNode().host;super._initScroller(e)}_onEnter(e){this.__enterPressed=!0,super._onEnter(e)}_closeOrCommit(){if(this.readonly){this.close();return}if(this.__enterPressed){this.__enterPressed=null;const e=this.filteredItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this.filteredItems.indexOf(e);return}super._closeOrCommit()}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_onFocusout(e){this._ignoreCommitValue=!0,super._onFocusout(e),this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.selectedItem=null,this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(e){e.stopPropagation(),!this.readonly&&(e.detail.item instanceof ye||this.opened&&this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:e.detail.item}})))}_shouldLoadPage(e){return this.readonly?!1:super._shouldLoadPage(e)}clearCache(){this.readonly||super.clearCache()}}customElements.define(cl.is,cl);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $f=S`
  :host {
    --input-min-width: var(--vaadin-multi-select-combo-box-input-min-width, 4em);
  }

  #chips {
    display: flex;
    align-items: center;
  }

  ::slotted(input) {
    box-sizing: border-box;
    flex: 1 0 var(--input-min-width);
  }

  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    flex: 0 1 auto;
  }

  :host(:is([readonly], [disabled])) ::slotted(input) {
    flex-grow: 0;
    flex-basis: 0;
    padding: 0;
  }
`;M("vaadin-multi-select-combo-box",[Yi,$f],{moduleId:"vaadin-multi-select-combo-box-styles"});class fl extends $r(cs(z(it(F)))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return L`
      <div class="vaadin-multi-select-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-multi-select-combo-box-internal
          id="comboBox"
          items="[[__effectiveItems]]"
          item-id-path="[[itemIdPath]]"
          item-label-path="[[itemLabelPath]]"
          item-value-path="[[itemValuePath]]"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          allow-custom-value="[[allowCustomValue]]"
          overlay-class="[[overlayClass]]"
          data-provider="[[dataProvider]]"
          filter="{{filter}}"
          last-filter="{{_lastFilter}}"
          loading="{{loading}}"
          size="{{size}}"
          filtered-items="[[__effectiveFilteredItems]]"
          selected-items="[[selectedItems]]"
          opened="{{opened}}"
          renderer="[[renderer]]"
          theme$="[[_theme]]"
          on-combo-box-item-selected="_onComboBoxItemSelected"
          on-change="_onComboBoxChange"
          on-custom-value-set="_onCustomValueSet"
          on-filtered-items-changed="_onFilteredItemsChanged"
        >
          <vaadin-multi-select-combo-box-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="overflow" slot="prefix"></slot>
            <div id="chips" part="chips" slot="prefix">
              <slot name="chip"></slot>
            </div>
            <slot name="input"></slot>
            <div
              id="clearButton"
              part="clear-button"
              slot="suffix"
              on-touchend="_onClearButtonTouchend"
              aria-hidden="true"
            ></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-multi-select-combo-box-container>
        </vaadin-multi-select-combo-box-internal>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{autoOpenDisabled:Boolean,clearButtonVisible:{type:Boolean,reflectToAttribute:!0,observer:"_clearButtonVisibleChanged",value:!1},items:{type:Array},itemLabelPath:{type:String,value:"label"},itemValuePath:{type:String,value:"value"},itemIdPath:{type:String},i18n:{type:Object,value:()=>({cleared:"Selection cleared",focused:"focused. Press Backspace to remove",selected:"added to selection",deselected:"removed from selection",total:"{count} items selected"})},loading:{type:Boolean,value:!1,reflectToAttribute:!0},overlayClass:{type:String},readonly:{type:Boolean,value:!1,observer:"_readonlyChanged",reflectToAttribute:!0},selectedItems:{type:Array,value:()=>[],notify:!0},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},size:{type:Number},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object},allowCustomValue:{type:Boolean,value:!1},placeholder:{type:String,value:"",observer:"_placeholderChanged"},renderer:Function,filter:{type:String,value:"",notify:!0},filteredItems:Array,value:{type:String},__effectiveItems:{type:Array,computed:"__computeEffectiveItems(items, selectedItems, readonly)"},__effectiveFilteredItems:{type:Array,computed:"__computeEffectiveFilteredItems(items, filteredItems, selectedItems, readonly)"},_overflowItems:{type:Array,value:()=>[]},_focusedChipIndex:{type:Number,value:-1,observer:"_focusedChipIndexChanged"},_lastFilter:{type:String}}}static get observers(){return["_selectedItemsChanged(selectedItems, selectedItems.*)","__updateOverflowChip(_overflow, _overflowItems, disabled, readonly)"]}get slotStyles(){const e=this.localName;return[...super.slotStyles,`
        ${e}[has-value] input::placeholder {
          color: transparent !important;
        }
      `]}get clearElement(){return this.$.clearButton}get _chips(){return[...this.querySelectorAll('[slot="chip"]')]}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}ready(){super.ready(),this.addController(new Yr(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Wi(this.inputElement,this._labelController)),this._tooltipController=new Ct(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(e=>!e.opened),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this._overflowController=new ft(this,"overflow","vaadin-multi-select-combo-box-chip",{initializer:e=>{e.addEventListener("mousedown",t=>this._preventBlur(t)),this._overflow=e}}),this.addController(this._overflowController),this.__updateChips(),Wr(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),ve(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(e,t){super._disabledChanged(e,t),(e||t)&&this.__updateChips()}_inputElementChanged(e){super._inputElementChanged(e),e&&this.$.comboBox._setInputElement(e)}_setFocused(e){super._setFocused(e),e||(this._focusedChipIndex=-1,this.validate())}_onResize(){this.__updateChips()}_delegateAttribute(e,t){if(this.stateTarget){if(e==="required"){this._delegateAttribute("aria-required",t?"true":!1);return}super._delegateAttribute(e,t)}}_clearButtonVisibleChanged(e,t){(e||t)&&this.__updateChips()}_onFilteredItemsChanged(e){const{value:t}=e.detail;(Array.isArray(t)||t==null)&&(this.filteredItems=t)}_readonlyChanged(e,t){(e||t)&&this.__updateChips(),this.dataProvider&&this.clearCache()}_pageSizeChanged(e,t){(Math.floor(e)!==e||e<=0)&&(this.pageSize=t,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(e){const t=this.__tmpA11yPlaceholder;t!==e&&(this.__savedPlaceholder=e,t&&(this.placeholder=t))}_selectedItemsChanged(e){if(this._toggleHasValue(this._hasValue),this._hasValue){const t=this._mergeItemLabels(e);this.__tmpA11yPlaceholder=t,this.placeholder=t}else delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder;this.__updateChips(),this.requestContentUpdate()}_getItemLabel(e){return this.$.comboBox._getItemLabel(e)}_mergeItemLabels(e){return e.map(t=>this._getItemLabel(t)).join(", ")}_findIndex(e,t,i){if(i&&e){for(let n=0;n<t.length;n++)if(t[n]&&t[n][i]===e[i])return n;return-1}return t.indexOf(e)}__clearFilter(){this.filter="",this.$.comboBox.clear()}__announceItem(e,t,i){const n=t?"selected":"deselected",a=this.i18n.total.replace("{count}",i||0);ve(`${e} ${this.i18n[n]} ${a}`)}__removeItem(e){const t=[...this.selectedItems];t.splice(t.indexOf(e),1),this.__updateSelection(t);const i=this._getItemLabel(e);this.__announceItem(i,!1,t.length)}__selectItem(e){const t=[...this.selectedItems],i=this._findIndex(e,t,this.itemIdPath),n=this._getItemLabel(e);let a=!1;if(i!==-1){const s=this._lastFilter;if(s&&s.toLowerCase()===n.toLowerCase()){this.__clearFilter();return}t.splice(i,1)}else t.push(e),a=!0;this.__updateSelection(t),this.__clearFilter(),this.__announceItem(n,a,t.length)}__updateSelection(e){this.selectedItems=e,this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__createChip(e){const t=document.createElement("vaadin-multi-select-combo-box-chip");t.setAttribute("slot","chip"),t.item=e,t.disabled=this.disabled,t.readonly=this.readonly;const i=this._getItemLabel(e);return t.label=i,t.setAttribute("title",i),t.addEventListener("item-removed",n=>this._onItemRemoved(n)),t.addEventListener("mousedown",n=>this._preventBlur(n)),t}__getOverflowWidth(){const e=this._overflow;e.style.visibility="hidden",e.removeAttribute("hidden");const t=e.getAttribute("count");e.setAttribute("count","99");const i=getComputedStyle(e),n=e.clientWidth+parseInt(i.marginInlineStart);return e.setAttribute("count",t),e.setAttribute("hidden",""),e.style.visibility="",n}__updateChips(){if(!this._inputField||!this.inputElement)return;this._chips.forEach(a=>{a.remove()});const e=[...this.selectedItems],t=this._inputField.$.wrapper.clientWidth,i=parseInt(getComputedStyle(this.inputElement).flexBasis);let n=t-i;e.length>1&&(n-=this.__getOverflowWidth());for(let a=e.length-1,s=null;a>=0;a--){const o=this.__createChip(e[a]);if(this.insertBefore(o,s),this.$.chips.clientWidth>n){o.remove();break}e.pop(),s=o}this._overflowItems=e}__updateOverflowChip(e,t,i,n){if(e){const a=t.length;e.label=`${a}`,e.setAttribute("count",`${a}`),e.setAttribute("title",this._mergeItemLabels(t)),e.toggleAttribute("hidden",a===0),e.disabled=i,e.readonly=n}}_onClearButtonTouchend(e){e.preventDefault(),this.clear()}_onClearButtonClick(e){e.stopPropagation(),this.clear()}_onChange(e){e.stopPropagation()}_onEscape(e){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(e.stopPropagation(),this.selectedItems=[])}_onKeyDown(e){super._onKeyDown(e);const t=this._chips;if(!this.readonly&&t.length>0)switch(e.key){case"Backspace":this._onBackSpace(t);break;case"ArrowLeft":this._onArrowLeft(t,e);break;case"ArrowRight":this._onArrowRight(t,e);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(e,t){if(this.inputElement.selectionStart!==0)return;const i=this._focusedChipIndex;i!==-1&&t.preventDefault();let n;this.__isRTL?i===e.length-1?n=-1:i>-1&&(n=i+1):i===-1?n=e.length-1:i>0&&(n=i-1),n!==void 0&&(this._focusedChipIndex=n)}_onArrowRight(e,t){if(this.inputElement.selectionStart!==0)return;const i=this._focusedChipIndex;i!==-1&&t.preventDefault();let n;this.__isRTL?i===-1?n=e.length-1:i>0&&(n=i-1):i===e.length-1?n=-1:i>-1&&(n=i+1),n!==void 0&&(this._focusedChipIndex=n)}_onBackSpace(e){if(this.inputElement.selectionStart!==0)return;const t=this._focusedChipIndex;t===-1?this._focusedChipIndex=e.length-1:(this.__removeItem(e[t].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(e,t){if(e>-1||t>-1){const i=this._chips;if(i.forEach((n,a)=>{n.toggleAttribute("focused",a===e)}),e>-1){const n=i[e].item,a=this._getItemLabel(n);ve(`${a} ${this.i18n.focused}`)}}}_onComboBoxChange(){const e=this.$.comboBox.selectedItem;e&&this.__selectItem(e)}_onComboBoxItemSelected(e){this.__selectItem(e.detail.item)}_onCustomValueSet(e){e.preventDefault(),e.stopPropagation(),this.__clearFilter(),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:e.detail,composed:!0,bubbles:!0}))}_onItemRemoved(e){this.__removeItem(e.detail.item)}_preventBlur(e){e.preventDefault()}__computeEffectiveItems(e,t,i){return e&&i?t:e}__computeEffectiveFilteredItems(e,t,i,n){return!e&&n?i:t}}customElements.define(fl.is,fl);M("vaadin-progress-bar",S`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const bu=document.createElement("template");bu.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(bu.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vf=S`
  :host {
    display: block;
    width: 100%; /* prevent collapsing inside non-stretching column flex */
    height: 8px;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='bar'] {
    height: 100%;
  }

  [part='value'] {
    height: 100%;
    transform-origin: 0 50%;
    transform: scaleX(var(--vaadin-progress-value));
  }

  :host([dir='rtl']) [part='value'] {
    transform-origin: 100% 50%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Uf=r=>class extends r{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(t,i,n){const a=this._normalizeValue(t,i,n);this.style.setProperty("--vaadin-progress-value",a)}_valueChanged(t){this.setAttribute("aria-valuenow",t)}_minChanged(t){this.setAttribute("aria-valuemin",t)}_maxChanged(t){this.setAttribute("aria-valuemax",t)}_normalizeValue(t,i,n){let a;return!t&&t!==0?a=0:i>=n?a=1:(a=(t-i)/(n-i),a=Math.min(Math.max(a,0),1)),a}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-progress-bar",Vf,{moduleId:"vaadin-progress-bar-styles"});class pl extends it(z(Uf(F))){static get is(){return"vaadin-progress-bar"}static get template(){return L`
      <div part="bar">
        <div part="value"></div>
      </div>
    `}}customElements.define(pl.is,pl);M("vaadin-radio-button",S`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_radio-button-size: var(--vaadin-radio-button-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='radio'] {
      width: var(--_radio-button-size);
      height: var(--_radio-button-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: 50%;
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      will-change: transform;
      cursor: var(--lumo-clickable-cursor);
    }

    /* Used for activation "halo" */
    [part='radio']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_radio-button-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
      will-change: transform, opacity;
    }

    /* Used for the dot */
    [part='radio']::after {
      content: '';
      pointer-events: none;
      width: 0;
      height: 0;
      border: 3px solid var(--lumo-primary-contrast-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.25s transform;
      will-change: transform;
      background-clip: content-box;
    }

    :host([checked]) [part='radio'] {
      background-color: var(--lumo-primary-color);
    }

    :host([checked]) [part='radio']::after {
      transform: translate(-50%, -50%) scale(1);
    }

    :host(:not([checked]):not([disabled]):hover) [part='radio'] {
      background-color: var(--lumo-contrast-30pct);
    }

    :host([active]) [part='radio'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='radio'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='radio']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    :host([focus-ring]) [part='radio'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='radio'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='radio']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }
  `,{moduleId:"lumo-radio-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Nn extends Rc(Lc(ea($h(it(z(gt(F))))))){static get is(){return"vaadin-radio-button"}static get template(){return L`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-radio-button-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        [part='radio'],
        ::slotted(input),
        ::slotted(label) {
          grid-row: 1;
        }

        [part='radio'],
        ::slotted(input) {
          grid-column: 1;
        }

        [part='radio'] {
          width: var(--vaadin-radio-button-size, 1em);
          height: var(--vaadin-radio-button-size, 1em);
        }

        [part='radio']::before {
          display: block;
          content: '\\202F';
          line-height: var(--vaadin-radio-button-size, 1em);
          contain: paint;
        }

        /* visually hidden */
        ::slotted(input) {
          opacity: 0;
          cursor: inherit;
          margin: 0;
          align-self: stretch;
          -webkit-appearance: none;
        }
      </style>
      <div class="vaadin-radio-button-container">
        <div part="radio" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
    `}static get properties(){return{name:{type:String,value:""}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}ready(){super.ready(),this.addController(new Yr(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Wi(this.inputElement,this._labelController))}}customElements.define(Nn.is,Nn);const jf=S`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-radio-button */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'],
  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;M("vaadin-radio-group",[aa,sa,jf],{moduleId:"lumo-radio-group"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class vl extends Ur(We(jr(la(it(z(F)))))){static get is(){return"vaadin-radio-group"}static get template(){return L`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>
      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:"",observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this)}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(e=>e.checked)}get isHorizontalRTL(){return this.__isRTL&&this._theme!=="vertical"}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup"),this._fieldName=`${this.localName}-${oa()}`,this._observer=new Br(this,({addedNodes:e,removedNodes:t})=>{this.__filterRadioButtons(e).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(t).forEach(this.__unregisterRadioButton)}),this._tooltipController=new Ct(this),this.addController(this._tooltipController)}__filterRadioButtons(e){return e.filter(t=>t instanceof Nn)}_onKeyDown(e){super._onKeyDown(e);const t=e.composedPath().find(i=>i instanceof Nn);["ArrowLeft","ArrowUp"].includes(e.key)&&(e.preventDefault(),this.__selectNextRadioButton(t)),["ArrowRight","ArrowDown"].includes(e.key)&&(e.preventDefault(),this.__selectPrevRadioButton(t))}_invalidChanged(e){super._invalidChanged(e),e?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")}__selectNextRadioButton(e){const t=this.__radioButtons.indexOf(e);this.__selectIncRadioButton(t,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(e){const t=this.__radioButtons.indexOf(e);this.__selectIncRadioButton(t,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(e,t){const i=(this.__radioButtons.length+e+t)%this.__radioButtons.length,n=this.__radioButtons[i];n.disabled?this.__selectIncRadioButton(i,t):(n.focusElement.focus(),n.focusElement.click())}__registerRadioButton(e){e.name=this._fieldName,e.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(e.disabled=!0),e.checked&&this.__selectRadioButton(e)}__unregisterRadioButton(e){e.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),e.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(e){e.target.checked&&this.__selectRadioButton(e.target)}__valueChanged(e,t){if(!(t===void 0&&e==="")){if(e){const i=this.__radioButtons.find(n=>n.value===e);i?(this.__selectRadioButton(i),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${e}" was not found.`)}else this.__selectRadioButton(null),this.removeAttribute("has-value");t!==void 0&&this.validate()}}__readonlyChanged(e,t){!e&&t===void 0||t!==e&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(e,t){super._disabledChanged(e,t),!(!e&&t===void 0)&&t!==e&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(e){return!this.contains(e.relatedTarget)}_setFocused(e){super._setFocused(e),e||this.validate()}__selectRadioButton(e){e?this.value=e.value:this.value="",this.__radioButtons.forEach(t=>{t.checked=t===e}),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(e=>{this.readonly?e.disabled=e!==this.__selectedRadioButton:e.disabled=this.disabled})}}customElements.define(vl.is,vl);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-select-item",ji,{moduleId:"lumo-select-item"});M("vaadin-select-list-box",ds,{moduleId:"lumo-select-list-box"});const Wf=S`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: 500;
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-body-text-color);
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: var(--lumo-secondary-text-color);
  }

  :host(:is([readonly], [disabled])) ::slotted([slot='value'][placeholder]) {
    opacity: 0;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --_lumo-selected-item-height: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;M("vaadin-select",[Ye,Wf],{moduleId:"lumo-select"});M("vaadin-select-value-button",S`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      padding: 0 0.25em;
      --_lumo-selected-item-height: var(--lumo-size-m);
      --_lumo-selected-item-padding: 0.5em;
    }

    ::slotted(*) {
      min-height: var(--_lumo-selected-item-height);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
    }

    ::slotted(*:hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const Yf=S`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  [part~='overlay'] {
    min-width: var(--vaadin-select-text-field-width);
  }

  /* Small viewport adjustment */
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;M("vaadin-select-overlay",[Qh,Yf],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ml extends Gr(z(Ot(F))){static get is(){return"vaadin-select-item"}static get template(){return L`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","option")}}customElements.define(ml.is,ml);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gl extends zr(z(Ot(gt(F)))){static get is(){return"vaadin-select-list-box"}static get template(){return L`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox")}}customElements.define(gl.is,gl);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-select-overlay",S`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,{moduleId:"vaadin-select-overlay-styles"});class _l extends na(be){static get is(){return"vaadin-select-overlay"}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const e=this._getMenuElement();this.owner._assignMenuElement(e)}}_getMenuElement(){return Array.from(this.children).find(e=>e.localName!=="style")}}customElements.define(_l.is,_l);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yl extends qh(z(F)){static get is(){return"vaadin-select-value-button"}static get template(){return L`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          min-width: 0;
          width: 0;
        }

        ::slotted(*) {
          padding-left: 0;
          padding-right: 0;
          flex: auto;
        }

        /* placeholder styles */
        ::slotted(*:not([selected])) {
          line-height: 1;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: inherit;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          line-height: inherit;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="label">
          <slot></slot>
        </span>
      </div>
    `}}customElements.define(yl.is,yl);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qf extends ft{constructor(e){super(e,"value","vaadin-select-value-button",{initializer:(t,i)=>{i._setFocusElement(t),i.ariaTarget=t,i.stateTarget=t,t.setAttribute("aria-haspopup","listbox")}})}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */M("vaadin-select",[Dc,Bc],{moduleId:"vaadin-select-styles"});class bl extends Vr(ea(ia(la(Ur(it(z(F))))))){static get is(){return"vaadin-select"}static get template(){return L`
      <style>
        ::slotted([slot='value']) {
          flex-grow: 1;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[_theme]]"
      ></vaadin-select-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,value:{type:String,value:"",notify:!0,observer:"_valueChanged"},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_inputContainer:Object,_items:Object}}static get delegateAttrs(){return[...super.delegateAttrs,"invalid"]}static get observers(){return["_updateAriaExpanded(opened, focusElement)","_updateSelectedItem(value, _items, placeholder)","_rendererChanged(renderer, _overlayElement)"]}constructor(){super(),this._itemId=`value-${this.localName}-${oa()}`}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._valueButtonController=new qf(this),this.addController(this._valueButtonController),this.addController(new Pc(this._phoneMediaQuery,e=>{this._phone=e})),Wr(this),this._tooltipController=new Ct(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}requestContentUpdate(){this._overlayElement&&(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_requiredChanged(e){super._requiredChanged(e),e===!1&&this.validate()}_rendererChanged(e,t){t&&(t.setProperties({owner:this,renderer:e||this.__defaultRenderer}),this.requestContentUpdate())}__itemsChanged(e,t){(e||t)&&this.requestContentUpdate()}_assignMenuElement(e){e&&e!==this.__lastMenuElement&&(this._menuElement=e,this.__initMenuItems(e),e.addEventListener("items-changed",()=>{this.__initMenuItems(e)}),e.addEventListener("selected-changed",()=>this.__updateValueButton()),e.addEventListener("keydown",t=>this._onKeyDownInside(t),!0),e.addEventListener("click",()=>{this.__userInteraction=!0,this.opened=!1},!0),this.__lastMenuElement=e)}__initMenuItems(e){e.items&&(this._items=e.items)}_valueChanged(e,t){this.toggleAttribute("has-value",Boolean(e)),t!==void 0&&this.validate()}_onClick(e){e.preventDefault(),this.opened=!this.readonly}_onToggleMouseDown(e){e.preventDefault()}_onKeyDown(e){if(e.target===this.focusElement&&!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/u.test(e.key))e.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(e.key)&&e.key.length===1){const t=this._menuElement.selected,i=t!==void 0?t:-1,n=this._menuElement._searchKey(i,e.key);n>=0&&(this.__userInteraction=!0,this._updateAriaLive(!0),this._menuElement.selected=n)}}}_onKeyDownInside(e){/^(Tab)$/u.test(e.key)&&(this.opened=!1)}_openedChanged(e,t){if(e){if(this._updateAriaLive(!1),!this._overlayElement||!this._menuElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._overlayElement.style.setProperty("--vaadin-select-text-field-width",`${this._inputContainer.offsetWidth}px`);const i=this.hasAttribute("focus-ring");this._openedWithFocusRing=i,i&&this.removeAttribute("focus-ring"),this._menuElement.focus()}else t&&(this.focus(),this._openedWithFocusRing&&this.setAttribute("focus-ring",""),this.validate())}_updateAriaExpanded(e,t){t&&t.setAttribute("aria-expanded",e?"true":"false")}_updateAriaLive(e){this.focusElement&&(e?this.focusElement.setAttribute("aria-live","polite"):this.focusElement.removeAttribute("aria-live"))}__attachSelectedItem(e){let t;const i=e.getAttribute("label");i?t=this.__createItemElement({label:i}):t=e.cloneNode(!0),t._sourceItem=e,this.__appendValueItemElement(t,this.focusElement),t.selected=!0}__createItemElement(e){const t=document.createElement(e.component||"vaadin-select-item");return e.label&&(t.textContent=e.label),e.value&&(t.value=e.value),e.disabled&&(t.disabled=e.disabled),t}__appendValueItemElement(e,t){t.appendChild(e),e.removeAttribute("tabindex"),e.removeAttribute("aria-selected"),e.removeAttribute("role"),e.setAttribute("id",this._itemId)}__updateValueButton(){const e=this.focusElement;if(!e)return;e.innerHTML="";const t=this._items[this._menuElement.selected];if(e.removeAttribute("placeholder"),t)this.__attachSelectedItem(t),this._valueChanging||(this._selectedChanging=!0,this.value=t.value||"",this.__userInteraction&&(this.opened=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging);else if(this.placeholder){const i=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(i,e),e.setAttribute("placeholder","")}t||this.placeholder?Fc(e,"aria-labelledby",this._itemId):kc(e,"aria-labelledby",this._itemId)}_updateSelectedItem(e,t){if(t){const i=e==null?e:e.toString();this._menuElement.selected=t.reduce((n,a,s)=>n===void 0&&a.value===i?s:n,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging)}}_shouldRemoveFocus(){return!this.opened}_setFocused(e){super._setFocused(e),e||this.validate()}checkValidity(){return!this.required||this.readonly||!!this.value}__defaultRenderer(e,t){if(!this.items||this.items.length===0){e.textContent="";return}let i=e.firstElementChild;i||(i=document.createElement("vaadin-select-list-box"),e.appendChild(i)),i.textContent="",this.items.forEach(n=>{i.appendChild(this.__createItemElement(n))})}}customElements.define(bl.is,bl);M("vaadin-tab",S`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--lumo-primary-text-color);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--lumo-primary-text-color);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--lumo-primary-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--lumo-primary-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xl extends it(z(Gr(gt(F)))){static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new Ct(this),this.addController(this._tooltipController)}_onKeyUp(e){const t=this.hasAttribute("active");if(super._onKeyUp(e),t){const i=this.querySelector("a");i&&i.click()}}}customElements.define(xl.is,xl);M("vaadin-tabs",S`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xa extends $r(it(zr(z(F)))){static get template(){return L`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          display: block;
        }

        :host([orientation='horizontal']) [part='tabs'] {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
        @-moz-document url-prefix() {
          :host([orientation='horizontal']) [part='tabs'] {
            overflow: hidden;
          }
        }

        :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
          display: none;
        }

        :host([orientation='vertical']) [part='tabs'] {
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='back-button'],
        [part='forward-button'] {
          pointer-events: none;
          opacity: 0;
          cursor: default;
        }

        :host([overflow~='start']) [part='back-button'],
        :host([overflow~='end']) [part='forward-button'] {
          pointer-events: auto;
          opacity: 1;
        }

        [part='back-button']::after {
          content: '\\25C0';
        }

        [part='forward-button']::after {
          content: '\\25B6';
        }

        :host([orientation='vertical']) [part='back-button'],
        :host([orientation='vertical']) [part='forward-button'] {
          display: none;
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='back-button']::after {
          content: '\\25B6';
        }

        :host([dir='rtl']) [part='forward-button']::after {
          content: '\\25C0';
        }
      </style>
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.__isRTL?1:-1}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Uh(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(e){this.__itemsResizeObserver.disconnect(),(e||[]).forEach(t=>{this.__itemsResizeObserver.observe(t)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}_updateOverflow(){const e=this._vertical?this._scrollerElement.scrollTop:Nc(this._scrollerElement,this.getAttribute("dir")),t=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let i=Math.floor(e)>1?"start":"";Math.ceil(e)<Math.ceil(t-this._scrollOffset)&&(i+=" end"),this.__direction===1&&(i=i.replace(/start|end/giu,n=>n==="start"?"end":"start")),i?this.setAttribute("overflow",i.trim()):this.removeAttribute("overflow")}}customElements.define(Xa.is,Xa);const Xf=S`
  :host {
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    font-family: var(--lumo-font-family);
  }

  :host([theme~='bordered']) {
    border: 1px solid var(--lumo-contrast-20pct);
    border-radius: var(--lumo-border-radius-l);
  }

  [part='tabs-container'] {
    box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
    padding: var(--lumo-space-xs) var(--lumo-space-s);
    gap: var(--lumo-space-s);
  }

  ::slotted([slot='tabs']) {
    box-shadow: initial;
    margin: calc(var(--lumo-space-xs) * -1) calc(var(--lumo-space-s) * -1);
  }

  [part='content'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  :host([loading]) [part='content'] {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;M("vaadin-tabsheet",[Xf,_s],{moduleId:"lumo-tabsheet"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Al extends zc{static get is(){return"vaadin-tabsheet-scroller"}}customElements.define(Al.is,Al);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hf extends ft{constructor(e){super(e,"tabs"),this.__tabsItemsChangedListener=this.__tabsItemsChangedListener.bind(this),this.__tabsSelectedChangedListener=this.__tabsSelectedChangedListener.bind(this)}__tabsItemsChangedListener(){this.host._setItems(this.tabs.items)}__tabsSelectedChangedListener(){this.host.selected=this.tabs.selected}initCustomNode(e){if(!(e instanceof Xa))throw Error('The "tabs" slot of a <vaadin-tabsheet> must only contain a <vaadin-tabs> element!');this.tabs=e,e.addEventListener("items-changed",this.__tabsItemsChangedListener),e.addEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=e,this.host.stateTarget=e,this.__tabsItemsChangedListener()}teardownNode(e){this.tabs=null,e.removeEventListener("items-changed",this.__tabsItemsChangedListener),e.removeEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=null,this.host._setItems([]),this.host.stateTarget=void 0}}class Cl extends gt(ia(it(z(F)))){static get template(){return L`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: flex;
          flex-direction: column;
        }

        [part='tabs-container'] {
          position: relative;
          display: flex;
          align-items: center;
        }

        ::slotted([slot='tabs']) {
          flex: 1;
          align-self: stretch;
          min-width: 8em;
        }

        [part='content'] {
          position: relative;
          flex: 1;
          box-sizing: border-box;
        }
      </style>

      <div part="tabs-container">
        <slot name="prefix"></slot>
        <slot name="tabs"></slot>
        <slot name="suffix"></slot>
      </div>

      <vaadin-tabsheet-scroller part="content">
        <div part="loader"></div>
        <slot id="panel-slot"></slot>
      </vaadin-tabsheet-scroller>
    `}static get is(){return"vaadin-tabsheet"}static get properties(){return{items:{type:Array,readOnly:!0,notify:!0},selected:{value:0,type:Number,notify:!0},__tabs:{type:Object},__panels:{type:Array}}}static get observers(){return["__itemsOrPanelsChanged(items, __panels)","__selectedTabItemChanged(selected, items, __panels)"]}static get delegateProps(){return["selected"]}static get delegateAttrs(){return["theme"]}ready(){super.ready(),this.__overflowController=new Jh(this,this.shadowRoot.querySelector('[part="content"]')),this.addController(this.__overflowController),this._tabsSlotController=new Hf(this),this.addController(this._tabsSlotController);const e=this.shadowRoot.querySelector("#panel-slot");this.__panelsObserver=new Br(e,()=>{this.__panels=Array.from(e.assignedNodes({flatten:!0})).filter(t=>t.nodeType===Node.ELEMENT_NODE)})}__itemsOrPanelsChanged(e,t){!e||!t||e.forEach(i=>{const n=t.find(a=>a.getAttribute("tab")===i.id);n&&(n.role="tabpanel",n.id||(n.id=`tabsheet-panel-${oa()}`),n.setAttribute("aria-labelledby",i.id),i.setAttribute("aria-controls",n.id))})}__selectedTabItemChanged(e,t,i){if(!t||!i||e===void 0)return;const n=this.shadowRoot.querySelector('[part="content"]'),a=t[e],s=a?a.id:"",o=i.find(h=>h.getAttribute("tab")===s);this.toggleAttribute("loading",!o);const l=i.filter(h=>!h.hidden).length===1;o?n.style.minHeight="":l&&(n.style.minHeight=`${n.offsetHeight}px`),i.forEach(h=>{h.hidden=h!==o})}}customElements.define(Cl.is,Cl);M("vaadin-upload",S`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }
  `,{moduleId:"lumo-upload"});M("vaadin-upload-icon",S`
    :host::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }
  `,{moduleId:"lumo-upload-icon"});M("vaadin-upload-file-list",S`
    ::slotted(li:not(:first-of-type)) {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload-file-list"});const Zf=S`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  ::slotted([slot='progress']) {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }
`;M("vaadin-upload-file",[fs,Zf],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wl extends z(F){static get is(){return"vaadin-upload-icon"}static get template(){return L`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}customElements.define(wl.is,wl);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xu=document.createElement("template");xu.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(xu.content);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class El extends We(z(gt(F))){static get template(){return L`
      <style>
        :host {
          display: block;
        }

        [hidden] {
          display: none;
        }

        [part='row'] {
          list-style-type: none;
        }

        button {
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }

        :host([complete]) ::slotted([slot='progress']),
        :host([error]) ::slotted([slot='progress']) {
          display: none !important;
        }
      </style>

      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!errorMessage]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[fileName]]</div>
            <div part="status" hidden$="[[!status]]" id="status">[[status]]</div>
            <div part="error" id="error" hidden$="[[!errorMessage]]">[[errorMessage]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!errorMessage]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <slot name="progress"></slot>
    `}static get is(){return"vaadin-upload-file"}static get properties(){return{complete:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},file:{type:Object},fileName:{type:String},held:{type:Boolean,value:!1},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object},progress:{type:Number},status:{type:String},tabindex:{type:Number,value:0,reflectToAttribute:!0},uploading:{type:Boolean,value:!1,reflectToAttribute:!0},_progress:{type:Object}}}static get observers(){return["__updateProgress(_progress, progress, indeterminate)"]}ready(){super.ready(),this.addController(new ft(this,"progress","vaadin-progress-bar",{initializer:e=>{this._progress=e}})),this.shadowRoot.addEventListener("focusin",e=>{e.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",e=>{e.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(e){return e.composedPath()[0]===this}_errorMessageChanged(e){this.toggleAttribute("error",Boolean(e))}__updateProgress(e,t,i){e&&(e.value=isNaN(t)?0:t/100,e.indeterminate=i)}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}}customElements.define(El.is,El);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Il extends z(F){static get is(){return"vaadin-upload-file-list"}static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>
      <ul part="list">
        <slot></slot>
      </ul>
    `}static get properties(){return{items:{type:Array},i18n:{type:Object}}}static get observers(){return["__updateItems(items, i18n)"]}__updateItems(e,t){e&&t&&this.requestContentUpdate()}requestContentUpdate(){const{items:e,i18n:t}=this;ps(Di`
        ${e.map(i=>Di`
            <li>
              <vaadin-upload-file
                .file="${i}"
                .complete="${i.complete}"
                .errorMessage="${i.error}"
                .fileName="${i.name}"
                .held="${i.held}"
                .indeterminate="${i.indeterminate}"
                .progress="${i.progress}"
                .status="${i.status}"
                .uploading="${i.uploading}"
                .i18n="${t}"
              ></vaadin-upload-file>
            </li>
          `)}
      `,this)}}customElements.define(Il.is,Il);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Kf extends ft{constructor(e){super(e,"add-button","vaadin-button")}initNode(e){e._isDefault&&(this.defaultNode=e),e.addEventListener("touchend",t=>{this.host._onAddFilesTouchEnd(t)}),e.addEventListener("click",t=>{this.host._onAddFilesClick(t)}),this.host._addButton=e}}class Qf extends ft{constructor(e){super(e,"drop-label","span")}initNode(e){e._isDefault&&(this.defaultNode=e),this.host._dropLabel=e}}class Ml extends it(z(gt(F))){static get template(){return L`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <div part="primary-buttons">
        <slot name="add-button"></slot>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon"></slot>
          <slot name="drop-label"></slot>
        </div>
      </div>
      <slot name="file-list"></slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:Dn},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[]},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}},_addButton:{type:Object},_dropLabel:{type:Object},_fileList:{type:Object},_files:{type:Array}}}static get observers(){return["__updateAddButton(_addButton, maxFiles, i18n, maxFilesReached)","__updateDropLabel(_dropLabel, maxFiles, i18n)","__updateFileList(_fileList, files, i18n)"]}get __acceptRegexp(){if(!this.accept)return null;const e=this.accept.split(",").map(t=>{let i=t.trim();return i=i.replace(/[+.]/gu,"\\$&"),i.startsWith("\\.")&&(i=`.*${i}$`),i.replace(/\/\*/gu,"/.*")});return new RegExp(`^(${e.join("|")})$`,"iu")}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this)),this._addButtonController=new Kf(this),this.addController(this._addButtonController),this._dropLabelController=new Qf(this),this.addController(this._dropLabelController),this.addController(new ft(this,"file-list","vaadin-upload-file-list",{initializer:e=>{this._fileList=e}})),this.addController(new ft(this,"drop-label-icon","vaadin-upload-icon"))}_formatSize(e){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,i=~~(Math.log(e)/Math.log(t)),n=Math.max(0,Math.min(3,i-1));return`${parseFloat((e/t**i).toFixed(n))} ${this.i18n.units.size[i]}`}_splitTimeByUnits(e){const t=[60,60,24,1/0],i=[0];for(let n=0;n<t.length&&e>0;n++)i[n]=e%t[n],e=Math.floor(e/t[n]);return i}_formatTime(e,t){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(i=>(i<10?"0":"")+i).join(":")}_formatFileProgress(e){const t=e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${e.totalStr}: ${e.progress}% (${t})`}_maxFilesAdded(e,t){return e>=0&&t>=e}__updateAddButton(e,t,i,n){e&&(e.disabled=n,e===this._addButtonController.defaultNode&&(e.textContent=this._i18nPlural(t,i.addFiles)))}__updateDropLabel(e,t,i){e&&e===this._dropLabelController.defaultNode&&(e.textContent=this._i18nPlural(t,i.dropFiles))}__updateFileList(e,t,i){e&&(e.items=[...t],e.i18n=i)}_onDragover(e){e.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([t,i])=>{e.setRequestHeader(t,i)}),this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,i,n){e.elapsed=n,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(n*(t/i-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/n/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(i),e.status=this._formatFileProgress(e)}uploadFiles(e=this.files){e&&!Array.isArray(e)&&(e=[e]),e=e.filter(t=>!t.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),i=e.xhr=this._createXhr();let n,a;i.upload.onprogress=h=>{clearTimeout(n),a=Date.now();const u=(a-t)/1e3,d=h.loaded,c=h.total,f=~~(d/c*100);e.loaded=d,e.progress=f,e.indeterminate=d<=0||d>=c,e.error?e.indeterminate=e.status=void 0:e.abort||(f<100?(this._setStatus(e,c,d,u),n=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._renderFileList()},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing)),this._renderFileList(),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:i}}))},i.onreadystatechange=()=>{if(i.readyState===4){if(clearTimeout(n),e.indeterminate=e.uploading=!1,e.abort||(e.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:i},cancelable:!0}))))return;i.status===0?e.error=this.i18n.uploading.error.serverUnavailable:i.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:i.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent(`upload-${e.error?"error":"success"}`,{detail:{file:e,xhr:i}})),this._renderFileList()}};const s=new FormData;if(e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:i},cancelable:!0})))return;s.append(e.formDataName,e,e.name),i.open(this.method,e.uploadTarget,!0),this._configureXhr(i),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:i}})),this._renderFileList()},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:i,formData:s},cancelable:!0}))&&i.send(s)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._removeFile(e))}_renderFileList(){this._fileList&&this._fileList.requestContentUpdate()}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&e.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));return}const t=this.__acceptRegexp;if(t&&!(t.test(e.type)||t.test(e.name))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}));return}e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.files=[e,...this.files],this.noAuto||this._uploadFile(e)}_removeFile(e){this.files.indexOf(e)>-1&&(this.files=this.files.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:e},bubbles:!0,composed:!0})))}_onAddFilesTouchEnd(e){e.preventDefault(),this._onAddFilesClick(e)}_onAddFilesClick(e){this.maxFilesReached||(e.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileReject(e){ve(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_onUploadStart(e){ve(`${e.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(e){ve(`${e.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(e){ve(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return e===1?t.one:t.many}_isMultiple(e){return e!==1}}customElements.define(Ml.is,Ml);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tl extends it(gt(z(F))){static get template(){return L`
      <style>
        :host {
          display: block;
          height: 400px;
          overflow: auto;
          flex: auto;
          align-self: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([grid])) #items > ::slotted(*) {
          width: 100%;
        }

        #items {
          position: relative;
        }
      </style>

      <div id="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-virtual-list"}static get properties(){return{items:{type:Array},renderer:Function,__virtualizer:Object}}static get observers(){return["__itemsOrRendererChanged(items, renderer, __virtualizer)"]}get firstVisibleIndex(){return this.__virtualizer.firstVisibleIndex}get lastVisibleIndex(){return this.__virtualizer.lastVisibleIndex}ready(){super.ready(),this.__virtualizer=new Wh({createElements:this.__createElements,updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.shadowRoot.querySelector("#items")}),this.__overflowController=new Jh(this),this.addController(this.__overflowController),Wr(this)}scrollToIndex(e){this.__virtualizer.scrollToIndex(e)}__createElements(e){return[...Array(e)].map(()=>document.createElement("div"))}__updateElement(e,t){e.__renderer!==this.renderer&&(e.__renderer=this.renderer,this.__clearRenderTargetContent(e)),this.renderer&&this.renderer(e,this,{item:this.items[t],index:t})}__clearRenderTargetContent(e){e.innerHTML="",delete e._$litPart$}__itemsOrRendererChanged(e,t,i){const n=this.childElementCount>0;(t||n)&&i&&(i.size=(e||[]).length,i.update())}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}}customElements.define(Tl.is,Tl);(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:e=>r(function(t){if(t.$connector)return;t.$connector={};const i={};let n={},a="";const s=new window.Vaadin.ComboBoxPlaceholder,o=(()=>{let d="",c=!1;return{needsDataCommunicatorReset:()=>c=!0,getLastFilterSentToServer:()=>d,requestData:(m,_,g)=>{const y=_-m,b=g.filter;t.$server.setRequestedRange(m,y,b),d=b,c&&(t.$server.resetDataCommunicator(),c=!1)}}})(),l=(d=Object.keys(i))=>{d.forEach(c=>{i[c]([],t.size),delete i[c];const f=parseInt(c)*t.pageSize,p=f+t.pageSize,v=Math.min(p,t.filteredItems.length);for(let m=f;m<v;m++)t.filteredItems[m]=s})};t.dataProvider=function(d,c){if(d.pageSize!=t.pageSize)throw"Invalid pageSize";if(t._clientSideFilter)if(n[0]){u(n[0],d.filter,c);return}else d.filter="";if(d.filter!==a){n={},a=d.filter,this._filterDebouncer=tu.debounce(this._filterDebouncer,eu.after(500),()=>{if(o.getLastFilterSentToServer()===d.filter&&o.needsDataCommunicatorReset(),d.filter!==a)throw new Error("Expected params.filter to be '"+a+"' but was '"+d.filter+"'");this._filterDebouncer=void 0,l(),t.dataProvider(d,c)});return}if(this._filterDebouncer){i[d.page]=c;return}if(n[d.page])h(d.page,c);else{i[d.page]=c;const p=Math.max(d.pageSize*2,500),v=Object.keys(i).map(g=>parseInt(g)),m=Math.min(...v),_=Math.max(...v);if(v.length*d.pageSize>p)d.page===m?l([String(_)]):l([String(m)]),t.dataProvider(d,c);else if(_-m+1!==v.length)l();else{const g=d.pageSize*m,y=d.pageSize*(_+1);o.requestData(g,y,d)}}},t.$connector.clear=r((d,c)=>{const f=Math.floor(d/t.pageSize),p=Math.ceil(c/t.pageSize);for(let v=f;v<f+p;v++)delete n[v]}),t.$connector.filter=r(function(d,c){return c=c?c.toString().toLowerCase():"",t._getItemLabel(d,t.itemLabelPath).toString().toLowerCase().indexOf(c)>-1}),t.$connector.set=r(function(d,c,f){if(f!=o.getLastFilterSentToServer())return;if(d%t.pageSize!=0)throw"Got new data to index "+d+" which is not aligned with the page size of "+t.pageSize;if(d===0&&c.length===0&&i[0]){n[0]=[];return}const p=d/t.pageSize,v=Math.ceil(c.length/t.pageSize);for(let m=0;m<v;m++){let _=p+m,g=c.slice(m*t.pageSize,(m+1)*t.pageSize);n[_]=g}}),t.$connector.updateData=r(function(d){const c=new Map(d.map(f=>[f.key,f]));t.filteredItems=t.filteredItems.map(f=>c.get(f.key)||f)}),t.$connector.updateSize=r(function(d){t._clientSideFilter||(t.size=d)}),t.$connector.reset=r(function(){l(),n={},t.clearCache()}),t.$connector.confirm=r(function(d,c){if(c!=o.getLastFilterSentToServer())return;let f=Object.getOwnPropertyNames(i);for(let p=0;p<f.length;p++){let v=f[p];n[v]&&h(v,i[v])}t.$server.confirmUpdate(d)});const h=r(function(d,c){let f=n[d];t._clientSideFilter?u(f,t.filter,c):(delete n[d],c(f,t.size))}),u=r(function(d,c,f){let p=d;c&&(p=d.filter(v=>t.$connector.filter(v,c))),f(p,p.length)});t.addEventListener("custom-value-set",r(d=>d.preventDefault()))})(e)}})();window.Vaadin.ComboBoxPlaceholder=ye;/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */(function(){function r(t){const i=t._getPopup();i&&(i.className=t.className)}const e=new MutationObserver(t=>{t.forEach(i=>{i.type==="attributes"&&i.attributeName==="class"&&r(i.target)})});window.Vaadin.Flow.cookieConsentConnector={initLazy:function(t){t.$connector||(t.$connector={},e.observe(t,{attributes:!0,attributeFilter:["class"]}),r(t))}}})();/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Grid Pro")};function e(t,i){return t.__edited&&t.__edited.model.item.key===i.item.key}window.Vaadin.Flow.gridProConnector={selectAll:t=>{t instanceof HTMLInputElement?t.select():t.focusElement&&t.focusElement instanceof HTMLInputElement&&t.focusElement.select()},setEditModeRenderer:(t,i)=>r(function(n,a){n.editModeRenderer=r(function(o,l,h){if(!e(this._grid,h)){this._grid._stopEdit();return}a.parentNode!==o&&(o.appendChild(a),this._grid._cancelStopEdit(),a.focus())}),n._setEditorValue=function(s,o){},n._getEditorValue=function(s){}})(t,i),patchEditModeRenderer:t=>r(function(i){i.__editModeRenderer=r(function(a,s,o){const l=a.assignedSlot.parentNode,h=s._grid;if(!e(h,o)){h._stopEdit();return}const u=s._getEditorTagName(l);(!a.firstElementChild||a.firstElementChild.localName.toLowerCase()!==u)&&(a.innerHTML=`<${u}></${u}>`)})})(t)}})();(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Menu Bar")};function e(t,i){if(t.$connector)return;const n=new MutationObserver(a=>{a.some(o=>{const l=o.oldValue,h=o.target.getAttribute(o.attributeName);return l!==h})&&t.$connector.generateItems()});t.$connector={generateItems:r(a=>{if(!t.shadowRoot){setTimeout(()=>t.$connector.generateItems(a));return}a&&(t.__generatedItems=window.Vaadin.Flow.contextMenuConnector.generateItemsTree(i,a));let s=t.__generatedItems||[];s.forEach(o=>o.disabled=o.component.disabled),s=s.filter(o=>!o.component.hidden),s.forEach(o=>{n.observe(o.component,{attributeFilter:["hidden","disabled"],attributeOldValue:!0})}),t.items=s,t._buttons.forEach(o=>{o.item&&o.item.component&&o.addEventListener("click",l=>{l.composedPath().indexOf(o.item.component)===-1&&(o.item.component.click(),l.stopPropagation())})})})}}window.Vaadin.Flow.menubarConnector={initLazy(...t){return r(e)(...t)}}})();(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Message List")};window.Vaadin.Flow.messageListConnector={setItems:(e,t,i)=>r(function(n,a,s){const o=new Intl.DateTimeFormat(s,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});n.items=a.map(l=>l.time?Object.assign(l,{time:o.format(new Date(l.time))}):l)})(e,t,i)}})();(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Select")};window.Vaadin.Flow.selectConnector={initLazy:e=>r(function(t){const i=r(function(){for(let n=0;n<t.childElementCount;n++){const a=t.children[n];if(a.tagName.toUpperCase()==="VAADIN-SELECT-LIST-BOX")return a}});t.$connector||(t.$connector={},t.renderer=r(function(n){const a=i();a&&(n.firstChild&&n.removeChild(n.firstChild),n.appendChild(a))}))})(e)}})();const Ar=window;Ar.Vaadin=Ar.Vaadin||{};Ar.Vaadin.Flow=Ar.Vaadin.Flow||{};Ar.Vaadin.Flow.tooltip={setDefaultHideDelay:r=>Ia.setDefaultHideDelay(r),setDefaultFocusDelay:r=>Ia.setDefaultFocusDelay(r),setDefaultHoverDelay:r=>Ia.setDefaultHoverDelay(r)};(function(){let r;customElements.whenDefined("vaadin-text-field").then(()=>{class e extends customElements.get("vaadin-text-field"){static get template(){return r||(r=super.template.cloneNode(!0),r.innerHTML+=`<style>
                  :host {
                    width: 8em;
                  }

                  :host([dir="rtl"]) [part="input-field"] {
                    direction: ltr;
                  }

                  :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
                    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em) !important;
                  }
            </style>`),r}static get is(){return"vaadin-big-decimal-field"}static get properties(){return{_decimalSeparator:{type:String,value:".",observer:"__decimalSeparatorChanged"}}}ready(){super.ready(),this.inputElement.setAttribute("inputmode","decimal")}__decimalSeparatorChanged(i,n){this.allowedCharPattern="[-+\\d"+i+"]",this.value&&n&&(this.value=this.value.split(n).join(i))}}customElements.define(e.is,e)})})();var Xi={RADIANS:"radians",DEGREES:"degrees",FEET:"ft",METERS:"m",PIXELS:"pixels",TILE_PIXELS:"tile-pixels",USFEET:"us-ft"},Yt={};Yt[Xi.RADIANS]=6370997/(2*Math.PI);Yt[Xi.DEGREES]=2*Math.PI*6370997/360;Yt[Xi.FEET]=.3048;Yt[Xi.METERS]=1;Yt[Xi.USFEET]=1200/3937;const ge=Xi;var Jf=function(){function r(e){this.code_=e.code,this.units_=e.units,this.extent_=e.extent!==void 0?e.extent:null,this.worldExtent_=e.worldExtent!==void 0?e.worldExtent:null,this.axisOrientation_=e.axisOrientation!==void 0?e.axisOrientation:"enu",this.global_=e.global!==void 0?e.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=e.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=e.metersPerUnit}return r.prototype.canWrapX=function(){return this.canWrapX_},r.prototype.getCode=function(){return this.code_},r.prototype.getExtent=function(){return this.extent_},r.prototype.getUnits=function(){return this.units_},r.prototype.getMetersPerUnit=function(){return this.metersPerUnit_||Yt[this.units_]},r.prototype.getWorldExtent=function(){return this.worldExtent_},r.prototype.getAxisOrientation=function(){return this.axisOrientation_},r.prototype.isGlobal=function(){return this.global_},r.prototype.setGlobal=function(e){this.global_=e,this.canWrapX_=!!(e&&this.extent_)},r.prototype.getDefaultTileGrid=function(){return this.defaultTileGrid_},r.prototype.setDefaultTileGrid=function(e){this.defaultTileGrid_=e},r.prototype.setExtent=function(e){this.extent_=e,this.canWrapX_=!!(this.global_&&e)},r.prototype.setWorldExtent=function(e){this.worldExtent_=e},r.prototype.setGetPointResolution=function(e){this.getPointResolutionFunc_=e},r.prototype.getPointResolutionFunc=function(){return this.getPointResolutionFunc_},r}();const Es=Jf;function pt(r,e,t){return Math.min(Math.max(r,e),t)}var tp=function(){var r;return"cosh"in Math?r=Math.cosh:r=function(e){var t=Math.exp(e);return(t+1/t)/2},r}(),ep=function(){var r;return"log2"in Math?r=Math.log2:r=function(e){return Math.log(e)*Math.LOG2E},r}();function ip(r,e,t,i,n,a){var s=n-t,o=a-i;if(s!==0||o!==0){var l=((r-t)*s+(e-i)*o)/(s*s+o*o);l>1?(t=n,i=a):l>0&&(t+=s*l,i+=o*l)}return Ri(r,e,t,i)}function Ri(r,e,t,i){var n=t-r,a=i-e;return n*n+a*a}function rp(r){for(var e=r.length,t=0;t<e;t++){for(var i=t,n=Math.abs(r[t][t]),a=t+1;a<e;a++){var s=Math.abs(r[a][t]);s>n&&(n=s,i=a)}if(n===0)return null;var o=r[i];r[i]=r[t],r[t]=o;for(var l=t+1;l<e;l++)for(var h=-r[l][t]/r[t][t],u=t;u<e+1;u++)t==u?r[l][u]=0:r[l][u]+=h*r[t][u]}for(var d=new Array(e),c=e-1;c>=0;c--){d[c]=r[c][e]/r[c][c];for(var f=c-1;f>=0;f--)r[f][e]-=r[f][c]*d[c]}return d}function Rn(r){return r*Math.PI/180}function ii(r,e){var t=r%e;return t*e<0?t+e:t}function Ke(r,e,t){return r+t*(e-r)}function Is(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}function Sl(r,e){return Math.round(Is(r,e))}function Ai(r,e){return Math.floor(Is(r,e))}function ke(r,e){return Math.ceil(Is(r,e))}var np=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),qr=6378137,Ci=Math.PI*qr,ap=[-Ci,-Ci,Ci,Ci],sp=[-180,-85,180,85],xn=qr*Math.log(Math.tan(Math.PI/2)),vi=function(r){np(e,r);function e(t){return r.call(this,{code:t,units:ge.METERS,extent:ap,global:!0,worldExtent:sp,getPointResolution:function(i,n){return i/tp(n[1]/qr)}})||this}return e}(Es),Ol=[new vi("EPSG:3857"),new vi("EPSG:102100"),new vi("EPSG:102113"),new vi("EPSG:900913"),new vi("http://www.opengis.net/def/crs/EPSG/0/3857"),new vi("http://www.opengis.net/gml/srs/epsg.xml#3857")];function op(r,e,t){var i=r.length,n=t>1?t:2,a=e;a===void 0&&(n>2?a=r.slice():a=new Array(i));for(var s=0;s<i;s+=n){a[s]=Ci*r[s]/180;var o=qr*Math.log(Math.tan(Math.PI*(+r[s+1]+90)/360));o>xn?o=xn:o<-xn&&(o=-xn),a[s+1]=o}return a}function lp(r,e,t){var i=r.length,n=t>1?t:2,a=e;a===void 0&&(n>2?a=r.slice():a=new Array(i));for(var s=0;s<i;s+=n)a[s]=180*r[s]/Ci,a[s+1]=360*Math.atan(Math.exp(r[s+1]/qr))/Math.PI-90;return a}var hp=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),up=6378137,Rl=[-180,-90,180,90],dp=Math.PI*up/180,Ze=function(r){hp(e,r);function e(t,i){return r.call(this,{code:t,units:ge.DEGREES,extent:Rl,axisOrientation:i,global:!0,metersPerUnit:dp,worldExtent:Rl})||this}return e}(Es),Ll=[new Ze("CRS:84"),new Ze("EPSG:4326","neu"),new Ze("urn:ogc:def:crs:OGC:1.3:CRS84"),new Ze("urn:ogc:def:crs:OGC:2:84"),new Ze("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new Ze("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new Ze("http://www.opengis.net/def/crs/EPSG/0/4326","neu")],Ha={};function cp(r){return Ha[r]||Ha[r.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function fp(r,e){Ha[r]=e}var st=typeof Object.assign=="function"?Object.assign:function(r,e){if(r==null)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(r),i=1,n=arguments.length;i<n;++i){var a=arguments[i];if(a!=null)for(var s in a)a.hasOwnProperty(s)&&(t[s]=a[s])}return t};function Ms(r){for(var e in r)delete r[e]}var pp=typeof Object.values=="function"?Object.values:function(r){var e=[];for(var t in r)e.push(r[t]);return e};function Cr(r){var e;for(e in r)return!1;return!e}var Li={};function Ni(r,e,t){var i=r.getCode(),n=e.getCode();i in Li||(Li[i]={}),Li[i][n]=t}function Au(r,e){var t;return r in Li&&e in Li[r]&&(t=Li[r][e]),t}const cr={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"},_t={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function K(){return function(){throw new Error("Unimplemented abstract method.")}()}var vp=0;function nt(r){return r.ol_uid||(r.ol_uid=String(++vp))}var mp="6.13.0",gp=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),_p=function(r){gp(e,r);function e(t){var i=this,n="v"+mp.split("-")[0],a="Assertion failed. See https://openlayers.org/en/"+n+"/doc/errors/#"+t+" for details.";return i=r.call(this,a)||this,i.code=t,i.name="AssertionError",i.message=a,i}return e}(Error);const Cu=_p;function J(r,e){if(!r)throw new Cu(e)}function Pl(r){for(var e=qt(),t=0,i=r.length;t<i;++t)br(e,r[t]);return e}function yp(r,e,t){var i=Math.min.apply(null,r),n=Math.min.apply(null,e),a=Math.max.apply(null,r),s=Math.max.apply(null,e);return he(i,n,a,s,t)}function wr(r,e,t){return t?(t[0]=r[0]-e,t[1]=r[1]-e,t[2]=r[2]+e,t[3]=r[3]+e,t):[r[0]-e,r[1]-e,r[2]+e,r[3]+e]}function bp(r,e){return e?(e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e):r.slice()}function wu(r,e,t){var i,n;return e<r[0]?i=r[0]-e:r[2]<e?i=e-r[2]:i=0,t<r[1]?n=r[1]-t:r[3]<t?n=t-r[3]:n=0,i*i+n*n}function Hi(r,e){return Eu(r,e[0],e[1])}function De(r,e){return r[0]<=e[0]&&e[2]<=r[2]&&r[1]<=e[1]&&e[3]<=r[3]}function Eu(r,e,t){return r[0]<=e&&e<=r[2]&&r[1]<=t&&t<=r[3]}function Za(r,e){var t=r[0],i=r[1],n=r[2],a=r[3],s=e[0],o=e[1],l=_t.UNKNOWN;return s<t?l=l|_t.LEFT:s>n&&(l=l|_t.RIGHT),o<i?l=l|_t.BELOW:o>a&&(l=l|_t.ABOVE),l===_t.UNKNOWN&&(l=_t.INTERSECTING),l}function qt(){return[1/0,1/0,-1/0,-1/0]}function he(r,e,t,i,n){return n?(n[0]=r,n[1]=e,n[2]=t,n[3]=i,n):[r,e,t,i]}function Ts(r){return he(1/0,1/0,-1/0,-1/0,r)}function xp(r,e){var t=r[0],i=r[1];return he(t,i,t,i,e)}function Ap(r,e,t,i,n){var a=Ts(n);return Iu(a,r,e,t,i)}function ha(r,e){return r[0]==e[0]&&r[2]==e[2]&&r[1]==e[1]&&r[3]==e[3]}function Cp(r,e){return e[0]<r[0]&&(r[0]=e[0]),e[2]>r[2]&&(r[2]=e[2]),e[1]<r[1]&&(r[1]=e[1]),e[3]>r[3]&&(r[3]=e[3]),r}function br(r,e){e[0]<r[0]&&(r[0]=e[0]),e[0]>r[2]&&(r[2]=e[0]),e[1]<r[1]&&(r[1]=e[1]),e[1]>r[3]&&(r[3]=e[1])}function Iu(r,e,t,i,n){for(;t<i;t+=n)wp(r,e[t],e[t+1]);return r}function wp(r,e,t){r[0]=Math.min(r[0],e),r[1]=Math.min(r[1],t),r[2]=Math.max(r[2],e),r[3]=Math.max(r[3],t)}function Mu(r,e){var t;return t=e(ua(r)),t||(t=e(da(r)),t)||(t=e(ca(r)),t)||(t=e(si(r)),t)?t:!1}function Ka(r){var e=0;return Ss(r)||(e=at(r)*Et(r)),e}function ua(r){return[r[0],r[1]]}function da(r){return[r[2],r[1]]}function Ve(r){return[(r[0]+r[2])/2,(r[1]+r[3])/2]}function Ep(r,e){var t;return e===cr.BOTTOM_LEFT?t=ua(r):e===cr.BOTTOM_RIGHT?t=da(r):e===cr.TOP_LEFT?t=si(r):e===cr.TOP_RIGHT?t=ca(r):J(!1,13),t}function Ln(r,e,t,i,n){var a=e*i[0]/2,s=e*i[1]/2,o=Math.cos(t),l=Math.sin(t),h=a*o,u=a*l,d=s*o,c=s*l,f=r[0],p=r[1],v=f-h+c,m=f-h-c,_=f+h-c,g=f+h+c,y=p-u-d,b=p-u+d,x=p+u+d,A=p+u-d;return he(Math.min(v,m,_,g),Math.min(y,b,x,A),Math.max(v,m,_,g),Math.max(y,b,x,A),n)}function Et(r){return r[3]-r[1]}function Pi(r,e,t){var i=t||qt();return Tt(r,e)?(r[0]>e[0]?i[0]=r[0]:i[0]=e[0],r[1]>e[1]?i[1]=r[1]:i[1]=e[1],r[2]<e[2]?i[2]=r[2]:i[2]=e[2],r[3]<e[3]?i[3]=r[3]:i[3]=e[3]):Ts(i),i}function si(r){return[r[0],r[3]]}function ca(r){return[r[2],r[3]]}function at(r){return r[2]-r[0]}function Tt(r,e){return r[0]<=e[2]&&r[2]>=e[0]&&r[1]<=e[3]&&r[3]>=e[1]}function Ss(r){return r[2]<r[0]||r[3]<r[1]}function Ip(r,e){return e?(e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e):r}function Mp(r,e,t){var i=!1,n=Za(r,e),a=Za(r,t);if(n===_t.INTERSECTING||a===_t.INTERSECTING)i=!0;else{var s=r[0],o=r[1],l=r[2],h=r[3],u=e[0],d=e[1],c=t[0],f=t[1],p=(f-d)/(c-u),v=void 0,m=void 0;a&_t.ABOVE&&!(n&_t.ABOVE)&&(v=c-(f-h)/p,i=v>=s&&v<=l),!i&&a&_t.RIGHT&&!(n&_t.RIGHT)&&(m=f-(c-l)*p,i=m>=o&&m<=h),!i&&a&_t.BELOW&&!(n&_t.BELOW)&&(v=c-(f-o)/p,i=v>=s&&v<=l),!i&&a&_t.LEFT&&!(n&_t.LEFT)&&(m=f-(c-s)*p,i=m>=o&&m<=h)}return i}function Tp(r,e,t,i){var n=[];if(i>1)for(var a=r[2]-r[0],s=r[3]-r[1],o=0;o<i;++o)n.push(r[0]+a*o/i,r[1],r[2],r[1]+s*o/i,r[2]-a*o/i,r[3],r[0],r[3]-s*o/i);else n=[r[0],r[1],r[2],r[1],r[2],r[3],r[0],r[3]];e(n,n,2);for(var l=[],h=[],o=0,u=n.length;o<u;o+=2)l.push(n[o]),h.push(n[o+1]);return yp(l,h,t)}function Sp(r,e){var t=e.getExtent(),i=Ve(r);if(e.canWrapX()&&(i[0]<t[0]||i[0]>=t[2])){var n=at(t),a=Math.floor((i[0]-t[0])/n),s=a*n;r[0]-=s,r[2]-=s}return r}function Tu(r,e){for(var t=(""+r).split("."),i=(""+e).split("."),n=0;n<Math.max(t.length,i.length);n++){var a=parseInt(t[n]||"0",10),s=parseInt(i[n]||"0",10);if(a>s)return 1;if(s>a)return-1}return 0}function Op(r,e){return r[0]+=+e[0],r[1]+=+e[1],r}function zn(r,e){for(var t=!0,i=r.length-1;i>=0;--i)if(r[i]!=e[i]){t=!1;break}return t}function Rp(r,e){var t=Math.cos(e),i=Math.sin(e),n=r[0]*t-r[1]*i,a=r[1]*t+r[0]*i;return r[0]=n,r[1]=a,r}function Lp(r,e){if(e.canWrapX()){var t=at(e.getExtent()),i=Su(r,e,t);i&&(r[0]-=i*t)}return r}function Su(r,e,t){var i=e.getExtent(),n=0;if(e.canWrapX()&&(r[0]<i[0]||r[0]>i[2])){var a=t||at(i);n=Math.floor((r[0]-i[0])/a)}return n}const q={POINT:"Point",LINE_STRING:"LineString",LINEAR_RING:"LinearRing",POLYGON:"Polygon",MULTI_POINT:"MultiPoint",MULTI_LINE_STRING:"MultiLineString",MULTI_POLYGON:"MultiPolygon",GEOMETRY_COLLECTION:"GeometryCollection",CIRCLE:"Circle"};var Pp=63710088e-1;function Fl(r,e,t){var i=t||Pp,n=Rn(r[1]),a=Rn(e[1]),s=(a-n)/2,o=Rn(e[0]-r[0])/2,l=Math.sin(s)*Math.sin(s)+Math.sin(o)*Math.sin(o)*Math.cos(n)*Math.cos(a);return 2*i*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}var Qa=!0;function Fp(r){var e=r===void 0?!0:r;Qa=!e}function Os(r,e,t){var i;if(e!==void 0){for(var n=0,a=r.length;n<a;++n)e[n]=r[n];i=e}else i=r.slice();return i}function Ou(r,e,t){if(e!==void 0&&r!==e){for(var i=0,n=r.length;i<n;++i)e[i]=r[i];r=e}return r}function Ru(r){fp(r.getCode(),r),Ni(r,r,Os)}function kp(r){r.forEach(Ru)}function vt(r){return typeof r=="string"?cp(r):r||null}function kl(r,e,t,i){r=vt(r);var n,a=r.getPointResolutionFunc();if(a){if(n=a(e,t),i&&i!==r.getUnits()){var s=r.getMetersPerUnit();s&&(n=n*s/Yt[i])}}else{var o=r.getUnits();if(o==ge.DEGREES&&!i||i==ge.DEGREES)n=e;else{var l=fa(r,vt("EPSG:4326"));if(l===Ou&&o!==ge.DEGREES)n=e*r.getMetersPerUnit();else{var h=[t[0]-e/2,t[1],t[0]+e/2,t[1],t[0],t[1]-e/2,t[0],t[1]+e/2];h=l(h,h,2);var u=Fl(h.slice(0,2),h.slice(2,4)),d=Fl(h.slice(4,6),h.slice(6,8));n=(u+d)/2}var s=i?Yt[i]:r.getMetersPerUnit();s!==void 0&&(n/=s)}}return n}function Ja(r){kp(r),r.forEach(function(e){r.forEach(function(t){e!==t&&Ni(e,t,Os)})})}function Dp(r,e,t,i){r.forEach(function(n){e.forEach(function(a){Ni(n,a,t),Ni(a,n,i)})})}function Rs(r,e){return r?typeof r=="string"?vt(r):r:vt(e)}function Dl(r){return function(e,t,i){for(var n=e.length,a=i!==void 0?i:2,s=t!==void 0?t:new Array(n),o=0;o<n;o+=a){var l=r([e[o],e[o+1]]);s[o]=l[0],s[o+1]=l[1];for(var h=a-1;h>=2;--h)s[o+h]=e[o+h]}return s}}function Bp(r,e,t,i){var n=vt(r),a=vt(e);Ni(n,a,Dl(t)),Ni(a,n,Dl(i))}function Fe(r,e){if(r===e)return!0;var t=r.getUnits()===e.getUnits();if(r.getCode()===e.getCode())return t;var i=fa(r,e);return i===Os&&t}function fa(r,e){var t=r.getCode(),i=e.getCode(),n=Au(t,i);return n||(n=Ou),n}function Er(r,e){var t=vt(r),i=vt(e);return fa(t,i)}function Xr(r,e,t){var i=Er(e,t);return i(r,void 0,r.length)}function Ls(r,e,t,i){var n=Er(e,t);return Tp(r,n,void 0,i)}var Xt=null;function Lu(r){Xt=vt(r)}function Pu(){return Xt}function Bl(r,e){return Xt?Xr(r,e,Xt):r}function Ie(r,e){return Xt?Xr(r,Xt,e):(Qa&&!zn(r,[0,0])&&r[0]>=-180&&r[0]<=180&&r[1]>=-90&&r[1]<=90&&(Qa=!1,console.warn("Call useGeographic() ol/proj once to work with [longitude, latitude] coordinates.")),r)}function ts(r,e){return Xt?Ls(r,e,Xt):r}function me(r,e){return Xt?Ls(r,Xt,e):r}function Np(r,e){if(!Xt)return r;var t=vt(e).getUnits(),i=Xt.getUnits();return t&&i?r*Yt[t]/Yt[i]:r}function Nl(r,e,t){return function(i){var n=i[0],a=i[1],s,o;if(r.canWrapX()){var l=r.getExtent(),h=at(l);o=Su(i,r,h),o&&(n=n-o*h),n=pt(n,l[0],l[2]),a=pt(a,l[1],l[3]),s=t([n,a])}else s=t(i);return o&&e.canWrapX()&&(s[0]+=o*at(e.getExtent())),s}}function zp(){Ja(Ol),Ja(Ll),Dp(Ll,Ol,op,lp)}zp();function Gp(r){var e=Object.keys(r.defs),t=e.length,i,n;for(i=0;i<t;++i){var a=e[i];if(!vt(a)){var s=r.defs(a),o=s.units;!o&&s.projName==="longlat"&&(o=ge.DEGREES),Ru(new Es({code:a,axisOrientation:s.axis,metersPerUnit:s.to_meter,units:o}))}}for(i=0;i<t;++i){var l=e[i],h=vt(l);for(n=0;n<t;++n){var u=e[n],d=vt(u);if(!Au(l,u))if(r.defs[l]===r.defs[u])Ja([h,d]);else{var c=r(l,u);Bp(h,d,Nl(h,d,c.forward),Nl(d,h,c.inverse))}}}}function $p(r){r("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),r("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),r("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),r.WGS84=r["EPSG:4326"],r["EPSG:3785"]=r["EPSG:3857"],r.GOOGLE=r["EPSG:3857"],r["EPSG:900913"]=r["EPSG:3857"],r["EPSG:102113"]=r["EPSG:3857"]}var ni=1,ai=2,Fi=3,Vp=4,es=5,zl=6378137,Up=6356752314e-3,Gl=.0066943799901413165,xr=484813681109536e-20,E=Math.PI/2,jp=.16666666666666666,Wp=.04722222222222222,Yp=.022156084656084655,O=1e-10,xt=.017453292519943295,se=57.29577951308232,tt=Math.PI/4,Ir=Math.PI*2,ct=3.14159265359,Bt={};Bt.greenwich=0;Bt.lisbon=-9.131906111111;Bt.paris=2.337229166667;Bt.bogota=-74.080916666667;Bt.madrid=-3.687938888889;Bt.rome=12.452333333333;Bt.bern=7.439583333333;Bt.jakarta=106.807719444444;Bt.ferro=-17.666666666667;Bt.brussels=4.367975;Bt.stockholm=18.058277777778;Bt.athens=23.7163375;Bt.oslo=10.722916666667;const qp={ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937}};var $l=/[\s_\-\/\(\)]/g;function Ue(r,e){if(r[e])return r[e];for(var t=Object.keys(r),i=e.toLowerCase().replace($l,""),n=-1,a,s;++n<t.length;)if(a=t[n],s=a.toLowerCase().replace($l,""),s===i)return r[a]}function is(r){var e={},t=r.split("+").map(function(o){return o.trim()}).filter(function(o){return o}).reduce(function(o,l){var h=l.split("=");return h.push(!0),o[h[0].toLowerCase()]=h[1],o},{}),i,n,a,s={proj:"projName",datum:"datumCode",rf:function(o){e.rf=parseFloat(o)},lat_0:function(o){e.lat0=o*xt},lat_1:function(o){e.lat1=o*xt},lat_2:function(o){e.lat2=o*xt},lat_ts:function(o){e.lat_ts=o*xt},lon_0:function(o){e.long0=o*xt},lon_1:function(o){e.long1=o*xt},lon_2:function(o){e.long2=o*xt},alpha:function(o){e.alpha=parseFloat(o)*xt},gamma:function(o){e.rectified_grid_angle=parseFloat(o)},lonc:function(o){e.longc=o*xt},x_0:function(o){e.x0=parseFloat(o)},y_0:function(o){e.y0=parseFloat(o)},k_0:function(o){e.k0=parseFloat(o)},k:function(o){e.k0=parseFloat(o)},a:function(o){e.a=parseFloat(o)},b:function(o){e.b=parseFloat(o)},r_a:function(){e.R_A=!0},zone:function(o){e.zone=parseInt(o,10)},south:function(){e.utmSouth=!0},towgs84:function(o){e.datum_params=o.split(",").map(function(l){return parseFloat(l)})},to_meter:function(o){e.to_meter=parseFloat(o)},units:function(o){e.units=o;var l=Ue(qp,o);l&&(e.to_meter=l.to_meter)},from_greenwich:function(o){e.from_greenwich=o*xt},pm:function(o){var l=Ue(Bt,o);e.from_greenwich=(l||parseFloat(o))*xt},nadgrids:function(o){o==="@null"?e.datumCode="none":e.nadgrids=o},axis:function(o){var l="ewnsud";o.length===3&&l.indexOf(o.substr(0,1))!==-1&&l.indexOf(o.substr(1,1))!==-1&&l.indexOf(o.substr(2,1))!==-1&&(e.axis=o)},approx:function(){e.approx=!0}};for(i in t)n=t[i],i in s?(a=s[i],typeof a=="function"?a(n):e[a]=n):e[i]=n;return typeof e.datumCode=="string"&&e.datumCode!=="WGS84"&&(e.datumCode=e.datumCode.toLowerCase()),e}var Mr=1,Fu=2,ku=3,Gn=4,Du=5,Ps=-1,Xp=/\s/,Hp=/[A-Za-z]/,Zp=/[A-Za-z84_]/,pa=/[,\]]/,Bu=/[\d\.E\-\+]/;function xe(r){if(typeof r!="string")throw new Error("not a string");this.text=r.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=Mr}xe.prototype.readCharicter=function(){var r=this.text[this.place++];if(this.state!==Gn)for(;Xp.test(r);){if(this.place>=this.text.length)return;r=this.text[this.place++]}switch(this.state){case Mr:return this.neutral(r);case Fu:return this.keyword(r);case Gn:return this.quoted(r);case Du:return this.afterquote(r);case ku:return this.number(r);case Ps:return}};xe.prototype.afterquote=function(r){if(r==='"'){this.word+='"',this.state=Gn;return}if(pa.test(r)){this.word=this.word.trim(),this.afterItem(r);return}throw new Error(`havn't handled "`+r+'" in afterquote yet, index '+this.place)};xe.prototype.afterItem=function(r){if(r===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=Mr;return}if(r==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=Mr,this.currentObject=this.stack.pop(),this.currentObject||(this.state=Ps);return}};xe.prototype.number=function(r){if(Bu.test(r)){this.word+=r;return}if(pa.test(r)){this.word=parseFloat(this.word),this.afterItem(r);return}throw new Error(`havn't handled "`+r+'" in number yet, index '+this.place)};xe.prototype.quoted=function(r){if(r==='"'){this.state=Du;return}this.word+=r};xe.prototype.keyword=function(r){if(Zp.test(r)){this.word+=r;return}if(r==="["){var e=[];e.push(this.word),this.level++,this.root===null?this.root=e:this.currentObject.push(e),this.stack.push(this.currentObject),this.currentObject=e,this.state=Mr;return}if(pa.test(r)){this.afterItem(r);return}throw new Error(`havn't handled "`+r+'" in keyword yet, index '+this.place)};xe.prototype.neutral=function(r){if(Hp.test(r)){this.word=r,this.state=Fu;return}if(r==='"'){this.word="",this.state=Gn;return}if(Bu.test(r)){this.word=r,this.state=ku;return}if(pa.test(r)){this.afterItem(r);return}throw new Error(`havn't handled "`+r+'" in neutral yet, index '+this.place)};xe.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===Ps)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function Kp(r){var e=new xe(r);return e.output()}function Vl(r,e,t){Array.isArray(e)&&(t.unshift(e),e=null);var i=e?{}:r,n=t.reduce(function(a,s){return wi(s,a),a},i);e&&(r[e]=n)}function wi(r,e){if(!Array.isArray(r)){e[r]=!0;return}var t=r.shift();if(t==="PARAMETER"&&(t=r.shift()),r.length===1){if(Array.isArray(r[0])){e[t]={},wi(r[0],e[t]);return}e[t]=r[0];return}if(!r.length){e[t]=!0;return}if(t==="TOWGS84"){e[t]=r;return}if(t==="AXIS"){t in e||(e[t]=[]),e[t].push(r);return}Array.isArray(t)||(e[t]={});var i;switch(t){case"UNIT":case"PRIMEM":case"VERT_DATUM":e[t]={name:r[0].toLowerCase(),convert:r[1]},r.length===3&&wi(r[2],e[t]);return;case"SPHEROID":case"ELLIPSOID":e[t]={name:r[0],a:r[1],rf:r[2]},r.length===4&&wi(r[3],e[t]);return;case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":r[0]=["name",r[0]],Vl(e,t,r);return;default:for(i=-1;++i<r.length;)if(!Array.isArray(r[i]))return wi(r,e[t]);return Vl(e,t,r)}}var Qp=.017453292519943295;function Jp(r,e){var t=e[0],i=e[1];!(t in r)&&i in r&&(r[t]=r[i],e.length===3&&(r[t]=e[2](r[t])))}function ne(r){return r*Qp}function tv(r){if(r.type==="GEOGCS"?r.projName="longlat":r.type==="LOCAL_CS"?(r.projName="identity",r.local=!0):typeof r.PROJECTION=="object"?r.projName=Object.keys(r.PROJECTION)[0]:r.projName=r.PROJECTION,r.AXIS){for(var e="",t=0,i=r.AXIS.length;t<i;++t){var n=[r.AXIS[t][0].toLowerCase(),r.AXIS[t][1].toLowerCase()];n[0].indexOf("north")!==-1||(n[0]==="y"||n[0]==="lat")&&n[1]==="north"?e+="n":n[0].indexOf("south")!==-1||(n[0]==="y"||n[0]==="lat")&&n[1]==="south"?e+="s":n[0].indexOf("east")!==-1||(n[0]==="x"||n[0]==="lon")&&n[1]==="east"?e+="e":(n[0].indexOf("west")!==-1||(n[0]==="x"||n[0]==="lon")&&n[1]==="west")&&(e+="w")}e.length===2&&(e+="u"),e.length===3&&(r.axis=e)}r.UNIT&&(r.units=r.UNIT.name.toLowerCase(),r.units==="metre"&&(r.units="meter"),r.UNIT.convert&&(r.type==="GEOGCS"?r.DATUM&&r.DATUM.SPHEROID&&(r.to_meter=r.UNIT.convert*r.DATUM.SPHEROID.a):r.to_meter=r.UNIT.convert));var a=r.GEOGCS;r.type==="GEOGCS"&&(a=r),a&&(a.DATUM?r.datumCode=a.DATUM.name.toLowerCase():r.datumCode=a.name.toLowerCase(),r.datumCode.slice(0,2)==="d_"&&(r.datumCode=r.datumCode.slice(2)),(r.datumCode==="new_zealand_geodetic_datum_1949"||r.datumCode==="new_zealand_1949")&&(r.datumCode="nzgd49"),(r.datumCode==="wgs_1984"||r.datumCode==="world_geodetic_system_1984")&&(r.PROJECTION==="Mercator_Auxiliary_Sphere"&&(r.sphere=!0),r.datumCode="wgs84"),r.datumCode.slice(-6)==="_ferro"&&(r.datumCode=r.datumCode.slice(0,-6)),r.datumCode.slice(-8)==="_jakarta"&&(r.datumCode=r.datumCode.slice(0,-8)),~r.datumCode.indexOf("belge")&&(r.datumCode="rnb72"),a.DATUM&&a.DATUM.SPHEROID&&(r.ellps=a.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),r.ellps.toLowerCase().slice(0,13)==="international"&&(r.ellps="intl"),r.a=a.DATUM.SPHEROID.a,r.rf=parseFloat(a.DATUM.SPHEROID.rf,10)),a.DATUM&&a.DATUM.TOWGS84&&(r.datum_params=a.DATUM.TOWGS84),~r.datumCode.indexOf("osgb_1936")&&(r.datumCode="osgb36"),~r.datumCode.indexOf("osni_1952")&&(r.datumCode="osni52"),(~r.datumCode.indexOf("tm65")||~r.datumCode.indexOf("geodetic_datum_of_1965"))&&(r.datumCode="ire65"),r.datumCode==="ch1903+"&&(r.datumCode="ch1903"),~r.datumCode.indexOf("israel")&&(r.datumCode="isr93")),r.b&&!isFinite(r.b)&&(r.b=r.a);function s(h){var u=r.to_meter||1;return h*u}var o=function(h){return Jp(r,h)},l=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",ne],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",ne],["x0","false_easting",s],["y0","false_northing",s],["long0","central_meridian",ne],["lat0","latitude_of_origin",ne],["lat0","standard_parallel_1",ne],["lat1","standard_parallel_1",ne],["lat2","standard_parallel_2",ne],["azimuth","Azimuth"],["alpha","azimuth",ne],["srsCode","name"]];l.forEach(o),!r.long0&&r.longc&&(r.projName==="Albers_Conic_Equal_Area"||r.projName==="Lambert_Azimuthal_Equal_Area")&&(r.long0=r.longc),!r.lat_ts&&r.lat1&&(r.projName==="Stereographic_South_Pole"||r.projName==="Polar Stereographic (variant B)")?(r.lat0=ne(r.lat1>0?90:-90),r.lat_ts=r.lat1):!r.lat_ts&&r.lat0&&r.projName==="Polar_Stereographic"&&(r.lat_ts=r.lat0,r.lat0=ne(r.lat0>0?90:-90))}function Nu(r){var e=Kp(r),t=e.shift(),i=e.shift();e.unshift(["name",i]),e.unshift(["type",t]);var n={};return wi(e,n),tv(n),n}function Mt(r){var e=this;if(arguments.length===2){var t=arguments[1];typeof t=="string"?t.charAt(0)==="+"?Mt[r]=is(arguments[1]):Mt[r]=Nu(arguments[1]):Mt[r]=t}else if(arguments.length===1){if(Array.isArray(r))return r.map(function(i){Array.isArray(i)?Mt.apply(e,i):Mt(i)});if(typeof r=="string"){if(r in Mt)return Mt[r]}else"EPSG"in r?Mt["EPSG:"+r.EPSG]=r:"ESRI"in r?Mt["ESRI:"+r.ESRI]=r:"IAU2000"in r?Mt["IAU2000:"+r.IAU2000]=r:console.log(r);return}}$p(Mt);function ev(r){return typeof r=="string"}function iv(r){return r in Mt}var rv=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function nv(r){return rv.some(function(e){return r.indexOf(e)>-1})}var av=["3857","900913","3785","102113"];function sv(r){var e=Ue(r,"authority");if(e){var t=Ue(e,"epsg");return t&&av.indexOf(t)>-1}}function ov(r){var e=Ue(r,"extension");if(e)return Ue(e,"proj4")}function lv(r){return r[0]==="+"}function hv(r){if(ev(r)){if(iv(r))return Mt[r];if(nv(r)){var e=Nu(r);if(sv(e))return Mt["EPSG:3857"];var t=ov(e);return t?is(t):e}if(lv(r))return is(r)}else return r}function Ul(r,e){r=r||{};var t,i;if(!e)return r;for(i in e)t=e[i],t!==void 0&&(r[i]=t);return r}function ue(r,e,t){var i=r*e;return t/Math.sqrt(1-i*i)}function Hr(r){return r<0?-1:1}function R(r){return Math.abs(r)<=ct?r:r-Hr(r)*Ir}function te(r,e,t){var i=r*t,n=.5*r;return i=Math.pow((1-i)/(1+i),n),Math.tan(.5*(E-e))/i}function Tr(r,e){for(var t=.5*r,i,n,a=E-2*Math.atan(e),s=0;s<=15;s++)if(i=r*Math.sin(a),n=E-2*Math.atan(e*Math.pow((1-i)/(1+i),t))-a,a+=n,Math.abs(n)<=1e-10)return a;return-9999}function uv(){var r=this.b/this.a;this.es=1-r*r,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=ue(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function dv(r){var e=r.x,t=r.y;if(t*se>90&&t*se<-90&&e*se>180&&e*se<-180)return null;var i,n;if(Math.abs(Math.abs(t)-E)<=O)return null;if(this.sphere)i=this.x0+this.a*this.k0*R(e-this.long0),n=this.y0+this.a*this.k0*Math.log(Math.tan(tt+.5*t));else{var a=Math.sin(t),s=te(this.e,t,a);i=this.x0+this.a*this.k0*R(e-this.long0),n=this.y0-this.a*this.k0*Math.log(s)}return r.x=i,r.y=n,r}function cv(r){var e=r.x-this.x0,t=r.y-this.y0,i,n;if(this.sphere)n=E-2*Math.atan(Math.exp(-t/(this.a*this.k0)));else{var a=Math.exp(-t/(this.a*this.k0));if(n=Tr(this.e,a),n===-9999)return null}return i=R(this.long0+e/(this.a*this.k0)),r.x=i,r.y=n,r}var fv=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const pv={init:uv,forward:dv,inverse:cv,names:fv};function vv(){}function jl(r){return r}var mv=["longlat","identity"];const gv={init:vv,forward:jl,inverse:jl,names:mv};var _v=[pv,gv],Pn={},$n=[];function zu(r,e){var t=$n.length;return r.names?($n[t]=r,r.names.forEach(function(i){Pn[i.toLowerCase()]=t}),this):(console.log(e),!0)}function yv(r){if(!r)return!1;var e=r.toLowerCase();if(typeof Pn[e]<"u"&&$n[Pn[e]])return $n[Pn[e]]}function bv(){_v.forEach(zu)}const xv={start:bv,add:zu,get:yv};var W={};W.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};W.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};W.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};W.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};W.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};W.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};W.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};W.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};W.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};W.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};W.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};W.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};W.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};W.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};W.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};W.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};W.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};W.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};W.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};W.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};W.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};W.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};W.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};W.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};W.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};W.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};W.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};W.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};W.hough={a:6378270,rf:297,ellipseName:"Hough"};W.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};W.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};W.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};W.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};W.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};W.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};W.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};W.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};W.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};W.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};W.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};W.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var Av=W.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};W.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function Cv(r,e,t,i){var n=r*r,a=e*e,s=(n-a)/n,o=0;i?(r*=1-s*(jp+s*(Wp+s*Yp)),n=r*r,s=0):o=Math.sqrt(s);var l=(n-a)/a;return{es:s,e:o,ep2:l}}function wv(r,e,t,i,n){if(!r){var a=Ue(W,i);a||(a=Av),r=a.a,e=a.b,t=a.rf}return t&&!e&&(e=(1-1/t)*r),(t===0||Math.abs(r-e)<O)&&(n=!0,e=r),{a:r,b:e,rf:t,sphere:n}}var yt={};yt.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"};yt.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"};yt.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"};yt.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"};yt.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"};yt.potsdam={towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"};yt.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"};yt.hermannskogel={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"};yt.osni52={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"};yt.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"};yt.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"};yt.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"};yt.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"};yt.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"};yt.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"};yt.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"};yt.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"};function Ev(r,e,t,i,n,a,s){var o={};return r===void 0||r==="none"?o.datum_type=es:o.datum_type=Vp,e&&(o.datum_params=e.map(parseFloat),(o.datum_params[0]!==0||o.datum_params[1]!==0||o.datum_params[2]!==0)&&(o.datum_type=ni),o.datum_params.length>3&&(o.datum_params[3]!==0||o.datum_params[4]!==0||o.datum_params[5]!==0||o.datum_params[6]!==0)&&(o.datum_type=ai,o.datum_params[3]*=xr,o.datum_params[4]*=xr,o.datum_params[5]*=xr,o.datum_params[6]=o.datum_params[6]/1e6+1)),s&&(o.datum_type=Fi,o.grids=s),o.a=t,o.b=i,o.es=n,o.ep2=a,o}var Gu={};function Iv(r,e){var t=new DataView(e),i=Sv(t),n=Ov(t,i);n.nSubgrids>1&&console.log("Only single NTv2 subgrids are currently supported, subsequent sub grids are ignored");var a=Rv(t,n,i),s={header:n,subgrids:a};return Gu[r]=s,s}function Mv(r){if(r===void 0)return null;var e=r.split(",");return e.map(Tv)}function Tv(r){if(r.length===0)return null;var e=r[0]==="@";return e&&(r=r.slice(1)),r==="null"?{name:"null",mandatory:!e,grid:null,isNull:!0}:{name:r,mandatory:!e,grid:Gu[r]||null,isNull:!1}}function Ei(r){return r/3600*Math.PI/180}function Sv(r){var e=r.getInt32(8,!1);return e===11?!1:(e=r.getInt32(8,!0),e!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function Ov(r,e){return{nFields:r.getInt32(8,e),nSubgridFields:r.getInt32(24,e),nSubgrids:r.getInt32(40,e),shiftType:rs(r,56,56+8).trim(),fromSemiMajorAxis:r.getFloat64(120,e),fromSemiMinorAxis:r.getFloat64(136,e),toSemiMajorAxis:r.getFloat64(152,e),toSemiMinorAxis:r.getFloat64(168,e)}}function rs(r,e,t){return String.fromCharCode.apply(null,new Uint8Array(r.buffer.slice(e,t)))}function Rv(r,e,t){for(var i=176,n=[],a=0;a<e.nSubgrids;a++){var s=Pv(r,i,t),o=Fv(r,i,s,t),l=Math.round(1+(s.upperLongitude-s.lowerLongitude)/s.longitudeInterval),h=Math.round(1+(s.upperLatitude-s.lowerLatitude)/s.latitudeInterval);n.push({ll:[Ei(s.lowerLongitude),Ei(s.lowerLatitude)],del:[Ei(s.longitudeInterval),Ei(s.latitudeInterval)],lim:[l,h],count:s.gridNodeCount,cvs:Lv(o)})}return n}function Lv(r){return r.map(function(e){return[Ei(e.longitudeShift),Ei(e.latitudeShift)]})}function Pv(r,e,t){return{name:rs(r,e+8,e+16).trim(),parent:rs(r,e+24,e+24+8).trim(),lowerLatitude:r.getFloat64(e+72,t),upperLatitude:r.getFloat64(e+88,t),lowerLongitude:r.getFloat64(e+104,t),upperLongitude:r.getFloat64(e+120,t),latitudeInterval:r.getFloat64(e+136,t),longitudeInterval:r.getFloat64(e+152,t),gridNodeCount:r.getInt32(e+168,t)}}function Fv(r,e,t,i){for(var n=e+176,a=16,s=[],o=0;o<t.gridNodeCount;o++){var l={latitudeShift:r.getFloat32(n+o*a,i),longitudeShift:r.getFloat32(n+o*a+4,i),latitudeAccuracy:r.getFloat32(n+o*a+8,i),longitudeAccuracy:r.getFloat32(n+o*a+12,i)};s.push(l)}return s}function le(r,e){if(!(this instanceof le))return new le(r);e=e||function(h){if(h)throw h};var t=hv(r);if(typeof t!="object"){e(r);return}var i=le.projections.get(t.projName);if(!i){e(r);return}if(t.datumCode&&t.datumCode!=="none"){var n=Ue(yt,t.datumCode);n&&(t.datum_params=t.datum_params||(n.towgs84?n.towgs84.split(","):null),t.ellps=n.ellipse,t.datumName=n.datumName?n.datumName:t.datumCode)}t.k0=t.k0||1,t.axis=t.axis||"enu",t.ellps=t.ellps||"wgs84",t.lat1=t.lat1||t.lat0;var a=wv(t.a,t.b,t.rf,t.ellps,t.sphere),s=Cv(a.a,a.b,a.rf,t.R_A),o=Mv(t.nadgrids),l=t.datum||Ev(t.datumCode,t.datum_params,a.a,a.b,s.es,s.ep2,o);Ul(this,t),Ul(this,i),this.a=a.a,this.b=a.b,this.rf=a.rf,this.sphere=a.sphere,this.es=s.es,this.e=s.e,this.ep2=s.ep2,this.datum=l,this.init(),e(null,this)}le.projections=xv;le.projections.start();function kv(r,e){return r.datum_type!==e.datum_type||r.a!==e.a||Math.abs(r.es-e.es)>5e-11?!1:r.datum_type===ni?r.datum_params[0]===e.datum_params[0]&&r.datum_params[1]===e.datum_params[1]&&r.datum_params[2]===e.datum_params[2]:r.datum_type===ai?r.datum_params[0]===e.datum_params[0]&&r.datum_params[1]===e.datum_params[1]&&r.datum_params[2]===e.datum_params[2]&&r.datum_params[3]===e.datum_params[3]&&r.datum_params[4]===e.datum_params[4]&&r.datum_params[5]===e.datum_params[5]&&r.datum_params[6]===e.datum_params[6]:!0}function $u(r,e,t){var i=r.x,n=r.y,a=r.z?r.z:0,s,o,l,h;if(n<-E&&n>-1.001*E)n=-E;else if(n>E&&n<1.001*E)n=E;else{if(n<-E)return{x:-1/0,y:-1/0,z:r.z};if(n>E)return{x:1/0,y:1/0,z:r.z}}return i>Math.PI&&(i-=2*Math.PI),o=Math.sin(n),h=Math.cos(n),l=o*o,s=t/Math.sqrt(1-e*l),{x:(s+a)*h*Math.cos(i),y:(s+a)*h*Math.sin(i),z:(s*(1-e)+a)*o}}function Vu(r,e,t,i){var n=1e-12,a=n*n,s=30,o,l,h,u,d,c,f,p,v,m,_,g,y,b=r.x,x=r.y,A=r.z?r.z:0,w,C,T;if(o=Math.sqrt(b*b+x*x),l=Math.sqrt(b*b+x*x+A*A),o/t<n){if(w=0,l/t<n)return C=E,T=-i,{x:r.x,y:r.y,z:r.z}}else w=Math.atan2(x,b);h=A/l,u=o/l,d=1/Math.sqrt(1-e*(2-e)*u*u),p=u*(1-e)*d,v=h*d,y=0;do y++,f=t/Math.sqrt(1-e*v*v),T=o*p+A*v-f*(1-e*v*v),c=e*f/(f+T),d=1/Math.sqrt(1-c*(2-c)*u*u),m=u*(1-c)*d,_=h*d,g=_*p-m*v,p=m,v=_;while(g*g>a&&y<s);return C=Math.atan(_/Math.abs(m)),{x:w,y:C,z:T}}function Dv(r,e,t){if(e===ni)return{x:r.x+t[0],y:r.y+t[1],z:r.z+t[2]};if(e===ai){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],h=t[6];return{x:h*(r.x-l*r.y+o*r.z)+i,y:h*(l*r.x+r.y-s*r.z)+n,z:h*(-o*r.x+s*r.y+r.z)+a}}}function Bv(r,e,t){if(e===ni)return{x:r.x-t[0],y:r.y-t[1],z:r.z-t[2]};if(e===ai){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],h=t[6],u=(r.x-i)/h,d=(r.y-n)/h,c=(r.z-a)/h;return{x:u+l*d-o*c,y:-l*u+d+s*c,z:o*u-s*d+c}}}function An(r){return r===ni||r===ai}function Nv(r,e,t){if(kv(r,e)||r.datum_type===es||e.datum_type===es)return t;var i=r.a,n=r.es;if(r.datum_type===Fi){var a=Wl(r,!1,t);if(a!==0)return;i=zl,n=Gl}var s=e.a,o=e.b,l=e.es;if(e.datum_type===Fi&&(s=zl,o=Up,l=Gl),n===l&&i===s&&!An(r.datum_type)&&!An(e.datum_type))return t;if(t=$u(t,n,i),An(r.datum_type)&&(t=Dv(t,r.datum_type,r.datum_params)),An(e.datum_type)&&(t=Bv(t,e.datum_type,e.datum_params)),t=Vu(t,l,s,o),e.datum_type===Fi){var h=Wl(e,!0,t);if(h!==0)return}return t}function Wl(r,e,t){if(r.grids===null||r.grids.length===0)return console.log("Grid shift grids not found"),-1;for(var i={x:-t.x,y:t.y},n={x:Number.NaN,y:Number.NaN},a=[],s=0;s<r.grids.length;s++){var o=r.grids[s];if(a.push(o.name),o.isNull){n=i;break}if(o.mandatory,o.grid===null){if(o.mandatory)return console.log("Unable to find mandatory grid '"+o.name+"'"),-1;continue}var l=o.grid.subgrids[0],h=(Math.abs(l.del[1])+Math.abs(l.del[0]))/1e4,u=l.ll[0]-h,d=l.ll[1]-h,c=l.ll[0]+(l.lim[0]-1)*l.del[0]+h,f=l.ll[1]+(l.lim[1]-1)*l.del[1]+h;if(!(d>i.y||u>i.x||f<i.y||c<i.x)&&(n=zv(i,e,l),!isNaN(n.x)))break}return isNaN(n.x)?(console.log("Failed to find a grid shift table for location '"+-i.x*se+" "+i.y*se+" tried: '"+a+"'"),-1):(t.x=-n.x,t.y=n.y,0)}function zv(r,e,t){var i={x:Number.NaN,y:Number.NaN};if(isNaN(r.x))return i;var n={x:r.x,y:r.y};n.x-=t.ll[0],n.y-=t.ll[1],n.x=R(n.x-Math.PI)+Math.PI;var a=Yl(n,t);if(e){if(isNaN(a.x))return i;a.x=n.x-a.x,a.y=n.y-a.y;var s=9,o=1e-12,l,h;do{if(h=Yl(a,t),isNaN(h.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}l={x:n.x-(h.x+a.x),y:n.y-(h.y+a.y)},a.x+=l.x,a.y+=l.y}while(s--&&Math.abs(l.x)>o&&Math.abs(l.y)>o);if(s<0)return console.log("Inverse grid shift iterator failed to converge."),i;i.x=R(a.x+t.ll[0]),i.y=a.y+t.ll[1]}else isNaN(a.x)||(i.x=r.x+a.x,i.y=r.y+a.y);return i}function Yl(r,e){var t={x:r.x/e.del[0],y:r.y/e.del[1]},i={x:Math.floor(t.x),y:Math.floor(t.y)},n={x:t.x-1*i.x,y:t.y-1*i.y},a={x:Number.NaN,y:Number.NaN},s;if(i.x<0||i.x>=e.lim[0]||i.y<0||i.y>=e.lim[1])return a;s=i.y*e.lim[0]+i.x;var o={x:e.cvs[s][0],y:e.cvs[s][1]};s++;var l={x:e.cvs[s][0],y:e.cvs[s][1]};s+=e.lim[0];var h={x:e.cvs[s][0],y:e.cvs[s][1]};s--;var u={x:e.cvs[s][0],y:e.cvs[s][1]},d=n.x*n.y,c=n.x*(1-n.y),f=(1-n.x)*(1-n.y),p=(1-n.x)*n.y;return a.x=f*o.x+c*l.x+p*u.x+d*h.x,a.y=f*o.y+c*l.y+p*u.y+d*h.y,a}function ql(r,e,t){var i=t.x,n=t.y,a=t.z||0,s,o,l,h={};for(l=0;l<3;l++)if(!(e&&l===2&&t.z===void 0))switch(l===0?(s=i,"ew".indexOf(r.axis[l])!==-1?o="x":o="y"):l===1?(s=n,"ns".indexOf(r.axis[l])!==-1?o="y":o="x"):(s=a,o="z"),r.axis[l]){case"e":h[o]=s;break;case"w":h[o]=-s;break;case"n":h[o]=s;break;case"s":h[o]=-s;break;case"u":t[o]!==void 0&&(h.z=s);break;case"d":t[o]!==void 0&&(h.z=-s);break;default:return null}return h}function Uu(r){var e={x:r[0],y:r[1]};return r.length>2&&(e.z=r[2]),r.length>3&&(e.m=r[3]),e}function Gv(r){Xl(r.x),Xl(r.y)}function Xl(r){if(typeof Number.isFinite=="function"){if(Number.isFinite(r))return;throw new TypeError("coordinates must be finite numbers")}if(typeof r!="number"||r!==r||!isFinite(r))throw new TypeError("coordinates must be finite numbers")}function $v(r,e){return(r.datum.datum_type===ni||r.datum.datum_type===ai||r.datum.datum_type===Fi)&&e.datumCode!=="WGS84"||(e.datum.datum_type===ni||e.datum.datum_type===ai||e.datum.datum_type===Fi)&&r.datumCode!=="WGS84"}function Vn(r,e,t,i){var n;Array.isArray(t)?t=Uu(t):t={x:t.x,y:t.y,z:t.z,m:t.m};var a=t.z!==void 0;if(Gv(t),r.datum&&e.datum&&$v(r,e)&&(n=new le("WGS84"),t=Vn(r,n,t,i),r=n),i&&r.axis!=="enu"&&(t=ql(r,!1,t)),r.projName==="longlat")t={x:t.x*xt,y:t.y*xt,z:t.z||0};else if(r.to_meter&&(t={x:t.x*r.to_meter,y:t.y*r.to_meter,z:t.z||0}),t=r.inverse(t),!t)return;if(r.from_greenwich&&(t.x+=r.from_greenwich),t=Nv(r.datum,e.datum,t),!!t)return e.from_greenwich&&(t={x:t.x-e.from_greenwich,y:t.y,z:t.z||0}),e.projName==="longlat"?t={x:t.x*se,y:t.y*se,z:t.z||0}:(t=e.forward(t),e.to_meter&&(t={x:t.x/e.to_meter,y:t.y/e.to_meter,z:t.z||0})),i&&e.axis!=="enu"?ql(e,!0,t):(a||delete t.z,t)}var Hl=le("WGS84");function Sa(r,e,t,i){var n,a,s;return Array.isArray(t)?(n=Vn(r,e,t,i)||{x:NaN,y:NaN},t.length>2?typeof r.name<"u"&&r.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"?typeof n.z=="number"?[n.x,n.y,n.z].concat(t.splice(3)):[n.x,n.y,t[2]].concat(t.splice(3)):[n.x,n.y].concat(t.splice(2)):[n.x,n.y]):(a=Vn(r,e,t,i),s=Object.keys(t),s.length===2||s.forEach(function(o){if(typeof r.name<"u"&&r.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"){if(o==="x"||o==="y"||o==="z")return}else if(o==="x"||o==="y")return;a[o]=t[o]}),a)}function Zl(r){return r instanceof le?r:r.oProj?r.oProj:le(r)}function Dt(r,e,t){r=Zl(r);var i=!1,n;return typeof e>"u"?(e=r,r=Hl,i=!0):(typeof e.x<"u"||Array.isArray(e))&&(t=e,e=r,r=Hl,i=!0),e=Zl(e),t?Sa(r,e,t):(n={forward:function(a,s){return Sa(r,e,a,s)},inverse:function(a,s){return Sa(e,r,a,s)}},i&&(n.oProj=e),n)}var Kl=6,ju="AJSAJS",Wu="AFAFAF",Ii=65,Ft=73,jt=79,fr=86,pr=90;const Vv={forward:Yu,inverse:Uv,toPoint:qu};function Yu(r,e){return e=e||5,Yv(jv({lat:r[1],lon:r[0]}),e)}function Uv(r){var e=Fs(Hu(r.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat,e.lon,e.lat]:[e.left,e.bottom,e.right,e.top]}function qu(r){var e=Fs(Hu(r.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat]:[(e.left+e.right)/2,(e.top+e.bottom)/2]}function Oa(r){return r*(Math.PI/180)}function Ql(r){return 180*(r/Math.PI)}function jv(r){var e=r.lat,t=r.lon,i=6378137,n=.00669438,a=.9996,s,o,l,h,u,d,c,f=Oa(e),p=Oa(t),v,m;m=Math.floor((t+180)/6)+1,t===180&&(m=60),e>=56&&e<64&&t>=3&&t<12&&(m=32),e>=72&&e<84&&(t>=0&&t<9?m=31:t>=9&&t<21?m=33:t>=21&&t<33?m=35:t>=33&&t<42&&(m=37)),s=(m-1)*6-180+3,v=Oa(s),o=n/(1-n),l=i/Math.sqrt(1-n*Math.sin(f)*Math.sin(f)),h=Math.tan(f)*Math.tan(f),u=o*Math.cos(f)*Math.cos(f),d=Math.cos(f)*(p-v),c=i*((1-n/4-3*n*n/64-5*n*n*n/256)*f-(3*n/8+3*n*n/32+45*n*n*n/1024)*Math.sin(2*f)+(15*n*n/256+45*n*n*n/1024)*Math.sin(4*f)-35*n*n*n/3072*Math.sin(6*f));var _=a*l*(d+(1-h+u)*d*d*d/6+(5-18*h+h*h+72*u-58*o)*d*d*d*d*d/120)+5e5,g=a*(c+l*Math.tan(f)*(d*d/2+(5-h+9*u+4*u*u)*d*d*d*d/24+(61-58*h+h*h+600*u-330*o)*d*d*d*d*d*d/720));return e<0&&(g+=1e7),{northing:Math.round(g),easting:Math.round(_),zoneNumber:m,zoneLetter:Wv(e)}}function Fs(r){var e=r.northing,t=r.easting,i=r.zoneLetter,n=r.zoneNumber;if(n<0||n>60)return null;var a=.9996,s=6378137,o=.00669438,l,h=(1-Math.sqrt(1-o))/(1+Math.sqrt(1-o)),u,d,c,f,p,v,m,_,g,y=t-5e5,b=e;i<"N"&&(b-=1e7),m=(n-1)*6-180+3,l=o/(1-o),v=b/a,_=v/(s*(1-o/4-3*o*o/64-5*o*o*o/256)),g=_+(3*h/2-27*h*h*h/32)*Math.sin(2*_)+(21*h*h/16-55*h*h*h*h/32)*Math.sin(4*_)+151*h*h*h/96*Math.sin(6*_),u=s/Math.sqrt(1-o*Math.sin(g)*Math.sin(g)),d=Math.tan(g)*Math.tan(g),c=l*Math.cos(g)*Math.cos(g),f=s*(1-o)/Math.pow(1-o*Math.sin(g)*Math.sin(g),1.5),p=y/(u*a);var x=g-u*Math.tan(g)/f*(p*p/2-(5+3*d+10*c-4*c*c-9*l)*p*p*p*p/24+(61+90*d+298*c+45*d*d-252*l-3*c*c)*p*p*p*p*p*p/720);x=Ql(x);var A=(p-(1+2*d+c)*p*p*p/6+(5-2*c+28*d-3*c*c+8*l+24*d*d)*p*p*p*p*p/120)/Math.cos(g);A=m+Ql(A);var w;if(r.accuracy){var C=Fs({northing:r.northing+r.accuracy,easting:r.easting+r.accuracy,zoneLetter:r.zoneLetter,zoneNumber:r.zoneNumber});w={top:C.lat,right:C.lon,bottom:x,left:A}}else w={lat:x,lon:A};return w}function Wv(r){var e="Z";return 84>=r&&r>=72?e="X":72>r&&r>=64?e="W":64>r&&r>=56?e="V":56>r&&r>=48?e="U":48>r&&r>=40?e="T":40>r&&r>=32?e="S":32>r&&r>=24?e="R":24>r&&r>=16?e="Q":16>r&&r>=8?e="P":8>r&&r>=0?e="N":0>r&&r>=-8?e="M":-8>r&&r>=-16?e="L":-16>r&&r>=-24?e="K":-24>r&&r>=-32?e="J":-32>r&&r>=-40?e="H":-40>r&&r>=-48?e="G":-48>r&&r>=-56?e="F":-56>r&&r>=-64?e="E":-64>r&&r>=-72?e="D":-72>r&&r>=-80&&(e="C"),e}function Yv(r,e){var t="00000"+r.easting,i="00000"+r.northing;return r.zoneNumber+r.zoneLetter+qv(r.easting,r.northing,r.zoneNumber)+t.substr(t.length-5,e)+i.substr(i.length-5,e)}function qv(r,e,t){var i=Xu(t),n=Math.floor(r/1e5),a=Math.floor(e/1e5)%20;return Xv(n,a,i)}function Xu(r){var e=r%Kl;return e===0&&(e=Kl),e}function Xv(r,e,t){var i=t-1,n=ju.charCodeAt(i),a=Wu.charCodeAt(i),s=n+r-1,o=a+e,l=!1;s>pr&&(s=s-pr+Ii-1,l=!0),(s===Ft||n<Ft&&s>Ft||(s>Ft||n<Ft)&&l)&&s++,(s===jt||n<jt&&s>jt||(s>jt||n<jt)&&l)&&(s++,s===Ft&&s++),s>pr&&(s=s-pr+Ii-1),o>fr?(o=o-fr+Ii-1,l=!0):l=!1,(o===Ft||a<Ft&&o>Ft||(o>Ft||a<Ft)&&l)&&o++,(o===jt||a<jt&&o>jt||(o>jt||a<jt)&&l)&&(o++,o===Ft&&o++),o>fr&&(o=o-fr+Ii-1);var h=String.fromCharCode(s)+String.fromCharCode(o);return h}function Hu(r){if(r&&r.length===0)throw"MGRSPoint coverting from nothing";for(var e=r.length,t=null,i="",n,a=0;!/[A-Z]/.test(n=r.charAt(a));){if(a>=2)throw"MGRSPoint bad conversion from: "+r;i+=n,a++}var s=parseInt(i,10);if(a===0||a+3>e)throw"MGRSPoint bad conversion from: "+r;var o=r.charAt(a++);if(o<="A"||o==="B"||o==="Y"||o>="Z"||o==="I"||o==="O")throw"MGRSPoint zone letter "+o+" not handled: "+r;t=r.substring(a,a+=2);for(var l=Xu(s),h=Hv(t.charAt(0),l),u=Zv(t.charAt(1),l);u<Kv(o);)u+=2e6;var d=e-a;if(d%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+r;var c=d/2,f=0,p=0,v,m,_,g,y;return c>0&&(v=1e5/Math.pow(10,c),m=r.substring(a,a+c),f=parseFloat(m)*v,_=r.substring(a+c),p=parseFloat(_)*v),g=f+h,y=p+u,{easting:g,northing:y,zoneLetter:o,zoneNumber:s,accuracy:v}}function Hv(r,e){for(var t=ju.charCodeAt(e-1),i=1e5,n=!1;t!==r.charCodeAt(0);){if(t++,t===Ft&&t++,t===jt&&t++,t>pr){if(n)throw"Bad character: "+r;t=Ii,n=!0}i+=1e5}return i}function Zv(r,e){if(r>"V")throw"MGRSPoint given invalid Northing "+r;for(var t=Wu.charCodeAt(e-1),i=0,n=!1;t!==r.charCodeAt(0);){if(t++,t===Ft&&t++,t===jt&&t++,t>fr){if(n)throw"Bad character: "+r;t=Ii,n=!0}i+=1e5}return i}function Kv(r){var e;switch(r){case"C":e=11e5;break;case"D":e=2e6;break;case"E":e=28e5;break;case"F":e=37e5;break;case"G":e=46e5;break;case"H":e=55e5;break;case"J":e=64e5;break;case"K":e=73e5;break;case"L":e=82e5;break;case"M":e=91e5;break;case"N":e=0;break;case"P":e=8e5;break;case"Q":e=17e5;break;case"R":e=26e5;break;case"S":e=35e5;break;case"T":e=44e5;break;case"U":e=53e5;break;case"V":e=62e5;break;case"W":e=7e6;break;case"X":e=79e5;break;default:e=-1}if(e>=0)return e;throw"Invalid zone letter: "+r}function zi(r,e,t){if(!(this instanceof zi))return new zi(r,e,t);if(Array.isArray(r))this.x=r[0],this.y=r[1],this.z=r[2]||0;else if(typeof r=="object")this.x=r.x,this.y=r.y,this.z=r.z||0;else if(typeof r=="string"&&typeof e>"u"){var i=r.split(",");this.x=parseFloat(i[0],10),this.y=parseFloat(i[1],10),this.z=parseFloat(i[2],10)||0}else this.x=r,this.y=e,this.z=t||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}zi.fromMGRS=function(r){return new zi(qu(r))};zi.prototype.toMGRS=function(r){return Yu([this.x,this.y],r)};var Qv=1,Jv=.25,Jl=.046875,th=.01953125,eh=.01068115234375,tm=.75,em=.46875,im=.013020833333333334,rm=.007120768229166667,nm=.3645833333333333,am=.005696614583333333,sm=.3076171875;function Zu(r){var e=[];e[0]=Qv-r*(Jv+r*(Jl+r*(th+r*eh))),e[1]=r*(tm-r*(Jl+r*(th+r*eh)));var t=r*r;return e[2]=t*(em-r*(im+r*rm)),t*=r,e[3]=t*(nm-r*am),e[4]=t*r*sm,e}function va(r,e,t,i){return t*=e,e*=e,i[0]*r-t*(i[1]+e*(i[2]+e*(i[3]+e*i[4])))}var om=20;function Ku(r,e,t){for(var i=1/(1-e),n=r,a=om;a;--a){var s=Math.sin(n),o=1-e*s*s;if(o=(va(n,s,Math.cos(n),t)-r)*(o*Math.sqrt(o))*i,n-=o,Math.abs(o)<O)return n}return n}function lm(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=Zu(this.es),this.ml0=va(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function hm(r){var e=r.x,t=r.y,i=R(e-this.long0),n,a,s,o=Math.sin(t),l=Math.cos(t);if(this.es){var u=l*i,d=Math.pow(u,2),c=this.ep2*Math.pow(l,2),f=Math.pow(c,2),p=Math.abs(l)>O?Math.tan(t):0,v=Math.pow(p,2),m=Math.pow(v,2);n=1-this.es*Math.pow(o,2),u=u/Math.sqrt(n);var _=va(t,o,l,this.en);a=this.a*(this.k0*u*(1+d/6*(1-v+c+d/20*(5-18*v+m+14*c-58*v*c+d/42*(61+179*m-m*v-479*v)))))+this.x0,s=this.a*(this.k0*(_-this.ml0+o*i*u/2*(1+d/12*(5-v+9*c+4*f+d/30*(61+m-58*v+270*c-330*v*c+d/56*(1385+543*m-m*v-3111*v))))))+this.y0}else{var h=l*Math.sin(i);if(Math.abs(Math.abs(h)-1)<O)return 93;if(a=.5*this.a*this.k0*Math.log((1+h)/(1-h))+this.x0,s=l*Math.cos(i)/Math.sqrt(1-Math.pow(h,2)),h=Math.abs(s),h>=1){if(h-1>O)return 93;s=0}else s=Math.acos(s);t<0&&(s=-s),s=this.a*this.k0*(s-this.lat0)+this.y0}return r.x=a,r.y=s,r}function um(r){var e,t,i,n,a=(r.x-this.x0)*(1/this.a),s=(r.y-this.y0)*(1/this.a);if(this.es)if(e=this.ml0+s/this.k0,t=Ku(e,this.es,this.en),Math.abs(t)<E){var d=Math.sin(t),c=Math.cos(t),f=Math.abs(c)>O?Math.tan(t):0,p=this.ep2*Math.pow(c,2),v=Math.pow(p,2),m=Math.pow(f,2),_=Math.pow(m,2);e=1-this.es*Math.pow(d,2);var g=a*Math.sqrt(e)/this.k0,y=Math.pow(g,2);e=e*f,i=t-e*y/(1-this.es)*.5*(1-y/12*(5+3*m-9*p*m+p-4*v-y/30*(61+90*m-252*p*m+45*_+46*p-y/56*(1385+3633*m+4095*_+1574*_*m)))),n=R(this.long0+g*(1-y/6*(1+2*m+p-y/20*(5+28*m+24*_+8*p*m+6*p-y/42*(61+662*m+1320*_+720*_*m))))/c)}else i=E*Hr(s),n=0;else{var o=Math.exp(a/this.k0),l=.5*(o-1/o),h=this.lat0+s/this.k0,u=Math.cos(h);e=Math.sqrt((1-Math.pow(u,2))/(1+Math.pow(l,2))),i=Math.asin(e),s<0&&(i=-i),l===0&&u===0?n=0:n=R(Math.atan2(l,u)+this.long0)}return r.x=n,r.y=i,r}var dm=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const Fn={init:lm,forward:hm,inverse:um,names:dm};function Qu(r){var e=Math.exp(r);return e=(e-1/e)/2,e}function Jt(r,e){r=Math.abs(r),e=Math.abs(e);var t=Math.max(r,e),i=Math.min(r,e)/(t||1);return t*Math.sqrt(1+Math.pow(i,2))}function cm(r){var e=1+r,t=e-1;return t===0?r:r*Math.log(e)/t}function fm(r){var e=Math.abs(r);return e=cm(e*(1+e/(Jt(1,e)+1))),r<0?-e:e}function ks(r,e){for(var t=2*Math.cos(2*e),i=r.length-1,n=r[i],a=0,s;--i>=0;)s=-a+t*n+r[i],a=n,n=s;return e+s*Math.sin(2*e)}function pm(r,e){for(var t=2*Math.cos(e),i=r.length-1,n=r[i],a=0,s;--i>=0;)s=-a+t*n+r[i],a=n,n=s;return Math.sin(e)*s}function vm(r){var e=Math.exp(r);return e=(e+1/e)/2,e}function Ju(r,e,t){for(var i=Math.sin(e),n=Math.cos(e),a=Qu(t),s=vm(t),o=2*n*s,l=-2*i*a,h=r.length-1,u=r[h],d=0,c=0,f=0,p,v;--h>=0;)p=c,v=d,c=u,d=f,u=-p+o*c-l*d+r[h],f=-v+l*c+o*d;return o=i*s,l=n*a,[o*u-l*f,o*f+l*u]}function mm(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(Fn.init.apply(this),this.forward=Fn.forward,this.inverse=Fn.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var r=this.es/(1+Math.sqrt(1-this.es)),e=r/(2-r),t=e;this.cgb[0]=e*(2+e*(-2/3+e*(-2+e*(116/45+e*(26/45+e*(-2854/675)))))),this.cbg[0]=e*(-2+e*(2/3+e*(4/3+e*(-82/45+e*(32/45+e*(4642/4725)))))),t=t*e,this.cgb[1]=t*(7/3+e*(-8/5+e*(-227/45+e*(2704/315+e*(2323/945))))),this.cbg[1]=t*(5/3+e*(-16/15+e*(-13/9+e*(904/315+e*(-1522/945))))),t=t*e,this.cgb[2]=t*(56/15+e*(-136/35+e*(-1262/105+e*(73814/2835)))),this.cbg[2]=t*(-26/15+e*(34/21+e*(8/5+e*(-12686/2835)))),t=t*e,this.cgb[3]=t*(4279/630+e*(-332/35+e*(-399572/14175))),this.cbg[3]=t*(1237/630+e*(-12/5+e*(-24832/14175))),t=t*e,this.cgb[4]=t*(4174/315+e*(-144838/6237)),this.cbg[4]=t*(-734/315+e*(109598/31185)),t=t*e,this.cgb[5]=t*(601676/22275),this.cbg[5]=t*(444337/155925),t=Math.pow(e,2),this.Qn=this.k0/(1+e)*(1+t*(1/4+t*(1/64+t/256))),this.utg[0]=e*(-.5+e*(2/3+e*(-37/96+e*(1/360+e*(81/512+e*(-96199/604800)))))),this.gtu[0]=e*(.5+e*(-2/3+e*(5/16+e*(41/180+e*(-127/288+e*(7891/37800)))))),this.utg[1]=t*(-1/48+e*(-1/15+e*(437/1440+e*(-46/105+e*(1118711/3870720))))),this.gtu[1]=t*(13/48+e*(-3/5+e*(557/1440+e*(281/630+e*(-1983433/1935360))))),t=t*e,this.utg[2]=t*(-17/480+e*(37/840+e*(209/4480+e*(-5569/90720)))),this.gtu[2]=t*(61/240+e*(-103/140+e*(15061/26880+e*(167603/181440)))),t=t*e,this.utg[3]=t*(-4397/161280+e*(11/504+e*(830251/7257600))),this.gtu[3]=t*(49561/161280+e*(-179/168+e*(6601661/7257600))),t=t*e,this.utg[4]=t*(-4583/161280+e*(108847/3991680)),this.gtu[4]=t*(34729/80640+e*(-3418889/1995840)),t=t*e,this.utg[5]=t*(-20648693/638668800),this.gtu[5]=t*(212378941/319334400);var i=ks(this.cbg,this.lat0);this.Zb=-this.Qn*(i+pm(this.gtu,2*i))}function gm(r){var e=R(r.x-this.long0),t=r.y;t=ks(this.cbg,t);var i=Math.sin(t),n=Math.cos(t),a=Math.sin(e),s=Math.cos(e);t=Math.atan2(i,s*n),e=Math.atan2(a*n,Jt(i,n*s)),e=fm(Math.tan(e));var o=Ju(this.gtu,2*t,2*e);t=t+o[0],e=e+o[1];var l,h;return Math.abs(e)<=2.623395162778?(l=this.a*(this.Qn*e)+this.x0,h=this.a*(this.Qn*t+this.Zb)+this.y0):(l=1/0,h=1/0),r.x=l,r.y=h,r}function _m(r){var e=(r.x-this.x0)*(1/this.a),t=(r.y-this.y0)*(1/this.a);t=(t-this.Zb)/this.Qn,e=e/this.Qn;var i,n;if(Math.abs(e)<=2.623395162778){var a=Ju(this.utg,2*t,2*e);t=t+a[0],e=e+a[1],e=Math.atan(Qu(e));var s=Math.sin(t),o=Math.cos(t),l=Math.sin(e),h=Math.cos(e);t=Math.atan2(s*h,Jt(l,h*o)),e=Math.atan2(l,h*o),i=R(e+this.long0),n=ks(this.cgb,t)}else i=1/0,n=1/0;return r.x=i,r.y=n,r}var ym=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","tmerc"];const kn={init:mm,forward:gm,inverse:_m,names:ym};function bm(r,e){if(r===void 0){if(r=Math.floor((R(e)+Math.PI)*30/Math.PI)+1,r<0)return 0;if(r>60)return 60}return r}var xm="etmerc";function Am(){var r=bm(this.zone,this.long0);if(r===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(r)-183)*xt,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,kn.init.apply(this),this.forward=kn.forward,this.inverse=kn.inverse}var Cm=["Universal Transverse Mercator System","utm"];const wm={init:Am,names:Cm,dependsOn:xm};function Ds(r,e){return Math.pow((1-r)/(1+r),e)}var Em=20;function Im(){var r=Math.sin(this.lat0),e=Math.cos(this.lat0);e*=e,this.rc=Math.sqrt(1-this.es)/(1-this.es*r*r),this.C=Math.sqrt(1+this.es*e*e/(1-this.es)),this.phic0=Math.asin(r/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+tt)/(Math.pow(Math.tan(.5*this.lat0+tt),this.C)*Ds(this.e*r,this.ratexp))}function Mm(r){var e=r.x,t=r.y;return r.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*t+tt),this.C)*Ds(this.e*Math.sin(t),this.ratexp))-E,r.x=this.C*e,r}function Tm(r){for(var e=1e-14,t=r.x/this.C,i=r.y,n=Math.pow(Math.tan(.5*i+tt)/this.K,1/this.C),a=Em;a>0&&(i=2*Math.atan(n*Ds(this.e*Math.sin(r.y),-.5*this.e))-E,!(Math.abs(i-r.y)<e));--a)r.y=i;return a?(r.x=t,r.y=i,r):null}var Sm=["gauss"];const Bs={init:Im,forward:Mm,inverse:Tm,names:Sm};function Om(){Bs.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function Rm(r){var e,t,i,n;return r.x=R(r.x-this.long0),Bs.forward.apply(this,[r]),e=Math.sin(r.y),t=Math.cos(r.y),i=Math.cos(r.x),n=this.k0*this.R2/(1+this.sinc0*e+this.cosc0*t*i),r.x=n*t*Math.sin(r.x),r.y=n*(this.cosc0*e-this.sinc0*t*i),r.x=this.a*r.x+this.x0,r.y=this.a*r.y+this.y0,r}function Lm(r){var e,t,i,n,a;if(r.x=(r.x-this.x0)/this.a,r.y=(r.y-this.y0)/this.a,r.x/=this.k0,r.y/=this.k0,a=Math.sqrt(r.x*r.x+r.y*r.y)){var s=2*Math.atan2(a,this.R2);e=Math.sin(s),t=Math.cos(s),n=Math.asin(t*this.sinc0+r.y*e*this.cosc0/a),i=Math.atan2(r.x*e,a*this.cosc0*t-r.y*this.sinc0*e)}else n=this.phic0,i=0;return r.x=i,r.y=n,Bs.inverse.apply(this,[r]),r.x=R(r.x+this.long0),r}var Pm=["Stereographic_North_Pole","Oblique_Stereographic","Polar_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const Fm={init:Om,forward:Rm,inverse:Lm,names:Pm};function km(r,e,t){return e*=t,Math.tan(.5*(E+r))*Math.pow((1-e)/(1+e),.5*t)}function Dm(){this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=O&&(this.k0=.5*(1+Hr(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=O&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=O&&(this.k0=.5*this.cons*ue(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/te(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=ue(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-E,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function Bm(r){var e=r.x,t=r.y,i=Math.sin(t),n=Math.cos(t),a,s,o,l,h,u,d=R(e-this.long0);return Math.abs(Math.abs(e-this.long0)-Math.PI)<=O&&Math.abs(t+this.lat0)<=O?(r.x=NaN,r.y=NaN,r):this.sphere?(a=2*this.k0/(1+this.sinlat0*i+this.coslat0*n*Math.cos(d)),r.x=this.a*a*n*Math.sin(d)+this.x0,r.y=this.a*a*(this.coslat0*i-this.sinlat0*n*Math.cos(d))+this.y0,r):(s=2*Math.atan(this.ssfn_(t,i,this.e))-E,l=Math.cos(s),o=Math.sin(s),Math.abs(this.coslat0)<=O?(h=te(this.e,t*this.con,this.con*i),u=2*this.a*this.k0*h/this.cons,r.x=this.x0+u*Math.sin(e-this.long0),r.y=this.y0-this.con*u*Math.cos(e-this.long0),r):(Math.abs(this.sinlat0)<O?(a=2*this.a*this.k0/(1+l*Math.cos(d)),r.y=a*o):(a=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*o+this.cosX0*l*Math.cos(d))),r.y=a*(this.cosX0*o-this.sinX0*l*Math.cos(d))+this.y0),r.x=a*l*Math.sin(d)+this.x0,r))}function Nm(r){r.x-=this.x0,r.y-=this.y0;var e,t,i,n,a,s=Math.sqrt(r.x*r.x+r.y*r.y);if(this.sphere){var o=2*Math.atan(s/(2*this.a*this.k0));return e=this.long0,t=this.lat0,s<=O?(r.x=e,r.y=t,r):(t=Math.asin(Math.cos(o)*this.sinlat0+r.y*Math.sin(o)*this.coslat0/s),Math.abs(this.coslat0)<O?this.lat0>0?e=R(this.long0+Math.atan2(r.x,-1*r.y)):e=R(this.long0+Math.atan2(r.x,r.y)):e=R(this.long0+Math.atan2(r.x*Math.sin(o),s*this.coslat0*Math.cos(o)-r.y*this.sinlat0*Math.sin(o))),r.x=e,r.y=t,r)}else if(Math.abs(this.coslat0)<=O){if(s<=O)return t=this.lat0,e=this.long0,r.x=e,r.y=t,r;r.x*=this.con,r.y*=this.con,i=s*this.cons/(2*this.a*this.k0),t=this.con*Tr(this.e,i),e=this.con*R(this.con*this.long0+Math.atan2(r.x,-1*r.y))}else n=2*Math.atan(s*this.cosX0/(2*this.a*this.k0*this.ms1)),e=this.long0,s<=O?a=this.X0:(a=Math.asin(Math.cos(n)*this.sinX0+r.y*Math.sin(n)*this.cosX0/s),e=R(this.long0+Math.atan2(r.x*Math.sin(n),s*this.cosX0*Math.cos(n)-r.y*this.sinX0*Math.sin(n)))),t=-1*Tr(this.e,Math.tan(.5*(E+a)));return r.x=e,r.y=t,r}var zm=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)"];const Gm={init:Dm,forward:Bm,inverse:Nm,names:zm,ssfn_:km};function $m(){var r=this.lat0;this.lambda0=this.long0;var e=Math.sin(r),t=this.a,i=this.rf,n=1/i,a=2*n-Math.pow(n,2),s=this.e=Math.sqrt(a);this.R=this.k0*t*Math.sqrt(1-a)/(1-a*Math.pow(e,2)),this.alpha=Math.sqrt(1+a/(1-a)*Math.pow(Math.cos(r),4)),this.b0=Math.asin(e/this.alpha);var o=Math.log(Math.tan(Math.PI/4+this.b0/2)),l=Math.log(Math.tan(Math.PI/4+r/2)),h=Math.log((1+s*e)/(1-s*e));this.K=o-this.alpha*l+this.alpha*s/2*h}function Vm(r){var e=Math.log(Math.tan(Math.PI/4-r.y/2)),t=this.e/2*Math.log((1+this.e*Math.sin(r.y))/(1-this.e*Math.sin(r.y))),i=-this.alpha*(e+t)+this.K,n=2*(Math.atan(Math.exp(i))-Math.PI/4),a=this.alpha*(r.x-this.lambda0),s=Math.atan(Math.sin(a)/(Math.sin(this.b0)*Math.tan(n)+Math.cos(this.b0)*Math.cos(a))),o=Math.asin(Math.cos(this.b0)*Math.sin(n)-Math.sin(this.b0)*Math.cos(n)*Math.cos(a));return r.y=this.R/2*Math.log((1+Math.sin(o))/(1-Math.sin(o)))+this.y0,r.x=this.R*s+this.x0,r}function Um(r){for(var e=r.x-this.x0,t=r.y-this.y0,i=e/this.R,n=2*(Math.atan(Math.exp(t/this.R))-Math.PI/4),a=Math.asin(Math.cos(this.b0)*Math.sin(n)+Math.sin(this.b0)*Math.cos(n)*Math.cos(i)),s=Math.atan(Math.sin(i)/(Math.cos(this.b0)*Math.cos(i)-Math.sin(this.b0)*Math.tan(n))),o=this.lambda0+s/this.alpha,l=0,h=a,u=-1e3,d=0;Math.abs(h-u)>1e-7;){if(++d>20)return;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+a/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(h))/2)),u=h,h=2*Math.atan(Math.exp(l))-Math.PI/2}return r.x=o,r.y=h,r}var jm=["somerc"];const Wm={init:$m,forward:Vm,inverse:Um,names:jm};var yi=1e-7;function Ym(r){var e=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],t=typeof r.PROJECTION=="object"?Object.keys(r.PROJECTION)[0]:r.PROJECTION;return"no_uoff"in r||"no_off"in r||e.indexOf(t)!==-1}function qm(){var r,e,t,i,n,a,s,o,l,h,u=0,d,c=0,f=0,p=0,v=0,m=0,_=0;this.no_off=Ym(this),this.no_rot="no_rot"in this;var g=!1;"alpha"in this&&(g=!0);var y=!1;if("rectified_grid_angle"in this&&(y=!0),g&&(_=this.alpha),y&&(u=this.rectified_grid_angle*xt),g||y)c=this.longc;else if(f=this.long1,v=this.lat1,p=this.long2,m=this.lat2,Math.abs(v-m)<=yi||(r=Math.abs(v))<=yi||Math.abs(r-E)<=yi||Math.abs(Math.abs(this.lat0)-E)<=yi||Math.abs(Math.abs(m)-E)<=yi)throw new Error;var b=1-this.es;e=Math.sqrt(b),Math.abs(this.lat0)>O?(o=Math.sin(this.lat0),t=Math.cos(this.lat0),r=1-this.es*o*o,this.B=t*t,this.B=Math.sqrt(1+this.es*this.B*this.B/b),this.A=this.B*this.k0*e/r,i=this.B*e/(t*Math.sqrt(r)),n=i*i-1,n<=0?n=0:(n=Math.sqrt(n),this.lat0<0&&(n=-n)),this.E=n+=i,this.E*=Math.pow(te(this.e,this.lat0,o),this.B)):(this.B=1/e,this.A=this.k0,this.E=i=n=1),g||y?(g?(d=Math.asin(Math.sin(_)/i),y||(u=_)):(d=u,_=Math.asin(i*Math.sin(d))),this.lam0=c-Math.asin(.5*(n-1/n)*Math.tan(d))/this.B):(a=Math.pow(te(this.e,v,Math.sin(v)),this.B),s=Math.pow(te(this.e,m,Math.sin(m)),this.B),n=this.E/a,l=(s-a)/(s+a),h=this.E*this.E,h=(h-s*a)/(h+s*a),r=f-p,r<-Math.pi?p-=Ir:r>Math.pi&&(p+=Ir),this.lam0=R(.5*(f+p)-Math.atan(h*Math.tan(.5*this.B*(f-p))/l)/this.B),d=Math.atan(2*Math.sin(this.B*R(f-this.lam0))/(n-1/n)),u=_=Math.asin(i*Math.sin(d))),this.singam=Math.sin(d),this.cosgam=Math.cos(d),this.sinrot=Math.sin(u),this.cosrot=Math.cos(u),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(i*i-1)/Math.cos(_))),this.lat0<0&&(this.u_0=-this.u_0)),n=.5*d,this.v_pole_n=this.ArB*Math.log(Math.tan(tt-n)),this.v_pole_s=this.ArB*Math.log(Math.tan(tt+n))}function Xm(r){var e={},t,i,n,a,s,o,l,h;if(r.x=r.x-this.lam0,Math.abs(Math.abs(r.y)-E)>O){if(s=this.E/Math.pow(te(this.e,r.y,Math.sin(r.y)),this.B),o=1/s,t=.5*(s-o),i=.5*(s+o),a=Math.sin(this.B*r.x),n=(t*this.singam-a*this.cosgam)/i,Math.abs(Math.abs(n)-1)<O)throw new Error;h=.5*this.ArB*Math.log((1-n)/(1+n)),o=Math.cos(this.B*r.x),Math.abs(o)<yi?l=this.A*r.x:l=this.ArB*Math.atan2(t*this.cosgam+a*this.singam,o)}else h=r.y>0?this.v_pole_n:this.v_pole_s,l=this.ArB*r.y;return this.no_rot?(e.x=l,e.y=h):(l-=this.u_0,e.x=h*this.cosrot+l*this.sinrot,e.y=l*this.cosrot-h*this.sinrot),e.x=this.a*e.x+this.x0,e.y=this.a*e.y+this.y0,e}function Hm(r){var e,t,i,n,a,s,o,l={};if(r.x=(r.x-this.x0)*(1/this.a),r.y=(r.y-this.y0)*(1/this.a),this.no_rot?(t=r.y,e=r.x):(t=r.x*this.cosrot-r.y*this.sinrot,e=r.y*this.cosrot+r.x*this.sinrot+this.u_0),i=Math.exp(-this.BrA*t),n=.5*(i-1/i),a=.5*(i+1/i),s=Math.sin(this.BrA*e),o=(s*this.cosgam+n*this.singam)/a,Math.abs(Math.abs(o)-1)<O)l.x=0,l.y=o<0?-E:E;else{if(l.y=this.E/Math.sqrt((1+o)/(1-o)),l.y=Tr(this.e,Math.pow(l.y,1/this.B)),l.y===1/0)throw new Error;l.x=-this.rB*Math.atan2(n*this.cosgam-s*this.singam,Math.cos(this.BrA*e))}return l.x+=this.lam0,l}var Zm=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const Km={init:qm,forward:Xm,inverse:Hm,names:Zm};function Qm(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<O)){var r=this.b/this.a;this.e=Math.sqrt(1-r*r);var e=Math.sin(this.lat1),t=Math.cos(this.lat1),i=ue(this.e,e,t),n=te(this.e,this.lat1,e),a=Math.sin(this.lat2),s=Math.cos(this.lat2),o=ue(this.e,a,s),l=te(this.e,this.lat2,a),h=te(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>O?this.ns=Math.log(i/o)/Math.log(n/l):this.ns=e,isNaN(this.ns)&&(this.ns=e),this.f0=i/(this.ns*Math.pow(n,this.ns)),this.rh=this.a*this.f0*Math.pow(h,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function Jm(r){var e=r.x,t=r.y;Math.abs(2*Math.abs(t)-Math.PI)<=O&&(t=Hr(t)*(E-2*O));var i=Math.abs(Math.abs(t)-E),n,a;if(i>O)n=te(this.e,t,Math.sin(t)),a=this.a*this.f0*Math.pow(n,this.ns);else{if(i=t*this.ns,i<=0)return null;a=0}var s=this.ns*R(e-this.long0);return r.x=this.k0*(a*Math.sin(s))+this.x0,r.y=this.k0*(this.rh-a*Math.cos(s))+this.y0,r}function tg(r){var e,t,i,n,a,s=(r.x-this.x0)/this.k0,o=this.rh-(r.y-this.y0)/this.k0;this.ns>0?(e=Math.sqrt(s*s+o*o),t=1):(e=-Math.sqrt(s*s+o*o),t=-1);var l=0;if(e!==0&&(l=Math.atan2(t*s,t*o)),e!==0||this.ns>0){if(t=1/this.ns,i=Math.pow(e/(this.a*this.f0),t),n=Tr(this.e,i),n===-9999)return null}else n=-E;return a=R(l/this.ns+this.long0),r.x=a,r.y=n,r}var eg=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const ig={init:Qm,forward:Jm,inverse:tg,names:eg};function rg(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function ng(r){var e,t,i,n,a,s,o,l=r.x,h=r.y,u=R(l-this.long0);return e=Math.pow((1+this.e*Math.sin(h))/(1-this.e*Math.sin(h)),this.alfa*this.e/2),t=2*(Math.atan(this.k*Math.pow(Math.tan(h/2+this.s45),this.alfa)/e)-this.s45),i=-u*this.alfa,n=Math.asin(Math.cos(this.ad)*Math.sin(t)+Math.sin(this.ad)*Math.cos(t)*Math.cos(i)),a=Math.asin(Math.cos(t)*Math.sin(i)/Math.cos(n)),s=this.n*a,o=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(n/2+this.s45),this.n),r.y=o*Math.cos(s)/1,r.x=o*Math.sin(s)/1,this.czech||(r.y*=-1,r.x*=-1),r}function ag(r){var e,t,i,n,a,s,o,l,h=r.x;r.x=r.y,r.y=h,this.czech||(r.y*=-1,r.x*=-1),s=Math.sqrt(r.x*r.x+r.y*r.y),a=Math.atan2(r.y,r.x),n=a/Math.sin(this.s0),i=2*(Math.atan(Math.pow(this.ro0/s,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),e=Math.asin(Math.cos(this.ad)*Math.sin(i)-Math.sin(this.ad)*Math.cos(i)*Math.cos(n)),t=Math.asin(Math.cos(i)*Math.sin(n)/Math.cos(e)),r.x=this.long0-t/this.alfa,o=e,l=0;var u=0;do r.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(e/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(o))/(1-this.e*Math.sin(o)),this.e/2))-this.s45),Math.abs(o-r.y)<1e-10&&(l=1),o=r.y,u+=1;while(l===0&&u<15);return u>=15?null:r}var sg=["Krovak","krovak"];const og={init:rg,forward:ng,inverse:ag,names:sg};function St(r,e,t,i,n){return r*n-e*Math.sin(2*n)+t*Math.sin(4*n)-i*Math.sin(6*n)}function Zr(r){return 1-.25*r*(1+r/16*(3+1.25*r))}function Kr(r){return .375*r*(1+.25*r*(1+.46875*r))}function Qr(r){return .05859375*r*r*(1+.75*r)}function Jr(r){return r*r*r*(35/3072)}function Gi(r,e,t){var i=e*t;return r/Math.sqrt(1-i*i)}function Zi(r){return Math.abs(r)<E?r:r-Hr(r)*Math.PI}function Un(r,e,t,i,n){var a,s;a=r/e;for(var o=0;o<15;o++)if(s=(r-(e*a-t*Math.sin(2*a)+i*Math.sin(4*a)-n*Math.sin(6*a)))/(e-2*t*Math.cos(2*a)+4*i*Math.cos(4*a)-6*n*Math.cos(6*a)),a+=s,Math.abs(s)<=1e-10)return a;return NaN}function lg(){this.sphere||(this.e0=Zr(this.es),this.e1=Kr(this.es),this.e2=Qr(this.es),this.e3=Jr(this.es),this.ml0=this.a*St(this.e0,this.e1,this.e2,this.e3,this.lat0))}function hg(r){var e,t,i=r.x,n=r.y;if(i=R(i-this.long0),this.sphere)e=this.a*Math.asin(Math.cos(n)*Math.sin(i)),t=this.a*(Math.atan2(Math.tan(n),Math.cos(i))-this.lat0);else{var a=Math.sin(n),s=Math.cos(n),o=Gi(this.a,this.e,a),l=Math.tan(n)*Math.tan(n),h=i*Math.cos(n),u=h*h,d=this.es*s*s/(1-this.es),c=this.a*St(this.e0,this.e1,this.e2,this.e3,n);e=o*h*(1-u*l*(1/6-(8-l+8*d)*u/120)),t=c-this.ml0+o*a/s*u*(.5+(5-l+6*d)*u/24)}return r.x=e+this.x0,r.y=t+this.y0,r}function ug(r){r.x-=this.x0,r.y-=this.y0;var e=r.x/this.a,t=r.y/this.a,i,n;if(this.sphere){var a=t+this.lat0;i=Math.asin(Math.sin(a)*Math.cos(e)),n=Math.atan2(Math.tan(e),Math.cos(a))}else{var s=this.ml0/this.a+t,o=Un(s,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(o)-E)<=O)return r.x=this.long0,r.y=E,t<0&&(r.y*=-1),r;var l=Gi(this.a,this.e,Math.sin(o)),h=l*l*l/this.a/this.a*(1-this.es),u=Math.pow(Math.tan(o),2),d=e*this.a/l,c=d*d;i=o-l*Math.tan(o)/h*d*d*(.5-(1+3*u)*d*d/24),n=d*(1-c*(u/3+(1+3*u)*u*c/15))/Math.cos(o)}return r.x=R(n+this.long0),r.y=Zi(i),r}var dg=["Cassini","Cassini_Soldner","cass"];const cg={init:lg,forward:hg,inverse:ug,names:dg};function Ge(r,e){var t;return r>1e-7?(t=r*e,(1-r*r)*(e/(1-t*t)-.5/r*Math.log((1-t)/(1+t)))):2*e}var fg=1,pg=2,vg=3,mg=4;function gg(){var r=Math.abs(this.lat0);if(Math.abs(r-E)<O?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(r)<O?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var e;switch(this.qp=Ge(this.e,1),this.mmf=.5/(1-this.es),this.apa=Ig(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),e=Math.sin(this.lat0),this.sinb1=Ge(this.e,e)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*e*e)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function _g(r){var e,t,i,n,a,s,o,l,h,u,d=r.x,c=r.y;if(d=R(d-this.long0),this.sphere){if(a=Math.sin(c),u=Math.cos(c),i=Math.cos(d),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t=this.mode===this.EQUIT?1+u*i:1+this.sinph0*a+this.cosph0*u*i,t<=O)return null;t=Math.sqrt(2/t),e=t*u*Math.sin(d),t*=this.mode===this.EQUIT?a:this.cosph0*a-this.sinph0*u*i}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),Math.abs(c+this.lat0)<O)return null;t=tt-c*.5,t=2*(this.mode===this.S_POLE?Math.cos(t):Math.sin(t)),e=t*Math.sin(d),t*=i}}else{switch(o=0,l=0,h=0,i=Math.cos(d),n=Math.sin(d),a=Math.sin(c),s=Ge(this.e,a),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(o=s/this.qp,l=Math.sqrt(1-o*o)),this.mode){case this.OBLIQ:h=1+this.sinb1*o+this.cosb1*l*i;break;case this.EQUIT:h=1+l*i;break;case this.N_POLE:h=E+c,s=this.qp-s;break;case this.S_POLE:h=c-E,s=this.qp+s;break}if(Math.abs(h)<O)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:h=Math.sqrt(2/h),this.mode===this.OBLIQ?t=this.ymf*h*(this.cosb1*o-this.sinb1*l*i):t=(h=Math.sqrt(2/(1+l*i)))*o*this.ymf,e=this.xmf*h*l*n;break;case this.N_POLE:case this.S_POLE:s>=0?(e=(h=Math.sqrt(s))*n,t=i*(this.mode===this.S_POLE?h:-h)):e=t=0;break}}return r.x=this.a*e+this.x0,r.y=this.a*t+this.y0,r}function yg(r){r.x-=this.x0,r.y-=this.y0;var e=r.x/this.a,t=r.y/this.a,i,n,a,s,o,l,h;if(this.sphere){var u=0,d,c=0;if(d=Math.sqrt(e*e+t*t),n=d*.5,n>1)return null;switch(n=2*Math.asin(n),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(c=Math.sin(n),u=Math.cos(n)),this.mode){case this.EQUIT:n=Math.abs(d)<=O?0:Math.asin(t*c/d),e*=c,t=u*d;break;case this.OBLIQ:n=Math.abs(d)<=O?this.lat0:Math.asin(u*this.sinph0+t*c*this.cosph0/d),e*=c*this.cosph0,t=(u-Math.sin(n)*this.sinph0)*d;break;case this.N_POLE:t=-t,n=E-n;break;case this.S_POLE:n-=E;break}i=t===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(e,t)}else{if(h=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e/=this.dd,t*=this.dd,l=Math.sqrt(e*e+t*t),l<O)return r.x=this.long0,r.y=this.lat0,r;s=2*Math.asin(.5*l/this.rq),a=Math.cos(s),e*=s=Math.sin(s),this.mode===this.OBLIQ?(h=a*this.sinb1+t*s*this.cosb1/l,o=this.qp*h,t=l*this.cosb1*a-t*this.sinb1*s):(h=t*s/l,o=this.qp*h,t=l*a)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(t=-t),o=e*e+t*t,!o)return r.x=this.long0,r.y=this.lat0,r;h=1-o/this.qp,this.mode===this.S_POLE&&(h=-h)}i=Math.atan2(e,t),n=Mg(Math.asin(h),this.apa)}return r.x=R(this.long0+i),r.y=n,r}var bg=.3333333333333333,xg=.17222222222222222,Ag=.10257936507936508,Cg=.06388888888888888,wg=.0664021164021164,Eg=.016415012942191543;function Ig(r){var e,t=[];return t[0]=r*bg,e=r*r,t[0]+=e*xg,t[1]=e*Cg,e*=r,t[0]+=e*Ag,t[1]+=e*wg,t[2]=e*Eg,t}function Mg(r,e){var t=r+r;return r+e[0]*Math.sin(t)+e[1]*Math.sin(t+t)+e[2]*Math.sin(t+t+t)}var Tg=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const Sg={init:gg,forward:_g,inverse:yg,names:Tg,S_POLE:fg,N_POLE:pg,EQUIT:vg,OBLIQ:mg};function je(r){return Math.abs(r)>1&&(r=r>1?1:-1),Math.asin(r)}function Og(){Math.abs(this.lat1+this.lat2)<O||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=ue(this.e3,this.sin_po,this.cos_po),this.qs1=Ge(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=ue(this.e3,this.sin_po,this.cos_po),this.qs2=Ge(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=Ge(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>O?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function Rg(r){var e=r.x,t=r.y;this.sin_phi=Math.sin(t),this.cos_phi=Math.cos(t);var i=Ge(this.e3,this.sin_phi),n=this.a*Math.sqrt(this.c-this.ns0*i)/this.ns0,a=this.ns0*R(e-this.long0),s=n*Math.sin(a)+this.x0,o=this.rh-n*Math.cos(a)+this.y0;return r.x=s,r.y=o,r}function Lg(r){var e,t,i,n,a,s;return r.x-=this.x0,r.y=this.rh-r.y+this.y0,this.ns0>=0?(e=Math.sqrt(r.x*r.x+r.y*r.y),i=1):(e=-Math.sqrt(r.x*r.x+r.y*r.y),i=-1),n=0,e!==0&&(n=Math.atan2(i*r.x,i*r.y)),i=e*this.ns0/this.a,this.sphere?s=Math.asin((this.c-i*i)/(2*this.ns0)):(t=(this.c-i*i)/this.ns0,s=this.phi1z(this.e3,t)),a=R(n/this.ns0+this.long0),r.x=a,r.y=s,r}function Pg(r,e){var t,i,n,a,s,o=je(.5*e);if(r<O)return o;for(var l=r*r,h=1;h<=25;h++)if(t=Math.sin(o),i=Math.cos(o),n=r*t,a=1-n*n,s=.5*a*a/i*(e/(1-l)-t/a+.5/r*Math.log((1-n)/(1+n))),o=o+s,Math.abs(s)<=1e-7)return o;return null}var Fg=["Albers_Conic_Equal_Area","Albers","aea"];const kg={init:Og,forward:Rg,inverse:Lg,names:Fg,phi1z:Pg};function Dg(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function Bg(r){var e,t,i,n,a,s,o,l,h=r.x,u=r.y;return i=R(h-this.long0),e=Math.sin(u),t=Math.cos(u),n=Math.cos(i),s=this.sin_p14*e+this.cos_p14*t*n,a=1,s>0||Math.abs(s)<=O?(o=this.x0+this.a*a*t*Math.sin(i)/s,l=this.y0+this.a*a*(this.cos_p14*e-this.sin_p14*t*n)/s):(o=this.x0+this.infinity_dist*t*Math.sin(i),l=this.y0+this.infinity_dist*(this.cos_p14*e-this.sin_p14*t*n)),r.x=o,r.y=l,r}function Ng(r){var e,t,i,n,a,s;return r.x=(r.x-this.x0)/this.a,r.y=(r.y-this.y0)/this.a,r.x/=this.k0,r.y/=this.k0,(e=Math.sqrt(r.x*r.x+r.y*r.y))?(n=Math.atan2(e,this.rc),t=Math.sin(n),i=Math.cos(n),s=je(i*this.sin_p14+r.y*t*this.cos_p14/e),a=Math.atan2(r.x*t,e*this.cos_p14*i-r.y*this.sin_p14*t),a=R(this.long0+a)):(s=this.phic0,a=0),r.x=a,r.y=s,r}var zg=["gnom"];const Gg={init:Dg,forward:Bg,inverse:Ng,names:zg};function $g(r,e){var t=1-(1-r*r)/(2*r)*Math.log((1-r)/(1+r));if(Math.abs(Math.abs(e)-t)<1e-6)return e<0?-1*E:E;for(var i=Math.asin(.5*e),n,a,s,o,l=0;l<30;l++)if(a=Math.sin(i),s=Math.cos(i),o=r*a,n=Math.pow(1-o*o,2)/(2*s)*(e/(1-r*r)-a/(1-o*o)+.5/r*Math.log((1-o)/(1+o))),i+=n,Math.abs(n)<=1e-10)return i;return NaN}function Vg(){this.sphere||(this.k0=ue(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function Ug(r){var e=r.x,t=r.y,i,n,a=R(e-this.long0);if(this.sphere)i=this.x0+this.a*a*Math.cos(this.lat_ts),n=this.y0+this.a*Math.sin(t)/Math.cos(this.lat_ts);else{var s=Ge(this.e,Math.sin(t));i=this.x0+this.a*this.k0*a,n=this.y0+this.a*s*.5/this.k0}return r.x=i,r.y=n,r}function jg(r){r.x-=this.x0,r.y-=this.y0;var e,t;return this.sphere?(e=R(this.long0+r.x/this.a/Math.cos(this.lat_ts)),t=Math.asin(r.y/this.a*Math.cos(this.lat_ts))):(t=$g(this.e,2*r.y*this.k0/this.a),e=R(this.long0+r.x/(this.a*this.k0))),r.x=e,r.y=t,r}var Wg=["cea"];const Yg={init:Vg,forward:Ug,inverse:jg,names:Wg};function qg(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function Xg(r){var e=r.x,t=r.y,i=R(e-this.long0),n=Zi(t-this.lat0);return r.x=this.x0+this.a*i*this.rc,r.y=this.y0+this.a*n,r}function Hg(r){var e=r.x,t=r.y;return r.x=R(this.long0+(e-this.x0)/(this.a*this.rc)),r.y=Zi(this.lat0+(t-this.y0)/this.a),r}var Zg=["Equirectangular","Equidistant_Cylindrical","eqc"];const Kg={init:qg,forward:Xg,inverse:Hg,names:Zg};var ih=20;function Qg(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Zr(this.es),this.e1=Kr(this.es),this.e2=Qr(this.es),this.e3=Jr(this.es),this.ml0=this.a*St(this.e0,this.e1,this.e2,this.e3,this.lat0)}function Jg(r){var e=r.x,t=r.y,i,n,a,s=R(e-this.long0);if(a=s*Math.sin(t),this.sphere)Math.abs(t)<=O?(i=this.a*s,n=-1*this.a*this.lat0):(i=this.a*Math.sin(a)/Math.tan(t),n=this.a*(Zi(t-this.lat0)+(1-Math.cos(a))/Math.tan(t)));else if(Math.abs(t)<=O)i=this.a*s,n=-1*this.ml0;else{var o=Gi(this.a,this.e,Math.sin(t))/Math.tan(t);i=o*Math.sin(a),n=this.a*St(this.e0,this.e1,this.e2,this.e3,t)-this.ml0+o*(1-Math.cos(a))}return r.x=i+this.x0,r.y=n+this.y0,r}function t_(r){var e,t,i,n,a,s,o,l,h;if(i=r.x-this.x0,n=r.y-this.y0,this.sphere)if(Math.abs(n+this.a*this.lat0)<=O)e=R(i/this.a+this.long0),t=0;else{s=this.lat0+n/this.a,o=i*i/this.a/this.a+s*s,l=s;var u;for(a=ih;a;--a)if(u=Math.tan(l),h=-1*(s*(l*u+1)-l-.5*(l*l+o)*u)/((l-s)/u-1),l+=h,Math.abs(h)<=O){t=l;break}e=R(this.long0+Math.asin(i*Math.tan(l)/this.a)/Math.sin(t))}else if(Math.abs(n+this.ml0)<=O)t=0,e=R(this.long0+i/this.a);else{s=(this.ml0+n)/this.a,o=i*i/this.a/this.a+s*s,l=s;var d,c,f,p,v;for(a=ih;a;--a)if(v=this.e*Math.sin(l),d=Math.sqrt(1-v*v)*Math.tan(l),c=this.a*St(this.e0,this.e1,this.e2,this.e3,l),f=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),p=c/this.a,h=(s*(d*p+1)-p-.5*d*(p*p+o))/(this.es*Math.sin(2*l)*(p*p+o-2*s*p)/(4*d)+(s-p)*(d*f-2/Math.sin(2*l))-f),l-=h,Math.abs(h)<=O){t=l;break}d=Math.sqrt(1-this.es*Math.pow(Math.sin(t),2))*Math.tan(t),e=R(this.long0+Math.asin(i*d/this.a)/Math.sin(t))}return r.x=e,r.y=t,r}var e_=["Polyconic","poly"];const i_={init:Qg,forward:Jg,inverse:t_,names:e_};function r_(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function n_(r){var e,t=r.x,i=r.y,n=i-this.lat0,a=t-this.long0,s=n/xr*1e-5,o=a,l=1,h=0;for(e=1;e<=10;e++)l=l*s,h=h+this.A[e]*l;var u=h,d=o,c=1,f=0,p,v,m=0,_=0;for(e=1;e<=6;e++)p=c*u-f*d,v=f*u+c*d,c=p,f=v,m=m+this.B_re[e]*c-this.B_im[e]*f,_=_+this.B_im[e]*c+this.B_re[e]*f;return r.x=_*this.a+this.x0,r.y=m*this.a+this.y0,r}function a_(r){var e,t=r.x,i=r.y,n=t-this.x0,a=i-this.y0,s=a/this.a,o=n/this.a,l=1,h=0,u,d,c=0,f=0;for(e=1;e<=6;e++)u=l*s-h*o,d=h*s+l*o,l=u,h=d,c=c+this.C_re[e]*l-this.C_im[e]*h,f=f+this.C_im[e]*l+this.C_re[e]*h;for(var p=0;p<this.iterations;p++){var v=c,m=f,_,g,y=s,b=o;for(e=2;e<=6;e++)_=v*c-m*f,g=m*c+v*f,v=_,m=g,y=y+(e-1)*(this.B_re[e]*v-this.B_im[e]*m),b=b+(e-1)*(this.B_im[e]*v+this.B_re[e]*m);v=1,m=0;var x=this.B_re[1],A=this.B_im[1];for(e=2;e<=6;e++)_=v*c-m*f,g=m*c+v*f,v=_,m=g,x=x+e*(this.B_re[e]*v-this.B_im[e]*m),A=A+e*(this.B_im[e]*v+this.B_re[e]*m);var w=x*x+A*A;c=(y*x+b*A)/w,f=(b*x-y*A)/w}var C=c,T=f,P=1,k=0;for(e=1;e<=9;e++)P=P*C,k=k+this.D[e]*P;var B=this.lat0+k*xr*1e5,D=this.long0+T;return r.x=D,r.y=B,r}var s_=["New_Zealand_Map_Grid","nzmg"];const o_={init:r_,forward:n_,inverse:a_,names:s_};function l_(){}function h_(r){var e=r.x,t=r.y,i=R(e-this.long0),n=this.x0+this.a*i,a=this.y0+this.a*Math.log(Math.tan(Math.PI/4+t/2.5))*1.25;return r.x=n,r.y=a,r}function u_(r){r.x-=this.x0,r.y-=this.y0;var e=R(this.long0+r.x/this.a),t=2.5*(Math.atan(Math.exp(.8*r.y/this.a))-Math.PI/4);return r.x=e,r.y=t,r}var d_=["Miller_Cylindrical","mill"];const c_={init:l_,forward:h_,inverse:u_,names:d_};var f_=20;function p_(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=Zu(this.es)}function v_(r){var e,t,i=r.x,n=r.y;if(i=R(i-this.long0),this.sphere){if(!this.m)n=this.n!==1?Math.asin(this.n*Math.sin(n)):n;else for(var a=this.n*Math.sin(n),s=f_;s;--s){var o=(this.m*n+Math.sin(n)-a)/(this.m+Math.cos(n));if(n-=o,Math.abs(o)<O)break}e=this.a*this.C_x*i*(this.m+Math.cos(n)),t=this.a*this.C_y*n}else{var l=Math.sin(n),h=Math.cos(n);t=this.a*va(n,l,h,this.en),e=this.a*i*h/Math.sqrt(1-this.es*l*l)}return r.x=e,r.y=t,r}function m_(r){var e,t,i,n;return r.x-=this.x0,i=r.x/this.a,r.y-=this.y0,e=r.y/this.a,this.sphere?(e/=this.C_y,i=i/(this.C_x*(this.m+Math.cos(e))),this.m?e=je((this.m*e+Math.sin(e))/this.n):this.n!==1&&(e=je(Math.sin(e)/this.n)),i=R(i+this.long0),e=Zi(e)):(e=Ku(r.y/this.a,this.es,this.en),n=Math.abs(e),n<E?(n=Math.sin(e),t=this.long0+r.x*Math.sqrt(1-this.es*n*n)/(this.a*Math.cos(e)),i=R(t)):n-O<E&&(i=this.long0)),r.x=i,r.y=e,r}var g_=["Sinusoidal","sinu"];const __={init:p_,forward:v_,inverse:m_,names:g_};function y_(){}function b_(r){for(var e=r.x,t=r.y,i=R(e-this.long0),n=t,a=Math.PI*Math.sin(t);;){var s=-(n+Math.sin(n)-a)/(1+Math.cos(n));if(n+=s,Math.abs(s)<O)break}n/=2,Math.PI/2-Math.abs(t)<O&&(i=0);var o=.900316316158*this.a*i*Math.cos(n)+this.x0,l=1.4142135623731*this.a*Math.sin(n)+this.y0;return r.x=o,r.y=l,r}function x_(r){var e,t;r.x-=this.x0,r.y-=this.y0,t=r.y/(1.4142135623731*this.a),Math.abs(t)>.999999999999&&(t=.999999999999),e=Math.asin(t);var i=R(this.long0+r.x/(.900316316158*this.a*Math.cos(e)));i<-Math.PI&&(i=-Math.PI),i>Math.PI&&(i=Math.PI),t=(2*e+Math.sin(2*e))/Math.PI,Math.abs(t)>1&&(t=1);var n=Math.asin(t);return r.x=i,r.y=n,r}var A_=["Mollweide","moll"];const C_={init:y_,forward:b_,inverse:x_,names:A_};function w_(){Math.abs(this.lat1+this.lat2)<O||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Zr(this.es),this.e1=Kr(this.es),this.e2=Qr(this.es),this.e3=Jr(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=ue(this.e,this.sinphi,this.cosphi),this.ml1=St(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<O?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=ue(this.e,this.sinphi,this.cosphi),this.ml2=St(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=St(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function E_(r){var e=r.x,t=r.y,i;if(this.sphere)i=this.a*(this.g-t);else{var n=St(this.e0,this.e1,this.e2,this.e3,t);i=this.a*(this.g-n)}var a=this.ns*R(e-this.long0),s=this.x0+i*Math.sin(a),o=this.y0+this.rh-i*Math.cos(a);return r.x=s,r.y=o,r}function I_(r){r.x-=this.x0,r.y=this.rh-r.y+this.y0;var e,t,i,n;this.ns>=0?(t=Math.sqrt(r.x*r.x+r.y*r.y),e=1):(t=-Math.sqrt(r.x*r.x+r.y*r.y),e=-1);var a=0;if(t!==0&&(a=Math.atan2(e*r.x,e*r.y)),this.sphere)return n=R(this.long0+a/this.ns),i=Zi(this.g-t/this.a),r.x=n,r.y=i,r;var s=this.g-t/this.a;return i=Un(s,this.e0,this.e1,this.e2,this.e3),n=R(this.long0+a/this.ns),r.x=n,r.y=i,r}var M_=["Equidistant_Conic","eqdc"];const T_={init:w_,forward:E_,inverse:I_,names:M_};function S_(){this.R=this.a}function O_(r){var e=r.x,t=r.y,i=R(e-this.long0),n,a;Math.abs(t)<=O&&(n=this.x0+this.R*i,a=this.y0);var s=je(2*Math.abs(t/Math.PI));(Math.abs(i)<=O||Math.abs(Math.abs(t)-E)<=O)&&(n=this.x0,t>=0?a=this.y0+Math.PI*this.R*Math.tan(.5*s):a=this.y0+Math.PI*this.R*-Math.tan(.5*s));var o=.5*Math.abs(Math.PI/i-i/Math.PI),l=o*o,h=Math.sin(s),u=Math.cos(s),d=u/(h+u-1),c=d*d,f=d*(2/h-1),p=f*f,v=Math.PI*this.R*(o*(d-p)+Math.sqrt(l*(d-p)*(d-p)-(p+l)*(c-p)))/(p+l);i<0&&(v=-v),n=this.x0+v;var m=l+d;return v=Math.PI*this.R*(f*m-o*Math.sqrt((p+l)*(l+1)-m*m))/(p+l),t>=0?a=this.y0+v:a=this.y0-v,r.x=n,r.y=a,r}function R_(r){var e,t,i,n,a,s,o,l,h,u,d,c,f;return r.x-=this.x0,r.y-=this.y0,d=Math.PI*this.R,i=r.x/d,n=r.y/d,a=i*i+n*n,s=-Math.abs(n)*(1+a),o=s-2*n*n+i*i,l=-2*s+1+2*n*n+a*a,f=n*n/l+(2*o*o*o/l/l/l-9*s*o/l/l)/27,h=(s-o*o/3/l)/l,u=2*Math.sqrt(-h/3),d=3*f/h/u,Math.abs(d)>1&&(d>=0?d=1:d=-1),c=Math.acos(d)/3,r.y>=0?t=(-u*Math.cos(c+Math.PI/3)-o/3/l)*Math.PI:t=-(-u*Math.cos(c+Math.PI/3)-o/3/l)*Math.PI,Math.abs(i)<O?e=this.long0:e=R(this.long0+Math.PI*(a-1+Math.sqrt(1+2*(i*i-n*n)+a*a))/2/i),r.x=e,r.y=t,r}var L_=["Van_der_Grinten_I","VanDerGrinten","vandg"];const P_={init:S_,forward:O_,inverse:R_,names:L_};function F_(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function k_(r){var e=r.x,t=r.y,i=Math.sin(r.y),n=Math.cos(r.y),a=R(e-this.long0),s,o,l,h,u,d,c,f,p,v,m,_,g,y,b,x,A,w,C,T,P,k,B;return this.sphere?Math.abs(this.sin_p12-1)<=O?(r.x=this.x0+this.a*(E-t)*Math.sin(a),r.y=this.y0-this.a*(E-t)*Math.cos(a),r):Math.abs(this.sin_p12+1)<=O?(r.x=this.x0+this.a*(E+t)*Math.sin(a),r.y=this.y0+this.a*(E+t)*Math.cos(a),r):(w=this.sin_p12*i+this.cos_p12*n*Math.cos(a),x=Math.acos(w),A=x?x/Math.sin(x):1,r.x=this.x0+this.a*A*n*Math.sin(a),r.y=this.y0+this.a*A*(this.cos_p12*i-this.sin_p12*n*Math.cos(a)),r):(s=Zr(this.es),o=Kr(this.es),l=Qr(this.es),h=Jr(this.es),Math.abs(this.sin_p12-1)<=O?(u=this.a*St(s,o,l,h,E),d=this.a*St(s,o,l,h,t),r.x=this.x0+(u-d)*Math.sin(a),r.y=this.y0-(u-d)*Math.cos(a),r):Math.abs(this.sin_p12+1)<=O?(u=this.a*St(s,o,l,h,E),d=this.a*St(s,o,l,h,t),r.x=this.x0+(u+d)*Math.sin(a),r.y=this.y0+(u+d)*Math.cos(a),r):(c=i/n,f=Gi(this.a,this.e,this.sin_p12),p=Gi(this.a,this.e,i),v=Math.atan((1-this.es)*c+this.es*f*this.sin_p12/(p*n)),m=Math.atan2(Math.sin(a),this.cos_p12*Math.tan(v)-this.sin_p12*Math.cos(a)),m===0?C=Math.asin(this.cos_p12*Math.sin(v)-this.sin_p12*Math.cos(v)):Math.abs(Math.abs(m)-Math.PI)<=O?C=-Math.asin(this.cos_p12*Math.sin(v)-this.sin_p12*Math.cos(v)):C=Math.asin(Math.sin(a)*Math.cos(v)/Math.sin(m)),_=this.e*this.sin_p12/Math.sqrt(1-this.es),g=this.e*this.cos_p12*Math.cos(m)/Math.sqrt(1-this.es),y=_*g,b=g*g,T=C*C,P=T*C,k=P*C,B=k*C,x=f*C*(1-T*b*(1-b)/6+P/8*y*(1-2*b)+k/120*(b*(4-7*b)-3*_*_*(1-7*b))-B/48*y),r.x=this.x0+x*Math.sin(m),r.y=this.y0+x*Math.cos(m),r))}function D_(r){r.x-=this.x0,r.y-=this.y0;var e,t,i,n,a,s,o,l,h,u,d,c,f,p,v,m,_,g,y,b,x,A,w,C;return this.sphere?(e=Math.sqrt(r.x*r.x+r.y*r.y),e>2*E*this.a?void 0:(t=e/this.a,i=Math.sin(t),n=Math.cos(t),a=this.long0,Math.abs(e)<=O?s=this.lat0:(s=je(n*this.sin_p12+r.y*i*this.cos_p12/e),o=Math.abs(this.lat0)-E,Math.abs(o)<=O?this.lat0>=0?a=R(this.long0+Math.atan2(r.x,-r.y)):a=R(this.long0-Math.atan2(-r.x,r.y)):a=R(this.long0+Math.atan2(r.x*i,e*this.cos_p12*n-r.y*this.sin_p12*i))),r.x=a,r.y=s,r)):(l=Zr(this.es),h=Kr(this.es),u=Qr(this.es),d=Jr(this.es),Math.abs(this.sin_p12-1)<=O?(c=this.a*St(l,h,u,d,E),e=Math.sqrt(r.x*r.x+r.y*r.y),f=c-e,s=Un(f/this.a,l,h,u,d),a=R(this.long0+Math.atan2(r.x,-1*r.y)),r.x=a,r.y=s,r):Math.abs(this.sin_p12+1)<=O?(c=this.a*St(l,h,u,d,E),e=Math.sqrt(r.x*r.x+r.y*r.y),f=e-c,s=Un(f/this.a,l,h,u,d),a=R(this.long0+Math.atan2(r.x,r.y)),r.x=a,r.y=s,r):(e=Math.sqrt(r.x*r.x+r.y*r.y),m=Math.atan2(r.x,r.y),p=Gi(this.a,this.e,this.sin_p12),_=Math.cos(m),g=this.e*this.cos_p12*_,y=-g*g/(1-this.es),b=3*this.es*(1-y)*this.sin_p12*this.cos_p12*_/(1-this.es),x=e/p,A=x-y*(1+y)*Math.pow(x,3)/6-b*(1+3*y)*Math.pow(x,4)/24,w=1-y*A*A/2-x*A*A*A/6,v=Math.asin(this.sin_p12*Math.cos(A)+this.cos_p12*Math.sin(A)*_),a=R(this.long0+Math.asin(Math.sin(m)*Math.sin(A)/Math.cos(v))),C=Math.sin(v),s=Math.atan2((C-this.es*w*this.sin_p12)*Math.tan(v),C*(1-this.es)),r.x=a,r.y=s,r))}var B_=["Azimuthal_Equidistant","aeqd"];const N_={init:F_,forward:k_,inverse:D_,names:B_};function z_(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function G_(r){var e,t,i,n,a,s,o,l,h=r.x,u=r.y;return i=R(h-this.long0),e=Math.sin(u),t=Math.cos(u),n=Math.cos(i),s=this.sin_p14*e+this.cos_p14*t*n,a=1,(s>0||Math.abs(s)<=O)&&(o=this.a*a*t*Math.sin(i),l=this.y0+this.a*a*(this.cos_p14*e-this.sin_p14*t*n)),r.x=o,r.y=l,r}function $_(r){var e,t,i,n,a,s,o;return r.x-=this.x0,r.y-=this.y0,e=Math.sqrt(r.x*r.x+r.y*r.y),t=je(e/this.a),i=Math.sin(t),n=Math.cos(t),s=this.long0,Math.abs(e)<=O?(o=this.lat0,r.x=s,r.y=o,r):(o=je(n*this.sin_p14+r.y*i*this.cos_p14/e),a=Math.abs(this.lat0)-E,Math.abs(a)<=O?(this.lat0>=0?s=R(this.long0+Math.atan2(r.x,-r.y)):s=R(this.long0-Math.atan2(-r.x,r.y)),r.x=s,r.y=o,r):(s=R(this.long0+Math.atan2(r.x*i,e*this.cos_p14*n-r.y*this.sin_p14*i)),r.x=s,r.y=o,r))}var V_=["ortho"];const U_={init:z_,forward:G_,inverse:$_,names:V_};var lt={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},et={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function j_(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=E-tt/2?this.face=lt.TOP:this.lat0<=-(E-tt/2)?this.face=lt.BOTTOM:Math.abs(this.long0)<=tt?this.face=lt.FRONT:Math.abs(this.long0)<=E+tt?this.face=this.long0>0?lt.RIGHT:lt.LEFT:this.face=lt.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function W_(r){var e={x:0,y:0},t,i,n,a,s,o,l={value:0};if(r.x-=this.long0,this.es!==0?t=Math.atan(this.one_minus_f_squared*Math.tan(r.y)):t=r.y,i=r.x,this.face===lt.TOP)a=E-t,i>=tt&&i<=E+tt?(l.value=et.AREA_0,n=i-E):i>E+tt||i<=-(E+tt)?(l.value=et.AREA_1,n=i>0?i-ct:i+ct):i>-(E+tt)&&i<=-tt?(l.value=et.AREA_2,n=i+E):(l.value=et.AREA_3,n=i);else if(this.face===lt.BOTTOM)a=E+t,i>=tt&&i<=E+tt?(l.value=et.AREA_0,n=-i+E):i<tt&&i>=-tt?(l.value=et.AREA_1,n=-i):i<-tt&&i>=-(E+tt)?(l.value=et.AREA_2,n=-i-E):(l.value=et.AREA_3,n=i>0?-i+ct:-i-ct);else{var h,u,d,c,f,p,v;this.face===lt.RIGHT?i=ki(i,+E):this.face===lt.BACK?i=ki(i,+ct):this.face===lt.LEFT&&(i=ki(i,-E)),c=Math.sin(t),f=Math.cos(t),p=Math.sin(i),v=Math.cos(i),h=f*v,u=f*p,d=c,this.face===lt.FRONT?(a=Math.acos(h),n=Cn(a,d,u,l)):this.face===lt.RIGHT?(a=Math.acos(u),n=Cn(a,d,-h,l)):this.face===lt.BACK?(a=Math.acos(-h),n=Cn(a,d,-u,l)):this.face===lt.LEFT?(a=Math.acos(-u),n=Cn(a,d,h,l)):(a=n=0,l.value=et.AREA_0)}return o=Math.atan(12/ct*(n+Math.acos(Math.sin(n)*Math.cos(tt))-E)),s=Math.sqrt((1-Math.cos(a))/(Math.cos(o)*Math.cos(o))/(1-Math.cos(Math.atan(1/Math.cos(n))))),l.value===et.AREA_1?o+=E:l.value===et.AREA_2?o+=ct:l.value===et.AREA_3&&(o+=1.5*ct),e.x=s*Math.cos(o),e.y=s*Math.sin(o),e.x=e.x*this.a+this.x0,e.y=e.y*this.a+this.y0,r.x=e.x,r.y=e.y,r}function Y_(r){var e={lam:0,phi:0},t,i,n,a,s,o,l,h,u,d={value:0};if(r.x=(r.x-this.x0)/this.a,r.y=(r.y-this.y0)/this.a,i=Math.atan(Math.sqrt(r.x*r.x+r.y*r.y)),t=Math.atan2(r.y,r.x),r.x>=0&&r.x>=Math.abs(r.y)?d.value=et.AREA_0:r.y>=0&&r.y>=Math.abs(r.x)?(d.value=et.AREA_1,t-=E):r.x<0&&-r.x>=Math.abs(r.y)?(d.value=et.AREA_2,t=t<0?t+ct:t-ct):(d.value=et.AREA_3,t+=E),u=ct/12*Math.tan(t),s=Math.sin(u)/(Math.cos(u)-1/Math.sqrt(2)),o=Math.atan(s),n=Math.cos(t),a=Math.tan(i),l=1-n*n*a*a*(1-Math.cos(Math.atan(1/Math.cos(o)))),l<-1?l=-1:l>1&&(l=1),this.face===lt.TOP)h=Math.acos(l),e.phi=E-h,d.value===et.AREA_0?e.lam=o+E:d.value===et.AREA_1?e.lam=o<0?o+ct:o-ct:d.value===et.AREA_2?e.lam=o-E:e.lam=o;else if(this.face===lt.BOTTOM)h=Math.acos(l),e.phi=h-E,d.value===et.AREA_0?e.lam=-o+E:d.value===et.AREA_1?e.lam=-o:d.value===et.AREA_2?e.lam=-o-E:e.lam=o<0?-o-ct:-o+ct;else{var c,f,p;c=l,u=c*c,u>=1?p=0:p=Math.sqrt(1-u)*Math.sin(o),u+=p*p,u>=1?f=0:f=Math.sqrt(1-u),d.value===et.AREA_1?(u=f,f=-p,p=u):d.value===et.AREA_2?(f=-f,p=-p):d.value===et.AREA_3&&(u=f,f=p,p=-u),this.face===lt.RIGHT?(u=c,c=-f,f=u):this.face===lt.BACK?(c=-c,f=-f):this.face===lt.LEFT&&(u=c,c=f,f=-u),e.phi=Math.acos(-p)-E,e.lam=Math.atan2(f,c),this.face===lt.RIGHT?e.lam=ki(e.lam,-E):this.face===lt.BACK?e.lam=ki(e.lam,-ct):this.face===lt.LEFT&&(e.lam=ki(e.lam,+E))}if(this.es!==0){var v,m,_;v=e.phi<0?1:0,m=Math.tan(e.phi),_=this.b/Math.sqrt(m*m+this.one_minus_f_squared),e.phi=Math.atan(Math.sqrt(this.a*this.a-_*_)/(this.one_minus_f*_)),v&&(e.phi=-e.phi)}return e.lam+=this.long0,r.x=e.lam,r.y=e.phi,r}function Cn(r,e,t,i){var n;return r<O?(i.value=et.AREA_0,n=0):(n=Math.atan2(e,t),Math.abs(n)<=tt?i.value=et.AREA_0:n>tt&&n<=E+tt?(i.value=et.AREA_1,n-=E):n>E+tt||n<=-(E+tt)?(i.value=et.AREA_2,n=n>=0?n-ct:n+ct):(i.value=et.AREA_3,n+=E)),n}function ki(r,e){var t=r+e;return t<-ct?t+=Ir:t>+ct&&(t-=Ir),t}var q_=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const X_={init:j_,forward:W_,inverse:Y_,names:q_};var ns=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],vr=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],td=.8487,ed=1.3523,id=se/5,H_=1/id,Mi=18,jn=function(r,e){return r[0]+e*(r[1]+e*(r[2]+e*r[3]))},Z_=function(r,e){return r[1]+e*(2*r[2]+e*3*r[3])};function K_(r,e,t,i){for(var n=e;i;--i){var a=r(n);if(n-=a,Math.abs(a)<t)break}return n}function Q_(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function J_(r){var e=R(r.x-this.long0),t=Math.abs(r.y),i=Math.floor(t*id);i<0?i=0:i>=Mi&&(i=Mi-1),t=se*(t-H_*i);var n={x:jn(ns[i],t)*e,y:jn(vr[i],t)};return r.y<0&&(n.y=-n.y),n.x=n.x*this.a*td+this.x0,n.y=n.y*this.a*ed+this.y0,n}function t0(r){var e={x:(r.x-this.x0)/(this.a*td),y:Math.abs(r.y-this.y0)/(this.a*ed)};if(e.y>=1)e.x/=ns[Mi][0],e.y=r.y<0?-E:E;else{var t=Math.floor(e.y*Mi);for(t<0?t=0:t>=Mi&&(t=Mi-1);;)if(vr[t][0]>e.y)--t;else if(vr[t+1][0]<=e.y)++t;else break;var i=vr[t],n=5*(e.y-i[0])/(vr[t+1][0]-i[0]);n=K_(function(a){return(jn(i,a)-e.y)/Z_(i,a)},n,O,100),e.x/=jn(ns[t],n),e.y=(5*t+n)*xt,r.y<0&&(e.y=-e.y)}return e.x=R(e.x+this.long0),e}var e0=["Robinson","robin"];const i0={init:Q_,forward:J_,inverse:t0,names:e0};function r0(){this.name="geocent"}function n0(r){var e=$u(r,this.es,this.a);return e}function a0(r){var e=Vu(r,this.es,this.a,this.b);return e}var s0=["Geocentric","geocentric","geocent","Geocent"];const o0={init:r0,forward:n0,inverse:a0,names:s0};var wt={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},lr={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function l0(){if(Object.keys(lr).forEach(function(t){if(typeof this[t]>"u")this[t]=lr[t].def;else{if(lr[t].num&&isNaN(this[t]))throw new Error("Invalid parameter value, must be numeric "+t+" = "+this[t]);lr[t].num&&(this[t]=parseFloat(this[t]))}lr[t].degrees&&(this[t]=this[t]*xt)}.bind(this)),Math.abs(Math.abs(this.lat0)-E)<O?this.mode=this.lat0<0?wt.S_POLE:wt.N_POLE:Math.abs(this.lat0)<O?this.mode=wt.EQUIT:(this.mode=wt.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var r=this.tilt,e=this.azi;this.cg=Math.cos(e),this.sg=Math.sin(e),this.cw=Math.cos(r),this.sw=Math.sin(r)}function h0(r){r.x-=this.long0;var e=Math.sin(r.y),t=Math.cos(r.y),i=Math.cos(r.x),n,a;switch(this.mode){case wt.OBLIQ:a=this.sinph0*e+this.cosph0*t*i;break;case wt.EQUIT:a=t*i;break;case wt.S_POLE:a=-e;break;case wt.N_POLE:a=e;break}switch(a=this.pn1/(this.p-a),n=a*t*Math.sin(r.x),this.mode){case wt.OBLIQ:a*=this.cosph0*e-this.sinph0*t*i;break;case wt.EQUIT:a*=e;break;case wt.N_POLE:a*=-(t*i);break;case wt.S_POLE:a*=t*i;break}var s,o;return s=a*this.cg+n*this.sg,o=1/(s*this.sw*this.h1+this.cw),n=(n*this.cg-a*this.sg)*this.cw*o,a=s*o,r.x=n*this.a,r.y=a*this.a,r}function u0(r){r.x/=this.a,r.y/=this.a;var e={x:r.x,y:r.y},t,i,n;n=1/(this.pn1-r.y*this.sw),t=this.pn1*r.x*n,i=this.pn1*r.y*this.cw*n,r.x=t*this.cg+i*this.sg,r.y=i*this.cg-t*this.sg;var a=Jt(r.x,r.y);if(Math.abs(a)<O)e.x=0,e.y=r.y;else{var s,o;switch(o=1-a*a*this.pfact,o=(this.p-Math.sqrt(o))/(this.pn1/a+a/this.pn1),s=Math.sqrt(1-o*o),this.mode){case wt.OBLIQ:e.y=Math.asin(s*this.sinph0+r.y*o*this.cosph0/a),r.y=(s-this.sinph0*Math.sin(e.y))*a,r.x*=o*this.cosph0;break;case wt.EQUIT:e.y=Math.asin(r.y*o/a),r.y=s*a,r.x*=o;break;case wt.N_POLE:e.y=Math.asin(s),r.y=-r.y;break;case wt.S_POLE:e.y=-Math.asin(s);break}e.x=Math.atan2(r.x,r.y)}return r.x=e.x+this.long0,r.y=e.y,r}var d0=["Tilted_Perspective","tpers"];const c0={init:l0,forward:h0,inverse:u0,names:d0};function f0(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var r=1-this.es,e=1/r;this.radius_p=Math.sqrt(r),this.radius_p2=r,this.radius_p_inv2=e,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function p0(r){var e=r.x,t=r.y,i,n,a,s;if(e=e-this.long0,this.shape==="ellipse"){t=Math.atan(this.radius_p2*Math.tan(t));var o=this.radius_p/Jt(this.radius_p*Math.cos(t),Math.sin(t));if(n=o*Math.cos(e)*Math.cos(t),a=o*Math.sin(e)*Math.cos(t),s=o*Math.sin(t),(this.radius_g-n)*n-a*a-s*s*this.radius_p_inv2<0)return r.x=Number.NaN,r.y=Number.NaN,r;i=this.radius_g-n,this.flip_axis?(r.x=this.radius_g_1*Math.atan(a/Jt(s,i)),r.y=this.radius_g_1*Math.atan(s/i)):(r.x=this.radius_g_1*Math.atan(a/i),r.y=this.radius_g_1*Math.atan(s/Jt(a,i)))}else this.shape==="sphere"&&(i=Math.cos(t),n=Math.cos(e)*i,a=Math.sin(e)*i,s=Math.sin(t),i=this.radius_g-n,this.flip_axis?(r.x=this.radius_g_1*Math.atan(a/Jt(s,i)),r.y=this.radius_g_1*Math.atan(s/i)):(r.x=this.radius_g_1*Math.atan(a/i),r.y=this.radius_g_1*Math.atan(s/Jt(a,i))));return r.x=r.x*this.a,r.y=r.y*this.a,r}function v0(r){var e=-1,t=0,i=0,n,a,s,o;if(r.x=r.x/this.a,r.y=r.y/this.a,this.shape==="ellipse"){this.flip_axis?(i=Math.tan(r.y/this.radius_g_1),t=Math.tan(r.x/this.radius_g_1)*Jt(1,i)):(t=Math.tan(r.x/this.radius_g_1),i=Math.tan(r.y/this.radius_g_1)*Jt(1,t));var l=i/this.radius_p;if(n=t*t+l*l+e*e,a=2*this.radius_g*e,s=a*a-4*n*this.C,s<0)return r.x=Number.NaN,r.y=Number.NaN,r;o=(-a-Math.sqrt(s))/(2*n),e=this.radius_g+o*e,t*=o,i*=o,r.x=Math.atan2(t,e),r.y=Math.atan(i*Math.cos(r.x)/e),r.y=Math.atan(this.radius_p_inv2*Math.tan(r.y))}else if(this.shape==="sphere"){if(this.flip_axis?(i=Math.tan(r.y/this.radius_g_1),t=Math.tan(r.x/this.radius_g_1)*Math.sqrt(1+i*i)):(t=Math.tan(r.x/this.radius_g_1),i=Math.tan(r.y/this.radius_g_1)*Math.sqrt(1+t*t)),n=t*t+i*i+e*e,a=2*this.radius_g*e,s=a*a-4*n*this.C,s<0)return r.x=Number.NaN,r.y=Number.NaN,r;o=(-a-Math.sqrt(s))/(2*n),e=this.radius_g+o*e,t*=o,i*=o,r.x=Math.atan2(t,e),r.y=Math.atan(i*Math.cos(r.x)/e)}return r.x=r.x+this.long0,r}var m0=["Geostationary Satellite View","Geostationary_Satellite","geos"];const g0={init:f0,forward:p0,inverse:v0,names:m0};function _0(r){r.Proj.projections.add(Fn),r.Proj.projections.add(kn),r.Proj.projections.add(wm),r.Proj.projections.add(Fm),r.Proj.projections.add(Gm),r.Proj.projections.add(Wm),r.Proj.projections.add(Km),r.Proj.projections.add(ig),r.Proj.projections.add(og),r.Proj.projections.add(cg),r.Proj.projections.add(Sg),r.Proj.projections.add(kg),r.Proj.projections.add(Gg),r.Proj.projections.add(Yg),r.Proj.projections.add(Kg),r.Proj.projections.add(i_),r.Proj.projections.add(o_),r.Proj.projections.add(c_),r.Proj.projections.add(__),r.Proj.projections.add(C_),r.Proj.projections.add(T_),r.Proj.projections.add(P_),r.Proj.projections.add(N_),r.Proj.projections.add(U_),r.Proj.projections.add(X_),r.Proj.projections.add(i0),r.Proj.projections.add(o0),r.Proj.projections.add(c0),r.Proj.projections.add(g0)}Dt.defaultDatum="WGS84";Dt.Proj=le;Dt.WGS84=new Dt.Proj("WGS84");Dt.Point=zi;Dt.toPoint=Uu;Dt.defs=Mt;Dt.nadgrid=Iv;Dt.transform=Vn;Dt.mgrs=Vv;Dt.version="__VERSION__";_0(Dt);var y0=function(){function r(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}return r.prototype.preventDefault=function(){this.defaultPrevented=!0},r.prototype.stopPropagation=function(){this.propagationStopped=!0},r}();const oi=y0,rd={PROPERTYCHANGE:"propertychange"};var b0=function(){function r(){this.disposed=!1}return r.prototype.dispose=function(){this.disposed||(this.disposed=!0,this.disposeInternal())},r.prototype.disposeInternal=function(){},r}();const x0=b0;function $i(r,e){return r>e?1:r<e?-1:0}function ma(r,e,t){var i=r.length;if(r[0]<=e)return 0;if(e<=r[i-1])return i-1;var n=void 0;if(t>0){for(n=1;n<i;++n)if(r[n]<e)return n-1}else if(t<0){for(n=1;n<i;++n)if(r[n]<=e)return n}else for(n=1;n<i;++n){if(r[n]==e)return n;if(r[n]<e)return typeof t=="function"?t(e,r[n-1],r[n])>0?n-1:n:r[n-1]-e<e-r[n]?n-1:n}return i-1}function A0(r,e,t){for(;e<t;){var i=r[e];r[e]=r[t],r[t]=i,++e,--t}}function nd(r,e){for(var t=Array.isArray(e)?e:[e],i=t.length,n=0;n<i;n++)r[r.length]=t[n]}function Ki(r,e){var t=r.length;if(t!==e.length)return!1;for(var i=0;i<t;i++)if(r[i]!==e[i])return!1;return!0}function C0(r,e,t){var i=e||$i;return r.every(function(n,a){if(a===0)return!0;var s=i(r[a-1],n);return!(s>0||t&&s===0)})}function w0(){return!0}function Sr(){}function E0(r){var e=!1,t,i,n;return function(){var a=Array.prototype.slice.call(arguments);return(!e||this!==n||!Ki(a,i))&&(e=!0,n=this,i=a,t=r.apply(this,arguments)),t}}var I0=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),M0=function(r){I0(e,r);function e(t){var i=r.call(this)||this;return i.eventTarget_=t,i.pendingRemovals_=null,i.dispatching_=null,i.listeners_=null,i}return e.prototype.addEventListener=function(t,i){if(!(!t||!i)){var n=this.listeners_||(this.listeners_={}),a=n[t]||(n[t]=[]);a.indexOf(i)===-1&&a.push(i)}},e.prototype.dispatchEvent=function(t){var i=typeof t=="string",n=i?t:t.type,a=this.listeners_&&this.listeners_[n];if(a){var s=i?new oi(t):t;s.target||(s.target=this.eventTarget_||this);var o=this.dispatching_||(this.dispatching_={}),l=this.pendingRemovals_||(this.pendingRemovals_={});n in o||(o[n]=0,l[n]=0),++o[n];for(var h,u=0,d=a.length;u<d;++u)if("handleEvent"in a[u]?h=a[u].handleEvent(s):h=a[u].call(this,s),h===!1||s.propagationStopped){h=!1;break}if(--o[n]===0){var c=l[n];for(delete l[n];c--;)this.removeEventListener(n,Sr);delete o[n]}return h}},e.prototype.disposeInternal=function(){this.listeners_&&Ms(this.listeners_)},e.prototype.getListeners=function(t){return this.listeners_&&this.listeners_[t]||void 0},e.prototype.hasListener=function(t){return this.listeners_?t?t in this.listeners_:Object.keys(this.listeners_).length>0:!1},e.prototype.removeEventListener=function(t,i){var n=this.listeners_&&this.listeners_[t];if(n){var a=n.indexOf(i);a!==-1&&(this.pendingRemovals_&&t in this.pendingRemovals_?(n[a]=Sr,++this.pendingRemovals_[t]):(n.splice(a,1),n.length===0&&delete this.listeners_[t]))}},e}(x0);const tn=M0,At={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function ee(r,e,t,i,n){if(i&&i!==r&&(t=t.bind(i)),n){var a=t;t=function(){r.removeEventListener(e,t),a.apply(this,arguments)}}var s={target:r,type:e,listener:t};return r.addEventListener(e,t),s}function Wn(r,e,t,i){return ee(r,e,t,i,!0)}function Wt(r){r&&r.target&&(r.target.removeEventListener(r.type,r.listener),Ms(r))}var T0=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),ga=function(r){T0(e,r);function e(){var t=r.call(this)||this;return t.on=t.onInternal,t.once=t.onceInternal,t.un=t.unInternal,t.revision_=0,t}return e.prototype.changed=function(){++this.revision_,this.dispatchEvent(At.CHANGE)},e.prototype.getRevision=function(){return this.revision_},e.prototype.onInternal=function(t,i){if(Array.isArray(t)){for(var n=t.length,a=new Array(n),s=0;s<n;++s)a[s]=ee(this,t[s],i);return a}else return ee(this,t,i)},e.prototype.onceInternal=function(t,i){var n;if(Array.isArray(t)){var a=t.length;n=new Array(a);for(var s=0;s<a;++s)n[s]=Wn(this,t[s],i)}else n=Wn(this,t,i);return i.ol_key=n,n},e.prototype.unInternal=function(t,i){var n=i.ol_key;if(n)S0(n);else if(Array.isArray(t))for(var a=0,s=t.length;a<s;++a)this.removeEventListener(t[a],i);else this.removeEventListener(t,i)},e}(tn);ga.prototype.on;ga.prototype.once;ga.prototype.un;function S0(r){if(Array.isArray(r))for(var e=0,t=r.length;e<t;++e)Wt(r[e]);else Wt(r)}const ad=ga;var sd=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),rh=function(r){sd(e,r);function e(t,i,n){var a=r.call(this,t)||this;return a.key=i,a.oldValue=n,a}return e}(oi),O0=function(r){sd(e,r);function e(t){var i=r.call(this)||this;return i.on,i.once,i.un,nt(i),i.values_=null,t!==void 0&&i.setProperties(t),i}return e.prototype.get=function(t){var i;return this.values_&&this.values_.hasOwnProperty(t)&&(i=this.values_[t]),i},e.prototype.getKeys=function(){return this.values_&&Object.keys(this.values_)||[]},e.prototype.getProperties=function(){return this.values_&&st({},this.values_)||{}},e.prototype.hasProperties=function(){return!!this.values_},e.prototype.notify=function(t,i){var n;n="change:".concat(t),this.hasListener(n)&&this.dispatchEvent(new rh(n,t,i)),n=rd.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new rh(n,t,i))},e.prototype.addChangeListener=function(t,i){this.addEventListener("change:".concat(t),i)},e.prototype.removeChangeListener=function(t,i){this.removeEventListener("change:".concat(t),i)},e.prototype.set=function(t,i,n){var a=this.values_||(this.values_={});if(n)a[t]=i;else{var s=a[t];a[t]=i,s!==i&&this.notify(t,s)}},e.prototype.setProperties=function(t,i){for(var n in t)this.set(n,t[n],i)},e.prototype.applyProperties=function(t){t.values_&&st(this.values_||(this.values_={}),t.values_)},e.prototype.unset=function(t,i){if(this.values_&&t in this.values_){var n=this.values_[t];delete this.values_[t],Cr(this.values_)&&(this.values_=null),i||this.notify(t,n)}},e}(ad);const li=O0;var R0=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),L0=function(r){R0(e,r);function e(t){var i=r.call(this)||this;if(i.on,i.once,i.un,i.id_=void 0,i.geometryName_="geometry",i.style_=null,i.styleFunction_=void 0,i.geometryChangeKey_=null,i.addChangeListener(i.geometryName_,i.handleGeometryChanged_),t)if(typeof t.getSimplifiedGeometry=="function"){var n=t;i.setGeometry(n)}else{var a=t;i.setProperties(a)}return i}return e.prototype.clone=function(){var t=new e(this.hasProperties()?this.getProperties():null);t.setGeometryName(this.getGeometryName());var i=this.getGeometry();i&&t.setGeometry(i.clone());var n=this.getStyle();return n&&t.setStyle(n),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(Wt(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=ee(t,At.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){this.style_=t,this.styleFunction_=t?P0(t):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=t,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()},e}(li);function P0(r){if(typeof r=="function")return r;var e;if(Array.isArray(r))e=r;else{J(typeof r.getZIndex=="function",41);var t=r;e=[t]}return function(){return e}}const F0=L0;var Vi=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"";Vi.indexOf("firefox");Vi.indexOf("safari")!==-1&&Vi.indexOf("chrom")==-1;Vi.indexOf("webkit")!==-1&&Vi.indexOf("edge")==-1;Vi.indexOf("macintosh");var _a=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,k0=typeof Image<"u"&&Image.prototype.decode;(function(){var r=!1;try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return r})();new Array(6);function $e(){return[1,0,0,1,0,0]}function D0(r,e,t,i,n,a,s){return r[0]=e,r[1]=t,r[2]=i,r[3]=n,r[4]=a,r[5]=s,r}function B0(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r}function mt(r,e){var t=e[0],i=e[1];return e[0]=r[0]*t+r[2]*i+r[4],e[1]=r[1]*t+r[3]*i+r[5],e}function N0(r,e,t){return D0(r,e,0,0,t,0,0)}function de(r,e,t,i,n,a,s,o){var l=Math.sin(a),h=Math.cos(a);return r[0]=i*h,r[1]=n*l,r[2]=-i*l,r[3]=n*h,r[4]=s*i*h-o*i*l+e,r[5]=s*n*l+o*n*h+t,r}function Ns(r,e){var t=z0(e);J(t!==0,32);var i=e[0],n=e[1],a=e[2],s=e[3],o=e[4],l=e[5];return r[0]=s/t,r[1]=-n/t,r[2]=-a/t,r[3]=i/t,r[4]=(a*l-s*o)/t,r[5]=-(i*l-n*o)/t,r}function z0(r){return r[0]*r[3]-r[1]*r[2]}var nh;function zs(r){var e="matrix("+r.join(", ")+")";if(_a)return e;var t=nh||(nh=document.createElement("div"));return t.style.transform=e,t.style.transform}function ri(r,e,t,i,n,a){for(var s=a||[],o=0,l=e;l<t;l+=i){var h=r[l],u=r[l+1];s[o++]=n[0]*h+n[2]*u+n[4],s[o++]=n[1]*h+n[3]*u+n[5]}return a&&s.length!=o&&(s.length=o),s}function od(r,e,t,i,n,a,s){for(var o=s||[],l=Math.cos(n),h=Math.sin(n),u=a[0],d=a[1],c=0,f=e;f<t;f+=i){var p=r[f]-u,v=r[f+1]-d;o[c++]=u+p*l-v*h,o[c++]=d+p*h+v*l;for(var m=f+2;m<f+i;++m)o[c++]=r[m]}return s&&o.length!=c&&(o.length=c),o}function G0(r,e,t,i,n,a,s,o){for(var l=o||[],h=s[0],u=s[1],d=0,c=e;c<t;c+=i){var f=r[c]-h,p=r[c+1]-u;l[d++]=h+n*f,l[d++]=u+a*p;for(var v=c+2;v<c+i;++v)l[d++]=r[v]}return o&&l.length!=d&&(l.length=d),l}function $0(r,e,t,i,n,a,s){for(var o=s||[],l=0,h=e;h<t;h+=i){o[l++]=r[h]+n,o[l++]=r[h+1]+a;for(var u=h+2;u<h+i;++u)o[l++]=r[u]}return s&&o.length!=l&&(o.length=l),o}var V0=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),ah=$e(),U0=function(r){V0(e,r);function e(){var t=r.call(this)||this;return t.extent_=qt(),t.extentRevision_=-1,t.simplifiedGeometryMaxMinSquaredTolerance=0,t.simplifiedGeometryRevision=0,t.simplifyTransformedInternal=E0(function(i,n,a){if(!a)return this.getSimplifiedGeometry(n);var s=this.clone();return s.applyTransform(a),s.getSimplifiedGeometry(n)}),t}return e.prototype.simplifyTransformed=function(t,i){return this.simplifyTransformedInternal(this.getRevision(),t,i)},e.prototype.clone=function(){return K()},e.prototype.closestPointXY=function(t,i,n,a){return K()},e.prototype.containsXY=function(t,i){var n=this.getClosestPoint([t,i]);return n[0]===t&&n[1]===i},e.prototype.getClosestPoint=function(t,i){var n=i||[NaN,NaN];return this.closestPointXY(t[0],t[1],n,1/0),n},e.prototype.intersectsCoordinate=function(t){return this.containsXY(t[0],t[1])},e.prototype.computeExtent=function(t){return K()},e.prototype.getExtent=function(t){if(this.extentRevision_!=this.getRevision()){var i=this.computeExtent(this.extent_);(isNaN(i[0])||isNaN(i[1]))&&Ts(i),this.extentRevision_=this.getRevision()}return Ip(this.extent_,t)},e.prototype.rotate=function(t,i){K()},e.prototype.scale=function(t,i,n){K()},e.prototype.simplify=function(t){return this.getSimplifiedGeometry(t*t)},e.prototype.getSimplifiedGeometry=function(t){return K()},e.prototype.getType=function(){return K()},e.prototype.applyTransform=function(t){K()},e.prototype.intersectsExtent=function(t){return K()},e.prototype.translate=function(t,i){K()},e.prototype.transform=function(t,i){var n=vt(t),a=n.getUnits()==ge.TILE_PIXELS?function(s,o,l){var h=n.getExtent(),u=n.getWorldExtent(),d=Et(u)/Et(h);return de(ah,u[0],u[3],d,-d,0,0,0),ri(s,0,s.length,l,ah,o),Er(n,i)(s,o,l)}:Er(n,i);return this.applyTransform(a),this},e}(li);const j0=U0,$t={XY:"XY",XYZ:"XYZ",XYM:"XYM",XYZM:"XYZM"};var W0=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Y0=function(r){W0(e,r);function e(){var t=r.call(this)||this;return t.layout=$t.XY,t.stride=2,t.flatCoordinates=null,t}return e.prototype.computeExtent=function(t){return Ap(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.getCoordinates=function(){return K()},e.prototype.getFirstCoordinate=function(){return this.flatCoordinates.slice(0,this.stride)},e.prototype.getFlatCoordinates=function(){return this.flatCoordinates},e.prototype.getLastCoordinate=function(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)},e.prototype.getLayout=function(){return this.layout},e.prototype.getSimplifiedGeometry=function(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&t<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;var i=this.getSimplifiedGeometryInternal(t),n=i.getFlatCoordinates();return n.length<this.flatCoordinates.length?i:(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)},e.prototype.getSimplifiedGeometryInternal=function(t){return this},e.prototype.getStride=function(){return this.stride},e.prototype.setFlatCoordinates=function(t,i){this.stride=sh(t),this.layout=t,this.flatCoordinates=i},e.prototype.setCoordinates=function(t,i){K()},e.prototype.setLayout=function(t,i,n){var a;if(t)a=sh(t);else{for(var s=0;s<n;++s)if(i.length===0){this.layout=$t.XY,this.stride=2;return}else i=i[0];a=i.length,t=q0(a)}this.layout=t,this.stride=a},e.prototype.applyTransform=function(t){this.flatCoordinates&&(t(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())},e.prototype.rotate=function(t,i){var n=this.getFlatCoordinates();if(n){var a=this.getStride();od(n,0,n.length,a,t,i,n),this.changed()}},e.prototype.scale=function(t,i,n){var a=i;a===void 0&&(a=t);var s=n;s||(s=Ve(this.getExtent()));var o=this.getFlatCoordinates();if(o){var l=this.getStride();G0(o,0,o.length,l,t,a,s,o),this.changed()}},e.prototype.translate=function(t,i){var n=this.getFlatCoordinates();if(n){var a=this.getStride();$0(n,0,n.length,a,t,i,n),this.changed()}},e}(j0);function q0(r){var e;return r==2?e=$t.XY:r==3?e=$t.XYZ:r==4&&(e=$t.XYZM),e}function sh(r){var e;return r==$t.XY?e=2:r==$t.XYZ||r==$t.XYM?e=3:r==$t.XYZM&&(e=4),e}function X0(r,e,t){var i=r.getFlatCoordinates();if(i){var n=r.getStride();return ri(i,0,i.length,n,e,t)}else return null}const Gs=Y0;function H0(r,e,t,i){for(var n=0,a=t.length;n<a;++n)r[e++]=t[n];return e}function ld(r,e,t,i){for(var n=0,a=t.length;n<a;++n)for(var s=t[n],o=0;o<i;++o)r[e++]=s[o];return e}function Z0(r,e,t,i,n){for(var a=n||[],s=0,o=0,l=t.length;o<l;++o){var h=ld(r,e,t[o],i);a[s++]=h,e=h}return a.length=s,a}var K0=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Q0=function(r){K0(e,r);function e(t,i){var n=r.call(this)||this;return n.setCoordinates(t,i),n}return e.prototype.clone=function(){var t=new e(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t},e.prototype.closestPointXY=function(t,i,n,a){var s=this.flatCoordinates,o=Ri(t,i,s[0],s[1]);if(o<a){for(var l=this.stride,h=0;h<l;++h)n[h]=s[h];return n.length=l,o}else return a},e.prototype.getCoordinates=function(){return this.flatCoordinates?this.flatCoordinates.slice():[]},e.prototype.computeExtent=function(t){return xp(this.flatCoordinates,t)},e.prototype.getType=function(){return q.POINT},e.prototype.intersectsExtent=function(t){return Eu(t,this.flatCoordinates[0],this.flatCoordinates[1])},e.prototype.setCoordinates=function(t,i){this.setLayout(i,t,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=H0(this.flatCoordinates,0,t,this.stride),this.changed()},e}(Gs);const hd=Q0,kt={ANIMATING:0,INTERACTING:1},Zt={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"};var J0=42,$s=256;function oh(r,e,t){return function(i,n,a,s,o){if(i){if(!n&&!e)return i;var l=e?0:a[0]*n,h=e?0:a[1]*n,u=o?o[0]:0,d=o?o[1]:0,c=r[0]+l/2+u,f=r[2]-l/2+u,p=r[1]+h/2+d,v=r[3]-h/2+d;c>f&&(c=(f+c)/2,f=c),p>v&&(p=(v+p)/2,v=p);var m=pt(i[0],c,f),_=pt(i[1],p,v);if(s&&t&&n){var g=30*n;m+=-g*Math.log(1+Math.max(0,c-i[0])/g)+g*Math.log(1+Math.max(0,i[0]-f)/g),_+=-g*Math.log(1+Math.max(0,p-i[1])/g)+g*Math.log(1+Math.max(0,i[1]-v)/g)}return[m,_]}}}function ty(r){return r}function Vs(r,e,t,i){var n=at(e)/t[0],a=Et(e)/t[1];return i?Math.min(r,Math.max(n,a)):Math.min(r,Math.min(n,a))}function Us(r,e,t){var i=Math.min(r,e),n=50;return i*=Math.log(1+n*Math.max(0,r/e-1))/n+1,t&&(i=Math.max(i,t),i/=Math.log(1+n*Math.max(0,t/r-1))/n+1),pt(i,t/2,e*2)}function ey(r,e,t,i){return function(n,a,s,o){if(n!==void 0){var l=r[0],h=r[r.length-1],u=t?Vs(l,t,s,i):l;if(o){var d=e!==void 0?e:!0;return d?Us(n,u,h):pt(n,h,u)}var c=Math.min(u,n),f=Math.floor(ma(r,c,a));return r[f]>u&&f<r.length-1?r[f+1]:r[f]}else return}}function iy(r,e,t,i,n,a){return function(s,o,l,h){if(s!==void 0){var u=n?Vs(e,n,l,a):e,d=t!==void 0?t:0;if(h){var c=i!==void 0?i:!0;return c?Us(s,u,d):pt(s,d,u)}var f=1e-9,p=Math.ceil(Math.log(e/u)/Math.log(r)-f),v=-o*(.5-f)+.5,m=Math.min(u,s),_=Math.floor(Math.log(e/m)/Math.log(r)+v),g=Math.max(p,_),y=e/Math.pow(r,g);return pt(y,d,u)}else return}}function lh(r,e,t,i,n){return function(a,s,o,l){if(a!==void 0){var h=i?Vs(r,i,o,n):r,u=t!==void 0?t:!0;return!u||!l?pt(a,e,h):Us(a,h,e)}else return}}function ry(r){if(r!==void 0)return 0}function hh(r){if(r!==void 0)return r}function ny(r){var e=2*Math.PI/r;return function(t,i){if(i)return t;if(t!==void 0)return t=Math.floor(t/e+.5)*e,t}}function ay(r){var e=r||Rn(5);return function(t,i){if(i)return t;if(t!==void 0)return Math.abs(t)<=e?0:t}}function ud(r){return Math.pow(r,3)}function sy(r){return 1-ud(1-r)}function oy(r){return 3*r*r-2*r*r*r}function uh(r,e,t,i,n,a,s){var o=r[e],l=r[e+1],h=r[t]-o,u=r[t+1]-l,d;if(h===0&&u===0)d=e;else{var c=((n-o)*h+(a-l)*u)/(h*h+u*u);if(c>1)d=t;else if(c>0){for(var f=0;f<i;++f)s[f]=Ke(r[e+f],r[t+f],c);s.length=i;return}else d=e}for(var f=0;f<i;++f)s[f]=r[d+f];s.length=i}function dd(r,e,t,i,n){var a=r[e],s=r[e+1];for(e+=i;e<t;e+=i){var o=r[e],l=r[e+1],h=Ri(a,s,o,l);h>n&&(n=h),a=o,s=l}return n}function ly(r,e,t,i,n){for(var a=0,s=t.length;a<s;++a){var o=t[a];n=dd(r,e,o,i,n),e=o}return n}function cd(r,e,t,i,n,a,s,o,l,h,u){if(e==t)return h;var d,c;if(n===0)if(c=Ri(s,o,r[e],r[e+1]),c<h){for(d=0;d<i;++d)l[d]=r[e+d];return l.length=i,c}else return h;for(var f=u||[NaN,NaN],p=e+i;p<t;)if(uh(r,p-i,p,i,s,o,f),c=Ri(s,o,f[0],f[1]),c<h){for(h=c,d=0;d<i;++d)l[d]=f[d];l.length=i,p+=i}else p+=i*Math.max((Math.sqrt(c)-Math.sqrt(h))/n|0,1);if(a&&(uh(r,t-i,e,i,s,o,f),c=Ri(s,o,f[0],f[1]),c<h)){for(h=c,d=0;d<i;++d)l[d]=f[d];l.length=i}return h}function hy(r,e,t,i,n,a,s,o,l,h,u){for(var d=u||[NaN,NaN],c=0,f=t.length;c<f;++c){var p=t[c];h=cd(r,e,p,i,n,a,s,o,l,h,d),e=p}return h}function uy(r,e,t,i,n,a,s){var o=(t-e)/i;if(o<3){for(;e<t;e+=i)a[s++]=r[e],a[s++]=r[e+1];return s}var l=new Array(o);l[0]=1,l[o-1]=1;for(var h=[e,t-i],u=0;h.length>0;){for(var d=h.pop(),c=h.pop(),f=0,p=r[c],v=r[c+1],m=r[d],_=r[d+1],g=c+i;g<d;g+=i){var y=r[g],b=r[g+1],x=ip(y,b,p,v,m,_);x>f&&(u=g,f=x)}f>n&&(l[(u-e)/i]=1,c+i<u&&h.push(c,u),u+i<d&&h.push(u,d))}for(var g=0;g<o;++g)l[g]&&(a[s++]=r[e+g*i],a[s++]=r[e+g*i+1]);return s}function Qe(r,e){return e*Math.round(r/e)}function dy(r,e,t,i,n,a,s){if(e==t)return s;var o=Qe(r[e],n),l=Qe(r[e+1],n);e+=i,a[s++]=o,a[s++]=l;var h,u;do if(h=Qe(r[e],n),u=Qe(r[e+1],n),e+=i,e==t)return a[s++]=h,a[s++]=u,s;while(h==o&&u==l);for(;e<t;){var d=Qe(r[e],n),c=Qe(r[e+1],n);if(e+=i,!(d==h&&c==u)){var f=h-o,p=u-l,v=d-o,m=c-l;if(f*m==p*v&&(f<0&&v<f||f==v||f>0&&v>f)&&(p<0&&m<p||p==m||p>0&&m>p)){h=d,u=c;continue}a[s++]=h,a[s++]=u,o=h,l=u,h=d,u=c}}return a[s++]=h,a[s++]=u,s}function cy(r,e,t,i,n,a,s,o){for(var l=0,h=t.length;l<h;++l){var u=t[l];s=dy(r,e,u,i,n,a,s),o.push(s),e=u}return s}function Ti(r,e,t,i,n){for(var a=n!==void 0?n:[],s=0,o=e;o<t;o+=i)a[s++]=r.slice(o,o+i);return a.length=s,a}function Yn(r,e,t,i,n){for(var a=n!==void 0?n:[],s=0,o=0,l=t.length;o<l;++o){var h=t[o];a[s++]=Ti(r,e,h,i,a[s]),e=h}return a.length=s,a}function dh(r,e,t,i,n){for(var a=n!==void 0?n:[],s=0,o=0,l=t.length;o<l;++o){var h=t[o];a[s++]=Yn(r,e,h,i,a[s]),e=h[h.length-1]}return a.length=s,a}function fd(r,e,t,i){for(var n=0,a=r[t-i],s=r[t-i+1];e<t;e+=i){var o=r[e],l=r[e+1];n+=s*o-a*l,a=o,s=l}return n/2}function fy(r,e,t,i){for(var n=0,a=0,s=t.length;a<s;++a){var o=t[a];n+=fd(r,e,o,i),e=o}return n}var py=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),vy=function(r){py(e,r);function e(t,i){var n=r.call(this)||this;return n.maxDelta_=-1,n.maxDeltaRevision_=-1,i!==void 0&&!Array.isArray(t[0])?n.setFlatCoordinates(i,t):n.setCoordinates(t,i),n}return e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,i,n,a){return a<wu(this.getExtent(),t,i)?a:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(dd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),cd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,t,i,n,a))},e.prototype.getArea=function(){return fd(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getCoordinates=function(){return Ti(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getSimplifiedGeometryInternal=function(t){var i=[];return i.length=uy(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i,0),new e(i,$t.XY)},e.prototype.getType=function(){return q.LINEAR_RING},e.prototype.intersectsExtent=function(t){return!1},e.prototype.setCoordinates=function(t,i){this.setLayout(i,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=ld(this.flatCoordinates,0,t,this.stride),this.changed()},e}(Gs);const ch=vy;function my(r,e,t,i,n){var a=Mu(n,function(s){return!Je(r,e,t,i,s[0],s[1])});return!a}function Je(r,e,t,i,n,a){for(var s=0,o=r[t-i],l=r[t-i+1];e<t;e+=i){var h=r[e],u=r[e+1];l<=a?u>a&&(h-o)*(a-l)-(n-o)*(u-l)>0&&s++:u<=a&&(h-o)*(a-l)-(n-o)*(u-l)<0&&s--,o=h,l=u}return s!==0}function pd(r,e,t,i,n,a){if(t.length===0||!Je(r,e,t[0],i,n,a))return!1;for(var s=1,o=t.length;s<o;++s)if(Je(r,t[s-1],t[s],i,n,a))return!1;return!0}function gy(r,e,t,i,n,a,s){for(var o,l,h,u,d,c,f,p=n[a+1],v=[],m=0,_=t.length;m<_;++m){var g=t[m];for(u=r[g-i],c=r[g-i+1],o=e;o<g;o+=i)d=r[o],f=r[o+1],(p<=c&&f<=p||c<=p&&p<=f)&&(h=(p-c)/(f-c)*(d-u)+u,v.push(h)),u=d,c=f}var y=NaN,b=-1/0;for(v.sort($i),u=v[0],o=1,l=v.length;o<l;++o){d=v[o];var x=Math.abs(d-u);x>b&&(h=(u+d)/2,pd(r,e,t,i,h,p)&&(y=h,b=x)),u=d}return isNaN(y)&&(y=n[a]),s?(s.push(y,p,b),s):[y,p,b]}function _y(r,e,t,i,n){var a;for(e+=i;e<t;e+=i)if(a=n(r.slice(e-i,e),r.slice(e,e+i)),a)return a;return!1}function vd(r,e,t,i,n){var a=Iu(qt(),r,e,t,i);return Tt(n,a)?De(n,a)||a[0]>=n[0]&&a[2]<=n[2]||a[1]>=n[1]&&a[3]<=n[3]?!0:_y(r,e,t,i,function(s,o){return Mp(n,s,o)}):!1}function yy(r,e,t,i,n){return!!(vd(r,e,t,i,n)||Je(r,e,t,i,n[0],n[1])||Je(r,e,t,i,n[0],n[3])||Je(r,e,t,i,n[2],n[1])||Je(r,e,t,i,n[2],n[3]))}function by(r,e,t,i,n){if(!yy(r,e,t[0],i,n))return!1;if(t.length===1)return!0;for(var a=1,s=t.length;a<s;++a)if(my(r,t[a-1],t[a],i,n)&&!vd(r,t[a-1],t[a],i,n))return!1;return!0}function xy(r,e,t,i){for(;e<t-i;){for(var n=0;n<i;++n){var a=r[e+n];r[e+n]=r[t-i+n],r[t-i+n]=a}e+=i,t-=i}}function md(r,e,t,i){for(var n=0,a=r[t-i],s=r[t-i+1];e<t;e+=i){var o=r[e],l=r[e+1];n+=(o-a)*(l+s),a=o,s=l}return n===0?void 0:n>0}function Ay(r,e,t,i,n){for(var a=n!==void 0?n:!1,s=0,o=t.length;s<o;++s){var l=t[s],h=md(r,e,l,i);if(s===0){if(a&&h||!a&&!h)return!1}else if(a&&!h||!a&&h)return!1;e=l}return!0}function fh(r,e,t,i,n){for(var a=n!==void 0?n:!1,s=0,o=t.length;s<o;++s){var l=t[s],h=md(r,e,l,i),u=s===0?a&&h||!a&&!h:a&&!h||!a&&h;u&&xy(r,e,l,i),e=l}return e}var Cy=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),wy=function(r){Cy(e,r);function e(t,i,n){var a=r.call(this)||this;return a.ends_=[],a.flatInteriorPointRevision_=-1,a.flatInteriorPoint_=null,a.maxDelta_=-1,a.maxDeltaRevision_=-1,a.orientedRevision_=-1,a.orientedFlatCoordinates_=null,i!==void 0&&n?(a.setFlatCoordinates(i,t),a.ends_=n):a.setCoordinates(t,i),a}return e.prototype.appendLinearRing=function(t){this.flatCoordinates?nd(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},e.prototype.clone=function(){var t=new e(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t},e.prototype.closestPointXY=function(t,i,n,a){return a<wu(this.getExtent(),t,i)?a:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(ly(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),hy(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,t,i,n,a))},e.prototype.containsXY=function(t,i){return pd(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,i)},e.prototype.getArea=function(){return fy(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)},e.prototype.getCoordinates=function(t){var i;return t!==void 0?(i=this.getOrientedFlatCoordinates().slice(),fh(i,0,this.ends_,this.stride,t)):i=this.flatCoordinates,Yn(i,0,this.ends_,this.stride)},e.prototype.getEnds=function(){return this.ends_},e.prototype.getFlatInteriorPoint=function(){if(this.flatInteriorPointRevision_!=this.getRevision()){var t=Ve(this.getExtent());this.flatInteriorPoint_=gy(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_},e.prototype.getInteriorPoint=function(){return new hd(this.getFlatInteriorPoint(),$t.XYM)},e.prototype.getLinearRingCount=function(){return this.ends_.length},e.prototype.getLinearRing=function(t){return t<0||this.ends_.length<=t?null:new ch(this.flatCoordinates.slice(t===0?0:this.ends_[t-1],this.ends_[t]),this.layout)},e.prototype.getLinearRings=function(){for(var t=this.layout,i=this.flatCoordinates,n=this.ends_,a=[],s=0,o=0,l=n.length;o<l;++o){var h=n[o],u=new ch(i.slice(s,h),t);a.push(u),s=h}return a},e.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var t=this.flatCoordinates;Ay(t,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=fh(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},e.prototype.getSimplifiedGeometryInternal=function(t){var i=[],n=[];return i.length=cy(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(t),i,0,n),new e(i,$t.XY,n)},e.prototype.getType=function(){return q.POLYGON},e.prototype.intersectsExtent=function(t){return by(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t)},e.prototype.setCoordinates=function(t,i){this.setLayout(i,t,2),this.flatCoordinates||(this.flatCoordinates=[]);var n=Z0(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()},e}(Gs);function ph(r){var e=r[0],t=r[1],i=r[2],n=r[3],a=[e,t,e,n,i,n,i,t,e,t];return new wy(a,$t.XY,[a.length])}var Ey=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Ra=0,Iy=function(r){Ey(e,r);function e(t){var i=r.call(this)||this;i.on,i.once,i.un;var n=st({},t);return i.hints_=[0,0],i.animations_=[],i.updateAnimationKey_,i.projection_=Rs(n.projection,"EPSG:3857"),i.viewportSize_=[100,100],i.targetCenter_=null,i.targetResolution_,i.targetRotation_,i.nextCenter_=null,i.nextResolution_,i.nextRotation_,i.cancelAnchor_=void 0,n.center&&(n.center=Ie(n.center,i.projection_)),n.extent&&(n.extent=me(n.extent,i.projection_)),n.projection&&Fp(),i.applyOptions_(n),i}return e.prototype.applyOptions_=function(t){var i=st({},t);for(var n in Zt)delete i[n];this.setProperties(i,!0);var a=Ty(t);this.maxResolution_=a.maxResolution,this.minResolution_=a.minResolution,this.zoomFactor_=a.zoomFactor,this.resolutions_=t.resolutions,this.padding_=t.padding,this.minZoom_=a.minZoom;var s=My(t),o=a.constraint,l=Sy(t);this.constraints_={center:s,resolution:o,rotation:l},this.setRotation(t.rotation!==void 0?t.rotation:0),this.setCenterInternal(t.center!==void 0?t.center:null),t.resolution!==void 0?this.setResolution(t.resolution):t.zoom!==void 0&&this.setZoom(t.zoom)},Object.defineProperty(e.prototype,"padding",{get:function(){return this.padding_},set:function(t){var i=this.padding_;this.padding_=t;var n=this.getCenter();if(n){var a=t||[0,0,0,0];i=i||[0,0,0,0];var s=this.getResolution(),o=s/2*(a[3]-i[3]+i[1]-a[1]),l=s/2*(a[0]-i[0]+i[2]-a[2]);this.setCenterInternal([n[0]+o,n[1]-l])}},enumerable:!1,configurable:!0}),e.prototype.getUpdatedOptions_=function(t){var i=this.getProperties();return i.resolution!==void 0?i.resolution=this.getResolution():i.zoom=this.getZoom(),i.center=this.getCenterInternal(),i.rotation=this.getRotation(),st({},i,t)},e.prototype.animate=function(t){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);for(var i=new Array(arguments.length),n=0;n<i.length;++n){var a=arguments[n];a.center&&(a=st({},a),a.center=Ie(a.center,this.getProjection())),a.anchor&&(a=st({},a),a.anchor=Ie(a.anchor,this.getProjection())),i[n]=a}this.animateInternal.apply(this,i)},e.prototype.animateInternal=function(t){var i=arguments.length,n;i>1&&typeof arguments[i-1]=="function"&&(n=arguments[i-1],--i);for(var a=0;a<i&&!this.isDef();++a){var s=arguments[a];s.center&&this.setCenterInternal(s.center),s.zoom!==void 0?this.setZoom(s.zoom):s.resolution&&this.setResolution(s.resolution),s.rotation!==void 0&&this.setRotation(s.rotation)}if(a===i){n&&wn(n,!0);return}for(var o=Date.now(),l=this.targetCenter_.slice(),h=this.targetResolution_,u=this.targetRotation_,d=[];a<i;++a){var c=arguments[a],f={start:o,complete:!1,anchor:c.anchor,duration:c.duration!==void 0?c.duration:1e3,easing:c.easing||oy,callback:n};if(c.center&&(f.sourceCenter=l,f.targetCenter=c.center.slice(),l=f.targetCenter),c.zoom!==void 0?(f.sourceResolution=h,f.targetResolution=this.getResolutionForZoom(c.zoom),h=f.targetResolution):c.resolution&&(f.sourceResolution=h,f.targetResolution=c.resolution,h=f.targetResolution),c.rotation!==void 0){f.sourceRotation=u;var p=ii(c.rotation-u+Math.PI,2*Math.PI)-Math.PI;f.targetRotation=u+p,u=f.targetRotation}Oy(f)?f.complete=!0:o+=f.duration,d.push(f)}this.animations_.push(d),this.setHint(kt.ANIMATING,1),this.updateAnimations_()},e.prototype.getAnimating=function(){return this.hints_[kt.ANIMATING]>0},e.prototype.getInteracting=function(){return this.hints_[kt.INTERACTING]>0},e.prototype.cancelAnimations=function(){this.setHint(kt.ANIMATING,-this.hints_[kt.ANIMATING]);for(var t,i=0,n=this.animations_.length;i<n;++i){var a=this.animations_[i];if(a[0].callback&&wn(a[0].callback,!1),!t)for(var s=0,o=a.length;s<o;++s){var l=a[s];if(!l.complete){t=l.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=t,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN},e.prototype.updateAnimations_=function(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!!this.getAnimating()){for(var t=Date.now(),i=!1,n=this.animations_.length-1;n>=0;--n){for(var a=this.animations_[n],s=!0,o=0,l=a.length;o<l;++o){var h=a[o];if(!h.complete){var u=t-h.start,d=h.duration>0?u/h.duration:1;d>=1?(h.complete=!0,d=1):s=!1;var c=h.easing(d);if(h.sourceCenter){var f=h.sourceCenter[0],p=h.sourceCenter[1],v=h.targetCenter[0],m=h.targetCenter[1];this.nextCenter_=h.targetCenter;var _=f+c*(v-f),g=p+c*(m-p);this.targetCenter_=[_,g]}if(h.sourceResolution&&h.targetResolution){var y=c===1?h.targetResolution:h.sourceResolution+c*(h.targetResolution-h.sourceResolution);if(h.anchor){var b=this.getViewportSize_(this.getRotation()),x=this.constraints_.resolution(y,0,b,!0);this.targetCenter_=this.calculateCenterZoom(x,h.anchor)}this.nextResolution_=h.targetResolution,this.targetResolution_=y,this.applyTargetState_(!0)}if(h.sourceRotation!==void 0&&h.targetRotation!==void 0){var A=c===1?ii(h.targetRotation+Math.PI,2*Math.PI)-Math.PI:h.sourceRotation+c*(h.targetRotation-h.sourceRotation);if(h.anchor){var w=this.constraints_.rotation(A,!0);this.targetCenter_=this.calculateCenterRotate(w,h.anchor)}this.nextRotation_=h.targetRotation,this.targetRotation_=A}if(this.applyTargetState_(!0),i=!0,!h.complete)break}}if(s){this.animations_[n]=null,this.setHint(kt.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;var C=a[0].callback;C&&wn(C,!0)}}this.animations_=this.animations_.filter(Boolean),i&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}},e.prototype.calculateCenterRotate=function(t,i){var n,a=this.getCenterInternal();return a!==void 0&&(n=[a[0]-i[0],a[1]-i[1]],Rp(n,t-this.getRotation()),Op(n,i)),n},e.prototype.calculateCenterZoom=function(t,i){var n,a=this.getCenterInternal(),s=this.getResolution();if(a!==void 0&&s!==void 0){var o=i[0]-t*(i[0]-a[0])/s,l=i[1]-t*(i[1]-a[1])/s;n=[o,l]}return n},e.prototype.getViewportSize_=function(t){var i=this.viewportSize_;if(t){var n=i[0],a=i[1];return[Math.abs(n*Math.cos(t))+Math.abs(a*Math.sin(t)),Math.abs(n*Math.sin(t))+Math.abs(a*Math.cos(t))]}else return i},e.prototype.setViewportSize=function(t){this.viewportSize_=Array.isArray(t)?t.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)},e.prototype.getCenter=function(){var t=this.getCenterInternal();return t&&Bl(t,this.getProjection())},e.prototype.getCenterInternal=function(){return this.get(Zt.CENTER)},e.prototype.getConstraints=function(){return this.constraints_},e.prototype.getConstrainResolution=function(){return this.get("constrainResolution")},e.prototype.getHints=function(t){return t!==void 0?(t[0]=this.hints_[0],t[1]=this.hints_[1],t):this.hints_.slice()},e.prototype.calculateExtent=function(t){var i=this.calculateExtentInternal(t);return ts(i,this.getProjection())},e.prototype.calculateExtentInternal=function(t){var i=t||this.getViewportSizeMinusPadding_(),n=this.getCenterInternal();J(n,1);var a=this.getResolution();J(a!==void 0,2);var s=this.getRotation();return J(s!==void 0,3),Ln(n,a,s,i)},e.prototype.getMaxResolution=function(){return this.maxResolution_},e.prototype.getMinResolution=function(){return this.minResolution_},e.prototype.getMaxZoom=function(){return this.getZoomForResolution(this.minResolution_)},e.prototype.setMaxZoom=function(t){this.applyOptions_(this.getUpdatedOptions_({maxZoom:t}))},e.prototype.getMinZoom=function(){return this.getZoomForResolution(this.maxResolution_)},e.prototype.setMinZoom=function(t){this.applyOptions_(this.getUpdatedOptions_({minZoom:t}))},e.prototype.setConstrainResolution=function(t){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:t}))},e.prototype.getProjection=function(){return this.projection_},e.prototype.getResolution=function(){return this.get(Zt.RESOLUTION)},e.prototype.getResolutions=function(){return this.resolutions_},e.prototype.getResolutionForExtent=function(t,i){return this.getResolutionForExtentInternal(me(t,this.getProjection()),i)},e.prototype.getResolutionForExtentInternal=function(t,i){var n=i||this.getViewportSizeMinusPadding_(),a=at(t)/n[0],s=Et(t)/n[1];return Math.max(a,s)},e.prototype.getResolutionForValueFunction=function(t){var i=t||2,n=this.getConstrainedResolution(this.maxResolution_),a=this.minResolution_,s=Math.log(n/a)/Math.log(i);return function(o){var l=n/Math.pow(i,o*s);return l}},e.prototype.getRotation=function(){return this.get(Zt.ROTATION)},e.prototype.getValueForResolutionFunction=function(t){var i=Math.log(t||2),n=this.getConstrainedResolution(this.maxResolution_),a=this.minResolution_,s=Math.log(n/a)/i;return function(o){var l=Math.log(n/o)/i/s;return l}},e.prototype.getViewportSizeMinusPadding_=function(t){var i=this.getViewportSize_(t),n=this.padding_;return n&&(i=[i[0]-n[1]-n[3],i[1]-n[0]-n[2]]),i},e.prototype.getState=function(){var t=this.getProjection(),i=this.getResolution(),n=this.getRotation(),a=this.getCenterInternal(),s=this.padding_;if(s){var o=this.getViewportSizeMinusPadding_();a=La(a,this.getViewportSize_(),[o[0]/2+s[3],o[1]/2+s[0]],i,n)}return{center:a.slice(0),projection:t!==void 0?t:null,resolution:i,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:n,zoom:this.getZoom()}},e.prototype.getZoom=function(){var t,i=this.getResolution();return i!==void 0&&(t=this.getZoomForResolution(i)),t},e.prototype.getZoomForResolution=function(t){var i=this.minZoom_||0,n,a;if(this.resolutions_){var s=ma(this.resolutions_,t,1);i=s,n=this.resolutions_[s],s==this.resolutions_.length-1?a=2:a=n/this.resolutions_[s+1]}else n=this.maxResolution_,a=this.zoomFactor_;return i+Math.log(n/t)/Math.log(a)},e.prototype.getResolutionForZoom=function(t){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;var i=pt(Math.floor(t),0,this.resolutions_.length-2),n=this.resolutions_[i]/this.resolutions_[i+1];return this.resolutions_[i]/Math.pow(n,pt(t-i,0,1))}else return this.maxResolution_/Math.pow(this.zoomFactor_,t-this.minZoom_)},e.prototype.fit=function(t,i){var n;if(J(Array.isArray(t)||typeof t.getSimplifiedGeometry=="function",24),Array.isArray(t)){J(!Ss(t),25);var a=me(t,this.getProjection());n=ph(a)}else if(t.getType()===q.CIRCLE){var a=me(t.getExtent(),this.getProjection());n=ph(a),n.rotate(this.getRotation(),Ve(a))}else{var s=Pu();s?n=t.clone().transform(s,this.getProjection()):n=t}this.fitInternal(n,i)},e.prototype.rotatedExtentForGeometry=function(t){for(var i=this.getRotation(),n=Math.cos(i),a=Math.sin(-i),s=t.getFlatCoordinates(),o=t.getStride(),l=1/0,h=1/0,u=-1/0,d=-1/0,c=0,f=s.length;c<f;c+=o){var p=s[c]*n-s[c+1]*a,v=s[c]*a+s[c+1]*n;l=Math.min(l,p),h=Math.min(h,v),u=Math.max(u,p),d=Math.max(d,v)}return[l,h,u,d]},e.prototype.fitInternal=function(t,i){var n=i||{},a=n.size;a||(a=this.getViewportSizeMinusPadding_());var s=n.padding!==void 0?n.padding:[0,0,0,0],o=n.nearest!==void 0?n.nearest:!1,l;n.minResolution!==void 0?l=n.minResolution:n.maxZoom!==void 0?l=this.getResolutionForZoom(n.maxZoom):l=0;var h=this.rotatedExtentForGeometry(t),u=this.getResolutionForExtentInternal(h,[a[0]-s[1]-s[3],a[1]-s[0]-s[2]]);u=isNaN(u)?l:Math.max(u,l),u=this.getConstrainedResolution(u,o?0:1);var d=this.getRotation(),c=Math.sin(d),f=Math.cos(d),p=Ve(h);p[0]+=(s[1]-s[3])/2*u,p[1]+=(s[0]-s[2])/2*u;var v=p[0]*f-p[1]*c,m=p[1]*f+p[0]*c,_=this.getConstrainedCenter([v,m],u),g=n.callback?n.callback:Sr;n.duration!==void 0?this.animateInternal({resolution:u,center:_,duration:n.duration,easing:n.easing},g):(this.targetResolution_=u,this.targetCenter_=_,this.applyTargetState_(!1,!0),wn(g,!0))},e.prototype.centerOn=function(t,i,n){this.centerOnInternal(Ie(t,this.getProjection()),i,n)},e.prototype.centerOnInternal=function(t,i,n){this.setCenterInternal(La(t,i,n,this.getResolution(),this.getRotation()))},e.prototype.calculateCenterShift=function(t,i,n,a){var s,o=this.padding_;if(o&&t){var l=this.getViewportSizeMinusPadding_(-n),h=La(t,a,[l[0]/2+o[3],l[1]/2+o[0]],i,n);s=[t[0]-h[0],t[1]-h[1]]}return s},e.prototype.isDef=function(){return!!this.getCenterInternal()&&this.getResolution()!==void 0},e.prototype.adjustCenter=function(t){var i=Bl(this.targetCenter_,this.getProjection());this.setCenter([i[0]+t[0],i[1]+t[1]])},e.prototype.adjustCenterInternal=function(t){var i=this.targetCenter_;this.setCenterInternal([i[0]+t[0],i[1]+t[1]])},e.prototype.adjustResolution=function(t,i){var n=i&&Ie(i,this.getProjection());this.adjustResolutionInternal(t,n)},e.prototype.adjustResolutionInternal=function(t,i){var n=this.getAnimating()||this.getInteracting(),a=this.getViewportSize_(this.getRotation()),s=this.constraints_.resolution(this.targetResolution_*t,0,a,n);i&&(this.targetCenter_=this.calculateCenterZoom(s,i)),this.targetResolution_*=t,this.applyTargetState_()},e.prototype.adjustZoom=function(t,i){this.adjustResolution(Math.pow(this.zoomFactor_,-t),i)},e.prototype.adjustRotation=function(t,i){i&&(i=Ie(i,this.getProjection())),this.adjustRotationInternal(t,i)},e.prototype.adjustRotationInternal=function(t,i){var n=this.getAnimating()||this.getInteracting(),a=this.constraints_.rotation(this.targetRotation_+t,n);i&&(this.targetCenter_=this.calculateCenterRotate(a,i)),this.targetRotation_+=t,this.applyTargetState_()},e.prototype.setCenter=function(t){this.setCenterInternal(t&&Ie(t,this.getProjection()))},e.prototype.setCenterInternal=function(t){this.targetCenter_=t,this.applyTargetState_()},e.prototype.setHint=function(t,i){return this.hints_[t]+=i,this.changed(),this.hints_[t]},e.prototype.setResolution=function(t){this.targetResolution_=t,this.applyTargetState_()},e.prototype.setRotation=function(t){this.targetRotation_=t,this.applyTargetState_()},e.prototype.setZoom=function(t){this.setResolution(this.getResolutionForZoom(t))},e.prototype.applyTargetState_=function(t,i){var n=this.getAnimating()||this.getInteracting()||i,a=this.constraints_.rotation(this.targetRotation_,n),s=this.getViewportSize_(a),o=this.constraints_.resolution(this.targetResolution_,0,s,n),l=this.constraints_.center(this.targetCenter_,o,s,n,this.calculateCenterShift(this.targetCenter_,o,a,s));this.get(Zt.ROTATION)!==a&&this.set(Zt.ROTATION,a),this.get(Zt.RESOLUTION)!==o&&(this.set(Zt.RESOLUTION,o),this.set("zoom",this.getZoom(),!0)),(!l||!this.get(Zt.CENTER)||!zn(this.get(Zt.CENTER),l))&&this.set(Zt.CENTER,l),this.getAnimating()&&!t&&this.cancelAnimations(),this.cancelAnchor_=void 0},e.prototype.resolveConstraints=function(t,i,n){var a=t!==void 0?t:200,s=i||0,o=this.constraints_.rotation(this.targetRotation_),l=this.getViewportSize_(o),h=this.constraints_.resolution(this.targetResolution_,s,l),u=this.constraints_.center(this.targetCenter_,h,l,!1,this.calculateCenterShift(this.targetCenter_,h,o,l));if(a===0&&!this.cancelAnchor_){this.targetResolution_=h,this.targetRotation_=o,this.targetCenter_=u,this.applyTargetState_();return}var d=n||(a===0?this.cancelAnchor_:void 0);this.cancelAnchor_=void 0,(this.getResolution()!==h||this.getRotation()!==o||!this.getCenterInternal()||!zn(this.getCenterInternal(),u))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:o,center:u,resolution:h,duration:a,easing:sy,anchor:d}))},e.prototype.beginInteraction=function(){this.resolveConstraints(0),this.setHint(kt.INTERACTING,1)},e.prototype.endInteraction=function(t,i,n){var a=n&&Ie(n,this.getProjection());this.endInteractionInternal(t,i,a)},e.prototype.endInteractionInternal=function(t,i,n){this.setHint(kt.INTERACTING,-1),this.resolveConstraints(t,i,n)},e.prototype.getConstrainedCenter=function(t,i){var n=this.getViewportSize_(this.getRotation());return this.constraints_.center(t,i||this.getResolution(),n)},e.prototype.getConstrainedZoom=function(t,i){var n=this.getResolutionForZoom(t);return this.getZoomForResolution(this.getConstrainedResolution(n,i))},e.prototype.getConstrainedResolution=function(t,i){var n=i||0,a=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(t,n,a)},e}(li);function wn(r,e){setTimeout(function(){r(e)},0)}function My(r){if(r.extent!==void 0){var e=r.smoothExtentConstraint!==void 0?r.smoothExtentConstraint:!0;return oh(r.extent,r.constrainOnlyCenter,e)}var t=Rs(r.projection,"EPSG:3857");if(r.multiWorld!==!0&&t.isGlobal()){var i=t.getExtent().slice();return i[0]=-1/0,i[2]=1/0,oh(i,!1,!1)}return ty}function Ty(r){var e,t,i,n=28,a=2,s=r.minZoom!==void 0?r.minZoom:Ra,o=r.maxZoom!==void 0?r.maxZoom:n,l=r.zoomFactor!==void 0?r.zoomFactor:a,h=r.multiWorld!==void 0?r.multiWorld:!1,u=r.smoothResolutionConstraint!==void 0?r.smoothResolutionConstraint:!0,d=r.showFullExtent!==void 0?r.showFullExtent:!1,c=Rs(r.projection,"EPSG:3857"),f=c.getExtent(),p=r.constrainOnlyCenter,v=r.extent;if(!h&&!v&&c.isGlobal()&&(p=!1,v=f),r.resolutions!==void 0){var m=r.resolutions;t=m[s],i=m[o]!==void 0?m[o]:m[m.length-1],r.constrainResolution?e=ey(m,u,!p&&v,d):e=lh(t,i,u,!p&&v,d)}else{var _=f?Math.max(at(f),Et(f)):360*Yt[ge.DEGREES]/c.getMetersPerUnit(),g=_/$s/Math.pow(a,Ra),y=g/Math.pow(a,n-Ra);t=r.maxResolution,t!==void 0?s=0:t=g/Math.pow(l,s),i=r.minResolution,i===void 0&&(r.maxZoom!==void 0?r.maxResolution!==void 0?i=t/Math.pow(l,o):i=g/Math.pow(l,o):i=y),o=s+Math.floor(Math.log(t/i)/Math.log(l)),i=t/Math.pow(l,o-s),r.constrainResolution?e=iy(l,t,i,u,!p&&v,d):e=lh(t,i,u,!p&&v,d)}return{constraint:e,maxResolution:t,minResolution:i,minZoom:s,zoomFactor:l}}function Sy(r){var e=r.enableRotation!==void 0?r.enableRotation:!0;if(e){var t=r.constrainRotation;return t===void 0||t===!0?ay():t===!1?hh:typeof t=="number"?ny(t):hh}else return ry}function Oy(r){return!(r.sourceCenter&&r.targetCenter&&!zn(r.sourceCenter,r.targetCenter)||r.sourceResolution!==r.targetResolution||r.sourceRotation!==r.targetRotation)}function La(r,e,t,i,n){var a=Math.cos(-n),s=Math.sin(-n),o=r[0]*a-r[1]*s,l=r[1]*a+r[0]*s;o+=(e[0]/2-t[0])*i,l+=(t[1]-e[1]/2)*i,s=-s;var h=o*a-l*s,u=l*a+o*s;return[h,u]}const Ry=Iy,rt={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};var Ly=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Py=function(r){Ly(e,r);function e(t){var i=r.call(this)||this;i.on,i.once,i.un,i.background_=t.background;var n=st({},t);return typeof t.properties=="object"&&(delete n.properties,st(n,t.properties)),n[rt.OPACITY]=t.opacity!==void 0?t.opacity:1,J(typeof n[rt.OPACITY]=="number",64),n[rt.VISIBLE]=t.visible!==void 0?t.visible:!0,n[rt.Z_INDEX]=t.zIndex,n[rt.MAX_RESOLUTION]=t.maxResolution!==void 0?t.maxResolution:1/0,n[rt.MIN_RESOLUTION]=t.minResolution!==void 0?t.minResolution:0,n[rt.MIN_ZOOM]=t.minZoom!==void 0?t.minZoom:-1/0,n[rt.MAX_ZOOM]=t.maxZoom!==void 0?t.maxZoom:1/0,i.className_=n.className!==void 0?n.className:"ol-layer",delete n.className,i.setProperties(n),i.state_=null,i}return e.prototype.getBackground=function(){return this.background_},e.prototype.getClassName=function(){return this.className_},e.prototype.getLayerState=function(t){var i=this.state_||{layer:this,managed:t===void 0?!0:t},n=this.getZIndex();return i.opacity=pt(Math.round(this.getOpacity()*100)/100,0,1),i.visible=this.getVisible(),i.extent=this.getExtent(),i.zIndex=n===void 0&&!i.managed?1/0:n,i.maxResolution=this.getMaxResolution(),i.minResolution=Math.max(this.getMinResolution(),0),i.minZoom=this.getMinZoom(),i.maxZoom=this.getMaxZoom(),this.state_=i,i},e.prototype.getLayersArray=function(t){return K()},e.prototype.getLayerStatesArray=function(t){return K()},e.prototype.getExtent=function(){return this.get(rt.EXTENT)},e.prototype.getMaxResolution=function(){return this.get(rt.MAX_RESOLUTION)},e.prototype.getMinResolution=function(){return this.get(rt.MIN_RESOLUTION)},e.prototype.getMinZoom=function(){return this.get(rt.MIN_ZOOM)},e.prototype.getMaxZoom=function(){return this.get(rt.MAX_ZOOM)},e.prototype.getOpacity=function(){return this.get(rt.OPACITY)},e.prototype.getSourceState=function(){return K()},e.prototype.getVisible=function(){return this.get(rt.VISIBLE)},e.prototype.getZIndex=function(){return this.get(rt.Z_INDEX)},e.prototype.setBackground=function(t){this.background_=t,this.changed()},e.prototype.setExtent=function(t){this.set(rt.EXTENT,t)},e.prototype.setMaxResolution=function(t){this.set(rt.MAX_RESOLUTION,t)},e.prototype.setMinResolution=function(t){this.set(rt.MIN_RESOLUTION,t)},e.prototype.setMaxZoom=function(t){this.set(rt.MAX_ZOOM,t)},e.prototype.setMinZoom=function(t){this.set(rt.MIN_ZOOM,t)},e.prototype.setOpacity=function(t){J(typeof t=="number",64),this.set(rt.OPACITY,t)},e.prototype.setVisible=function(t){this.set(rt.VISIBLE,t)},e.prototype.setZIndex=function(t){this.set(rt.Z_INDEX,t)},e.prototype.disposeInternal=function(){this.state_&&(this.state_.layer=null,this.state_=null),r.prototype.disposeInternal.call(this)},e}(li);const Fy=Py,as={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},ya={UNDEFINED:"undefined",LOADING:"loading",READY:"ready",ERROR:"error"};var ky=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Dy=function(r){ky(e,r);function e(t){var i=this,n=st({},t);delete n.source,i=r.call(this,n)||this,i.on,i.once,i.un,i.mapPrecomposeKey_=null,i.mapRenderKey_=null,i.sourceChangeKey_=null,i.renderer_=null,i.rendered=!1,t.render&&(i.render=t.render),t.map&&i.setMap(t.map),i.addChangeListener(rt.SOURCE,i.handleSourcePropertyChange_);var a=t.source?t.source:null;return i.setSource(a),i}return e.prototype.getLayersArray=function(t){var i=t||[];return i.push(this),i},e.prototype.getLayerStatesArray=function(t){var i=t||[];return i.push(this.getLayerState()),i},e.prototype.getSource=function(){return this.get(rt.SOURCE)||null},e.prototype.getRenderSource=function(){return this.getSource()},e.prototype.getSourceState=function(){var t=this.getSource();return t?t.getState():ya.UNDEFINED},e.prototype.handleSourceChange_=function(){this.changed()},e.prototype.handleSourcePropertyChange_=function(){this.sourceChangeKey_&&(Wt(this.sourceChangeKey_),this.sourceChangeKey_=null);var t=this.getSource();t&&(this.sourceChangeKey_=ee(t,At.CHANGE,this.handleSourceChange_,this)),this.changed()},e.prototype.getFeatures=function(t){return this.renderer_?this.renderer_.getFeatures(t):new Promise(function(i){return i([])})},e.prototype.getData=function(t){return!this.renderer_||!this.rendered?null:this.renderer_.getData(t)},e.prototype.render=function(t,i){var n=this.getRenderer();if(n.prepareFrame(t))return this.rendered=!0,n.renderFrame(t,i)},e.prototype.unrender=function(){this.rendered=!1},e.prototype.setMapInternal=function(t){t||this.unrender(),this.set(rt.MAP,t)},e.prototype.getMapInternal=function(){return this.get(rt.MAP)},e.prototype.setMap=function(t){this.mapPrecomposeKey_&&(Wt(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),t||this.changed(),this.mapRenderKey_&&(Wt(this.mapRenderKey_),this.mapRenderKey_=null),t&&(this.mapPrecomposeKey_=ee(t,as.PRECOMPOSE,function(i){var n=i,a=n.frameState.layerStatesArray,s=this.getLayerState(!1);J(!a.some(function(o){return o.layer===s.layer}),67),a.push(s)},this),this.mapRenderKey_=ee(this,At.CHANGE,t.render,t),this.changed())},e.prototype.setSource=function(t){this.set(rt.SOURCE,t)},e.prototype.getRenderer=function(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_},e.prototype.hasRenderer=function(){return!!this.renderer_},e.prototype.createRenderer=function(){return null},e.prototype.disposeInternal=function(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),r.prototype.disposeInternal.call(this)},e}(Fy);const js=Dy;var By=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Ny=function(r){By(e,r);function e(t){var i=t||{};return r.call(this,i)||this}return e}(js);const zy=Ny,X={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};var Gy=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),$y=function(r){Gy(e,r);function e(t){var i=r.call(this)||this;return i.ready=!0,i.boundHandleImageChange_=i.handleImageChange_.bind(i),i.layer_=t,i.declutterExecutorGroup=null,i}return e.prototype.getFeatures=function(t){return K()},e.prototype.getData=function(t){return null},e.prototype.prepareFrame=function(t){return K()},e.prototype.renderFrame=function(t,i){return K()},e.prototype.loadedTileCallback=function(t,i,n){t[i]||(t[i]={}),t[i][n.tileCoord.toString()]=n},e.prototype.createLoadedTileFinder=function(t,i,n){return function(a,s){var o=this.loadedTileCallback.bind(this,n,a);return t.forEachLoadedTile(i,a,s,o)}.bind(this)},e.prototype.forEachFeatureAtCoordinate=function(t,i,n,a,s){},e.prototype.getDataAtPixel=function(t,i,n){return null},e.prototype.getLayer=function(){return this.layer_},e.prototype.handleFontsChanged=function(){},e.prototype.handleImageChange_=function(t){var i=t.target;i.getState()===X.LOADED&&this.renderIfReadyAndVisible()},e.prototype.loadImage=function(t){var i=t.getState();return i!=X.LOADED&&i!=X.ERROR&&t.addEventListener(At.CHANGE,this.boundHandleImageChange_),i==X.IDLE&&(t.load(),i=t.getState()),i==X.LOADED},e.prototype.renderIfReadyAndVisible=function(){var t=this.getLayer();t.getVisible()&&t.getSourceState()==ya.READY&&t.changed()},e.prototype.disposeInternal=function(){delete this.layer_,r.prototype.disposeInternal.call(this)},e}(ad);const Vy=$y;var Uy=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),jy=function(r){Uy(e,r);function e(t,i,n,a){var s=r.call(this,t)||this;return s.inversePixelTransform=i,s.frameState=n,s.context=a,s}return e}(oi);const Wy=jy;var Yy=/^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,qy=/^([a-z]*)$|^hsla?\(.*\)$/i;function gd(r){return typeof r=="string"?r:_d(r)}function Xy(r){var e=document.createElement("div");if(e.style.color=r,e.style.color!==""){document.body.appendChild(e);var t=getComputedStyle(e).color;return document.body.removeChild(e),t}else return""}var Hy=function(){var r=1024,e={},t=0;return function(i){var n;if(e.hasOwnProperty(i))n=e[i];else{if(t>=r){var a=0;for(var s in e)a++&3||(delete e[s],--t)}n=Zy(i),e[i]=n,++t}return n}}();function qn(r){return Array.isArray(r)?r:Hy(r)}function Zy(r){var e,t,i,n,a;if(qy.exec(r)&&(r=Xy(r)),Yy.exec(r)){var s=r.length-1,o=void 0;s<=4?o=1:o=2;var l=s===4||s===8;e=parseInt(r.substr(1+0*o,o),16),t=parseInt(r.substr(1+1*o,o),16),i=parseInt(r.substr(1+2*o,o),16),l?n=parseInt(r.substr(1+3*o,o),16):n=255,o==1&&(e=(e<<4)+e,t=(t<<4)+t,i=(i<<4)+i,l&&(n=(n<<4)+n)),a=[e,t,i,n/255]}else r.indexOf("rgba(")==0?(a=r.slice(5,-1).split(",").map(Number),vh(a)):r.indexOf("rgb(")==0?(a=r.slice(4,-1).split(",").map(Number),a.push(1),vh(a)):J(!1,14);return a}function vh(r){return r[0]=pt(r[0]+.5|0,0,255),r[1]=pt(r[1]+.5|0,0,255),r[2]=pt(r[2]+.5|0,0,255),r[3]=pt(r[3],0,1),r}function _d(r){var e=r[0];e!=(e|0)&&(e=e+.5|0);var t=r[1];t!=(t|0)&&(t=t+.5|0);var i=r[2];i!=(i|0)&&(i=i+.5|0);var n=r[3]===void 0?1:Math.round(r[3]*100)/100;return"rgba("+e+","+t+","+i+","+n+")"}function Ht(r,e,t,i){var n;return t&&t.length?n=t.shift():_a?n=new OffscreenCanvas(r||300,e||300):n=document.createElement("canvas"),r&&(n.width=r),e&&(n.height=e),n.getContext("2d",i)}var Ky=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),mr=null;function Qy(){var r=document.createElement("canvas");r.width=1,r.height=1,mr=r.getContext("2d")}var Jy=function(r){Ky(e,r);function e(t){var i=r.call(this,t)||this;return i.container=null,i.renderedResolution,i.tempTransform=$e(),i.pixelTransform=$e(),i.inversePixelTransform=$e(),i.context=null,i.containerReused=!1,i.pixelContext_=null,i.frameState=null,i}return e.prototype.getImageData=function(t,i,n){mr||Qy(),mr.clearRect(0,0,1,1);var a;try{mr.drawImage(t,i,n,1,1,0,0,1,1),a=mr.getImageData(0,0,1,1).data}catch{return null}return a},e.prototype.getBackground=function(t){var i=this.getLayer(),n=i.getBackground();return typeof n=="function"&&(n=n(t.viewState.resolution)),n||void 0},e.prototype.useContainer=function(t,i,n,a){var s=this.getLayer().getClassName(),o,l;if(t&&t.className===s&&t.style.opacity===""&&n===1&&(!a||t.style.backgroundColor&&Ki(qn(t.style.backgroundColor),qn(a)))){var h=t.firstElementChild;h instanceof HTMLCanvasElement&&(l=h.getContext("2d"))}if(l&&l.canvas.style.transform===i?(this.container=t,this.context=l,this.containerReused=!0):this.containerReused&&(this.container=null,this.context=null,this.containerReused=!1),!this.container){o=document.createElement("div"),o.className=s;var u=o.style;u.position="absolute",u.width="100%",u.height="100%",a&&(u.backgroundColor=a),l=Ht();var h=l.canvas;o.appendChild(h),u=h.style,u.position="absolute",u.left="0",u.transformOrigin="top left",this.container=o,this.context=l}},e.prototype.clipUnrotated=function(t,i,n){var a=si(n),s=ca(n),o=da(n),l=ua(n);mt(i.coordinateToPixelTransform,a),mt(i.coordinateToPixelTransform,s),mt(i.coordinateToPixelTransform,o),mt(i.coordinateToPixelTransform,l);var h=this.inversePixelTransform;mt(h,a),mt(h,s),mt(h,o),mt(h,l),t.save(),t.beginPath(),t.moveTo(Math.round(a[0]),Math.round(a[1])),t.lineTo(Math.round(s[0]),Math.round(s[1])),t.lineTo(Math.round(o[0]),Math.round(o[1])),t.lineTo(Math.round(l[0]),Math.round(l[1])),t.clip()},e.prototype.dispatchRenderEvent_=function(t,i,n){var a=this.getLayer();if(a.hasListener(t)){var s=new Wy(t,this.inversePixelTransform,n,i);a.dispatchEvent(s)}},e.prototype.preRender=function(t,i){this.frameState=i,this.dispatchRenderEvent_(as.PRERENDER,t,i)},e.prototype.postRender=function(t,i){this.dispatchRenderEvent_(as.POSTRENDER,t,i)},e.prototype.getRenderTransform=function(t,i,n,a,s,o,l){var h=s/2,u=o/2,d=a/i,c=-d,f=-t[0]+l,p=-t[1];return de(this.tempTransform,h,u,d,c,-n,f,p)},e.prototype.getDataAtPixel=function(t,i,n){var a=mt(this.inversePixelTransform,t.slice()),s=this.context,o=this.getLayer(),l=o.getExtent();if(l){var h=mt(i.pixelToCoordinateTransform,t.slice());if(!Hi(l,h))return null}var u=Math.round(a[0]),d=Math.round(a[1]),c=this.pixelContext_;if(!c){var f=document.createElement("canvas");f.width=1,f.height=1,c=f.getContext("2d"),this.pixelContext_=c}c.clearRect(0,0,1,1);var p;try{c.drawImage(s.canvas,u,d,1,1,0,0,1,1),p=c.getImageData(0,0,1,1).data}catch(v){return v.name==="SecurityError"?(this.pixelContext_=null,new Uint8Array):p}return p[3]===0?null:p},e.prototype.disposeInternal=function(){delete this.frameState,r.prototype.disposeInternal.call(this)},e}(Vy);const Ws=Jy;var yd=.5,Xn={imageSmoothingEnabled:!1,msImageSmoothingEnabled:!1},bd={imageSmoothingEnabled:!0,msImageSmoothingEnabled:!0},tb=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),eb=function(r){tb(e,r);function e(t){var i=r.call(this,t)||this;return i.image_=null,i}return e.prototype.getImage=function(){return this.image_?this.image_.getImage():null},e.prototype.prepareFrame=function(t){var i=t.layerStatesArray[t.layerIndex],n=t.pixelRatio,a=t.viewState,s=a.resolution,o=this.getLayer().getSource(),l=t.viewHints,h=t.extent;if(i.extent!==void 0&&(h=Pi(h,me(i.extent,a.projection))),!l[kt.ANIMATING]&&!l[kt.INTERACTING]&&!Ss(h))if(o){var u=a.projection,d=o.getImage(h,s,n,u);d&&this.loadImage(d)?this.image_=d:this.image_=null}else this.image_=null;return!!this.image_},e.prototype.getData=function(t){var i=this.frameState;if(!i)return null;var n=this.getLayer(),a=mt(i.pixelToCoordinateTransform,t.slice()),s=n.getExtent();if(s&&!Hi(s,a))return null;var o=this.image_.getExtent(),l=this.image_.getImage(),h=at(o),u=Math.floor(l.width*((a[0]-o[0])/h));if(u<0||u>=l.width)return null;var d=Et(o),c=Math.floor(l.height*((o[3]-a[1])/d));return c<0||c>=l.height?null:this.getImageData(l,u,c)},e.prototype.renderFrame=function(t,i){var n=this.image_,a=n.getExtent(),s=n.getResolution(),o=n.getPixelRatio(),l=t.layerStatesArray[t.layerIndex],h=t.pixelRatio,u=t.viewState,d=u.center,c=u.resolution,f=t.size,p=h*s/(c*o),v=Math.round(f[0]*h),m=Math.round(f[1]*h),_=u.rotation;if(_){var g=Math.round(Math.sqrt(v*v+m*m));v=g,m=g}de(this.pixelTransform,t.size[0]/2,t.size[1]/2,1/h,1/h,_,-v/2,-m/2),Ns(this.inversePixelTransform,this.pixelTransform);var y=zs(this.pixelTransform);this.useContainer(i,y,l.opacity,this.getBackground(t));var b=this.context,x=b.canvas;x.width!=v||x.height!=m?(x.width=v,x.height=m):this.containerReused||b.clearRect(0,0,v,m);var A=!1,w=!0;if(l.extent){var C=me(l.extent,u.projection);w=Tt(C,t.extent),A=w&&!De(C,t.extent),A&&this.clipUnrotated(b,t,C)}var T=n.getImage(),P=de(this.tempTransform,v/2,m/2,p,p,0,o*(a[0]-d[0])/s,o*(d[1]-a[3])/s);this.renderedResolution=s*h/o;var k=T.width*P[0],B=T.height*P[3];if(this.getLayer().getSource().getInterpolate()||st(b,Xn),this.preRender(b,t),w&&k>=.5&&B>=.5){var D=P[4],Y=P[5],$=l.opacity,V=void 0;$!==1&&(V=b.globalAlpha,b.globalAlpha=$),b.drawImage(T,0,0,+T.width,+T.height,Math.round(D),Math.round(Y),Math.round(k),Math.round(B)),$!==1&&(b.globalAlpha=V)}return this.postRender(b,t),A&&b.restore(),st(b,bd),y!==x.style.transform&&(x.style.transform=y),this.container},e}(Ws);const ib=eb;var rb=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),nb=function(r){rb(e,r);function e(t){return r.call(this,t)||this}return e.prototype.createRenderer=function(){return new ib(this)},e.prototype.getData=function(t){return r.prototype.getData.call(this,t)},e}(zy);const ab=nb,En={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};var sb=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),ob=function(r){sb(e,r);function e(t){var i=this,n=t||{},a=st({},n);return delete a.preload,delete a.useInterimTilesOnError,i=r.call(this,a)||this,i.on,i.once,i.un,i.setPreload(n.preload!==void 0?n.preload:0),i.setUseInterimTilesOnError(n.useInterimTilesOnError!==void 0?n.useInterimTilesOnError:!0),i}return e.prototype.getPreload=function(){return this.get(En.PRELOAD)},e.prototype.setPreload=function(t){this.set(En.PRELOAD,t)},e.prototype.getUseInterimTilesOnError=function(){return this.get(En.USE_INTERIM_TILES_ON_ERROR)},e.prototype.setUseInterimTilesOnError=function(t){this.set(En.USE_INTERIM_TILES_ON_ERROR,t)},e.prototype.getData=function(t){return r.prototype.getData.call(this,t)},e}(js);const lb=ob,U={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};var hb=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),ub=function(r){hb(e,r);function e(t,i,n){var a=r.call(this)||this,s=n||{};return a.tileCoord=t,a.state=i,a.interimTile=null,a.key="",a.transition_=s.transition===void 0?250:s.transition,a.transitionStarts_={},a.interpolate=!!s.interpolate,a}return e.prototype.changed=function(){this.dispatchEvent(At.CHANGE)},e.prototype.release=function(){},e.prototype.getKey=function(){return this.key+"/"+this.tileCoord},e.prototype.getInterimTile=function(){if(!this.interimTile)return this;var t=this.interimTile;do{if(t.getState()==U.LOADED)return this.transition_=0,t;t=t.interimTile}while(t);return this},e.prototype.refreshInterimChain=function(){if(this.interimTile){var t=this.interimTile,i=this;do{if(t.getState()==U.LOADED){t.interimTile=null;break}else t.getState()==U.LOADING?i=t:t.getState()==U.IDLE?i.interimTile=t.interimTile:i=t;t=i.interimTile}while(t)}},e.prototype.getTileCoord=function(){return this.tileCoord},e.prototype.getState=function(){return this.state},e.prototype.setState=function(t){if(this.state!==U.ERROR&&this.state>t)throw new Error("Tile load sequence violation");this.state=t,this.changed()},e.prototype.load=function(){K()},e.prototype.getAlpha=function(t,i){if(!this.transition_)return 1;var n=this.transitionStarts_[t];if(!n)n=i,this.transitionStarts_[t]=n;else if(n===-1)return 1;var a=i-n+1e3/60;return a>=this.transition_?1:ud(a/this.transition_)},e.prototype.inTransition=function(t){return this.transition_?this.transitionStarts_[t]!==-1:!1},e.prototype.endTransition=function(t){this.transition_&&(this.transitionStarts_[t]=-1)},e}(tn);const xd=ub;var db=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),cb=function(r){db(e,r);function e(t,i,n,a){var s=r.call(this)||this;return s.extent=t,s.pixelRatio_=n,s.resolution=i,s.state=a,s}return e.prototype.changed=function(){this.dispatchEvent(At.CHANGE)},e.prototype.getExtent=function(){return this.extent},e.prototype.getImage=function(){return K()},e.prototype.getPixelRatio=function(){return this.pixelRatio_},e.prototype.getResolution=function(){return this.resolution},e.prototype.getState=function(){return this.state},e.prototype.load=function(){K()},e}(tn);const Ad=cb;var fb=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),pb=function(r){fb(e,r);function e(t,i,n,a,s,o){var l=r.call(this,t,i,n,X.IDLE)||this;return l.src_=a,l.image_=new Image,s!==null&&(l.image_.crossOrigin=s),l.unlisten_=null,l.state=X.IDLE,l.imageLoadFunction_=o,l}return e.prototype.getImage=function(){return this.image_},e.prototype.handleImageError_=function(){this.state=X.ERROR,this.unlistenImage_(),this.changed()},e.prototype.handleImageLoad_=function(){this.resolution===void 0&&(this.resolution=Et(this.extent)/this.image_.height),this.state=X.LOADED,this.unlistenImage_(),this.changed()},e.prototype.load=function(){(this.state==X.IDLE||this.state==X.ERROR)&&(this.state=X.LOADING,this.changed(),this.imageLoadFunction_(this,this.src_),this.unlisten_=Ys(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))},e.prototype.setImage=function(t){this.image_=t,this.resolution=Et(this.extent)/this.image_.height},e.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},e}(Ad);function Ys(r,e,t){var i=r,n=!0,a=!1,s=!1,o=[Wn(i,At.LOAD,function(){s=!0,a||e()})];return i.src&&k0?(a=!0,i.decode().then(function(){n&&e()}).catch(function(l){n&&(s?e():t())})):o.push(Wn(i,At.ERROR,t)),function(){n=!1,o.forEach(Wt)}}const vb=pb;var mb=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),gb=function(r){mb(e,r);function e(t,i,n,a,s,o){var l=r.call(this,t,i,o)||this;return l.crossOrigin_=a,l.src_=n,l.key=n,l.image_=new Image,a!==null&&(l.image_.crossOrigin=a),l.unlisten_=null,l.tileLoadFunction_=s,l}return e.prototype.getImage=function(){return this.image_},e.prototype.setImage=function(t){this.image_=t,this.state=U.LOADED,this.unlistenImage_(),this.changed()},e.prototype.handleImageError_=function(){this.state=U.ERROR,this.unlistenImage_(),this.image_=_b(),this.changed()},e.prototype.handleImageLoad_=function(){var t=this.image_;t.naturalWidth&&t.naturalHeight?this.state=U.LOADED:this.state=U.EMPTY,this.unlistenImage_(),this.changed()},e.prototype.load=function(){this.state==U.ERROR&&(this.state=U.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==U.IDLE&&(this.state=U.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=Ys(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))},e.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},e}(xd);function _b(){var r=Ht(1,1);return r.fillStyle="rgba(0,0,0,0)",r.fillRect(0,0,1,1),r.canvas}const Cd=gb;var yb=10,mh=.25,bb=function(){function r(e,t,i,n,a,s){this.sourceProj_=e,this.targetProj_=t;var o={},l=Er(this.targetProj_,this.sourceProj_);this.transformInv_=function(y){var b=y[0]+"/"+y[1];return o[b]||(o[b]=l(y)),o[b]},this.maxSourceExtent_=n,this.errorThresholdSquared_=a*a,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!n&&!!this.sourceProj_.getExtent()&&at(n)==at(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?at(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?at(this.targetProj_.getExtent()):null;var h=si(i),u=ca(i),d=da(i),c=ua(i),f=this.transformInv_(h),p=this.transformInv_(u),v=this.transformInv_(d),m=this.transformInv_(c),_=yb+(s?Math.max(0,Math.ceil(ep(Ka(i)/(s*s*256*256)))):0);if(this.addQuad_(h,u,d,c,f,p,v,m,_),this.wrapsXInSource_){var g=1/0;this.triangles_.forEach(function(y,b,x){g=Math.min(g,y.source[0][0],y.source[1][0],y.source[2][0])}),this.triangles_.forEach(function(y){if(Math.max(y.source[0][0],y.source[1][0],y.source[2][0])-g>this.sourceWorldWidth_/2){var b=[[y.source[0][0],y.source[0][1]],[y.source[1][0],y.source[1][1]],[y.source[2][0],y.source[2][1]]];b[0][0]-g>this.sourceWorldWidth_/2&&(b[0][0]-=this.sourceWorldWidth_),b[1][0]-g>this.sourceWorldWidth_/2&&(b[1][0]-=this.sourceWorldWidth_),b[2][0]-g>this.sourceWorldWidth_/2&&(b[2][0]-=this.sourceWorldWidth_);var x=Math.min(b[0][0],b[1][0],b[2][0]),A=Math.max(b[0][0],b[1][0],b[2][0]);A-x<this.sourceWorldWidth_/2&&(y.source=b)}}.bind(this))}o={}}return r.prototype.addTriangle_=function(e,t,i,n,a,s){this.triangles_.push({source:[n,a,s],target:[e,t,i]})},r.prototype.addQuad_=function(e,t,i,n,a,s,o,l,h){var u=Pl([a,s,o,l]),d=this.sourceWorldWidth_?at(u)/this.sourceWorldWidth_:null,c=this.sourceWorldWidth_,f=this.sourceProj_.canWrapX()&&d>.5&&d<1,p=!1;if(h>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){var v=Pl([e,t,i,n]),m=at(v)/this.targetWorldWidth_;p=m>mh||p}!f&&this.sourceProj_.isGlobal()&&d&&(p=d>mh||p)}if(!(!p&&this.maxSourceExtent_&&isFinite(u[0])&&isFinite(u[1])&&isFinite(u[2])&&isFinite(u[3])&&!Tt(u,this.maxSourceExtent_))){var _=0;if(!p&&(!isFinite(a[0])||!isFinite(a[1])||!isFinite(s[0])||!isFinite(s[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(l[0])||!isFinite(l[1]))){if(h>0)p=!0;else if(_=(!isFinite(a[0])||!isFinite(a[1])?8:0)+(!isFinite(s[0])||!isFinite(s[1])?4:0)+(!isFinite(o[0])||!isFinite(o[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),_!=1&&_!=2&&_!=4&&_!=8)return}if(h>0){if(!p){var g=[(e[0]+i[0])/2,(e[1]+i[1])/2],y=this.transformInv_(g),b=void 0;if(f){var x=(ii(a[0],c)+ii(o[0],c))/2;b=x-ii(y[0],c)}else b=(a[0]+o[0])/2-y[0];var A=(a[1]+o[1])/2-y[1],w=b*b+A*A;p=w>this.errorThresholdSquared_}if(p){if(Math.abs(e[0]-i[0])<=Math.abs(e[1]-i[1])){var C=[(t[0]+i[0])/2,(t[1]+i[1])/2],T=this.transformInv_(C),P=[(n[0]+e[0])/2,(n[1]+e[1])/2],k=this.transformInv_(P);this.addQuad_(e,t,C,P,a,s,T,k,h-1),this.addQuad_(P,C,i,n,k,T,o,l,h-1)}else{var B=[(e[0]+t[0])/2,(e[1]+t[1])/2],D=this.transformInv_(B),Y=[(i[0]+n[0])/2,(i[1]+n[1])/2],$=this.transformInv_(Y);this.addQuad_(e,B,Y,n,a,D,$,l,h-1),this.addQuad_(B,t,i,Y,D,s,o,$,h-1)}return}}if(f){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}_&11||this.addTriangle_(e,i,n,a,o,l),_&14||this.addTriangle_(e,i,t,a,o,s),_&&(_&13||this.addTriangle_(t,n,e,s,l,a),_&7||this.addTriangle_(t,n,i,s,l,o))}},r.prototype.calculateSourceExtent=function(){var e=qt();return this.triangles_.forEach(function(t,i,n){var a=t.source;br(e,a[0]),br(e,a[1]),br(e,a[2])}),e},r.prototype.getTriangles=function(){return this.triangles_},r}();const wd=bb;var Pa;function gh(r,e,t,i,n){r.beginPath(),r.moveTo(0,0),r.lineTo(e,t),r.lineTo(i,n),r.closePath(),r.save(),r.clip(),r.fillRect(0,0,Math.max(e,i)+1,Math.max(t,n)),r.restore()}function Fa(r,e){return Math.abs(r[e*4]-210)>2||Math.abs(r[e*4+3]-.75*255)>2}function xb(){if(Pa===void 0){var r=document.createElement("canvas").getContext("2d");r.globalCompositeOperation="lighter",r.fillStyle="rgba(210, 0, 0, 0.75)",gh(r,4,5,4,0),gh(r,4,5,0,5);var e=r.getImageData(0,0,3,3).data;Pa=Fa(e,0)||Fa(e,4)||Fa(e,8)}return Pa}function Or(r,e,t,i){var n=Xr(t,e,r),a=kl(e,i,t),s=e.getMetersPerUnit();s!==void 0&&(a*=s);var o=r.getMetersPerUnit();o!==void 0&&(a/=o);var l=r.getExtent();if(!l||Hi(l,n)){var h=kl(r,a,n)/a;isFinite(h)&&h>0&&(a/=h)}return a}function Ab(r,e,t,i){var n=Ve(t),a=Or(r,e,n,i);return(!isFinite(a)||a<=0)&&Mu(t,function(s){return a=Or(r,e,s,i),isFinite(a)&&a>0}),a}function Ed(r,e,t,i,n,a,s,o,l,h,u,d){var c=Ht(Math.round(t*r),Math.round(t*e));if(d||st(c,Xn),l.length===0)return c.canvas;c.scale(t,t);function f(b){return Math.round(b*t)/t}c.globalCompositeOperation="lighter";var p=qt();l.forEach(function(b,x,A){Cp(p,b.extent)});var v=at(p),m=Et(p),_=Ht(Math.round(t*v/i),Math.round(t*m/i));d||st(_,Xn);var g=t/i;l.forEach(function(b,x,A){var w=b.extent[0]-p[0],C=-(b.extent[3]-p[3]),T=at(b.extent),P=Et(b.extent);b.image.width>0&&b.image.height>0&&_.drawImage(b.image,h,h,b.image.width-2*h,b.image.height-2*h,w*g,C*g,T*g,P*g)});var y=si(s);return o.getTriangles().forEach(function(b,x,A){var w=b.source,C=b.target,T=w[0][0],P=w[0][1],k=w[1][0],B=w[1][1],D=w[2][0],Y=w[2][1],$=f((C[0][0]-y[0])/a),V=f(-(C[0][1]-y[1])/a),N=f((C[1][0]-y[0])/a),Q=f(-(C[1][1]-y[1])/a),H=f((C[2][0]-y[0])/a),Z=f(-(C[2][1]-y[1])/a),ot=T,I=P;T=0,P=0,k-=ot,B-=I,D-=ot,Y-=I;var ut=[[k,B,0,0,N-$],[D,Y,0,0,H-$],[0,0,k,B,Q-V],[0,0,D,Y,Z-V]],j=rp(ut);if(j){if(c.save(),c.beginPath(),xb()||!d){c.moveTo(N,Q);for(var dt=4,It=$-N,Nt=V-Q,Rt=0;Rt<dt;Rt++)c.lineTo(N+f((Rt+1)*It/dt),Q+f(Rt*Nt/(dt-1))),Rt!=dt-1&&c.lineTo(N+f((Rt+1)*It/dt),Q+f((Rt+1)*Nt/(dt-1)));c.lineTo(H,Z)}else c.moveTo(N,Q),c.lineTo($,V),c.lineTo(H,Z);c.clip(),c.transform(j[0],j[2],j[1],j[3],$,V),c.translate(p[0]-ot,p[3]-I),c.scale(i/t,-i/t),c.drawImage(_.canvas,0,0),c.restore()}}),u&&(c.save(),c.globalCompositeOperation="source-over",c.strokeStyle="black",c.lineWidth=1,o.getTriangles().forEach(function(b,x,A){var w=b.target,C=(w[0][0]-y[0])/a,T=-(w[0][1]-y[1])/a,P=(w[1][0]-y[0])/a,k=-(w[1][1]-y[1])/a,B=(w[2][0]-y[0])/a,D=-(w[2][1]-y[1])/a;c.beginPath(),c.moveTo(P,k),c.lineTo(C,T),c.lineTo(B,D),c.closePath(),c.stroke()}),c.restore()),c.canvas}var Cb=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),wb=function(r){Cb(e,r);function e(t,i,n,a,s,o,l,h,u,d,c,f){var p=r.call(this,s,U.IDLE,{interpolate:!!f})||this;p.renderEdges_=c!==void 0?c:!1,p.pixelRatio_=l,p.gutter_=h,p.canvas_=null,p.sourceTileGrid_=i,p.targetTileGrid_=a,p.wrappedTileCoord_=o||s,p.sourceTiles_=[],p.sourcesListenerKeys_=null,p.sourceZ_=0;var v=a.getTileCoordExtent(p.wrappedTileCoord_),m=p.targetTileGrid_.getExtent(),_=p.sourceTileGrid_.getExtent(),g=m?Pi(v,m):v;if(Ka(g)===0)return p.state=U.EMPTY,p;var y=t.getExtent();y&&(_?_=Pi(_,y):_=y);var b=a.getResolution(p.wrappedTileCoord_[0]),x=Ab(t,n,g,b);if(!isFinite(x)||x<=0)return p.state=U.EMPTY,p;var A=d!==void 0?d:yd;if(p.triangulation_=new wd(t,n,g,_,x*A,b),p.triangulation_.getTriangles().length===0)return p.state=U.EMPTY,p;p.sourceZ_=i.getZForResolution(x);var w=p.triangulation_.calculateSourceExtent();if(_&&(t.canWrapX()?(w[1]=pt(w[1],_[1],_[3]),w[3]=pt(w[3],_[1],_[3])):w=Pi(w,_)),!Ka(w))p.state=U.EMPTY;else{for(var C=i.getTileRangeForExtentAndZ(w,p.sourceZ_),T=C.minX;T<=C.maxX;T++)for(var P=C.minY;P<=C.maxY;P++){var k=u(p.sourceZ_,T,P,l);k&&p.sourceTiles_.push(k)}p.sourceTiles_.length===0&&(p.state=U.EMPTY)}return p}return e.prototype.getImage=function(){return this.canvas_},e.prototype.reproject_=function(){var t=[];if(this.sourceTiles_.forEach(function(u,d,c){u&&u.getState()==U.LOADED&&t.push({extent:this.sourceTileGrid_.getTileCoordExtent(u.tileCoord),image:u.getImage()})}.bind(this)),this.sourceTiles_.length=0,t.length===0)this.state=U.ERROR;else{var i=this.wrappedTileCoord_[0],n=this.targetTileGrid_.getTileSize(i),a=typeof n=="number"?n:n[0],s=typeof n=="number"?n:n[1],o=this.targetTileGrid_.getResolution(i),l=this.sourceTileGrid_.getResolution(this.sourceZ_),h=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=Ed(a,s,this.pixelRatio_,l,this.sourceTileGrid_.getExtent(),o,h,this.triangulation_,t,this.gutter_,this.renderEdges_,this.interpolate),this.state=U.LOADED}this.changed()},e.prototype.load=function(){if(this.state==U.IDLE){this.state=U.LOADING,this.changed();var t=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(function(i,n,a){var s=i.getState();if(s==U.IDLE||s==U.LOADING){t++;var o=ee(i,At.CHANGE,function(l){var h=i.getState();(h==U.LOADED||h==U.ERROR||h==U.EMPTY)&&(Wt(o),t--,t===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(o)}}.bind(this)),t===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(i,n,a){var s=i.getState();s==U.IDLE&&i.load()})}},e.prototype.unlistenSources_=function(){this.sourcesListenerKeys_.forEach(Wt),this.sourcesListenerKeys_=null},e}(xd);const Id=wb;var Md=function(){function r(e,t,i,n){this.minX=e,this.maxX=t,this.minY=i,this.maxY=n}return r.prototype.contains=function(e){return this.containsXY(e[1],e[2])},r.prototype.containsTileRange=function(e){return this.minX<=e.minX&&e.maxX<=this.maxX&&this.minY<=e.minY&&e.maxY<=this.maxY},r.prototype.containsXY=function(e,t){return this.minX<=e&&e<=this.maxX&&this.minY<=t&&t<=this.maxY},r.prototype.equals=function(e){return this.minX==e.minX&&this.minY==e.minY&&this.maxX==e.maxX&&this.maxY==e.maxY},r.prototype.extend=function(e){e.minX<this.minX&&(this.minX=e.minX),e.maxX>this.maxX&&(this.maxX=e.maxX),e.minY<this.minY&&(this.minY=e.minY),e.maxY>this.maxY&&(this.maxY=e.maxY)},r.prototype.getHeight=function(){return this.maxY-this.minY+1},r.prototype.getSize=function(){return[this.getWidth(),this.getHeight()]},r.prototype.getWidth=function(){return this.maxX-this.minX+1},r.prototype.intersects=function(e){return this.minX<=e.maxX&&this.maxX>=e.minX&&this.minY<=e.maxY&&this.maxY>=e.minY},r}();function mi(r,e,t,i,n){return n!==void 0?(n.minX=r,n.maxX=e,n.minY=t,n.maxY=i,n):new Md(r,e,t,i)}const Td=Md;var Eb=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`].join(""),"i"),_h=["style","variant","weight","size","lineHeight","family"],Sd=function(r){var e=r.match(Eb);if(!e)return null;for(var t={lineHeight:"normal",size:"1.2em",style:"normal",weight:"normal",variant:"normal"},i=0,n=_h.length;i<n;++i){var a=e[i+1];a!==void 0&&(t[_h[i]]=a)}return t.families=t.family.split(/,\s?/),t};function Od(r){return r===1?"":String(Math.round(r*100)/100)}function yh(r,e,t){return t===void 0&&(t=[0,0]),t[0]=r[0]+2*e,t[1]=r[1]+2*e,t}function Rd(r,e,t){return t===void 0&&(t=[0,0]),t[0]=r[0]*e+.5|0,t[1]=r[1]*e+.5|0,t}function Gt(r,e){return Array.isArray(r)?r:(e===void 0?e=[r,r]:(e[0]=r,e[1]=r),e)}var Ib=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Mb=function(r){Ib(e,r);function e(t){var i=r.call(this,t)||this;return i.extentChanged=!0,i.renderedExtent_=null,i.renderedPixelRatio,i.renderedProjection=null,i.renderedRevision,i.renderedTiles=[],i.newTiles_=!1,i.tmpExtent=qt(),i.tmpTileRange_=new Td(0,0,0,0),i}return e.prototype.isDrawableTile=function(t){var i=this.getLayer(),n=t.getState(),a=i.getUseInterimTilesOnError();return n==U.LOADED||n==U.EMPTY||n==U.ERROR&&!a},e.prototype.getTile=function(t,i,n,a){var s=a.pixelRatio,o=a.viewState.projection,l=this.getLayer(),h=l.getSource(),u=h.getTile(t,i,n,s,o);return u.getState()==U.ERROR&&(l.getUseInterimTilesOnError()?l.getPreload()>0&&(this.newTiles_=!0):u.setState(U.LOADED)),this.isDrawableTile(u)||(u=u.getInterimTile()),u},e.prototype.getData=function(t){var i=this.frameState;if(!i)return null;var n=this.getLayer(),a=mt(i.pixelToCoordinateTransform,t.slice()),s=n.getExtent();if(s&&!Hi(s,a))return null;for(var o=i.pixelRatio,l=i.viewState.projection,h=i.viewState,u=n.getRenderSource(),d=u.getTileGridForProjection(h.projection),c=u.getTilePixelRatio(i.pixelRatio),f=d.getZForResolution(h.resolution);f>=d.getMinZoom();--f){var p=d.getTileCoordForCoordAndZ(a,f),v=u.getTile(f,p[1],p[2],o,l);if(!(v instanceof Cd||v instanceof Id))return null;if(v.getState()===U.LOADED){var m=d.getOrigin(f),_=Gt(d.getTileSize(f)),g=d.getResolution(f),y=Math.floor(c*((a[0]-m[0])/g-p[1]*_[0])),b=Math.floor(c*((m[1]-a[1])/g-p[2]*_[1]));return this.getImageData(v.getImage(),y,b)}}return null},e.prototype.loadedTileCallback=function(t,i,n){return this.isDrawableTile(n)?r.prototype.loadedTileCallback.call(this,t,i,n):!1},e.prototype.prepareFrame=function(t){return!!this.getLayer().getSource()},e.prototype.renderFrame=function(t,i){var n=t.layerStatesArray[t.layerIndex],a=t.viewState,s=a.projection,o=a.resolution,l=a.center,h=a.rotation,u=t.pixelRatio,d=this.getLayer(),c=d.getSource(),f=c.getRevision(),p=c.getTileGridForProjection(s),v=p.getZForResolution(o,c.zDirection),m=p.getResolution(v),_=t.extent,g=n.extent&&me(n.extent,s);g&&(_=Pi(_,me(n.extent,s)));var y=c.getTilePixelRatio(u),b=Math.round(t.size[0]*y),x=Math.round(t.size[1]*y);if(h){var A=Math.round(Math.sqrt(b*b+x*x));b=A,x=A}var w=m*b/2/y,C=m*x/2/y,T=[l[0]-w,l[1]-C,l[0]+w,l[1]+C],P=p.getTileRangeForExtentAndZ(_,v),k={};k[v]={};var B=this.createLoadedTileFinder(c,s,k),D=this.tmpExtent,Y=this.tmpTileRange_;this.newTiles_=!1;for(var $=P.minX;$<=P.maxX;++$)for(var V=P.minY;V<=P.maxY;++V){var N=this.getTile(v,$,V,t);if(this.isDrawableTile(N)){var Q=nt(this);if(N.getState()==U.LOADED){k[v][N.tileCoord.toString()]=N;var H=N.inTransition(Q);!this.newTiles_&&(H||this.renderedTiles.indexOf(N)===-1)&&(this.newTiles_=!0)}if(N.getAlpha(Q,t.time)===1)continue}var Z=p.getTileCoordChildTileRange(N.tileCoord,Y,D),ot=!1;Z&&(ot=B(v+1,Z)),ot||p.forEachTileCoordParentTileRange(N.tileCoord,B,Y,D)}var I=m/o;de(this.pixelTransform,t.size[0]/2,t.size[1]/2,1/y,1/y,h,-b/2,-x/2);var ut=zs(this.pixelTransform);this.useContainer(i,ut,n.opacity,this.getBackground(t));var j=this.context,dt=j.canvas;Ns(this.inversePixelTransform,this.pixelTransform),de(this.tempTransform,b/2,x/2,I,I,0,-b/2,-x/2),dt.width!=b||dt.height!=x?(dt.width=b,dt.height=x):this.containerReused||j.clearRect(0,0,b,x),g&&this.clipUnrotated(j,t,g),c.getInterpolate()||st(j,Xn),this.preRender(j,t),this.renderedTiles.length=0;var It=Object.keys(k).map(Number);It.sort($i);var Nt,Rt,zt;n.opacity===1&&(!this.containerReused||c.getOpaque(t.viewState.projection))?It=It.reverse():(Nt=[],Rt=[]);for(var hi=It.length-1;hi>=0;--hi){var ie=It[hi],nn=c.getTilePixelSize(ie,u,s),an=p.getResolution(ie),Ce=an/m,ui=nn[0]*Ce*I,sn=nn[1]*Ce*I,Qi=p.getTileCoordForCoordAndZ(si(T),ie),on=p.getTileCoordExtent(Qi),qe=mt(this.tempTransform,[y*(on[0]-T[0])/m,y*(T[3]-on[3])/m]),Ji=y*c.getGutterForProjection(s),ln=k[ie];for(var di in ln){var N=ln[di],we=N.tileCoord,ci=Qi[1]-we[1],xa=Math.round(qe[0]-(ci-1)*ui),hn=Qi[2]-we[2],tr=Math.round(qe[1]-(hn-1)*sn),$=Math.round(qe[0]-ci*ui),V=Math.round(qe[1]-hn*sn),ce=xa-$,re=tr-V,Xe=v===ie,H=Xe&&N.getAlpha(nt(this),t.time)!==1,er=!1;if(!H)if(Nt){zt=[$,V,$+ce,V,$+ce,V+re,$,V+re];for(var Lt=0,un=Nt.length;Lt<un;++Lt)if(v!==ie&&ie<Rt[Lt]){var bt=Nt[Lt];Tt([$,V,$+ce,V+re],[bt[0],bt[3],bt[4],bt[7]])&&(er||(j.save(),er=!0),j.beginPath(),j.moveTo(zt[0],zt[1]),j.lineTo(zt[2],zt[3]),j.lineTo(zt[4],zt[5]),j.lineTo(zt[6],zt[7]),j.moveTo(bt[6],bt[7]),j.lineTo(bt[4],bt[5]),j.lineTo(bt[2],bt[3]),j.lineTo(bt[0],bt[1]),j.clip())}Nt.push(zt),Rt.push(ie)}else j.clearRect($,V,ce,re);this.drawTileImage(N,t,$,V,ce,re,Ji,Xe),Nt&&!H?(er&&j.restore(),this.renderedTiles.unshift(N)):this.renderedTiles.push(N),this.updateUsedTiles(t.usedTiles,c,N)}}this.renderedRevision=f,this.renderedResolution=m,this.extentChanged=!this.renderedExtent_||!ha(this.renderedExtent_,T),this.renderedExtent_=T,this.renderedPixelRatio=u,this.renderedProjection=s,this.manageTilePyramid(t,c,p,u,s,_,v,d.getPreload()),this.scheduleExpireCache(t,c),this.postRender(j,t),n.extent&&j.restore(),st(j,bd),ut!==dt.style.transform&&(dt.style.transform=ut);var fi=Od(n.opacity),He=this.container;return fi!==He.style.opacity&&(He.style.opacity=fi),this.container},e.prototype.drawTileImage=function(t,i,n,a,s,o,l,h){var u=this.getTileImage(t);if(u){var d=nt(this),c=h?t.getAlpha(d,i.time):1,f=c!==this.context.globalAlpha;f&&(this.context.save(),this.context.globalAlpha=c),this.context.drawImage(u,l,l,u.width-2*l,u.height-2*l,n,a,s,o),f&&this.context.restore(),c!==1?i.animate=!0:h&&t.endTransition(d)}},e.prototype.getImage=function(){var t=this.context;return t?t.canvas:null},e.prototype.getTileImage=function(t){return t.getImage()},e.prototype.scheduleExpireCache=function(t,i){if(i.canExpireCache()){var n=function(a,s,o){var l=nt(a);l in o.usedTiles&&a.expireCache(o.viewState.projection,o.usedTiles[l])}.bind(null,i);t.postRenderFunctions.push(n)}},e.prototype.updateUsedTiles=function(t,i,n){var a=nt(i);a in t||(t[a]={}),t[a][n.getKey()]=!0},e.prototype.manageTilePyramid=function(t,i,n,a,s,o,l,h,u){var d=nt(i);d in t.wantedTiles||(t.wantedTiles[d]={});var c=t.wantedTiles[d],f=t.tileQueue,p=n.getMinZoom(),v=0,m,_,g,y,b,x;for(x=p;x<=l;++x)for(_=n.getTileRangeForExtentAndZ(o,x,_),g=n.getResolution(x),y=_.minX;y<=_.maxX;++y)for(b=_.minY;b<=_.maxY;++b)l-x<=h?(++v,m=i.getTile(x,y,b,a,s),m.getState()==U.IDLE&&(c[m.getKey()]=!0,f.isKeyQueued(m.getKey())||f.enqueue([m,d,n.getTileCoordCenter(m.tileCoord),g])),u!==void 0&&u(m)):i.useTile(x,y,b,s);i.updateCacheSize(v,s)},e}(Ws);const Tb=Mb;var Sb=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Ob=function(r){Sb(e,r);function e(t){return r.call(this,t)||this}return e.prototype.createRenderer=function(){return new Tb(this)},e}(lb);const Rb=Ob;function Lb(r,e,t,i,n){Ld(r,e,t||0,i||r.length-1,n||Pb)}function Ld(r,e,t,i,n){for(;i>t;){if(i-t>600){var a=i-t+1,s=e-t+1,o=Math.log(a),l=.5*Math.exp(2*o/3),h=.5*Math.sqrt(o*l*(a-l)/a)*(s-a/2<0?-1:1),u=Math.max(t,Math.floor(e-s*l/a+h)),d=Math.min(i,Math.floor(e+(a-s)*l/a+h));Ld(r,e,u,d,n)}var c=r[e],f=t,p=i;for(hr(r,t,e),n(r[i],c)>0&&hr(r,t,i);f<p;){for(hr(r,f,p),f++,p--;n(r[f],c)<0;)f++;for(;n(r[p],c)>0;)p--}n(r[t],c)===0?hr(r,t,p):(p++,hr(r,p,i)),p<=e&&(t=p+1),e<=p&&(i=p-1)}}function hr(r,e,t){var i=r[e];r[e]=r[t],r[t]=i}function Pb(r,e){return r<e?-1:r>e?1:0}let Pd=class{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let t=this.data;const i=[];if(!Mn(e,t))return i;const n=this.toBBox,a=[];for(;t;){for(let s=0;s<t.children.length;s++){const o=t.children[s],l=t.leaf?n(o):o;Mn(e,l)&&(t.leaf?i.push(o):Da(e,l)?this._all(o,i):a.push(o))}t=a.pop()}return i}collides(e){let t=this.data;if(!Mn(e,t))return!1;const i=[];for(;t;){for(let n=0;n<t.children.length;n++){const a=t.children[n],s=t.leaf?this.toBBox(a):a;if(Mn(e,s)){if(t.leaf||Da(e,s))return!0;i.push(a)}}t=i.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let i=0;i<e.length;i++)this.insert(e[i]);return this}let t=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=t;else if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const i=this.data;this.data=t,t=i}this._insert(t,this.data.height-t.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=bi([]),this}remove(e,t){if(!e)return this;let i=this.data;const n=this.toBBox(e),a=[],s=[];let o,l,h;for(;i||a.length;){if(i||(i=a.pop(),l=a[a.length-1],o=s.pop(),h=!0),i.leaf){const u=Fb(e,i.children,t);if(u!==-1)return i.children.splice(u,1),a.push(i),this._condense(a),this}!h&&!i.leaf&&Da(i,n)?(a.push(i),s.push(o),o=0,l=i,i=i.children[0]):l?(o++,i=l.children[o],h=!1):i=null}return this}toBBox(e){return e}compareMinX(e,t){return e.minX-t.minX}compareMinY(e,t){return e.minY-t.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){const i=[];for(;e;)e.leaf?t.push(...e.children):i.push(...e.children),e=i.pop();return t}_build(e,t,i,n){const a=i-t+1;let s=this._maxEntries,o;if(a<=s)return o=bi(e.slice(t,i+1)),gi(o,this.toBBox),o;n||(n=Math.ceil(Math.log(a)/Math.log(s)),s=Math.ceil(a/Math.pow(s,n-1))),o=bi([]),o.leaf=!1,o.height=n;const l=Math.ceil(a/s),h=l*Math.ceil(Math.sqrt(s));bh(e,t,i,h,this.compareMinX);for(let u=t;u<=i;u+=h){const d=Math.min(u+h-1,i);bh(e,u,d,l,this.compareMinY);for(let c=u;c<=d;c+=l){const f=Math.min(c+l-1,d);o.children.push(this._build(e,c,f,n-1))}}return gi(o,this.toBBox),o}_chooseSubtree(e,t,i,n){for(;n.push(t),!(t.leaf||n.length-1===i);){let a=1/0,s=1/0,o;for(let l=0;l<t.children.length;l++){const h=t.children[l],u=ka(h),d=Bb(e,h)-u;d<s?(s=d,a=u<a?u:a,o=h):d===s&&u<a&&(a=u,o=h)}t=o||t.children[0]}return t}_insert(e,t,i){const n=i?e:this.toBBox(e),a=[],s=this._chooseSubtree(n,this.data,t,a);for(s.children.push(e),_r(s,n);t>=0&&a[t].children.length>this._maxEntries;)this._split(a,t),t--;this._adjustParentBBoxes(n,a,t)}_split(e,t){const i=e[t],n=i.children.length,a=this._minEntries;this._chooseSplitAxis(i,a,n);const s=this._chooseSplitIndex(i,a,n),o=bi(i.children.splice(s,i.children.length-s));o.height=i.height,o.leaf=i.leaf,gi(i,this.toBBox),gi(o,this.toBBox),t?e[t-1].children.push(o):this._splitRoot(i,o)}_splitRoot(e,t){this.data=bi([e,t]),this.data.height=e.height+1,this.data.leaf=!1,gi(this.data,this.toBBox)}_chooseSplitIndex(e,t,i){let n,a=1/0,s=1/0;for(let o=t;o<=i-t;o++){const l=gr(e,0,o,this.toBBox),h=gr(e,o,i,this.toBBox),u=Nb(l,h),d=ka(l)+ka(h);u<a?(a=u,n=o,s=d<s?d:s):u===a&&d<s&&(s=d,n=o)}return n||i-t}_chooseSplitAxis(e,t,i){const n=e.leaf?this.compareMinX:kb,a=e.leaf?this.compareMinY:Db,s=this._allDistMargin(e,t,i,n),o=this._allDistMargin(e,t,i,a);s<o&&e.children.sort(n)}_allDistMargin(e,t,i,n){e.children.sort(n);const a=this.toBBox,s=gr(e,0,t,a),o=gr(e,i-t,i,a);let l=In(s)+In(o);for(let h=t;h<i-t;h++){const u=e.children[h];_r(s,e.leaf?a(u):u),l+=In(s)}for(let h=i-t-1;h>=t;h--){const u=e.children[h];_r(o,e.leaf?a(u):u),l+=In(o)}return l}_adjustParentBBoxes(e,t,i){for(let n=i;n>=0;n--)_r(t[n],e)}_condense(e){for(let t=e.length-1,i;t>=0;t--)e[t].children.length===0?t>0?(i=e[t-1].children,i.splice(i.indexOf(e[t]),1)):this.clear():gi(e[t],this.toBBox)}};function Fb(r,e,t){if(!t)return e.indexOf(r);for(let i=0;i<e.length;i++)if(t(r,e[i]))return i;return-1}function gi(r,e){gr(r,0,r.children.length,e,r)}function gr(r,e,t,i,n){n||(n=bi(null)),n.minX=1/0,n.minY=1/0,n.maxX=-1/0,n.maxY=-1/0;for(let a=e;a<t;a++){const s=r.children[a];_r(n,r.leaf?i(s):s)}return n}function _r(r,e){return r.minX=Math.min(r.minX,e.minX),r.minY=Math.min(r.minY,e.minY),r.maxX=Math.max(r.maxX,e.maxX),r.maxY=Math.max(r.maxY,e.maxY),r}function kb(r,e){return r.minX-e.minX}function Db(r,e){return r.minY-e.minY}function ka(r){return(r.maxX-r.minX)*(r.maxY-r.minY)}function In(r){return r.maxX-r.minX+(r.maxY-r.minY)}function Bb(r,e){return(Math.max(e.maxX,r.maxX)-Math.min(e.minX,r.minX))*(Math.max(e.maxY,r.maxY)-Math.min(e.minY,r.minY))}function Nb(r,e){const t=Math.max(r.minX,e.minX),i=Math.max(r.minY,e.minY),n=Math.min(r.maxX,e.maxX),a=Math.min(r.maxY,e.maxY);return Math.max(0,n-t)*Math.max(0,a-i)}function Da(r,e){return r.minX<=e.minX&&r.minY<=e.minY&&e.maxX<=r.maxX&&e.maxY<=r.maxY}function Mn(r,e){return e.minX<=r.maxX&&e.minY<=r.maxY&&e.maxX>=r.minX&&e.maxY>=r.minY}function bi(r){return{children:r,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function bh(r,e,t,i,n){const a=[e,t];for(;a.length;){if(t=a.pop(),e=a.pop(),t-e<=i)continue;const s=e+Math.ceil((t-e)/i/2)*i;Lb(r,s,e,t,n),a.push(e,s,s,t)}}var zb=function(){function r(e){this.opacity_=e.opacity,this.rotateWithView_=e.rotateWithView,this.rotation_=e.rotation,this.scale_=e.scale,this.scaleArray_=Gt(e.scale),this.displacement_=e.displacement}return r.prototype.clone=function(){var e=this.getScale();return new r({opacity:this.getOpacity(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice()})},r.prototype.getOpacity=function(){return this.opacity_},r.prototype.getRotateWithView=function(){return this.rotateWithView_},r.prototype.getRotation=function(){return this.rotation_},r.prototype.getScale=function(){return this.scale_},r.prototype.getScaleArray=function(){return this.scaleArray_},r.prototype.getDisplacement=function(){return this.displacement_},r.prototype.getAnchor=function(){return K()},r.prototype.getImage=function(e){return K()},r.prototype.getHitDetectionImage=function(){return K()},r.prototype.getPixelRatio=function(e){return 1},r.prototype.getImageState=function(){return K()},r.prototype.getImageSize=function(){return K()},r.prototype.getOrigin=function(){return K()},r.prototype.getSize=function(){return K()},r.prototype.setDisplacement=function(e){this.displacement_=e},r.prototype.setOpacity=function(e){this.opacity_=e},r.prototype.setRotateWithView=function(e){this.rotateWithView_=e},r.prototype.setRotation=function(e){this.rotation_=e},r.prototype.setScale=function(e){this.scale_=e,this.scaleArray_=Gt(e)},r.prototype.listenImageChange=function(e){K()},r.prototype.load=function(){K()},r.prototype.unlistenImageChange=function(e){K()},r}();const Fd=zb;function oe(r){return Array.isArray(r)?_d(r):r}var kd="10px sans-serif",_e="#000",Hn="round",Rr=[],Lr=0,Ui="round",Pr=10,Fr="#000",kr="center",Zn="middle",ti=[0,0,0,0],Dr=1,Me=new li,Gb=new tn;Gb.setSize=function(){console.warn("labelCache is deprecated.")};var xi=null,ss,os={},$b=function(){var r=100,e="32px ",t=["monospace","serif"],i=t.length,n="wmytzilWMYTZIL@#/&?$%10",a,s;function o(h,u,d){for(var c=!0,f=0;f<i;++f){var p=t[f];if(s=Kn(h+" "+u+" "+e+p,n),d!=p){var v=Kn(h+" "+u+" "+e+d+","+p,n);c=c&&v!=s}}return!!c}function l(){for(var h=!0,u=Me.getKeys(),d=0,c=u.length;d<c;++d){var f=u[d];Me.get(f)<r&&(o.apply(this,f.split(`
`))?(Ms(os),xi=null,ss=void 0,Me.set(f,r)):(Me.set(f,Me.get(f)+1,!0),h=!1))}h&&(clearInterval(a),a=void 0)}return function(h){var u=Sd(h);if(u)for(var d=u.families,c=0,f=d.length;c<f;++c){var p=d[c],v=u.style+`
`+u.weight+`
`+p;Me.get(v)===void 0&&(Me.set(v,r,!0),o(u.style,u.weight,p)||(Me.set(v,0,!0),a===void 0&&(a=setInterval(l,32))))}}}(),Vb=function(){var r;return function(e){var t=os[e];if(t==null){if(_a){var i=Sd(e),n=Dd(e,"Žg"),a=isNaN(Number(i.lineHeight))?1.2:Number(i.lineHeight);t=a*(n.actualBoundingBoxAscent+n.actualBoundingBoxDescent)}else r||(r=document.createElement("div"),r.innerHTML="M",r.style.minHeight="0",r.style.maxHeight="none",r.style.height="auto",r.style.padding="0",r.style.border="none",r.style.position="absolute",r.style.display="block",r.style.left="-99999px"),r.style.font=e,document.body.appendChild(r),t=r.offsetHeight,document.body.removeChild(r);os[e]=t}return t}}();function Dd(r,e){return xi||(xi=Ht(1,1)),r!=ss&&(xi.font=r,ss=xi.font),xi.measureText(e)}function Kn(r,e){return Dd(r,e).width}function xh(r,e,t){if(e in t)return t[e];var i=Kn(r,e);return t[e]=i,i}function Ub(r,e){for(var t=[],i=[],n=[],a=0,s=0,o=0,l=0,h=0,u=e.length;h<=u;h+=2){var d=e[h];if(d===`
`||h===u){a=Math.max(a,s),n.push(s),s=0,o+=l;continue}var c=e[h+1]||r.font,f=Kn(c,d);t.push(f),s+=f;var p=Vb(c);i.push(p),l=Math.max(l,p)}return{width:a,height:o,widths:t,heights:i,lineWidths:n}}function jb(r,e,t,i,n,a,s,o,l,h,u){r.save(),t!==1&&(r.globalAlpha*=t),e&&r.setTransform.apply(r,e),i.contextInstructions?(r.translate(l,h),r.scale(u[0],u[1]),Wb(i,r)):u[0]<0||u[1]<0?(r.translate(l,h),r.scale(u[0],u[1]),r.drawImage(i,n,a,s,o,0,0,s,o)):r.drawImage(i,n,a,s,o,l,h,s*u[0],o*u[1]),r.restore()}function Wb(r,e){for(var t=r.contextInstructions,i=0,n=t.length;i<n;i+=2)Array.isArray(t[i+1])?e[t[i]].apply(e,t[i+1]):e[t[i]]=t[i+1]}var Yb=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),qb=function(r){Yb(e,r);function e(t){var i=this,n=t.rotateWithView!==void 0?t.rotateWithView:!1;return i=r.call(this,{opacity:1,rotateWithView:n,rotation:t.rotation!==void 0?t.rotation:0,scale:t.scale!==void 0?t.scale:1,displacement:t.displacement!==void 0?t.displacement:[0,0]})||this,i.canvas_=void 0,i.hitDetectionCanvas_=null,i.fill_=t.fill!==void 0?t.fill:null,i.origin_=[0,0],i.points_=t.points,i.radius_=t.radius!==void 0?t.radius:t.radius1,i.radius2_=t.radius2,i.angle_=t.angle!==void 0?t.angle:0,i.stroke_=t.stroke!==void 0?t.stroke:null,i.size_=null,i.renderOptions_=null,i.render(),i}return e.prototype.clone=function(){var t=this.getScale(),i=new e({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(t)?t.slice():t,displacement:this.getDisplacement().slice()});return i.setOpacity(this.getOpacity()),i},e.prototype.getAnchor=function(){var t=this.size_;if(!t)return null;var i=this.getDisplacement();return[t[0]/2-i[0],t[1]/2+i[1]]},e.prototype.getAngle=function(){return this.angle_},e.prototype.getFill=function(){return this.fill_},e.prototype.getHitDetectionImage=function(){return this.hitDetectionCanvas_||this.createHitDetectionCanvas_(this.renderOptions_),this.hitDetectionCanvas_},e.prototype.getImage=function(t){var i=this.canvas_[t];if(!i){var n=this.renderOptions_,a=Ht(n.size*t,n.size*t);this.draw_(n,a,t),i=a.canvas,this.canvas_[t]=i}return i},e.prototype.getPixelRatio=function(t){return t},e.prototype.getImageSize=function(){return this.size_},e.prototype.getImageState=function(){return X.LOADED},e.prototype.getOrigin=function(){return this.origin_},e.prototype.getPoints=function(){return this.points_},e.prototype.getRadius=function(){return this.radius_},e.prototype.getRadius2=function(){return this.radius2_},e.prototype.getSize=function(){return this.size_},e.prototype.getStroke=function(){return this.stroke_},e.prototype.listenImageChange=function(t){},e.prototype.load=function(){},e.prototype.unlistenImageChange=function(t){},e.prototype.calculateLineJoinSize_=function(t,i,n){if(i===0||this.points_===1/0||t!=="bevel"&&t!=="miter")return i;var a=this.radius_,s=this.radius2_===void 0?a:this.radius2_;if(a<s){var o=a;a=s,s=o}var l=this.radius2_===void 0?this.points_:this.points_*2,h=2*Math.PI/l,u=s*Math.sin(h),d=Math.sqrt(s*s-u*u),c=a-d,f=Math.sqrt(u*u+c*c),p=f/u;if(t==="miter"&&p<=n)return p*i;var v=i/2/p,m=i/2*(c/f),_=Math.sqrt((a+v)*(a+v)+m*m),g=_-a;if(this.radius2_===void 0||t==="bevel")return g*2;var y=a*Math.sin(h),b=Math.sqrt(a*a-y*y),x=s-b,A=Math.sqrt(y*y+x*x),w=A/y;if(w<=n){var C=w*i/2-s-a;return 2*Math.max(g,C)}return g*2},e.prototype.createRenderOptions=function(){var t=Ui,i=0,n=null,a=0,s,o=0;this.stroke_&&(s=this.stroke_.getColor(),s===null&&(s=Fr),s=oe(s),o=this.stroke_.getWidth(),o===void 0&&(o=Dr),n=this.stroke_.getLineDash(),a=this.stroke_.getLineDashOffset(),t=this.stroke_.getLineJoin(),t===void 0&&(t=Ui),i=this.stroke_.getMiterLimit(),i===void 0&&(i=Pr));var l=this.calculateLineJoinSize_(t,o,i),h=Math.max(this.radius_,this.radius2_||0),u=Math.ceil(2*h+l);return{strokeStyle:s,strokeWidth:o,size:u,lineDash:n,lineDashOffset:a,lineJoin:t,miterLimit:i}},e.prototype.render=function(){this.renderOptions_=this.createRenderOptions();var t=this.renderOptions_.size;this.canvas_={},this.size_=[t,t]},e.prototype.draw_=function(t,i,n){if(i.scale(n,n),i.translate(t.size/2,t.size/2),this.createPath_(i),this.fill_){var a=this.fill_.getColor();a===null&&(a=_e),i.fillStyle=oe(a),i.fill()}this.stroke_&&(i.strokeStyle=t.strokeStyle,i.lineWidth=t.strokeWidth,i.setLineDash&&t.lineDash&&(i.setLineDash(t.lineDash),i.lineDashOffset=t.lineDashOffset),i.lineJoin=t.lineJoin,i.miterLimit=t.miterLimit,i.stroke())},e.prototype.createHitDetectionCanvas_=function(t){if(this.fill_){var i=this.fill_.getColor(),n=0;if(typeof i=="string"&&(i=qn(i)),i===null?n=1:Array.isArray(i)&&(n=i.length===4?i[3]:1),n===0){var a=Ht(t.size,t.size);this.hitDetectionCanvas_=a.canvas,this.drawHitDetectionCanvas_(t,a)}}this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.getImage(1))},e.prototype.createPath_=function(t){var i=this.points_,n=this.radius_;if(i===1/0)t.arc(0,0,n,0,2*Math.PI);else{var a=this.radius2_===void 0?n:this.radius2_;this.radius2_!==void 0&&(i*=2);for(var s=this.angle_-Math.PI/2,o=2*Math.PI/i,l=0;l<i;l++){var h=s+l*o,u=l%2===0?n:a;t.lineTo(u*Math.cos(h),u*Math.sin(h))}t.closePath()}},e.prototype.drawHitDetectionCanvas_=function(t,i){i.translate(t.size/2,t.size/2),this.createPath_(i),i.fillStyle=_e,i.fill(),this.stroke_&&(i.strokeStyle=t.strokeStyle,i.lineWidth=t.strokeWidth,t.lineDash&&(i.setLineDash(t.lineDash),i.lineDashOffset=t.lineDashOffset),i.lineJoin=t.lineJoin,i.miterLimit=t.miterLimit,i.stroke())},e}(Fd);const Xb=qb;var Hb=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Zb=function(r){Hb(e,r);function e(t){var i=t||{};return r.call(this,{points:1/0,fill:i.fill,radius:i.radius,stroke:i.stroke,scale:i.scale!==void 0?i.scale:1,rotation:i.rotation!==void 0?i.rotation:0,rotateWithView:i.rotateWithView!==void 0?i.rotateWithView:!1,displacement:i.displacement!==void 0?i.displacement:[0,0]})||this}return e.prototype.clone=function(){var t=this.getScale(),i=new e({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice()});return i.setOpacity(this.getOpacity()),i},e.prototype.setRadius=function(t){this.radius_=t,this.render()},e}(Xb);const Kb=Zb;var Qb=function(){function r(e){var t=e||{};this.color_=t.color!==void 0?t.color:null}return r.prototype.clone=function(){var e=this.getColor();return new r({color:Array.isArray(e)?e.slice():e||void 0})},r.prototype.getColor=function(){return this.color_},r.prototype.setColor=function(e){this.color_=e},r}();const Bd=Qb;var Jb=function(){function r(e){var t=e||{};this.color_=t.color!==void 0?t.color:null,this.lineCap_=t.lineCap,this.lineDash_=t.lineDash!==void 0?t.lineDash:null,this.lineDashOffset_=t.lineDashOffset,this.lineJoin_=t.lineJoin,this.miterLimit_=t.miterLimit,this.width_=t.width}return r.prototype.clone=function(){var e=this.getColor();return new r({color:Array.isArray(e)?e.slice():e||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})},r.prototype.getColor=function(){return this.color_},r.prototype.getLineCap=function(){return this.lineCap_},r.prototype.getLineDash=function(){return this.lineDash_},r.prototype.getLineDashOffset=function(){return this.lineDashOffset_},r.prototype.getLineJoin=function(){return this.lineJoin_},r.prototype.getMiterLimit=function(){return this.miterLimit_},r.prototype.getWidth=function(){return this.width_},r.prototype.setColor=function(e){this.color_=e},r.prototype.setLineCap=function(e){this.lineCap_=e},r.prototype.setLineDash=function(e){this.lineDash_=e},r.prototype.setLineDashOffset=function(e){this.lineDashOffset_=e},r.prototype.setLineJoin=function(e){this.lineJoin_=e},r.prototype.setMiterLimit=function(e){this.miterLimit_=e},r.prototype.setWidth=function(e){this.width_=e},r}();const Nd=Jb;var zd=function(){function r(e){var t=e||{};this.geometry_=null,this.geometryFunction_=Ah,t.geometry!==void 0&&this.setGeometry(t.geometry),this.fill_=t.fill!==void 0?t.fill:null,this.image_=t.image!==void 0?t.image:null,this.renderer_=t.renderer!==void 0?t.renderer:null,this.hitDetectionRenderer_=t.hitDetectionRenderer!==void 0?t.hitDetectionRenderer:null,this.stroke_=t.stroke!==void 0?t.stroke:null,this.text_=t.text!==void 0?t.text:null,this.zIndex_=t.zIndex}return r.prototype.clone=function(){var e=this.getGeometry();return e&&typeof e=="object"&&(e=e.clone()),new r({geometry:e,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer(),stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})},r.prototype.getRenderer=function(){return this.renderer_},r.prototype.setRenderer=function(e){this.renderer_=e},r.prototype.setHitDetectionRenderer=function(e){this.hitDetectionRenderer_=e},r.prototype.getHitDetectionRenderer=function(){return this.hitDetectionRenderer_},r.prototype.getGeometry=function(){return this.geometry_},r.prototype.getGeometryFunction=function(){return this.geometryFunction_},r.prototype.getFill=function(){return this.fill_},r.prototype.setFill=function(e){this.fill_=e},r.prototype.getImage=function(){return this.image_},r.prototype.setImage=function(e){this.image_=e},r.prototype.getStroke=function(){return this.stroke_},r.prototype.setStroke=function(e){this.stroke_=e},r.prototype.getText=function(){return this.text_},r.prototype.setText=function(e){this.text_=e},r.prototype.getZIndex=function(){return this.zIndex_},r.prototype.setGeometry=function(e){typeof e=="function"?this.geometryFunction_=e:typeof e=="string"?this.geometryFunction_=function(t){return t.get(e)}:e?e!==void 0&&(this.geometryFunction_=function(){return e}):this.geometryFunction_=Ah,this.geometry_=e},r.prototype.setZIndex=function(e){this.zIndex_=e},r}();function tx(r){var e;if(typeof r=="function")e=r;else{var t;if(Array.isArray(r))t=r;else{J(typeof r.getZIndex=="function",41);var i=r;t=[i]}e=function(){return t}}return e}var Ba=null;function ex(r,e){if(!Ba){var t=new Bd({color:"rgba(255,255,255,0.4)"}),i=new Nd({color:"#3399CC",width:1.25});Ba=[new zd({image:new Kb({fill:t,stroke:i,radius:5}),fill:t,stroke:i})]}return Ba}function Ah(r){return r.getGeometry()}const ix=zd;var rx=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Ch={RENDER_ORDER:"renderOrder"},nx=function(r){rx(e,r);function e(t){var i=this,n=t||{},a=st({},n);return delete a.style,delete a.renderBuffer,delete a.updateWhileAnimating,delete a.updateWhileInteracting,i=r.call(this,a)||this,i.declutter_=n.declutter!==void 0?n.declutter:!1,i.renderBuffer_=n.renderBuffer!==void 0?n.renderBuffer:100,i.style_=null,i.styleFunction_=void 0,i.setStyle(n.style),i.updateWhileAnimating_=n.updateWhileAnimating!==void 0?n.updateWhileAnimating:!1,i.updateWhileInteracting_=n.updateWhileInteracting!==void 0?n.updateWhileInteracting:!1,i}return e.prototype.getDeclutter=function(){return this.declutter_},e.prototype.getFeatures=function(t){return r.prototype.getFeatures.call(this,t)},e.prototype.getRenderBuffer=function(){return this.renderBuffer_},e.prototype.getRenderOrder=function(){return this.get(Ch.RENDER_ORDER)},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.getUpdateWhileAnimating=function(){return this.updateWhileAnimating_},e.prototype.getUpdateWhileInteracting=function(){return this.updateWhileInteracting_},e.prototype.renderDeclutter=function(t){t.declutterTree||(t.declutterTree=new Pd(9)),this.getRenderer().renderDeclutter(t)},e.prototype.setRenderOrder=function(t){this.set(Ch.RENDER_ORDER,t)},e.prototype.setStyle=function(t){this.style_=t!==void 0?t:ex,this.styleFunction_=t===null?void 0:tx(this.style_),this.changed()},e}(js);const ax=nx;var en={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},Tn=[en.FILL],Be=[en.STROKE],ei=[en.BEGIN_PATH],wh=[en.CLOSE_PATH];const G=en;var sx=function(){function r(){}return r.prototype.drawCustom=function(e,t,i,n){},r.prototype.drawGeometry=function(e){},r.prototype.setStyle=function(e){},r.prototype.drawCircle=function(e,t){},r.prototype.drawFeature=function(e,t){},r.prototype.drawGeometryCollection=function(e,t){},r.prototype.drawLineString=function(e,t){},r.prototype.drawMultiLineString=function(e,t){},r.prototype.drawMultiPoint=function(e,t){},r.prototype.drawMultiPolygon=function(e,t){},r.prototype.drawPoint=function(e,t){},r.prototype.drawPolygon=function(e,t){},r.prototype.drawText=function(e,t){},r.prototype.setFillStrokeStyle=function(e,t){},r.prototype.setImageStyle=function(e,t){},r.prototype.setTextStyle=function(e,t){},r}();const Gd=sx;var ox=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),lx=function(r){ox(e,r);function e(t,i,n,a){var s=r.call(this)||this;return s.tolerance=t,s.maxExtent=i,s.pixelRatio=a,s.maxLineWidth=0,s.resolution=n,s.beginGeometryInstruction1_=null,s.beginGeometryInstruction2_=null,s.bufferedMaxExtent_=null,s.instructions=[],s.coordinates=[],s.tmpCoordinate_=[],s.hitDetectionInstructions=[],s.state={},s}return e.prototype.applyPixelRatio=function(t){var i=this.pixelRatio;return i==1?t:t.map(function(n){return n*i})},e.prototype.appendFlatPointCoordinates=function(t,i){for(var n=this.getBufferedMaxExtent(),a=this.tmpCoordinate_,s=this.coordinates,o=s.length,l=0,h=t.length;l<h;l+=i)a[0]=t[l],a[1]=t[l+1],Hi(n,a)&&(s[o++]=a[0],s[o++]=a[1]);return o},e.prototype.appendFlatLineCoordinates=function(t,i,n,a,s,o){var l=this.coordinates,h=l.length,u=this.getBufferedMaxExtent();o&&(i+=a);var d=t[i],c=t[i+1],f=this.tmpCoordinate_,p=!0,v,m,_;for(v=i+a;v<n;v+=a)f[0]=t[v],f[1]=t[v+1],_=Za(u,f),_!==m?(p&&(l[h++]=d,l[h++]=c,p=!1),l[h++]=f[0],l[h++]=f[1]):_===_t.INTERSECTING?(l[h++]=f[0],l[h++]=f[1],p=!1):p=!0,d=f[0],c=f[1],m=_;return(s&&p||v===i+a)&&(l[h++]=d,l[h++]=c),h},e.prototype.drawCustomCoordinates_=function(t,i,n,a,s){for(var o=0,l=n.length;o<l;++o){var h=n[o],u=this.appendFlatLineCoordinates(t,i,h,a,!1,!1);s.push(u),i=h}return i},e.prototype.drawCustom=function(t,i,n,a){this.beginGeometry(t,i);var s=t.getType(),o=t.getStride(),l=this.coordinates.length,h,u,d,c,f;switch(s){case q.MULTI_POLYGON:h=t.getOrientedFlatCoordinates(),c=[];var p=t.getEndss();f=0;for(var v=0,m=p.length;v<m;++v){var _=[];f=this.drawCustomCoordinates_(h,f,p[v],o,_),c.push(_)}this.instructions.push([G.CUSTOM,l,c,t,n,dh]),this.hitDetectionInstructions.push([G.CUSTOM,l,c,t,a||n,dh]);break;case q.POLYGON:case q.MULTI_LINE_STRING:d=[],h=s==q.POLYGON?t.getOrientedFlatCoordinates():t.getFlatCoordinates(),f=this.drawCustomCoordinates_(h,0,t.getEnds(),o,d),this.instructions.push([G.CUSTOM,l,d,t,n,Yn]),this.hitDetectionInstructions.push([G.CUSTOM,l,d,t,a||n,Yn]);break;case q.LINE_STRING:case q.CIRCLE:h=t.getFlatCoordinates(),u=this.appendFlatLineCoordinates(h,0,h.length,o,!1,!1),this.instructions.push([G.CUSTOM,l,u,t,n,Ti]),this.hitDetectionInstructions.push([G.CUSTOM,l,u,t,a||n,Ti]);break;case q.MULTI_POINT:h=t.getFlatCoordinates(),u=this.appendFlatPointCoordinates(h,o),u>l&&(this.instructions.push([G.CUSTOM,l,u,t,n,Ti]),this.hitDetectionInstructions.push([G.CUSTOM,l,u,t,a||n,Ti]));break;case q.POINT:h=t.getFlatCoordinates(),this.coordinates.push(h[0],h[1]),u=this.coordinates.length,this.instructions.push([G.CUSTOM,l,u,t,n]),this.hitDetectionInstructions.push([G.CUSTOM,l,u,t,a||n]);break}this.endGeometry(i)},e.prototype.beginGeometry=function(t,i){this.beginGeometryInstruction1_=[G.BEGIN_GEOMETRY,i,0,t],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[G.BEGIN_GEOMETRY,i,0,t],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)},e.prototype.finish=function(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}},e.prototype.reverseHitDetectionInstructions=function(){var t=this.hitDetectionInstructions;t.reverse();var i,n=t.length,a,s,o=-1;for(i=0;i<n;++i)a=t[i],s=a[0],s==G.END_GEOMETRY?o=i:s==G.BEGIN_GEOMETRY&&(a[2]=i,A0(this.hitDetectionInstructions,o,i),o=-1)},e.prototype.setFillStrokeStyle=function(t,i){var n=this.state;if(t){var a=t.getColor();n.fillStyle=oe(a||_e)}else n.fillStyle=void 0;if(i){var s=i.getColor();n.strokeStyle=oe(s||Fr);var o=i.getLineCap();n.lineCap=o!==void 0?o:Hn;var l=i.getLineDash();n.lineDash=l?l.slice():Rr;var h=i.getLineDashOffset();n.lineDashOffset=h||Lr;var u=i.getLineJoin();n.lineJoin=u!==void 0?u:Ui;var d=i.getWidth();n.lineWidth=d!==void 0?d:Dr;var c=i.getMiterLimit();n.miterLimit=c!==void 0?c:Pr,n.lineWidth>this.maxLineWidth&&(this.maxLineWidth=n.lineWidth,this.bufferedMaxExtent_=null)}else n.strokeStyle=void 0,n.lineCap=void 0,n.lineDash=null,n.lineDashOffset=void 0,n.lineJoin=void 0,n.lineWidth=void 0,n.miterLimit=void 0},e.prototype.createFill=function(t){var i=t.fillStyle,n=[G.SET_FILL_STYLE,i];return typeof i!="string"&&n.push(!0),n},e.prototype.applyStroke=function(t){this.instructions.push(this.createStroke(t))},e.prototype.createStroke=function(t){return[G.SET_STROKE_STYLE,t.strokeStyle,t.lineWidth*this.pixelRatio,t.lineCap,t.lineJoin,t.miterLimit,this.applyPixelRatio(t.lineDash),t.lineDashOffset*this.pixelRatio]},e.prototype.updateFillStyle=function(t,i){var n=t.fillStyle;(typeof n!="string"||t.currentFillStyle!=n)&&(n!==void 0&&this.instructions.push(i.call(this,t)),t.currentFillStyle=n)},e.prototype.updateStrokeStyle=function(t,i){var n=t.strokeStyle,a=t.lineCap,s=t.lineDash,o=t.lineDashOffset,l=t.lineJoin,h=t.lineWidth,u=t.miterLimit;(t.currentStrokeStyle!=n||t.currentLineCap!=a||s!=t.currentLineDash&&!Ki(t.currentLineDash,s)||t.currentLineDashOffset!=o||t.currentLineJoin!=l||t.currentLineWidth!=h||t.currentMiterLimit!=u)&&(n!==void 0&&i.call(this,t),t.currentStrokeStyle=n,t.currentLineCap=a,t.currentLineDash=s,t.currentLineDashOffset=o,t.currentLineJoin=l,t.currentLineWidth=h,t.currentMiterLimit=u)},e.prototype.endGeometry=function(t){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;var i=[G.END_GEOMETRY,t];this.instructions.push(i),this.hitDetectionInstructions.push(i)},e.prototype.getBufferedMaxExtent=function(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=bp(this.maxExtent),this.maxLineWidth>0)){var t=this.resolution*(this.maxLineWidth+1)/2;wr(this.bufferedMaxExtent_,t,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_},e}(Gd);const rn=lx;var hx=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),ux=function(r){hx(e,r);function e(t,i,n,a){var s=r.call(this,t,i,n,a)||this;return s.hitDetectionImage_=null,s.image_=null,s.imagePixelRatio_=void 0,s.anchorX_=void 0,s.anchorY_=void 0,s.height_=void 0,s.opacity_=void 0,s.originX_=void 0,s.originY_=void 0,s.rotateWithView_=void 0,s.rotation_=void 0,s.scale_=void 0,s.width_=void 0,s.declutterImageWithText_=void 0,s}return e.prototype.drawPoint=function(t,i){if(this.image_){this.beginGeometry(t,i);var n=t.getFlatCoordinates(),a=t.getStride(),s=this.coordinates.length,o=this.appendFlatPointCoordinates(n,a);this.instructions.push([G.DRAW_IMAGE,s,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterImageWithText_]),this.hitDetectionInstructions.push([G.DRAW_IMAGE,s,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterImageWithText_]),this.endGeometry(i)}},e.prototype.drawMultiPoint=function(t,i){if(this.image_){this.beginGeometry(t,i);var n=t.getFlatCoordinates(),a=t.getStride(),s=this.coordinates.length,o=this.appendFlatPointCoordinates(n,a);this.instructions.push([G.DRAW_IMAGE,s,o,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterImageWithText_]),this.hitDetectionInstructions.push([G.DRAW_IMAGE,s,o,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterImageWithText_]),this.endGeometry(i)}},e.prototype.finish=function(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,r.prototype.finish.call(this)},e.prototype.setImageStyle=function(t,i){var n=t.getAnchor(),a=t.getSize(),s=t.getHitDetectionImage(),o=t.getImage(this.pixelRatio),l=t.getOrigin();this.imagePixelRatio_=t.getPixelRatio(this.pixelRatio),this.anchorX_=n[0],this.anchorY_=n[1],this.hitDetectionImage_=s,this.image_=o,this.height_=a[1],this.opacity_=t.getOpacity(),this.originX_=l[0]*this.imagePixelRatio_,this.originY_=l[1]*this.imagePixelRatio_,this.rotateWithView_=t.getRotateWithView(),this.rotation_=t.getRotation(),this.scale_=t.getScaleArray(),this.width_=a[0],this.declutterImageWithText_=i},e}(rn);const dx=ux;var cx=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),fx=function(r){cx(e,r);function e(t,i,n,a){return r.call(this,t,i,n,a)||this}return e.prototype.drawFlatCoordinates_=function(t,i,n,a){var s=this.coordinates.length,o=this.appendFlatLineCoordinates(t,i,n,a,!1,!1),l=[G.MOVE_TO_LINE_TO,s,o];return this.instructions.push(l),this.hitDetectionInstructions.push(l),n},e.prototype.drawLineString=function(t,i){var n=this.state,a=n.strokeStyle,s=n.lineWidth;if(!(a===void 0||s===void 0)){this.updateStrokeStyle(n,this.applyStroke),this.beginGeometry(t,i),this.hitDetectionInstructions.push([G.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,Rr,Lr],ei);var o=t.getFlatCoordinates(),l=t.getStride();this.drawFlatCoordinates_(o,0,o.length,l),this.hitDetectionInstructions.push(Be),this.endGeometry(i)}},e.prototype.drawMultiLineString=function(t,i){var n=this.state,a=n.strokeStyle,s=n.lineWidth;if(!(a===void 0||s===void 0)){this.updateStrokeStyle(n,this.applyStroke),this.beginGeometry(t,i),this.hitDetectionInstructions.push([G.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,n.lineDash,n.lineDashOffset],ei);for(var o=t.getEnds(),l=t.getFlatCoordinates(),h=t.getStride(),u=0,d=0,c=o.length;d<c;++d)u=this.drawFlatCoordinates_(l,u,o[d],h);this.hitDetectionInstructions.push(Be),this.endGeometry(i)}},e.prototype.finish=function(){var t=this.state;return t.lastStroke!=null&&t.lastStroke!=this.coordinates.length&&this.instructions.push(Be),this.reverseHitDetectionInstructions(),this.state=null,r.prototype.finish.call(this)},e.prototype.applyStroke=function(t){t.lastStroke!=null&&t.lastStroke!=this.coordinates.length&&(this.instructions.push(Be),t.lastStroke=this.coordinates.length),t.lastStroke=0,r.prototype.applyStroke.call(this,t),this.instructions.push(ei)},e}(rn);const px=fx;var vx=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),mx=function(r){vx(e,r);function e(t,i,n,a){return r.call(this,t,i,n,a)||this}return e.prototype.drawFlatCoordinatess_=function(t,i,n,a){var s=this.state,o=s.fillStyle!==void 0,l=s.strokeStyle!==void 0,h=n.length;this.instructions.push(ei),this.hitDetectionInstructions.push(ei);for(var u=0;u<h;++u){var d=n[u],c=this.coordinates.length,f=this.appendFlatLineCoordinates(t,i,d,a,!0,!l),p=[G.MOVE_TO_LINE_TO,c,f];this.instructions.push(p),this.hitDetectionInstructions.push(p),l&&(this.instructions.push(wh),this.hitDetectionInstructions.push(wh)),i=d}return o&&(this.instructions.push(Tn),this.hitDetectionInstructions.push(Tn)),l&&(this.instructions.push(Be),this.hitDetectionInstructions.push(Be)),i},e.prototype.drawCircle=function(t,i){var n=this.state,a=n.fillStyle,s=n.strokeStyle;if(!(a===void 0&&s===void 0)){this.setFillStrokeStyles_(),this.beginGeometry(t,i),n.fillStyle!==void 0&&this.hitDetectionInstructions.push([G.SET_FILL_STYLE,_e]),n.strokeStyle!==void 0&&this.hitDetectionInstructions.push([G.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,n.lineDash,n.lineDashOffset]);var o=t.getFlatCoordinates(),l=t.getStride(),h=this.coordinates.length;this.appendFlatLineCoordinates(o,0,o.length,l,!1,!1);var u=[G.CIRCLE,h];this.instructions.push(ei,u),this.hitDetectionInstructions.push(ei,u),n.fillStyle!==void 0&&(this.instructions.push(Tn),this.hitDetectionInstructions.push(Tn)),n.strokeStyle!==void 0&&(this.instructions.push(Be),this.hitDetectionInstructions.push(Be)),this.endGeometry(i)}},e.prototype.drawPolygon=function(t,i){var n=this.state,a=n.fillStyle,s=n.strokeStyle;if(!(a===void 0&&s===void 0)){this.setFillStrokeStyles_(),this.beginGeometry(t,i),n.fillStyle!==void 0&&this.hitDetectionInstructions.push([G.SET_FILL_STYLE,_e]),n.strokeStyle!==void 0&&this.hitDetectionInstructions.push([G.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,n.lineDash,n.lineDashOffset]);var o=t.getEnds(),l=t.getOrientedFlatCoordinates(),h=t.getStride();this.drawFlatCoordinatess_(l,0,o,h),this.endGeometry(i)}},e.prototype.drawMultiPolygon=function(t,i){var n=this.state,a=n.fillStyle,s=n.strokeStyle;if(!(a===void 0&&s===void 0)){this.setFillStrokeStyles_(),this.beginGeometry(t,i),n.fillStyle!==void 0&&this.hitDetectionInstructions.push([G.SET_FILL_STYLE,_e]),n.strokeStyle!==void 0&&this.hitDetectionInstructions.push([G.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,n.lineDash,n.lineDashOffset]);for(var o=t.getEndss(),l=t.getOrientedFlatCoordinates(),h=t.getStride(),u=0,d=0,c=o.length;d<c;++d)u=this.drawFlatCoordinatess_(l,u,o[d],h);this.endGeometry(i)}},e.prototype.finish=function(){this.reverseHitDetectionInstructions(),this.state=null;var t=this.tolerance;if(t!==0)for(var i=this.coordinates,n=0,a=i.length;n<a;++n)i[n]=Qe(i[n],t);return r.prototype.finish.call(this)},e.prototype.setFillStrokeStyles_=function(){var t=this.state,i=t.fillStyle;i!==void 0&&this.updateFillStyle(t,this.createFill),t.strokeStyle!==void 0&&this.updateStrokeStyle(t,this.applyStroke)},e}(rn);const Eh=mx,gx={POINT:"point",LINE:"line"};function _x(r,e,t,i,n){var a=t,s=t,o=0,l=0,h=t,u,d,c,f,p,v,m,_,g,y;for(d=t;d<i;d+=n){var b=e[d],x=e[d+1];p!==void 0&&(g=b-p,y=x-v,f=Math.sqrt(g*g+y*y),m!==void 0&&(l+=c,u=Math.acos((m*g+_*y)/(c*f)),u>r&&(l>o&&(o=l,a=h,s=d),l=0,h=d-n)),c=f,m=g,_=y),p=b,v=x}return l+=f,l>o?[h,d]:[a,s]}var yx=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Qn={left:0,end:0,center:.5,right:1,start:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1},bx=function(r){yx(e,r);function e(t,i,n,a){var s=r.call(this,t,i,n,a)||this;return s.labels_=null,s.text_="",s.textOffsetX_=0,s.textOffsetY_=0,s.textRotateWithView_=void 0,s.textRotation_=0,s.textFillState_=null,s.fillStates={},s.textStrokeState_=null,s.strokeStates={},s.textState_={},s.textStates={},s.textKey_="",s.fillKey_="",s.strokeKey_="",s.declutterImageWithText_=void 0,s}return e.prototype.finish=function(){var t=r.prototype.finish.call(this);return t.textStates=this.textStates,t.fillStates=this.fillStates,t.strokeStates=this.strokeStates,t},e.prototype.drawText=function(t,i){var n=this.textFillState_,a=this.textStrokeState_,s=this.textState_;if(!(this.text_===""||!s||!n&&!a)){var o=this.coordinates,l=o.length,h=t.getType(),u=null,d=t.getStride();if(s.placement===gx.LINE&&(h==q.LINE_STRING||h==q.MULTI_LINE_STRING||h==q.POLYGON||h==q.MULTI_POLYGON)){if(!Tt(this.getBufferedMaxExtent(),t.getExtent()))return;var c=void 0;if(u=t.getFlatCoordinates(),h==q.LINE_STRING)c=[u.length];else if(h==q.MULTI_LINE_STRING)c=t.getEnds();else if(h==q.POLYGON)c=t.getEnds().slice(0,1);else if(h==q.MULTI_POLYGON){var f=t.getEndss();c=[];for(var p=0,v=f.length;p<v;++p)c.push(f[p][0])}this.beginGeometry(t,i);for(var m=s.textAlign,_=0,g=void 0,y=0,b=c.length;y<b;++y){if(m==null){var x=_x(s.maxAngle,u,_,c[y],d);_=x[0],g=x[1]}else g=c[y];for(var p=_;p<g;p+=d)o.push(u[p],u[p+1]);var A=o.length;_=c[y],this.drawChars_(l,A),l=A}this.endGeometry(i)}else{var w=s.overflow?null:[];switch(h){case q.POINT:case q.MULTI_POINT:u=t.getFlatCoordinates();break;case q.LINE_STRING:u=t.getFlatMidpoint();break;case q.CIRCLE:u=t.getCenter();break;case q.MULTI_LINE_STRING:u=t.getFlatMidpoints(),d=2;break;case q.POLYGON:u=t.getFlatInteriorPoint(),s.overflow||w.push(u[2]/this.resolution),d=3;break;case q.MULTI_POLYGON:var C=t.getFlatInteriorPoints();u=[];for(var p=0,v=C.length;p<v;p+=3)s.overflow||w.push(C[p+2]/this.resolution),u.push(C[p],C[p+1]);if(u.length===0)return;d=2;break}var A=this.appendFlatPointCoordinates(u,d);if(A===l)return;if(w&&(A-l)/2!==u.length/d){var T=l/2;w=w.filter(function(Q,H){var Z=o[(T+H)*2]===u[H*d]&&o[(T+H)*2+1]===u[H*d+1];return Z||--T,Z})}this.saveTextStates_(),(s.backgroundFill||s.backgroundStroke)&&(this.setFillStrokeStyle(s.backgroundFill,s.backgroundStroke),s.backgroundFill&&(this.updateFillStyle(this.state,this.createFill),this.hitDetectionInstructions.push(this.createFill(this.state))),s.backgroundStroke&&(this.updateStrokeStyle(this.state,this.applyStroke),this.hitDetectionInstructions.push(this.createStroke(this.state)))),this.beginGeometry(t,i);var P=s.padding;if(P!=ti&&(s.scale[0]<0||s.scale[1]<0)){var k=s.padding[0],B=s.padding[1],D=s.padding[2],Y=s.padding[3];s.scale[0]<0&&(B=-B,Y=-Y),s.scale[1]<0&&(k=-k,D=-D),P=[k,B,D,Y]}var $=this.pixelRatio;this.instructions.push([G.DRAW_IMAGE,l,A,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,this.declutterImageWithText_,P==ti?ti:P.map(function(Q){return Q*$}),!!s.backgroundFill,!!s.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,w]);var V=1/$;this.hitDetectionInstructions.push([G.DRAW_IMAGE,l,A,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[V,V],NaN,this.declutterImageWithText_,P,!!s.backgroundFill,!!s.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,w]),this.endGeometry(i)}}},e.prototype.saveTextStates_=function(){var t=this.textStrokeState_,i=this.textState_,n=this.textFillState_,a=this.strokeKey_;t&&(a in this.strokeStates||(this.strokeStates[a]={strokeStyle:t.strokeStyle,lineCap:t.lineCap,lineDashOffset:t.lineDashOffset,lineWidth:t.lineWidth,lineJoin:t.lineJoin,miterLimit:t.miterLimit,lineDash:t.lineDash}));var s=this.textKey_;s in this.textStates||(this.textStates[s]={font:i.font,textAlign:i.textAlign||kr,textBaseline:i.textBaseline||Zn,scale:i.scale});var o=this.fillKey_;n&&(o in this.fillStates||(this.fillStates[o]={fillStyle:n.fillStyle}))},e.prototype.drawChars_=function(t,i){var n=this.textStrokeState_,a=this.textState_,s=this.strokeKey_,o=this.textKey_,l=this.fillKey_;this.saveTextStates_();var h=this.pixelRatio,u=Qn[a.textBaseline],d=this.textOffsetY_*h,c=this.text_,f=n?n.lineWidth*Math.abs(a.scale[0])/2:0;this.instructions.push([G.DRAW_CHARS,t,i,u,a.overflow,l,a.maxAngle,h,d,s,f*h,c,o,1]),this.hitDetectionInstructions.push([G.DRAW_CHARS,t,i,u,a.overflow,l,a.maxAngle,1,d,s,f,c,o,1/h])},e.prototype.setTextStyle=function(t,i){var n,a,s;if(!t)this.text_="";else{var o=t.getFill();o?(a=this.textFillState_,a||(a={},this.textFillState_=a),a.fillStyle=oe(o.getColor()||_e)):(a=null,this.textFillState_=a);var l=t.getStroke();if(!l)s=null,this.textStrokeState_=s;else{s=this.textStrokeState_,s||(s={},this.textStrokeState_=s);var h=l.getLineDash(),u=l.getLineDashOffset(),d=l.getWidth(),c=l.getMiterLimit();s.lineCap=l.getLineCap()||Hn,s.lineDash=h?h.slice():Rr,s.lineDashOffset=u===void 0?Lr:u,s.lineJoin=l.getLineJoin()||Ui,s.lineWidth=d===void 0?Dr:d,s.miterLimit=c===void 0?Pr:c,s.strokeStyle=oe(l.getColor()||Fr)}n=this.textState_;var f=t.getFont()||kd;$b(f);var p=t.getScaleArray();n.overflow=t.getOverflow(),n.font=f,n.maxAngle=t.getMaxAngle(),n.placement=t.getPlacement(),n.textAlign=t.getTextAlign(),n.textBaseline=t.getTextBaseline()||Zn,n.backgroundFill=t.getBackgroundFill(),n.backgroundStroke=t.getBackgroundStroke(),n.padding=t.getPadding()||ti,n.scale=p===void 0?[1,1]:p;var v=t.getOffsetX(),m=t.getOffsetY(),_=t.getRotateWithView(),g=t.getRotation();this.text_=t.getText()||"",this.textOffsetX_=v===void 0?0:v,this.textOffsetY_=m===void 0?0:m,this.textRotateWithView_=_===void 0?!1:_,this.textRotation_=g===void 0?0:g,this.strokeKey_=s?(typeof s.strokeStyle=="string"?s.strokeStyle:nt(s.strokeStyle))+s.lineCap+s.lineDashOffset+"|"+s.lineWidth+s.lineJoin+s.miterLimit+"["+s.lineDash.join()+"]":"",this.textKey_=n.font+n.scale+(n.textAlign||"?")+(n.textBaseline||"?"),this.fillKey_=a?typeof a.fillStyle=="string"?a.fillStyle:"|"+nt(a.fillStyle):""}this.declutterImageWithText_=i},e}(rn);const xx=bx;var Ax={Circle:Eh,Default:rn,Image:dx,LineString:px,Polygon:Eh,Text:xx},Cx=function(){function r(e,t,i,n){this.tolerance_=e,this.maxExtent_=t,this.pixelRatio_=n,this.resolution_=i,this.buildersByZIndex_={}}return r.prototype.finish=function(){var e={};for(var t in this.buildersByZIndex_){e[t]=e[t]||{};var i=this.buildersByZIndex_[t];for(var n in i){var a=i[n].finish();e[t][n]=a}}return e},r.prototype.getBuilder=function(e,t){var i=e!==void 0?e.toString():"0",n=this.buildersByZIndex_[i];n===void 0&&(n={},this.buildersByZIndex_[i]=n);var a=n[t];if(a===void 0){var s=Ax[t];a=new s(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),n[t]=a}return a},r}();const Ih=Cx,ht={CIRCLE:"Circle",DEFAULT:"Default",IMAGE:"Image",LINE_STRING:"LineString",POLYGON:"Polygon",TEXT:"Text"};function wx(r,e,t,i,n,a,s,o,l,h,u,d){var c=r[e],f=r[e+1],p=0,v=0,m=0,_=0;function g(){p=c,v=f,e+=i,c=r[e],f=r[e+1],_+=m,m=Math.sqrt((c-p)*(c-p)+(f-v)*(f-v))}do g();while(e<t-i&&_+m<a);for(var y=m===0?0:(a-_)/m,b=Ke(p,c,y),x=Ke(v,f,y),A=e-i,w=_,C=a+o*l(h,n,u);e<t-i&&_+m<C;)g();y=m===0?0:(C-_)/m;var T=Ke(p,c,y),P=Ke(v,f,y),k;if(d){var B=[b,x,T,P];od(B,0,4,2,d,B,B),k=B[0]>B[2]}else k=b>T;var D=Math.PI,Y=[],$=A+i===e;e=A,m=0,_=w,c=r[e],f=r[e+1];var V;if($){g(),V=Math.atan2(f-v,c-p),k&&(V+=V>0?-D:D);var N=(T+b)/2,Q=(P+x)/2;return Y[0]=[N,Q,(C-a)/2,V,n],Y}for(var H=0,Z=n.length;H<Z;){g();var ot=Math.atan2(f-v,c-p);if(k&&(ot+=ot>0?-D:D),V!==void 0){var I=ot-V;if(I+=I>D?-2*D:I<-D?2*D:0,Math.abs(I)>s)return null}V=ot;for(var ut=H,j=0;H<Z;++H){var dt=k?Z-H-1:H,It=o*l(h,n[dt],u);if(e+i<t&&_+m<a+j+It/2)break;j+=It}if(H!==ut){var Nt=k?n.substring(Z-ut,Z-H):n.substring(ut,H);y=m===0?0:(a+j/2-_)/m;var N=Ke(p,c,y),Q=Ke(v,f,y);Y.push([N,Q,j/2,ot,Nt]),a+=j}}return Y}function Ex(r,e,t,i){for(var n=r[e],a=r[e+1],s=0,o=e+i;o<t;o+=i){var l=r[o],h=r[o+1];s+=Math.sqrt((l-n)*(l-n)+(h-a)*(h-a)),n=l,a=h}return s}var _i=qt(),Te=[],fe=[],pe=[],Se=[];function Mh(r){return r[3].declutterBox}var Ix=new RegExp("["+String.fromCharCode(1425)+"-"+String.fromCharCode(2303)+String.fromCharCode(64285)+"-"+String.fromCharCode(65023)+String.fromCharCode(65136)+"-"+String.fromCharCode(65276)+String.fromCharCode(67584)+"-"+String.fromCharCode(69631)+String.fromCharCode(124928)+"-"+String.fromCharCode(126975)+"]");function Th(r,e){return(e==="start"||e==="end")&&!Ix.test(r)&&(e=e==="start"?"left":"right"),Qn[e]}function Mx(r,e,t){return t>0&&r.push(`
`,""),r.push(e,""),r}var Tx=function(){function r(e,t,i,n){this.overlaps=i,this.pixelRatio=t,this.resolution=e,this.alignFill_,this.instructions=n.instructions,this.coordinates=n.coordinates,this.coordinateCache_={},this.renderedTransform_=$e(),this.hitDetectionInstructions=n.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=n.fillStates||{},this.strokeStates=n.strokeStates||{},this.textStates=n.textStates||{},this.widths_={},this.labels_={}}return r.prototype.createLabel=function(e,t,i,n){var a=e+t+i+n;if(this.labels_[a])return this.labels_[a];var s=n?this.strokeStates[n]:null,o=i?this.fillStates[i]:null,l=this.textStates[t],h=this.pixelRatio,u=[l.scale[0]*h,l.scale[1]*h],d=Array.isArray(e),c=Th(d?e[0]:e,l.textAlign||kr),f=n&&s.lineWidth?s.lineWidth:0,p=d?e:e.split(`
`).reduce(Mx,[]),v=Ub(l,p),m=v.width,_=v.height,g=v.widths,y=v.heights,b=v.lineWidths,x=m+f,A=[],w=(x+2)*u[0],C=(_+f)*u[1],T={width:w<0?Math.floor(w):Math.ceil(w),height:C<0?Math.floor(C):Math.ceil(C),contextInstructions:A};if((u[0]!=1||u[1]!=1)&&A.push("scale",u),n){A.push("strokeStyle",s.strokeStyle),A.push("lineWidth",f),A.push("lineCap",s.lineCap),A.push("lineJoin",s.lineJoin),A.push("miterLimit",s.miterLimit);var P=_a?OffscreenCanvasRenderingContext2D:CanvasRenderingContext2D;P.prototype.setLineDash&&(A.push("setLineDash",[s.lineDash]),A.push("lineDashOffset",s.lineDashOffset))}i&&A.push("fillStyle",o.fillStyle),A.push("textBaseline","middle"),A.push("textAlign","center");for(var k=.5-c,B=c*x+k*f,D=[],Y=[],$=0,V=0,N=0,Q=0,H,Z=0,ot=p.length;Z<ot;Z+=2){var I=p[Z];if(I===`
`){V+=$,$=0,B=c*x+k*f,++Q;continue}var ut=p[Z+1]||l.font;ut!==H&&(n&&D.push("font",ut),i&&Y.push("font",ut),H=ut),$=Math.max($,y[N]);var j=[I,B+k*g[N]+c*(g[N]-b[Q]),.5*(f+$)+V];B+=g[N],n&&D.push("strokeText",j),i&&Y.push("fillText",j),++N}return Array.prototype.push.apply(A,D),Array.prototype.push.apply(A,Y),this.labels_[a]=T,T},r.prototype.replayTextBackground_=function(e,t,i,n,a,s,o){e.beginPath(),e.moveTo.apply(e,t),e.lineTo.apply(e,i),e.lineTo.apply(e,n),e.lineTo.apply(e,a),e.lineTo.apply(e,t),s&&(this.alignFill_=s[2],this.fill_(e)),o&&(this.setStrokeStyle_(e,o),e.stroke())},r.prototype.calculateImageOrLabelDimensions_=function(e,t,i,n,a,s,o,l,h,u,d,c,f,p,v,m){o*=c[0],l*=c[1];var _=i-o,g=n-l,y=a+h>e?e-h:a,b=s+u>t?t-u:s,x=p[3]+y*c[0]+p[1],A=p[0]+b*c[1]+p[2],w=_-p[3],C=g-p[0];(v||d!==0)&&(Te[0]=w,Se[0]=w,Te[1]=C,fe[1]=C,fe[0]=w+x,pe[0]=fe[0],pe[1]=C+A,Se[1]=pe[1]);var T;return d!==0?(T=de($e(),i,n,1,1,d,-i,-n),mt(T,Te),mt(T,fe),mt(T,pe),mt(T,Se),he(Math.min(Te[0],fe[0],pe[0],Se[0]),Math.min(Te[1],fe[1],pe[1],Se[1]),Math.max(Te[0],fe[0],pe[0],Se[0]),Math.max(Te[1],fe[1],pe[1],Se[1]),_i)):he(Math.min(w,w+x),Math.min(C,C+A),Math.max(w,w+x),Math.max(C,C+A),_i),f&&(_=Math.round(_),g=Math.round(g)),{drawImageX:_,drawImageY:g,drawImageW:y,drawImageH:b,originX:h,originY:u,declutterBox:{minX:_i[0],minY:_i[1],maxX:_i[2],maxY:_i[3],value:m},canvasTransform:T,scale:c}},r.prototype.replayImageOrLabel_=function(e,t,i,n,a,s,o){var l=!!(s||o),h=n.declutterBox,u=e.canvas,d=o?o[2]*n.scale[0]/2:0,c=h.minX-d<=u.width/t&&h.maxX+d>=0&&h.minY-d<=u.height/t&&h.maxY+d>=0;return c&&(l&&this.replayTextBackground_(e,Te,fe,pe,Se,s,o),jb(e,n.canvasTransform,a,i,n.originX,n.originY,n.drawImageW,n.drawImageH,n.drawImageX,n.drawImageY,n.scale)),!0},r.prototype.fill_=function(e){if(this.alignFill_){var t=mt(this.renderedTransform_,[0,0]),i=512*this.pixelRatio;e.save(),e.translate(t[0]%i,t[1]%i),e.rotate(this.viewRotation_)}e.fill(),this.alignFill_&&e.restore()},r.prototype.setStrokeStyle_=function(e,t){e.strokeStyle=t[1],e.lineWidth=t[2],e.lineCap=t[3],e.lineJoin=t[4],e.miterLimit=t[5],e.setLineDash&&(e.lineDashOffset=t[7],e.setLineDash(t[6]))},r.prototype.drawLabelWithPointPlacement_=function(e,t,i,n){var a=this.textStates[t],s=this.createLabel(e,t,n,i),o=this.strokeStates[i],l=this.pixelRatio,h=Th(Array.isArray(e)?e[0]:e,a.textAlign||kr),u=Qn[a.textBaseline||Zn],d=o&&o.lineWidth?o.lineWidth:0,c=s.width/l-2*a.scale[0],f=h*c+2*(.5-h)*d,p=u*s.height/l+2*(.5-u)*d;return{label:s,anchorX:f,anchorY:p}},r.prototype.execute_=function(e,t,i,n,a,s,o,l){var h;this.pixelCoordinates_&&Ki(i,this.renderedTransform_)?h=this.pixelCoordinates_:(this.pixelCoordinates_||(this.pixelCoordinates_=[]),h=ri(this.coordinates,0,this.coordinates.length,2,i,this.pixelCoordinates_),B0(this.renderedTransform_,i));for(var u=0,d=n.length,c=0,f,p,v,m,_,g,y,b,x,A,w,C,T=0,P=0,k=null,B=null,D=this.coordinateCache_,Y=this.viewRotation_,$=Math.round(Math.atan2(-i[1],i[0])*1e12)/1e12,V={context:e,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:Y},N=this.instructions!=n||this.overlaps?0:200,Q,H,Z,ot;u<d;){var I=n[u],ut=I[0];switch(ut){case G.BEGIN_GEOMETRY:Q=I[1],ot=I[3],Q.getGeometry()?o!==void 0&&!Tt(o,ot.getExtent())?u=I[2]+1:++u:u=I[2];break;case G.BEGIN_PATH:T>N&&(this.fill_(e),T=0),P>N&&(e.stroke(),P=0),!T&&!P&&(e.beginPath(),m=NaN,_=NaN),++u;break;case G.CIRCLE:c=I[1];var j=h[c],dt=h[c+1],It=h[c+2],Nt=h[c+3],Rt=It-j,zt=Nt-dt,hi=Math.sqrt(Rt*Rt+zt*zt);e.moveTo(j+hi,dt),e.arc(j,dt,hi,0,2*Math.PI,!0),++u;break;case G.CLOSE_PATH:e.closePath(),++u;break;case G.CUSTOM:c=I[1],f=I[2];var ie=I[3],nn=I[4],an=I.length==6?I[5]:void 0;V.geometry=ie,V.feature=Q,u in D||(D[u]=[]);var Ce=D[u];an?an(h,c,f,2,Ce):(Ce[0]=h[c],Ce[1]=h[c+1],Ce.length=2),nn(Ce,V),++u;break;case G.DRAW_IMAGE:c=I[1],f=I[2],b=I[3],p=I[4],v=I[5];var ui=I[6],sn=I[7],Qi=I[8],on=I[9],qe=I[10],Ji=I[11],ln=I[12],di=I[13],we=I[14];if(!b&&I.length>=19){x=I[18],A=I[19],w=I[20],C=I[21];var ci=this.drawLabelWithPointPlacement_(x,A,w,C);b=ci.label,I[3]=b;var xa=I[22];p=(ci.anchorX-xa)*this.pixelRatio,I[4]=p;var hn=I[23];v=(ci.anchorY-hn)*this.pixelRatio,I[5]=v,ui=b.height,I[6]=ui,di=b.width,I[13]=di}var tr=void 0;I.length>24&&(tr=I[24]);var ce=void 0,re=void 0,Xe=void 0;I.length>16?(ce=I[15],re=I[16],Xe=I[17]):(ce=ti,re=!1,Xe=!1),qe&&$?Ji+=Y:!qe&&!$&&(Ji-=Y);for(var er=0;c<f;c+=2)if(!(tr&&tr[er++]<di/this.pixelRatio)){var Lt=this.calculateImageOrLabelDimensions_(b.width,b.height,h[c],h[c+1],di,ui,p,v,Qi,on,Ji,ln,a,ce,re||Xe,Q),un=[e,t,b,Lt,sn,re?k:null,Xe?B:null],bt=void 0,fi=void 0;if(l&&we){var He=f-c;if(!we[He]){we[He]=un;continue}if(bt=we[He],delete we[He],fi=Mh(bt),l.collides(fi))continue}l&&l.collides(Lt.declutterBox)||(bt&&(l&&l.insert(fi),this.replayImageOrLabel_.apply(this,bt)),l&&l.insert(Lt.declutterBox),this.replayImageOrLabel_.apply(this,un))}++u;break;case G.DRAW_CHARS:var Qs=I[1],Js=I[2],Aa=I[3],dc=I[4];C=I[5];var cc=I[6],to=I[7],eo=I[8];w=I[9];var Ca=I[10];x=I[11],A=I[12];var io=[I[13],I[13]],wa=this.textStates[A],ir=wa.font,rr=[wa.scale[0]*to,wa.scale[1]*to],nr=void 0;ir in this.widths_?nr=this.widths_[ir]:(nr={},this.widths_[ir]=nr);var ro=Ex(h,Qs,Js,2),no=Math.abs(rr[0])*xh(ir,x,nr);if(dc||no<=ro){var fc=this.textStates[A].textAlign,pc=(ro-no)*Qn[fc],ar=wx(h,Qs,Js,2,x,pc,cc,Math.abs(rr[0]),xh,ir,nr,$?0:this.viewRotation_);t:if(ar){var sr=[],Ee=void 0,dn=void 0,cn=void 0,Pt=void 0,Vt=void 0;if(w)for(Ee=0,dn=ar.length;Ee<dn;++Ee){Vt=ar[Ee],cn=Vt[4],Pt=this.createLabel(cn,A,"",w),p=Vt[2]+(rr[0]<0?-Ca:Ca),v=Aa*Pt.height+(.5-Aa)*2*Ca*rr[1]/rr[0]-eo;var Lt=this.calculateImageOrLabelDimensions_(Pt.width,Pt.height,Vt[0],Vt[1],Pt.width,Pt.height,p,v,0,0,Vt[3],io,!1,ti,!1,Q);if(l&&l.collides(Lt.declutterBox))break t;sr.push([e,t,Pt,Lt,1,null,null])}if(C)for(Ee=0,dn=ar.length;Ee<dn;++Ee){Vt=ar[Ee],cn=Vt[4],Pt=this.createLabel(cn,A,C,""),p=Vt[2],v=Aa*Pt.height-eo;var Lt=this.calculateImageOrLabelDimensions_(Pt.width,Pt.height,Vt[0],Vt[1],Pt.width,Pt.height,p,v,0,0,Vt[3],io,!1,ti,!1,Q);if(l&&l.collides(Lt.declutterBox))break t;sr.push([e,t,Pt,Lt,1,null,null])}l&&l.load(sr.map(Mh));for(var Ea=0,vc=sr.length;Ea<vc;++Ea)this.replayImageOrLabel_.apply(this,sr[Ea])}}++u;break;case G.END_GEOMETRY:if(s!==void 0){Q=I[1];var ao=s(Q,ot);if(ao)return ao}++u;break;case G.FILL:N?T++:this.fill_(e),++u;break;case G.MOVE_TO_LINE_TO:for(c=I[1],f=I[2],H=h[c],Z=h[c+1],g=H+.5|0,y=Z+.5|0,(g!==m||y!==_)&&(e.moveTo(H,Z),m=g,_=y),c+=2;c<f;c+=2)H=h[c],Z=h[c+1],g=H+.5|0,y=Z+.5|0,(c==f-2||g!==m||y!==_)&&(e.lineTo(H,Z),m=g,_=y);++u;break;case G.SET_FILL_STYLE:k=I,this.alignFill_=I[2],T&&(this.fill_(e),T=0,P&&(e.stroke(),P=0)),e.fillStyle=I[1],++u;break;case G.SET_STROKE_STYLE:B=I,P&&(e.stroke(),P=0),this.setStrokeStyle_(e,I),++u;break;case G.STROKE:N?P++:e.stroke(),++u;break;default:++u;break}}T&&this.fill_(e),P&&e.stroke()},r.prototype.execute=function(e,t,i,n,a,s){this.viewRotation_=n,this.execute_(e,t,i,this.instructions,a,void 0,void 0,s)},r.prototype.executeHitDetection=function(e,t,i,n,a){return this.viewRotation_=i,this.execute_(e,1,t,this.hitDetectionInstructions,!0,n,a)},r}();const Sx=Tx;var Na=[ht.POLYGON,ht.CIRCLE,ht.LINE_STRING,ht.IMAGE,ht.TEXT,ht.DEFAULT],Ox=function(){function r(e,t,i,n,a,s){this.maxExtent_=e,this.overlaps_=n,this.pixelRatio_=i,this.resolution_=t,this.renderBuffer_=s,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=$e(),this.createExecutors_(a)}return r.prototype.clip=function(e,t){var i=this.getClipCoords(t);e.beginPath(),e.moveTo(i[0],i[1]),e.lineTo(i[2],i[3]),e.lineTo(i[4],i[5]),e.lineTo(i[6],i[7]),e.clip()},r.prototype.createExecutors_=function(e){for(var t in e){var i=this.executorsByZIndex_[t];i===void 0&&(i={},this.executorsByZIndex_[t]=i);var n=e[t];for(var a in n){var s=n[a];i[a]=new Sx(this.resolution_,this.pixelRatio_,this.overlaps_,s)}}},r.prototype.hasExecutors=function(e){for(var t in this.executorsByZIndex_)for(var i=this.executorsByZIndex_[t],n=0,a=e.length;n<a;++n)if(e[n]in i)return!0;return!1},r.prototype.forEachFeatureAtCoordinate=function(e,t,i,n,a,s){n=Math.round(n);var o=n*2+1,l=de(this.hitDetectionTransform_,n+.5,n+.5,1/t,-1/t,-i,-e[0],-e[1]),h=!this.hitDetectionContext_;h&&(this.hitDetectionContext_=Ht(o,o));var u=this.hitDetectionContext_;u.canvas.width!==o||u.canvas.height!==o?(u.canvas.width=o,u.canvas.height=o):h||u.clearRect(0,0,o,o);var d;this.renderBuffer_!==void 0&&(d=qt(),br(d,e),wr(d,t*(this.renderBuffer_+n),d));var c=Rx(n),f;function p(A,w){for(var C=u.getImageData(0,0,o,o).data,T=0,P=c.length;T<P;T++)if(C[c[T]]>0){if(!s||f!==ht.IMAGE&&f!==ht.TEXT||s.indexOf(A)!==-1){var k=(c[T]-3)/4,B=n-k%o,D=n-(k/o|0),Y=a(A,w,B*B+D*D);if(Y)return Y}u.clearRect(0,0,o,o);break}}var v=Object.keys(this.executorsByZIndex_).map(Number);v.sort($i);var m,_,g,y,b;for(m=v.length-1;m>=0;--m){var x=v[m].toString();for(g=this.executorsByZIndex_[x],_=Na.length-1;_>=0;--_)if(f=Na[_],y=g[f],y!==void 0&&(b=y.executeHitDetection(u,l,i,p,d),b))return b}},r.prototype.getClipCoords=function(e){var t=this.maxExtent_;if(!t)return null;var i=t[0],n=t[1],a=t[2],s=t[3],o=[i,n,i,s,a,s,a,n];return ri(o,0,8,2,e,o),o},r.prototype.isEmpty=function(){return Cr(this.executorsByZIndex_)},r.prototype.execute=function(e,t,i,n,a,s,o){var l=Object.keys(this.executorsByZIndex_).map(Number);l.sort($i),this.maxExtent_&&(e.save(),this.clip(e,i));var h=s||Na,u,d,c,f,p,v;for(o&&l.reverse(),u=0,d=l.length;u<d;++u){var m=l[u].toString();for(p=this.executorsByZIndex_[m],c=0,f=h.length;c<f;++c){var _=h[c];v=p[_],v!==void 0&&v.execute(e,t,i,n,a,o)}}this.maxExtent_&&e.restore()},r}(),za={};function Rx(r){if(za[r]!==void 0)return za[r];for(var e=r*2+1,t=r*r,i=new Array(t+1),n=0;n<=r;++n)for(var a=0;a<=r;++a){var s=n*n+a*a;if(s>t)break;var o=i[s];o||(o=[],i[s]=o),o.push(((r+n)*e+(r+a))*4+3),n>0&&o.push(((r-n)*e+(r+a))*4+3),a>0&&(o.push(((r+n)*e+(r-a))*4+3),n>0&&o.push(((r-n)*e+(r-a))*4+3))}for(var l=[],n=0,h=i.length;n<h;++n)i[n]&&l.push.apply(l,i[n]);return za[r]=l,l}const Sh=Ox;var Lx=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Px=function(r){Lx(e,r);function e(t,i,n,a,s,o,l){var h=r.call(this)||this;return h.context_=t,h.pixelRatio_=i,h.extent_=n,h.transform_=a,h.viewRotation_=s,h.squaredTolerance_=o,h.userTransform_=l,h.contextFillState_=null,h.contextStrokeState_=null,h.contextTextState_=null,h.fillState_=null,h.strokeState_=null,h.image_=null,h.imageAnchorX_=0,h.imageAnchorY_=0,h.imageHeight_=0,h.imageOpacity_=0,h.imageOriginX_=0,h.imageOriginY_=0,h.imageRotateWithView_=!1,h.imageRotation_=0,h.imageScale_=[0,0],h.imageWidth_=0,h.text_="",h.textOffsetX_=0,h.textOffsetY_=0,h.textRotateWithView_=!1,h.textRotation_=0,h.textScale_=[0,0],h.textFillState_=null,h.textStrokeState_=null,h.textState_=null,h.pixelCoordinates_=[],h.tmpLocalTransform_=$e(),h}return e.prototype.drawImages_=function(t,i,n,a){if(this.image_){var s=ri(t,i,n,a,this.transform_,this.pixelCoordinates_),o=this.context_,l=this.tmpLocalTransform_,h=o.globalAlpha;this.imageOpacity_!=1&&(o.globalAlpha=h*this.imageOpacity_);var u=this.imageRotation_;this.imageRotateWithView_&&(u+=this.viewRotation_);for(var d=0,c=s.length;d<c;d+=2){var f=s[d]-this.imageAnchorX_,p=s[d+1]-this.imageAnchorY_;if(u!==0||this.imageScale_[0]!=1||this.imageScale_[1]!=1){var v=f+this.imageAnchorX_,m=p+this.imageAnchorY_;de(l,v,m,1,1,u,-v,-m),o.setTransform.apply(o,l),o.translate(v,m),o.scale(this.imageScale_[0],this.imageScale_[1]),o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),o.setTransform(1,0,0,1,0,0)}else o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,f,p,this.imageWidth_,this.imageHeight_)}this.imageOpacity_!=1&&(o.globalAlpha=h)}},e.prototype.drawText_=function(t,i,n,a){if(!(!this.textState_||this.text_==="")){this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);var s=ri(t,i,n,a,this.transform_,this.pixelCoordinates_),o=this.context_,l=this.textRotation_;for(this.textRotateWithView_&&(l+=this.viewRotation_);i<n;i+=a){var h=s[i]+this.textOffsetX_,u=s[i+1]+this.textOffsetY_;if(l!==0||this.textScale_[0]!=1||this.textScale_[1]!=1){var d=de(this.tmpLocalTransform_,h,u,1,1,l,-h,-u);o.setTransform.apply(o,d),o.translate(h,u),o.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&o.strokeText(this.text_,0,0),this.textFillState_&&o.fillText(this.text_,0,0),o.setTransform(1,0,0,1,0,0)}else this.textStrokeState_&&o.strokeText(this.text_,h,u),this.textFillState_&&o.fillText(this.text_,h,u)}}},e.prototype.moveToLineTo_=function(t,i,n,a,s){var o=this.context_,l=ri(t,i,n,a,this.transform_,this.pixelCoordinates_);o.moveTo(l[0],l[1]);var h=l.length;s&&(h-=2);for(var u=2;u<h;u+=2)o.lineTo(l[u],l[u+1]);return s&&o.closePath(),n},e.prototype.drawRings_=function(t,i,n,a){for(var s=0,o=n.length;s<o;++s)i=this.moveToLineTo_(t,i,n[s],a,!0);return i},e.prototype.drawCircle=function(t){if(Tt(this.extent_,t.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var i=X0(t,this.transform_,this.pixelCoordinates_),n=i[2]-i[0],a=i[3]-i[1],s=Math.sqrt(n*n+a*a),o=this.context_;o.beginPath(),o.arc(i[0],i[1],s,0,2*Math.PI),this.fillState_&&o.fill(),this.strokeState_&&o.stroke()}this.text_!==""&&this.drawText_(t.getCenter(),0,2,2)}},e.prototype.setStyle=function(t){this.setFillStrokeStyle(t.getFill(),t.getStroke()),this.setImageStyle(t.getImage()),this.setTextStyle(t.getText())},e.prototype.setTransform=function(t){this.transform_=t},e.prototype.drawGeometry=function(t){var i=t.getType();switch(i){case q.POINT:this.drawPoint(t);break;case q.LINE_STRING:this.drawLineString(t);break;case q.POLYGON:this.drawPolygon(t);break;case q.MULTI_POINT:this.drawMultiPoint(t);break;case q.MULTI_LINE_STRING:this.drawMultiLineString(t);break;case q.MULTI_POLYGON:this.drawMultiPolygon(t);break;case q.GEOMETRY_COLLECTION:this.drawGeometryCollection(t);break;case q.CIRCLE:this.drawCircle(t);break}},e.prototype.drawFeature=function(t,i){var n=i.getGeometryFunction()(t);!n||!Tt(this.extent_,n.getExtent())||(this.setStyle(i),this.drawGeometry(n))},e.prototype.drawGeometryCollection=function(t){for(var i=t.getGeometriesArray(),n=0,a=i.length;n<a;++n)this.drawGeometry(i[n])},e.prototype.drawPoint=function(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var i=t.getFlatCoordinates(),n=t.getStride();this.image_&&this.drawImages_(i,0,i.length,n),this.text_!==""&&this.drawText_(i,0,i.length,n)},e.prototype.drawMultiPoint=function(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var i=t.getFlatCoordinates(),n=t.getStride();this.image_&&this.drawImages_(i,0,i.length,n),this.text_!==""&&this.drawText_(i,0,i.length,n)},e.prototype.drawLineString=function(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Tt(this.extent_,t.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);var i=this.context_,n=t.getFlatCoordinates();i.beginPath(),this.moveToLineTo_(n,0,n.length,t.getStride(),!1),i.stroke()}if(this.text_!==""){var a=t.getFlatMidpoint();this.drawText_(a,0,2,2)}}},e.prototype.drawMultiLineString=function(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var i=t.getExtent();if(Tt(this.extent_,i)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);var n=this.context_,a=t.getFlatCoordinates(),s=0,o=t.getEnds(),l=t.getStride();n.beginPath();for(var h=0,u=o.length;h<u;++h)s=this.moveToLineTo_(a,s,o[h],l,!1);n.stroke()}if(this.text_!==""){var d=t.getFlatMidpoints();this.drawText_(d,0,d.length,2)}}},e.prototype.drawPolygon=function(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Tt(this.extent_,t.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var i=this.context_;i.beginPath(),this.drawRings_(t.getOrientedFlatCoordinates(),0,t.getEnds(),t.getStride()),this.fillState_&&i.fill(),this.strokeState_&&i.stroke()}if(this.text_!==""){var n=t.getFlatInteriorPoint();this.drawText_(n,0,2,2)}}},e.prototype.drawMultiPolygon=function(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!Tt(this.extent_,t.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var i=this.context_,n=t.getOrientedFlatCoordinates(),a=0,s=t.getEndss(),o=t.getStride();i.beginPath();for(var l=0,h=s.length;l<h;++l){var u=s[l];a=this.drawRings_(n,a,u,o)}this.fillState_&&i.fill(),this.strokeState_&&i.stroke()}if(this.text_!==""){var d=t.getFlatInteriorPoints();this.drawText_(d,0,d.length,2)}}},e.prototype.setContextFillState_=function(t){var i=this.context_,n=this.contextFillState_;n?n.fillStyle!=t.fillStyle&&(n.fillStyle=t.fillStyle,i.fillStyle=t.fillStyle):(i.fillStyle=t.fillStyle,this.contextFillState_={fillStyle:t.fillStyle})},e.prototype.setContextStrokeState_=function(t){var i=this.context_,n=this.contextStrokeState_;n?(n.lineCap!=t.lineCap&&(n.lineCap=t.lineCap,i.lineCap=t.lineCap),i.setLineDash&&(Ki(n.lineDash,t.lineDash)||i.setLineDash(n.lineDash=t.lineDash),n.lineDashOffset!=t.lineDashOffset&&(n.lineDashOffset=t.lineDashOffset,i.lineDashOffset=t.lineDashOffset)),n.lineJoin!=t.lineJoin&&(n.lineJoin=t.lineJoin,i.lineJoin=t.lineJoin),n.lineWidth!=t.lineWidth&&(n.lineWidth=t.lineWidth,i.lineWidth=t.lineWidth),n.miterLimit!=t.miterLimit&&(n.miterLimit=t.miterLimit,i.miterLimit=t.miterLimit),n.strokeStyle!=t.strokeStyle&&(n.strokeStyle=t.strokeStyle,i.strokeStyle=t.strokeStyle)):(i.lineCap=t.lineCap,i.setLineDash&&(i.setLineDash(t.lineDash),i.lineDashOffset=t.lineDashOffset),i.lineJoin=t.lineJoin,i.lineWidth=t.lineWidth,i.miterLimit=t.miterLimit,i.strokeStyle=t.strokeStyle,this.contextStrokeState_={lineCap:t.lineCap,lineDash:t.lineDash,lineDashOffset:t.lineDashOffset,lineJoin:t.lineJoin,lineWidth:t.lineWidth,miterLimit:t.miterLimit,strokeStyle:t.strokeStyle})},e.prototype.setContextTextState_=function(t){var i=this.context_,n=this.contextTextState_,a=t.textAlign?t.textAlign:kr;n?(n.font!=t.font&&(n.font=t.font,i.font=t.font),n.textAlign!=a&&(n.textAlign=a,i.textAlign=a),n.textBaseline!=t.textBaseline&&(n.textBaseline=t.textBaseline,i.textBaseline=t.textBaseline)):(i.font=t.font,i.textAlign=a,i.textBaseline=t.textBaseline,this.contextTextState_={font:t.font,textAlign:a,textBaseline:t.textBaseline})},e.prototype.setFillStrokeStyle=function(t,i){var n=this;if(!t)this.fillState_=null;else{var a=t.getColor();this.fillState_={fillStyle:oe(a||_e)}}if(!i)this.strokeState_=null;else{var s=i.getColor(),o=i.getLineCap(),l=i.getLineDash(),h=i.getLineDashOffset(),u=i.getLineJoin(),d=i.getWidth(),c=i.getMiterLimit(),f=l||Rr;this.strokeState_={lineCap:o!==void 0?o:Hn,lineDash:this.pixelRatio_===1?f:f.map(function(p){return p*n.pixelRatio_}),lineDashOffset:(h||Lr)*this.pixelRatio_,lineJoin:u!==void 0?u:Ui,lineWidth:(d!==void 0?d:Dr)*this.pixelRatio_,miterLimit:c!==void 0?c:Pr,strokeStyle:oe(s||Fr)}}},e.prototype.setImageStyle=function(t){var i;if(!t||!(i=t.getSize())){this.image_=null;return}var n=t.getAnchor(),a=t.getOrigin();this.image_=t.getImage(this.pixelRatio_),this.imageAnchorX_=n[0]*this.pixelRatio_,this.imageAnchorY_=n[1]*this.pixelRatio_,this.imageHeight_=i[1]*this.pixelRatio_,this.imageOpacity_=t.getOpacity(),this.imageOriginX_=a[0],this.imageOriginY_=a[1],this.imageRotateWithView_=t.getRotateWithView(),this.imageRotation_=t.getRotation(),this.imageScale_=t.getScaleArray(),this.imageWidth_=i[0]*this.pixelRatio_},e.prototype.setTextStyle=function(t){if(!t)this.text_="";else{var i=t.getFill();if(!i)this.textFillState_=null;else{var n=i.getColor();this.textFillState_={fillStyle:oe(n||_e)}}var a=t.getStroke();if(!a)this.textStrokeState_=null;else{var s=a.getColor(),o=a.getLineCap(),l=a.getLineDash(),h=a.getLineDashOffset(),u=a.getLineJoin(),d=a.getWidth(),c=a.getMiterLimit();this.textStrokeState_={lineCap:o!==void 0?o:Hn,lineDash:l||Rr,lineDashOffset:h||Lr,lineJoin:u!==void 0?u:Ui,lineWidth:d!==void 0?d:Dr,miterLimit:c!==void 0?c:Pr,strokeStyle:oe(s||Fr)}}var f=t.getFont(),p=t.getOffsetX(),v=t.getOffsetY(),m=t.getRotateWithView(),_=t.getRotation(),g=t.getScaleArray(),y=t.getText(),b=t.getTextAlign(),x=t.getTextBaseline();this.textState_={font:f!==void 0?f:kd,textAlign:b!==void 0?b:kr,textBaseline:x!==void 0?x:Zn},this.text_=y!==void 0?Array.isArray(y)?y.reduce(function(A,w,C){return A+=C%2?" ":w},""):y:"",this.textOffsetX_=p!==void 0?this.pixelRatio_*p:0,this.textOffsetY_=v!==void 0?this.pixelRatio_*v:0,this.textRotateWithView_=m!==void 0?m:!1,this.textRotation_=_!==void 0?_:0,this.textScale_=[this.pixelRatio_*g[0],this.pixelRatio_*g[1]]}},e}(Gd);const Fx=Px,Pe={FRACTION:"fraction",PIXELS:"pixels"},Ut={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"};var kx=function(){function r(){this.cache_={},this.cacheSize_=0,this.maxCacheSize_=32}return r.prototype.clear=function(){this.cache_={},this.cacheSize_=0},r.prototype.canExpireCache=function(){return this.cacheSize_>this.maxCacheSize_},r.prototype.expire=function(){if(this.canExpireCache()){var e=0;for(var t in this.cache_){var i=this.cache_[t];!(e++&3)&&!i.hasListener()&&(delete this.cache_[t],--this.cacheSize_)}}},r.prototype.get=function(e,t,i){var n=Oh(e,t,i);return n in this.cache_?this.cache_[n]:null},r.prototype.set=function(e,t,i,n){var a=Oh(e,t,i);this.cache_[a]=n,++this.cacheSize_},r.prototype.setSize=function(e){this.maxCacheSize_=e,this.expire()},r}();function Oh(r,e,t){var i=t?gd(t):"null";return e+":"+r+":"+i}var Rh=new kx,Dx=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),ur=null,Bx=function(r){Dx(e,r);function e(t,i,n,a,s,o){var l=r.call(this)||this;return l.hitDetectionImage_=null,l.image_=t||new Image,a!==null&&(l.image_.crossOrigin=a),l.canvas_={},l.color_=o,l.unlisten_=null,l.imageState_=s,l.size_=n,l.src_=i,l.tainted_,l}return e.prototype.isTainted_=function(){if(this.tainted_===void 0&&this.imageState_===X.LOADED){ur||(ur=Ht(1,1)),ur.drawImage(this.image_,0,0);try{ur.getImageData(0,0,1,1),this.tainted_=!1}catch{ur=null,this.tainted_=!0}}return this.tainted_===!0},e.prototype.dispatchChangeEvent_=function(){this.dispatchEvent(At.CHANGE)},e.prototype.handleImageError_=function(){this.imageState_=X.ERROR,this.unlistenImage_(),this.dispatchChangeEvent_()},e.prototype.handleImageLoad_=function(){this.imageState_=X.LOADED,this.size_?(this.image_.width=this.size_[0],this.image_.height=this.size_[1]):this.size_=[this.image_.width,this.image_.height],this.unlistenImage_(),this.dispatchChangeEvent_()},e.prototype.getImage=function(t){return this.replaceColor_(t),this.canvas_[t]?this.canvas_[t]:this.image_},e.prototype.getPixelRatio=function(t){return this.replaceColor_(t),this.canvas_[t]?t:1},e.prototype.getImageState=function(){return this.imageState_},e.prototype.getHitDetectionImage=function(){if(!this.hitDetectionImage_)if(this.isTainted_()){var t=this.size_[0],i=this.size_[1],n=Ht(t,i);n.fillRect(0,0,t,i),this.hitDetectionImage_=n.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_},e.prototype.getSize=function(){return this.size_},e.prototype.getSrc=function(){return this.src_},e.prototype.load=function(){if(this.imageState_==X.IDLE){this.imageState_=X.LOADING;try{this.image_.src=this.src_}catch{this.handleImageError_()}this.unlisten_=Ys(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this))}},e.prototype.replaceColor_=function(t){if(!(!this.color_||this.canvas_[t]||this.imageState_!==X.LOADED)){var i=document.createElement("canvas");this.canvas_[t]=i,i.width=Math.ceil(this.image_.width*t),i.height=Math.ceil(this.image_.height*t);var n=i.getContext("2d");if(n.scale(t,t),n.drawImage(this.image_,0,0),n.globalCompositeOperation="multiply",n.globalCompositeOperation==="multiply"||this.isTainted_())n.fillStyle=gd(this.color_),n.fillRect(0,0,i.width/t,i.height/t),n.globalCompositeOperation="destination-in",n.drawImage(this.image_,0,0);else{for(var a=n.getImageData(0,0,i.width,i.height),s=a.data,o=this.color_[0]/255,l=this.color_[1]/255,h=this.color_[2]/255,u=this.color_[3],d=0,c=s.length;d<c;d+=4)s[d]*=o,s[d+1]*=l,s[d+2]*=h,s[d+3]*=u;n.putImageData(a,0,0)}}},e.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},e}(tn);function Nx(r,e,t,i,n,a){var s=Rh.get(e,i,a);return s||(s=new Bx(r,e,t,i,n,a),Rh.set(e,i,a,s)),s}var zx=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Gx=function(r){zx(e,r);function e(t){var i=this,n=t||{},a=n.opacity!==void 0?n.opacity:1,s=n.rotation!==void 0?n.rotation:0,o=n.scale!==void 0?n.scale:1,l=n.rotateWithView!==void 0?n.rotateWithView:!1;i=r.call(this,{opacity:a,rotation:s,scale:o,displacement:n.displacement!==void 0?n.displacement:[0,0],rotateWithView:l})||this,i.anchor_=n.anchor!==void 0?n.anchor:[.5,.5],i.normalizedAnchor_=null,i.anchorOrigin_=n.anchorOrigin!==void 0?n.anchorOrigin:Ut.TOP_LEFT,i.anchorXUnits_=n.anchorXUnits!==void 0?n.anchorXUnits:Pe.FRACTION,i.anchorYUnits_=n.anchorYUnits!==void 0?n.anchorYUnits:Pe.FRACTION,i.crossOrigin_=n.crossOrigin!==void 0?n.crossOrigin:null;var h=n.img!==void 0?n.img:null;i.imgSize_=n.imgSize;var u=n.src;J(!(u!==void 0&&h),4),J(!h||h&&i.imgSize_,5),(u===void 0||u.length===0)&&h&&(u=h.src||nt(h)),J(u!==void 0&&u.length>0,6);var d=n.src!==void 0?X.IDLE:X.LOADED;return i.color_=n.color!==void 0?qn(n.color):null,i.iconImage_=Nx(h,u,i.imgSize_!==void 0?i.imgSize_:null,i.crossOrigin_,d,i.color_),i.offset_=n.offset!==void 0?n.offset:[0,0],i.offsetOrigin_=n.offsetOrigin!==void 0?n.offsetOrigin:Ut.TOP_LEFT,i.origin_=null,i.size_=n.size!==void 0?n.size:null,i}return e.prototype.clone=function(){var t=this.getScale();return new e({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,imgSize:this.imgSize_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:Array.isArray(t)?t.slice():t,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc()})},e.prototype.getAnchor=function(){var t=this.normalizedAnchor_;if(!t){t=this.anchor_;var i=this.getSize();if(this.anchorXUnits_==Pe.FRACTION||this.anchorYUnits_==Pe.FRACTION){if(!i)return null;t=this.anchor_.slice(),this.anchorXUnits_==Pe.FRACTION&&(t[0]*=i[0]),this.anchorYUnits_==Pe.FRACTION&&(t[1]*=i[1])}if(this.anchorOrigin_!=Ut.TOP_LEFT){if(!i)return null;t===this.anchor_&&(t=this.anchor_.slice()),(this.anchorOrigin_==Ut.TOP_RIGHT||this.anchorOrigin_==Ut.BOTTOM_RIGHT)&&(t[0]=-t[0]+i[0]),(this.anchorOrigin_==Ut.BOTTOM_LEFT||this.anchorOrigin_==Ut.BOTTOM_RIGHT)&&(t[1]=-t[1]+i[1])}this.normalizedAnchor_=t}var n=this.getDisplacement();return[t[0]-n[0],t[1]+n[1]]},e.prototype.setAnchor=function(t){this.anchor_=t,this.normalizedAnchor_=null},e.prototype.getColor=function(){return this.color_},e.prototype.getImage=function(t){return this.iconImage_.getImage(t)},e.prototype.getPixelRatio=function(t){return this.iconImage_.getPixelRatio(t)},e.prototype.getImageSize=function(){return this.iconImage_.getSize()},e.prototype.getImageState=function(){return this.iconImage_.getImageState()},e.prototype.getHitDetectionImage=function(){return this.iconImage_.getHitDetectionImage()},e.prototype.getOrigin=function(){if(this.origin_)return this.origin_;var t=this.offset_;if(this.offsetOrigin_!=Ut.TOP_LEFT){var i=this.getSize(),n=this.iconImage_.getSize();if(!i||!n)return null;t=t.slice(),(this.offsetOrigin_==Ut.TOP_RIGHT||this.offsetOrigin_==Ut.BOTTOM_RIGHT)&&(t[0]=n[0]-i[0]-t[0]),(this.offsetOrigin_==Ut.BOTTOM_LEFT||this.offsetOrigin_==Ut.BOTTOM_RIGHT)&&(t[1]=n[1]-i[1]-t[1])}return this.origin_=t,this.origin_},e.prototype.getSrc=function(){return this.iconImage_.getSrc()},e.prototype.getSize=function(){return this.size_?this.size_:this.iconImage_.getSize()},e.prototype.listenImageChange=function(t){this.iconImage_.addEventListener(At.CHANGE,t)},e.prototype.load=function(){this.iconImage_.load()},e.prototype.unlistenImageChange=function(t){this.iconImage_.removeEventListener(At.CHANGE,t)},e}(Fd);const $d=Gx;var ae=.5;function $x(r,e,t,i,n,a,s){var o=r[0]*ae,l=r[1]*ae,h=Ht(o,l);h.imageSmoothingEnabled=!1;for(var u=h.canvas,d=new Fx(h,ae,n,null,s),c=t.length,f=Math.floor((256*256*256-1)/c),p={},v=1;v<=c;++v){var m=t[v-1],_=m.getStyleFunction()||i;if(i){var g=_(m,a);if(g){Array.isArray(g)||(g=[g]);for(var y=v*f,b="#"+("000000"+y.toString(16)).slice(-6),x=0,A=g.length;x<A;++x){var w=g[x],C=w.getGeometryFunction()(m);if(!(!C||!Tt(n,C.getExtent()))){var T=w.clone(),P=T.getFill();P&&P.setColor(b);var k=T.getStroke();k&&(k.setColor(b),k.setLineDash(null)),T.setText(void 0);var B=w.getImage();if(B&&B.getOpacity()!==0){var D=B.getImageSize();if(!D)continue;var Y=Ht(D[0],D[1],void 0,{alpha:!1}),$=Y.canvas;Y.fillStyle=b,Y.fillRect(0,0,$.width,$.height),T.setImage(new $d({img:$,imgSize:D,anchor:B.getAnchor(),anchorXUnits:Pe.PIXELS,anchorYUnits:Pe.PIXELS,offset:B.getOrigin(),opacity:1,size:B.getSize(),scale:B.getScale(),rotation:B.getRotation(),rotateWithView:B.getRotateWithView()}))}var V=T.getZIndex()||0,N=p[V];N||(N={},p[V]=N,N[q.POLYGON]=[],N[q.CIRCLE]=[],N[q.LINE_STRING]=[],N[q.POINT]=[]),N[C.getType().replace("Multi","")].push(C,T)}}}}}for(var Q=Object.keys(p).map(Number).sort($i),v=0,H=Q.length;v<H;++v){var N=p[Q[v]];for(var Z in N)for(var ot=N[Z],x=0,A=ot.length;x<A;x+=2){d.setStyle(ot[x+1]);for(var I=0,ut=e.length;I<ut;++I)d.setTransform(e[I]),d.drawGeometry(ot[x])}}return h.getImageData(0,0,u.width,u.height)}function Vx(r,e,t){var i=[];if(t){var n=Math.floor(Math.round(r[0])*ae),a=Math.floor(Math.round(r[1])*ae),s=(pt(n,0,t.width-1)+pt(a,0,t.height-1)*t.width)*4,o=t.data[s],l=t.data[s+1],h=t.data[s+2],u=h+256*(l+256*o),d=Math.floor((256*256*256-1)/e.length);u&&u%d===0&&i.push(e[u/d-1])}return i}var Ux=.5,Vd={Point:Qx,LineString:Hx,Polygon:tA,MultiPoint:Jx,MultiLineString:Zx,MultiPolygon:Kx,GeometryCollection:Xx,Circle:Yx};function jx(r,e){return parseInt(nt(r),10)-parseInt(nt(e),10)}function Wx(r,e){var t=ls(r,e);return t*t}function ls(r,e){return Ux*r/e}function Yx(r,e,t,i,n){var a=t.getFill(),s=t.getStroke();if(a||s){var o=r.getBuilder(t.getZIndex(),ht.CIRCLE);o.setFillStrokeStyle(a,s),o.drawCircle(e,i)}var l=t.getText();if(l&&l.getText()){var h=(n||r).getBuilder(t.getZIndex(),ht.TEXT);h.setTextStyle(l),h.drawText(e,i)}}function Lh(r,e,t,i,n,a,s){var o=!1,l=t.getImage();if(l){var h=l.getImageState();h==X.LOADED||h==X.ERROR?l.unlistenImageChange(n):(h==X.IDLE&&l.load(),h=l.getImageState(),l.listenImageChange(n),o=!0)}return qx(r,e,t,i,a,s),o}function qx(r,e,t,i,n,a){var s=t.getGeometryFunction()(e);if(s){var o=s.simplifyTransformed(i,n),l=t.getRenderer();if(l)Ud(r,o,t,e);else{var h=Vd[o.getType()];h(r,o,t,e,a)}}}function Ud(r,e,t,i){if(e.getType()==q.GEOMETRY_COLLECTION){for(var n=e.getGeometries(),a=0,s=n.length;a<s;++a)Ud(r,n[a],t,i);return}var o=r.getBuilder(t.getZIndex(),ht.DEFAULT);o.drawCustom(e,i,t.getRenderer(),t.getHitDetectionRenderer())}function Xx(r,e,t,i,n){var a=e.getGeometriesArray(),s,o;for(s=0,o=a.length;s<o;++s){var l=Vd[a[s].getType()];l(r,a[s],t,i,n)}}function Hx(r,e,t,i,n){var a=t.getStroke();if(a){var s=r.getBuilder(t.getZIndex(),ht.LINE_STRING);s.setFillStrokeStyle(null,a),s.drawLineString(e,i)}var o=t.getText();if(o&&o.getText()){var l=(n||r).getBuilder(t.getZIndex(),ht.TEXT);l.setTextStyle(o),l.drawText(e,i)}}function Zx(r,e,t,i,n){var a=t.getStroke();if(a){var s=r.getBuilder(t.getZIndex(),ht.LINE_STRING);s.setFillStrokeStyle(null,a),s.drawMultiLineString(e,i)}var o=t.getText();if(o&&o.getText()){var l=(n||r).getBuilder(t.getZIndex(),ht.TEXT);l.setTextStyle(o),l.drawText(e,i)}}function Kx(r,e,t,i,n){var a=t.getFill(),s=t.getStroke();if(s||a){var o=r.getBuilder(t.getZIndex(),ht.POLYGON);o.setFillStrokeStyle(a,s),o.drawMultiPolygon(e,i)}var l=t.getText();if(l&&l.getText()){var h=(n||r).getBuilder(t.getZIndex(),ht.TEXT);h.setTextStyle(l),h.drawText(e,i)}}function Qx(r,e,t,i,n){var a=t.getImage(),s=t.getText(),o;if(n&&(r=n,o=a&&s&&s.getText()?{}:void 0),a){if(a.getImageState()!=X.LOADED)return;var l=r.getBuilder(t.getZIndex(),ht.IMAGE);l.setImageStyle(a,o),l.drawPoint(e,i)}if(s&&s.getText()){var h=r.getBuilder(t.getZIndex(),ht.TEXT);h.setTextStyle(s,o),h.drawText(e,i)}}function Jx(r,e,t,i,n){var a=t.getImage(),s=t.getText(),o;if(n&&(r=n,o=a&&s&&s.getText()?{}:void 0),a){if(a.getImageState()!=X.LOADED)return;var l=r.getBuilder(t.getZIndex(),ht.IMAGE);l.setImageStyle(a,o),l.drawMultiPoint(e,i)}if(s&&s.getText()){var h=(n||r).getBuilder(t.getZIndex(),ht.TEXT);h.setTextStyle(s,o),h.drawText(e,i)}}function tA(r,e,t,i,n){var a=t.getFill(),s=t.getStroke();if(a||s){var o=r.getBuilder(t.getZIndex(),ht.POLYGON);o.setFillStrokeStyle(a,s),o.drawPolygon(e,i)}var l=t.getText();if(l&&l.getText()){var h=(n||r).getBuilder(t.getZIndex(),ht.TEXT);h.setTextStyle(l),h.drawText(e,i)}}var eA=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),iA=function(r){eA(e,r);function e(t){var i=r.call(this,t)||this;return i.boundHandleStyleImageChange_=i.handleStyleImageChange_.bind(i),i.animatingOrInteracting_,i.dirty_=!1,i.hitDetectionImageData_=null,i.renderedFeatures_=null,i.renderedRevision_=-1,i.renderedResolution_=NaN,i.renderedExtent_=qt(),i.wrappedRenderedExtent_=qt(),i.renderedRotation_,i.renderedCenter_=null,i.renderedProjection_=null,i.renderedRenderOrder_=null,i.replayGroup_=null,i.replayGroupChanged=!0,i.declutterExecutorGroup=null,i.clipping=!0,i}return e.prototype.renderWorlds=function(t,i,n){var a=i.extent,s=i.viewState,o=s.center,l=s.resolution,h=s.projection,u=s.rotation,d=h.getExtent(),c=this.getLayer().getSource(),f=i.pixelRatio,p=i.viewHints,v=!(p[kt.ANIMATING]||p[kt.INTERACTING]),m=this.context,_=Math.round(i.size[0]*f),g=Math.round(i.size[1]*f),y=c.getWrapX()&&h.canWrapX(),b=y?at(d):null,x=y?Math.ceil((a[2]-d[2])/b)+1:1,A=y?Math.floor((a[0]-d[0])/b):0;do{var w=this.getRenderTransform(o,l,u,f,_,g,A*b);t.execute(m,1,w,u,v,void 0,n)}while(++A<x)},e.prototype.renderDeclutter=function(t){this.declutterExecutorGroup&&this.renderWorlds(this.declutterExecutorGroup,t,t.declutterTree)},e.prototype.renderFrame=function(t,i){var n=t.pixelRatio,a=t.layerStatesArray[t.layerIndex];N0(this.pixelTransform,1/n,1/n),Ns(this.inversePixelTransform,this.pixelTransform);var s=zs(this.pixelTransform);this.useContainer(i,s,a.opacity,this.getBackground(t));var o=this.context,l=o.canvas,h=this.replayGroup_,u=this.declutterExecutorGroup;if((!h||h.isEmpty())&&(!u||u.isEmpty()))return null;var d=Math.round(t.size[0]*n),c=Math.round(t.size[1]*n);l.width!=d||l.height!=c?(l.width=d,l.height=c,l.style.transform!==s&&(l.style.transform=s)):this.containerReused||o.clearRect(0,0,d,c),this.preRender(o,t);var f=t.viewState,p=f.projection,v=!1,m=!0;if(a.extent&&this.clipping){var _=me(a.extent,p);m=Tt(_,t.extent),v=m&&!De(_,t.extent),v&&this.clipUnrotated(o,t,_)}m&&this.renderWorlds(h,t),v&&o.restore(),this.postRender(o,t);var g=Od(a.opacity),y=this.container;return g!==y.style.opacity&&(y.style.opacity=g),this.renderedRotation_!==f.rotation&&(this.renderedRotation_=f.rotation,this.hitDetectionImageData_=null),this.container},e.prototype.getFeatures=function(t){return new Promise(function(i){if(!this.hitDetectionImageData_&&!this.animatingOrInteracting_){var n=[this.context.canvas.width,this.context.canvas.height];mt(this.pixelTransform,n);var a=this.renderedCenter_,s=this.renderedResolution_,o=this.renderedRotation_,l=this.renderedProjection_,h=this.wrappedRenderedExtent_,u=this.getLayer(),d=[],c=n[0]*ae,f=n[1]*ae;d.push(this.getRenderTransform(a,s,o,ae,c,f,0).slice());var p=u.getSource(),v=l.getExtent();if(p.getWrapX()&&l.canWrapX()&&!De(v,h)){for(var m=h[0],_=at(v),g=0,y=void 0;m<v[0];)--g,y=_*g,d.push(this.getRenderTransform(a,s,o,ae,c,f,y).slice()),m+=_;for(g=0,m=h[2];m>v[2];)++g,y=_*g,d.push(this.getRenderTransform(a,s,o,ae,c,f,y).slice()),m-=_}this.hitDetectionImageData_=$x(n,d,this.renderedFeatures_,u.getStyleFunction(),h,s,o)}i(Vx(t,this.renderedFeatures_,this.hitDetectionImageData_))}.bind(this))},e.prototype.forEachFeatureAtCoordinate=function(t,i,n,a,s){var o=this;if(this.replayGroup_){var l=i.viewState.resolution,h=i.viewState.rotation,u=this.getLayer(),d={},c=function(v,m,_){var g=nt(v),y=d[g];if(y){if(y!==!0&&_<y.distanceSq){if(_===0)return d[g]=!0,s.splice(s.lastIndexOf(y),1),a(v,u,m);y.geometry=m,y.distanceSq=_}}else{if(_===0)return d[g]=!0,a(v,u,m);s.push(d[g]={feature:v,layer:u,geometry:m,distanceSq:_,callback:a})}},f,p=[this.replayGroup_];return this.declutterExecutorGroup&&p.push(this.declutterExecutorGroup),p.some(function(v){return f=v.forEachFeatureAtCoordinate(t,l,h,n,c,v===o.declutterExecutorGroup&&i.declutterTree?i.declutterTree.all().map(function(m){return m.value}):null)}),f}},e.prototype.handleFontsChanged=function(){var t=this.getLayer();t.getVisible()&&this.replayGroup_&&t.changed()},e.prototype.handleStyleImageChange_=function(t){this.renderIfReadyAndVisible()},e.prototype.prepareFrame=function(t){var i=this.getLayer(),n=i.getSource();if(!n)return!1;var a=t.viewHints[kt.ANIMATING],s=t.viewHints[kt.INTERACTING],o=i.getUpdateWhileAnimating(),l=i.getUpdateWhileInteracting();if(!this.dirty_&&!o&&a||!l&&s)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;var h=t.extent,u=t.viewState,d=u.projection,c=u.resolution,f=t.pixelRatio,p=i.getRevision(),v=i.getRenderBuffer(),m=i.getRenderOrder();m===void 0&&(m=jx);var _=u.center.slice(),g=wr(h,v*c),y=g.slice(),b=[g.slice()],x=d.getExtent();if(n.getWrapX()&&d.canWrapX()&&!De(x,t.extent)){var A=at(x),w=Math.max(at(g)/2,A);g[0]=x[0]-w,g[2]=x[2]+w,Lp(_,d);var C=Sp(b[0],d);C[0]<x[0]&&C[2]<x[2]?b.push([C[0]+A,C[1],C[2]+A,C[3]]):C[0]>x[0]&&C[2]>x[2]&&b.push([C[0]-A,C[1],C[2]-A,C[3]])}if(!this.dirty_&&this.renderedResolution_==c&&this.renderedRevision_==p&&this.renderedRenderOrder_==m&&De(this.wrappedRenderedExtent_,g))return Ki(this.renderedExtent_,y)||(this.hitDetectionImageData_=null,this.renderedExtent_=y),this.renderedCenter_=_,this.replayGroupChanged=!1,!0;this.replayGroup_=null,this.dirty_=!1;var T=new Ih(ls(c,f),g,c,f),P;this.getLayer().getDeclutter()&&(P=new Ih(ls(c,f),g,c,f));var k=Pu(),B;if(k){for(var D=0,Y=b.length;D<Y;++D){var $=b[D],V=ts($,d);n.loadFeatures(V,Np(c,d),k)}B=fa(k,d)}else for(var D=0,Y=b.length;D<Y;++D)n.loadFeatures(b[D],c,d);var N=Wx(c,f),Q=function(ut){var j,dt=ut.getStyleFunction()||i.getStyleFunction();if(dt&&(j=dt(ut,c)),j){var It=this.renderFeature(ut,N,j,T,B,P);this.dirty_=this.dirty_||It}}.bind(this),H=ts(g,d),Z=n.getFeaturesInExtent(H);m&&Z.sort(m);for(var D=0,Y=Z.length;D<Y;++D)Q(Z[D]);this.renderedFeatures_=Z;var ot=T.finish(),I=new Sh(g,c,f,n.getOverlaps(),ot,i.getRenderBuffer());return P&&(this.declutterExecutorGroup=new Sh(g,c,f,n.getOverlaps(),P.finish(),i.getRenderBuffer())),this.renderedResolution_=c,this.renderedRevision_=p,this.renderedRenderOrder_=m,this.renderedExtent_=y,this.wrappedRenderedExtent_=g,this.renderedCenter_=_,this.renderedProjection_=d,this.replayGroup_=I,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0},e.prototype.renderFeature=function(t,i,n,a,s,o){if(!n)return!1;var l=!1;if(Array.isArray(n))for(var h=0,u=n.length;h<u;++h)l=Lh(a,t,n[h],i,this.boundHandleStyleImageChange_,s,o)||l;else l=Lh(a,t,n,i,this.boundHandleStyleImageChange_,s,o);return l},e}(Ws);const rA=iA;var nA=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),aA=function(r){nA(e,r);function e(t){return r.call(this,t)||this}return e.prototype.createRenderer=function(){return new rA(this)},e}(ax);const sA=aA;/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */function Jn(r){return[r.x,r.y]}function oA(r){return[r.width,r.height]}function jd(r,e,t){if(!(e.length!==r.getLength()||r.getArray().some((a,s)=>a.id!==e[s])))return;const n=e.map(a=>t.lookup.get(a)).filter(a=>!!a);r.clear(),n.forEach(a=>r.push(a))}function Ae(r){const e={...r};return Object.keys(r).forEach(t=>{r[t]===null&&delete e[t]}),e}/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */function qs(r,e,t){if(!r)throw new Error("Can not instantiate base class: ol/layer/Layer");return r.setOpacity(e.opacity),r.setVisible(e.visible),r.setZIndex(e.zIndex||void 0),r.setMinZoom(e.minZoom||-1/0),r.setMaxZoom(e.maxZoom||1/0),r.setBackground(e.background||void 0),r}function lA(r,e,t){return r||(r=new Rb(Ae({...e,source:t.lookup.get(e.source)}))),qs(r,e),r.setSource(t.lookup.get(e.source)),r}function hA(r,e,t){return r||(r=new sA(Ae({...e,source:t.lookup.get(e.source)}))),qs(r,e),r.setSource(t.lookup.get(e.source)),r}function uA(r,e,t){return r||(r=new ab(Ae({...e,source:t.lookup.get(e.source)}))),qs(r,e),r.setSource(t.lookup.get(e.source)),r}const Si={ADD:"add",REMOVE:"remove"};var Wd=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Ph={LENGTH:"length"},Sn=function(r){Wd(e,r);function e(t,i,n){var a=r.call(this,t)||this;return a.element=i,a.index=n,a}return e}(oi),dA=function(r){Wd(e,r);function e(t,i){var n=r.call(this)||this;n.on,n.once,n.un;var a=i||{};if(n.unique_=!!a.unique,n.array_=t||[],n.unique_)for(var s=0,o=n.array_.length;s<o;++s)n.assertUnique_(n.array_[s],s);return n.updateLength_(),n}return e.prototype.clear=function(){for(;this.getLength()>0;)this.pop()},e.prototype.extend=function(t){for(var i=0,n=t.length;i<n;++i)this.push(t[i]);return this},e.prototype.forEach=function(t){for(var i=this.array_,n=0,a=i.length;n<a;++n)t(i[n],n,i)},e.prototype.getArray=function(){return this.array_},e.prototype.item=function(t){return this.array_[t]},e.prototype.getLength=function(){return this.get(Ph.LENGTH)},e.prototype.insertAt=function(t,i){this.unique_&&this.assertUnique_(i),this.array_.splice(t,0,i),this.updateLength_(),this.dispatchEvent(new Sn(Si.ADD,i,t))},e.prototype.pop=function(){return this.removeAt(this.getLength()-1)},e.prototype.push=function(t){this.unique_&&this.assertUnique_(t);var i=this.getLength();return this.insertAt(i,t),this.getLength()},e.prototype.remove=function(t){for(var i=this.array_,n=0,a=i.length;n<a;++n)if(i[n]===t)return this.removeAt(n)},e.prototype.removeAt=function(t){var i=this.array_[t];return this.array_.splice(t,1),this.updateLength_(),this.dispatchEvent(new Sn(Si.REMOVE,i,t)),i},e.prototype.setAt=function(t,i){var n=this.getLength();if(t<n){this.unique_&&this.assertUnique_(i,t);var a=this.array_[t];this.array_[t]=i,this.dispatchEvent(new Sn(Si.REMOVE,a,t)),this.dispatchEvent(new Sn(Si.ADD,i,t))}else{for(var s=n;s<t;++s)this.insertAt(s,void 0);this.insertAt(t,i)}},e.prototype.updateLength_=function(){this.set(Ph.LENGTH,this.array_.length)},e.prototype.assertUnique_=function(t,i){for(var n=0,a=this.array_.length;n<a;++n)if(this.array_[n]===t&&n!==i)throw new Cu(58)},e}(li);const Yd=dA;var Ne="1.3.0",cA=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),fA=function(r){cA(e,r);function e(t,i,n,a,s,o,l){var h=this,u=t.getExtent(),d=i.getExtent(),c=d?Pi(n,d):n,f=Ve(c),p=Or(t,i,f,a),v=yd,m=new wd(t,i,c,u,p*v,a),_=m.calculateSourceExtent(),g=o(_,p,s),y=g?X.IDLE:X.EMPTY,b=g?g.getPixelRatio():1;return h=r.call(this,n,a,b,y)||this,h.targetProj_=i,h.maxSourceExtent_=u,h.triangulation_=m,h.targetResolution_=a,h.targetExtent_=n,h.sourceImage_=g,h.sourcePixelRatio_=b,h.interpolate_=l,h.canvas_=null,h.sourceListenerKey_=null,h}return e.prototype.disposeInternal=function(){this.state==X.LOADING&&this.unlistenSource_(),r.prototype.disposeInternal.call(this)},e.prototype.getImage=function(){return this.canvas_},e.prototype.getProjection=function(){return this.targetProj_},e.prototype.reproject_=function(){var t=this.sourceImage_.getState();if(t==X.LOADED){var i=at(this.targetExtent_)/this.targetResolution_,n=Et(this.targetExtent_)/this.targetResolution_;this.canvas_=Ed(i,n,this.sourcePixelRatio_,this.sourceImage_.getResolution(),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_)}this.state=t,this.changed()},e.prototype.load=function(){if(this.state==X.IDLE){this.state=X.LOADING,this.changed();var t=this.sourceImage_.getState();t==X.LOADED||t==X.ERROR?this.reproject_():(this.sourceListenerKey_=ee(this.sourceImage_,At.CHANGE,function(i){var n=this.sourceImage_.getState();(n==X.LOADED||n==X.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}},e.prototype.unlistenSource_=function(){Wt(this.sourceListenerKey_),this.sourceListenerKey_=null},e}(Ad);const pA=fA;var vA=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),mA=function(r){vA(e,r);function e(t){var i=r.call(this)||this;i.projection=vt(t.projection),i.attributions_=Fh(t.attributions),i.attributionsCollapsible_=t.attributionsCollapsible!==void 0?t.attributionsCollapsible:!0,i.loading=!1,i.state_=t.state!==void 0?t.state:ya.READY,i.wrapX_=t.wrapX!==void 0?t.wrapX:!1,i.interpolate_=!!t.interpolate,i.viewResolver=null,i.viewRejector=null;var n=i;return i.viewPromise_=new Promise(function(a,s){n.viewResolver=a,n.viewRejector=s}),i}return e.prototype.getAttributions=function(){return this.attributions_},e.prototype.getAttributionsCollapsible=function(){return this.attributionsCollapsible_},e.prototype.getProjection=function(){return this.projection},e.prototype.getResolutions=function(){return K()},e.prototype.getView=function(){return this.viewPromise_},e.prototype.getState=function(){return this.state_},e.prototype.getWrapX=function(){return this.wrapX_},e.prototype.getInterpolate=function(){return this.interpolate_},e.prototype.refresh=function(){this.changed()},e.prototype.setAttributions=function(t){this.attributions_=Fh(t),this.changed()},e.prototype.setState=function(t){this.state_=t,this.changed()},e}(li);function Fh(r){return r?Array.isArray(r)?function(e){return r}:typeof r=="function"?r:function(e){return[r]}:null}const Xs=mA;var qd=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Ga={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"},gA=function(r){qd(e,r);function e(t,i){var n=r.call(this,t)||this;return n.image=i,n}return e}(oi),_A=function(r){qd(e,r);function e(t){var i=this,n=t.imageSmoothing!==void 0?t.imageSmoothing:!0;return t.interpolate!==void 0&&(n=t.interpolate),i=r.call(this,{attributions:t.attributions,projection:t.projection,state:t.state,interpolate:n})||this,i.on,i.once,i.un,i.resolutions_=t.resolutions!==void 0?t.resolutions:null,i.reprojectedImage_=null,i.reprojectedRevision_=0,i}return e.prototype.getResolutions=function(){return this.resolutions_},e.prototype.findNearestResolution=function(t){if(this.resolutions_){var i=ma(this.resolutions_,t,0);t=this.resolutions_[i]}return t},e.prototype.getImage=function(t,i,n,a){var s=this.getProjection();if(!s||!a||Fe(s,a))return s&&(a=s),this.getImageInternal(t,i,n,a);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&Fe(this.reprojectedImage_.getProjection(),a)&&this.reprojectedImage_.getResolution()==i&&ha(this.reprojectedImage_.getExtent(),t))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new pA(s,a,t,i,n,function(o,l,h){return this.getImageInternal(o,l,h,s)}.bind(this),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_},e.prototype.getImageInternal=function(t,i,n,a){return K()},e.prototype.handleImageChange=function(t){var i=t.target,n;switch(i.getState()){case X.LOADING:this.loading=!0,n=Ga.IMAGELOADSTART;break;case X.LOADED:this.loading=!1,n=Ga.IMAGELOADEND;break;case X.ERROR:this.loading=!1,n=Ga.IMAGELOADERROR;break;default:return}this.hasListener(n)&&this.dispatchEvent(new gA(n,i))},e}(Xs);function yA(r,e){r.getImage().src=e}const bA=_A,ze={CARMENTA_SERVER:"carmentaserver",GEOSERVER:"geoserver",MAPSERVER:"mapserver",QGIS:"qgis"};function ta(r,e){var t=[];Object.keys(e).forEach(function(n){e[n]!==null&&e[n]!==void 0&&t.push(n+"="+encodeURIComponent(e[n]))});var i=t.join("&");return r=r.replace(/[?&]$/,""),r=r.indexOf("?")===-1?r+"?":r+"&",r+i}var xA=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Oe=4,kh=[101,101],AA=function(r){xA(e,r);function e(t){var i=this,n=t||{},a=n.imageSmoothing!==void 0?n.imageSmoothing:!0;return n.interpolate!==void 0&&(a=n.interpolate),i=r.call(this,{attributions:n.attributions,interpolate:a,projection:n.projection,resolutions:n.resolutions})||this,i.crossOrigin_=n.crossOrigin!==void 0?n.crossOrigin:null,i.url_=n.url,i.imageLoadFunction_=n.imageLoadFunction!==void 0?n.imageLoadFunction:yA,i.params_=n.params||{},i.v13_=!0,i.updateV13_(),i.serverType_=n.serverType,i.hidpi_=n.hidpi!==void 0?n.hidpi:!0,i.image_=null,i.imageSize_=[0,0],i.renderedRevision_=0,i.ratio_=n.ratio!==void 0?n.ratio:1.5,i}return e.prototype.getFeatureInfoUrl=function(t,i,n,a){if(this.url_!==void 0){var s=vt(n),o=this.getProjection();o&&o!==s&&(i=Or(o,s,t,i),t=Xr(t,s,o));var l=Ln(t,i,0,kh),h={SERVICE:"WMS",VERSION:Ne,REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.params_.LAYERS};st(h,this.params_,a);var u=Ai((t[0]-l[0])/i,Oe),d=Ai((l[3]-t[1])/i,Oe);return h[this.v13_?"I":"X"]=u,h[this.v13_?"J":"Y"]=d,this.getRequestUrl_(l,kh,1,o||s,h)}},e.prototype.getLegendUrl=function(t,i){if(this.url_!==void 0){var n={SERVICE:"WMS",VERSION:Ne,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(i===void 0||i.LAYER===void 0){var a=this.params_.LAYERS,s=!Array.isArray(a)||a.length===1;if(!s)return;n.LAYER=a}if(t!==void 0){var o=this.getProjection()?this.getProjection().getMetersPerUnit():1,l=28e-5;n.SCALE=t*o/l}return st(n,i),ta(this.url_,n)}},e.prototype.getParams=function(){return this.params_},e.prototype.getImageInternal=function(t,i,n,a){if(this.url_===void 0)return null;i=this.findNearestResolution(i),n!=1&&(!this.hidpi_||this.serverType_===void 0)&&(n=1);var s=i/n,o=Ve(t),l=ke(at(t)/s,Oe),h=ke(Et(t)/s,Oe),u=Ln(o,s,0,[l,h]),d=ke(this.ratio_*at(t)/s,Oe),c=ke(this.ratio_*Et(t)/s,Oe),f=Ln(o,s,0,[d,c]),p=this.image_;if(p&&this.renderedRevision_==this.getRevision()&&p.getResolution()==i&&p.getPixelRatio()==n&&De(p.getExtent(),u))return p;var v={SERVICE:"WMS",VERSION:Ne,REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};st(v,this.params_),this.imageSize_[0]=Sl(at(f)/s,Oe),this.imageSize_[1]=Sl(Et(f)/s,Oe);var m=this.getRequestUrl_(f,this.imageSize_,n,a,v);return this.image_=new vb(f,i,n,m,this.crossOrigin_,this.imageLoadFunction_),this.renderedRevision_=this.getRevision(),this.image_.addEventListener(At.CHANGE,this.handleImageChange.bind(this)),this.image_},e.prototype.getImageLoadFunction=function(){return this.imageLoadFunction_},e.prototype.getRequestUrl_=function(t,i,n,a,s){if(J(this.url_!==void 0,9),s[this.v13_?"CRS":"SRS"]=a.getCode(),"STYLES"in this.params_||(s.STYLES=""),n!=1)switch(this.serverType_){case ze.GEOSERVER:var o=90*n+.5|0;"FORMAT_OPTIONS"in s?s.FORMAT_OPTIONS+=";dpi:"+o:s.FORMAT_OPTIONS="dpi:"+o;break;case ze.MAPSERVER:s.MAP_RESOLUTION=90*n;break;case ze.CARMENTA_SERVER:case ze.QGIS:s.DPI=90*n;break;default:J(!1,8);break}s.WIDTH=i[0],s.HEIGHT=i[1];var l=a.getAxisOrientation(),h;return this.v13_&&l.substr(0,2)=="ne"?h=[t[1],t[0],t[3],t[2]]:h=t,s.BBOX=h.join(","),ta(this.url_,s)},e.prototype.getUrl=function(){return this.url_},e.prototype.setImageLoadFunction=function(t){this.image_=null,this.imageLoadFunction_=t,this.changed()},e.prototype.setUrl=function(t){t!=this.url_&&(this.url_=t,this.image_=null,this.changed())},e.prototype.updateParams=function(t){st(this.params_,t),this.updateV13_(),this.image_=null,this.changed()},e.prototype.updateV13_=function(){var t=this.params_.VERSION||Ne;this.v13_=Tu(t,"1.3")>=0},e}(bA);const CA=AA;var wA=function(){function r(e){this.highWaterMark=e!==void 0?e:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}return r.prototype.canExpireCache=function(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark},r.prototype.expireCache=function(e){for(;this.canExpireCache();)this.pop()},r.prototype.clear=function(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null},r.prototype.containsKey=function(e){return this.entries_.hasOwnProperty(e)},r.prototype.forEach=function(e){for(var t=this.oldest_;t;)e(t.value_,t.key_,this),t=t.newer},r.prototype.get=function(e,t){var i=this.entries_[e];return J(i!==void 0,15),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_},r.prototype.remove=function(e){var t=this.entries_[e];return J(t!==void 0,15),t===this.newest_?(this.newest_=t.older,this.newest_&&(this.newest_.newer=null)):t===this.oldest_?(this.oldest_=t.newer,this.oldest_&&(this.oldest_.older=null)):(t.newer.older=t.older,t.older.newer=t.newer),delete this.entries_[e],--this.count_,t.value_},r.prototype.getCount=function(){return this.count_},r.prototype.getKeys=function(){var e=new Array(this.count_),t=0,i;for(i=this.newest_;i;i=i.older)e[t++]=i.key_;return e},r.prototype.getValues=function(){var e=new Array(this.count_),t=0,i;for(i=this.newest_;i;i=i.older)e[t++]=i.value_;return e},r.prototype.peekLast=function(){return this.oldest_.value_},r.prototype.peekLastKey=function(){return this.oldest_.key_},r.prototype.peekFirstKey=function(){return this.newest_.key_},r.prototype.pop=function(){var e=this.oldest_;return delete this.entries_[e.key_],e.newer&&(e.newer.older=null),this.oldest_=e.newer,this.oldest_||(this.newest_=null),--this.count_,e.value_},r.prototype.replace=function(e,t){this.get(e),this.entries_[e].value_=t},r.prototype.set=function(e,t){J(!(e in this.entries_),16);var i={key_:e,newer:null,older:this.newest_,value_:t};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[e]=i,++this.count_},r.prototype.setSize=function(e){this.highWaterMark=e},r}();const EA=wA;function Dh(r,e,t,i){return i!==void 0?(i[0]=r,i[1]=e,i[2]=t,i):[r,e,t]}function ba(r,e,t){return r+"/"+e+"/"+t}function Xd(r){return ba(r[0],r[1],r[2])}function IA(r){return r.split("/").map(Number)}function Hd(r){return(r[1]<<r[0])+r[2]}function MA(r,e){var t=r[0],i=r[1],n=r[2];if(e.getMinZoom()>t||t>e.getMaxZoom())return!1;var a=e.getFullTileRange(t);return a?a.containsXY(i,n):!0}var TA=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),SA=function(r){TA(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.expireCache=function(t){for(;this.canExpireCache();){var i=this.peekLast();if(i.getKey()in t)break;this.pop().release()}},e.prototype.pruneExceptNewestZ=function(){if(this.getCount()!==0){var t=this.peekFirstKey(),i=IA(t),n=i[0];this.forEach(function(a){a.tileCoord[0]!==n&&(this.remove(Xd(a.tileCoord)),a.release())}.bind(this))}},e}(EA);const Zd=SA,$a={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"};var OA=[0,0,0],Re=5,RA=function(){function r(e){this.minZoom=e.minZoom!==void 0?e.minZoom:0,this.resolutions_=e.resolutions,J(C0(this.resolutions_,function(s,o){return o-s},!0),17);var t;if(!e.origins){for(var i=0,n=this.resolutions_.length-1;i<n;++i)if(!t)t=this.resolutions_[i]/this.resolutions_[i+1];else if(this.resolutions_[i]/this.resolutions_[i+1]!==t){t=void 0;break}}this.zoomFactor_=t,this.maxZoom=this.resolutions_.length-1,this.origin_=e.origin!==void 0?e.origin:null,this.origins_=null,e.origins!==void 0&&(this.origins_=e.origins,J(this.origins_.length==this.resolutions_.length,20));var a=e.extent;a!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=si(a)),J(!this.origin_&&this.origins_||this.origin_&&!this.origins_,18),this.tileSizes_=null,e.tileSizes!==void 0&&(this.tileSizes_=e.tileSizes,J(this.tileSizes_.length==this.resolutions_.length,19)),this.tileSize_=e.tileSize!==void 0?e.tileSize:this.tileSizes_?null:$s,J(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,22),this.extent_=a!==void 0?a:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],e.sizes!==void 0?this.fullTileRanges_=e.sizes.map(function(s,o){var l=new Td(Math.min(0,s[0]),Math.max(s[0]-1,-1),Math.min(0,s[1]),Math.max(s[1]-1,-1));if(a){var h=this.getTileRangeForExtentAndZ(a,o);l.minX=Math.max(h.minX,l.minX),l.maxX=Math.min(h.maxX,l.maxX),l.minY=Math.max(h.minY,l.minY),l.maxY=Math.min(h.maxY,l.maxY)}return l},this):a&&this.calculateTileRanges_(a)}return r.prototype.forEachTileCoord=function(e,t,i){for(var n=this.getTileRangeForExtentAndZ(e,t),a=n.minX,s=n.maxX;a<=s;++a)for(var o=n.minY,l=n.maxY;o<=l;++o)i([t,a,o])},r.prototype.forEachTileCoordParentTileRange=function(e,t,i,n){var a,s,o,l=null,h=e[0]-1;for(this.zoomFactor_===2?(s=e[1],o=e[2]):l=this.getTileCoordExtent(e,n);h>=this.minZoom;){if(this.zoomFactor_===2?(s=Math.floor(s/2),o=Math.floor(o/2),a=mi(s,s,o,o,i)):a=this.getTileRangeForExtentAndZ(l,h,i),t(h,a))return!0;--h}return!1},r.prototype.getExtent=function(){return this.extent_},r.prototype.getMaxZoom=function(){return this.maxZoom},r.prototype.getMinZoom=function(){return this.minZoom},r.prototype.getOrigin=function(e){return this.origin_?this.origin_:this.origins_[e]},r.prototype.getResolution=function(e){return this.resolutions_[e]},r.prototype.getResolutions=function(){return this.resolutions_},r.prototype.getTileCoordChildTileRange=function(e,t,i){if(e[0]<this.maxZoom){if(this.zoomFactor_===2){var n=e[1]*2,a=e[2]*2;return mi(n,n+1,a,a+1,t)}var s=this.getTileCoordExtent(e,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(s,e[0]+1,t)}return null},r.prototype.getTileRangeForTileCoordAndZ=function(e,t,i){if(t>this.maxZoom||t<this.minZoom)return null;var n=e[0],a=e[1],s=e[2];if(t===n)return mi(a,s,a,s,i);if(this.zoomFactor_){var o=Math.pow(this.zoomFactor_,t-n),l=Math.floor(a*o),h=Math.floor(s*o);if(t<n)return mi(l,l,h,h,i);var u=Math.floor(o*(a+1))-1,d=Math.floor(o*(s+1))-1;return mi(l,u,h,d,i)}var c=this.getTileCoordExtent(e,this.tmpExtent_);return this.getTileRangeForExtentAndZ(c,t,i)},r.prototype.getTileRangeExtent=function(e,t,i){var n=this.getOrigin(e),a=this.getResolution(e),s=Gt(this.getTileSize(e),this.tmpSize_),o=n[0]+t.minX*s[0]*a,l=n[0]+(t.maxX+1)*s[0]*a,h=n[1]+t.minY*s[1]*a,u=n[1]+(t.maxY+1)*s[1]*a;return he(o,h,l,u,i)},r.prototype.getTileRangeForExtentAndZ=function(e,t,i){var n=OA;this.getTileCoordForXYAndZ_(e[0],e[3],t,!1,n);var a=n[1],s=n[2];return this.getTileCoordForXYAndZ_(e[2],e[1],t,!0,n),mi(a,n[1],s,n[2],i)},r.prototype.getTileCoordCenter=function(e){var t=this.getOrigin(e[0]),i=this.getResolution(e[0]),n=Gt(this.getTileSize(e[0]),this.tmpSize_);return[t[0]+(e[1]+.5)*n[0]*i,t[1]-(e[2]+.5)*n[1]*i]},r.prototype.getTileCoordExtent=function(e,t){var i=this.getOrigin(e[0]),n=this.getResolution(e[0]),a=Gt(this.getTileSize(e[0]),this.tmpSize_),s=i[0]+e[1]*a[0]*n,o=i[1]-(e[2]+1)*a[1]*n,l=s+a[0]*n,h=o+a[1]*n;return he(s,o,l,h,t)},r.prototype.getTileCoordForCoordAndResolution=function(e,t,i){return this.getTileCoordForXYAndResolution_(e[0],e[1],t,!1,i)},r.prototype.getTileCoordForXYAndResolution_=function(e,t,i,n,a){var s=this.getZForResolution(i),o=i/this.getResolution(s),l=this.getOrigin(s),h=Gt(this.getTileSize(s),this.tmpSize_),u=o*(e-l[0])/i/h[0],d=o*(l[1]-t)/i/h[1];return n?(u=ke(u,Re)-1,d=ke(d,Re)-1):(u=Ai(u,Re),d=Ai(d,Re)),Dh(s,u,d,a)},r.prototype.getTileCoordForXYAndZ_=function(e,t,i,n,a){var s=this.getOrigin(i),o=this.getResolution(i),l=Gt(this.getTileSize(i),this.tmpSize_),h=(e-s[0])/o/l[0],u=(s[1]-t)/o/l[1];return n?(h=ke(h,Re)-1,u=ke(u,Re)-1):(h=Ai(h,Re),u=Ai(u,Re)),Dh(i,h,u,a)},r.prototype.getTileCoordForCoordAndZ=function(e,t,i){return this.getTileCoordForXYAndZ_(e[0],e[1],t,!1,i)},r.prototype.getTileCoordResolution=function(e){return this.resolutions_[e[0]]},r.prototype.getTileSize=function(e){return this.tileSize_?this.tileSize_:this.tileSizes_[e]},r.prototype.getFullTileRange=function(e){return this.fullTileRanges_?this.fullTileRanges_[e]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,e):null},r.prototype.getZForResolution=function(e,t){var i=ma(this.resolutions_,e,t||0);return pt(i,this.minZoom,this.maxZoom)},r.prototype.calculateTileRanges_=function(e){for(var t=this.resolutions_.length,i=new Array(t),n=this.minZoom;n<t;++n)i[n]=this.getTileRangeForExtentAndZ(e,n);this.fullTileRanges_=i},r}();const Kd=RA;function Qd(r){var e=r.getDefaultTileGrid();return e||(e=kA(r),r.setDefaultTileGrid(e)),e}function LA(r,e,t){var i=e[0],n=r.getTileCoordCenter(e),a=Hs(t);if(Hi(a,n))return e;var s=at(a),o=Math.ceil((a[0]-n[0])/s);return n[0]+=s*o,r.getTileCoordForCoordAndZ(n,i)}function PA(r,e,t,i){var n=i!==void 0?i:cr.TOP_LEFT,a=Jd(r,e,t);return new Kd({extent:r,origin:Ep(r,n),resolutions:a,tileSize:t})}function FA(r){var e=r||{},t=e.extent||vt("EPSG:3857").getExtent(),i={extent:t,minZoom:e.minZoom,tileSize:e.tileSize,resolutions:Jd(t,e.maxZoom,e.tileSize,e.maxResolution)};return new Kd(i)}function Jd(r,e,t,i){for(var n=e!==void 0?e:J0,a=Et(r),s=at(r),o=Gt(t!==void 0?t:$s),l=i>0?i:Math.max(s/o[0],a/o[1]),h=n+1,u=new Array(h),d=0;d<h;++d)u[d]=l/Math.pow(2,d);return u}function kA(r,e,t,i){var n=Hs(r);return PA(n,e,t,i)}function Hs(r){r=vt(r);var e=r.getExtent();if(!e){var t=180*Yt[ge.DEGREES]/r.getMetersPerUnit();e=he(-t,-t,t,t)}return e}var tc=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),DA=function(r){tc(e,r);function e(t){var i=r.call(this,{attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,projection:t.projection,state:t.state,wrapX:t.wrapX,interpolate:t.interpolate})||this;i.on,i.once,i.un,i.opaque_=t.opaque!==void 0?t.opaque:!1,i.tilePixelRatio_=t.tilePixelRatio!==void 0?t.tilePixelRatio:1,i.tileGrid=t.tileGrid!==void 0?t.tileGrid:null;var n=[256,256];return i.tileGrid&&Gt(i.tileGrid.getTileSize(i.tileGrid.getMinZoom()),n),i.tileCache=new Zd(t.cacheSize||0),i.tmpSize=[0,0],i.key_=t.key||"",i.tileOptions={transition:t.transition,interpolate:t.interpolate},i.zDirection=t.zDirection?t.zDirection:0,i}return e.prototype.canExpireCache=function(){return this.tileCache.canExpireCache()},e.prototype.expireCache=function(t,i){var n=this.getTileCacheForProjection(t);n&&n.expireCache(i)},e.prototype.forEachLoadedTile=function(t,i,n,a){var s=this.getTileCacheForProjection(t);if(!s)return!1;for(var o=!0,l,h,u,d=n.minX;d<=n.maxX;++d)for(var c=n.minY;c<=n.maxY;++c)h=ba(i,d,c),u=!1,s.containsKey(h)&&(l=s.get(h),u=l.getState()===U.LOADED,u&&(u=a(l)!==!1)),u||(o=!1);return o},e.prototype.getGutterForProjection=function(t){return 0},e.prototype.getKey=function(){return this.key_},e.prototype.setKey=function(t){this.key_!==t&&(this.key_=t,this.changed())},e.prototype.getOpaque=function(t){return this.opaque_},e.prototype.getResolutions=function(){return this.tileGrid?this.tileGrid.getResolutions():null},e.prototype.getTile=function(t,i,n,a,s){return K()},e.prototype.getTileGrid=function(){return this.tileGrid},e.prototype.getTileGridForProjection=function(t){return this.tileGrid?this.tileGrid:Qd(t)},e.prototype.getTileCacheForProjection=function(t){return J(Fe(this.getProjection(),t),68),this.tileCache},e.prototype.getTilePixelRatio=function(t){return this.tilePixelRatio_},e.prototype.getTilePixelSize=function(t,i,n){var a=this.getTileGridForProjection(n),s=this.getTilePixelRatio(i),o=Gt(a.getTileSize(t),this.tmpSize);return s==1?o:Rd(o,s,this.tmpSize)},e.prototype.getTileCoordForTileUrlFunction=function(t,i){var n=i!==void 0?i:this.getProjection(),a=this.getTileGridForProjection(n);return this.getWrapX()&&n.isGlobal()&&(t=LA(a,t,n)),MA(t,a)?t:null},e.prototype.clear=function(){this.tileCache.clear()},e.prototype.refresh=function(){this.clear(),r.prototype.refresh.call(this)},e.prototype.updateCacheSize=function(t,i){var n=this.getTileCacheForProjection(i);t>n.highWaterMark&&(n.highWaterMark=t)},e.prototype.useTile=function(t,i,n,a){},e}(Xs),BA=function(r){tc(e,r);function e(t,i){var n=r.call(this,t)||this;return n.tile=i,n}return e}(oi);const NA=DA;function zA(r,e){var t=/\{z\}/g,i=/\{x\}/g,n=/\{y\}/g,a=/\{-y\}/g;return function(s,o,l){if(s)return r.replace(t,s[0].toString()).replace(i,s[1].toString()).replace(n,s[2].toString()).replace(a,function(){var h=s[0],u=e.getFullTileRange(h);J(u,55);var d=u.getHeight()-s[2]-1;return d.toString()})}}function GA(r,e){for(var t=r.length,i=new Array(t),n=0;n<t;++n)i[n]=zA(r[n],e);return $A(i)}function $A(r){return r.length===1?r[0]:function(e,t,i){if(e){var n=Hd(e),a=ii(n,r.length);return r[a](e,t,i)}else return}}function VA(r){var e=[],t=/\{([a-z])-([a-z])\}/.exec(r);if(t){var i=t[1].charCodeAt(0),n=t[2].charCodeAt(0),a=void 0;for(a=i;a<=n;++a)e.push(r.replace(t[0],String.fromCharCode(a)));return e}if(t=/\{(\d+)-(\d+)\}/.exec(r),t){for(var s=parseInt(t[2],10),o=parseInt(t[1],10);o<=s;o++)e.push(r.replace(t[0],o.toString()));return e}return e.push(r),e}var UA=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),jA=function(r){UA(e,r);function e(t){var i=r.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,opaque:t.opaque,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tilePixelRatio:t.tilePixelRatio,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection})||this;return i.generateTileUrlFunction_=i.tileUrlFunction===e.prototype.tileUrlFunction,i.tileLoadFunction=t.tileLoadFunction,t.tileUrlFunction&&(i.tileUrlFunction=t.tileUrlFunction),i.urls=null,t.urls?i.setUrls(t.urls):t.url&&i.setUrl(t.url),i.tileLoadingKeys_={},i}return e.prototype.getTileLoadFunction=function(){return this.tileLoadFunction},e.prototype.getTileUrlFunction=function(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction},e.prototype.getUrls=function(){return this.urls},e.prototype.handleTileChange=function(t){var i=t.target,n=nt(i),a=i.getState(),s;a==U.LOADING?(this.tileLoadingKeys_[n]=!0,s=$a.TILELOADSTART):n in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[n],s=a==U.ERROR?$a.TILELOADERROR:a==U.LOADED?$a.TILELOADEND:void 0),s!=null&&this.dispatchEvent(new BA(s,i))},e.prototype.setTileLoadFunction=function(t){this.tileCache.clear(),this.tileLoadFunction=t,this.changed()},e.prototype.setTileUrlFunction=function(t,i){this.tileUrlFunction=t,this.tileCache.pruneExceptNewestZ(),typeof i<"u"?this.setKey(i):this.changed()},e.prototype.setUrl=function(t){var i=VA(t);this.urls=i,this.setUrls(i)},e.prototype.setUrls=function(t){this.urls=t;var i=t.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(GA(t,this.tileGrid),i):this.setKey(i)},e.prototype.tileUrlFunction=function(t,i,n){},e.prototype.useTile=function(t,i,n){var a=ba(t,i,n);this.tileCache.containsKey(a)&&this.tileCache.get(a)},e}(NA);const WA=jA;var YA=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),qA=function(r){YA(e,r);function e(t){var i=this,n=t.imageSmoothing!==void 0?t.imageSmoothing:!0;return t.interpolate!==void 0&&(n=t.interpolate),i=r.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,opaque:t.opaque,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction?t.tileLoadFunction:XA,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:t.wrapX,transition:t.transition,interpolate:n,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection})||this,i.crossOrigin=t.crossOrigin!==void 0?t.crossOrigin:null,i.tileClass=t.tileClass!==void 0?t.tileClass:Cd,i.tileCacheForProjection={},i.tileGridForProjection={},i.reprojectionErrorThreshold_=t.reprojectionErrorThreshold,i.renderReprojectionEdges_=!1,i}return e.prototype.canExpireCache=function(){if(this.tileCache.canExpireCache())return!0;for(var t in this.tileCacheForProjection)if(this.tileCacheForProjection[t].canExpireCache())return!0;return!1},e.prototype.expireCache=function(t,i){var n=this.getTileCacheForProjection(t);this.tileCache.expireCache(this.tileCache==n?i:{});for(var a in this.tileCacheForProjection){var s=this.tileCacheForProjection[a];s.expireCache(s==n?i:{})}},e.prototype.getGutterForProjection=function(t){return this.getProjection()&&t&&!Fe(this.getProjection(),t)?0:this.getGutter()},e.prototype.getGutter=function(){return 0},e.prototype.getKey=function(){var t=r.prototype.getKey.call(this);return this.getInterpolate()||(t+=":disable-interpolation"),t},e.prototype.getOpaque=function(t){return this.getProjection()&&t&&!Fe(this.getProjection(),t)?!1:r.prototype.getOpaque.call(this,t)},e.prototype.getTileGridForProjection=function(t){var i=this.getProjection();if(this.tileGrid&&(!i||Fe(i,t)))return this.tileGrid;var n=nt(t);return n in this.tileGridForProjection||(this.tileGridForProjection[n]=Qd(t)),this.tileGridForProjection[n]},e.prototype.getTileCacheForProjection=function(t){var i=this.getProjection();if(!i||Fe(i,t))return this.tileCache;var n=nt(t);return n in this.tileCacheForProjection||(this.tileCacheForProjection[n]=new Zd(this.tileCache.highWaterMark)),this.tileCacheForProjection[n]},e.prototype.createTile_=function(t,i,n,a,s,o){var l=[t,i,n],h=this.getTileCoordForTileUrlFunction(l,s),u=h?this.tileUrlFunction(h,a,s):void 0,d=new this.tileClass(l,u!==void 0?U.IDLE:U.EMPTY,u!==void 0?u:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return d.key=o,d.addEventListener(At.CHANGE,this.handleTileChange.bind(this)),d},e.prototype.getTile=function(t,i,n,a,s){var o=this.getProjection();if(!o||!s||Fe(o,s))return this.getTileInternal(t,i,n,a,o||s);var l=this.getTileCacheForProjection(s),h=[t,i,n],u=void 0,d=Xd(h);l.containsKey(d)&&(u=l.get(d));var c=this.getKey();if(u&&u.key==c)return u;var f=this.getTileGridForProjection(o),p=this.getTileGridForProjection(s),v=this.getTileCoordForTileUrlFunction(h,s),m=new Id(o,f,s,p,h,v,this.getTilePixelRatio(a),this.getGutter(),function(_,g,y,b){return this.getTileInternal(_,g,y,b,o)}.bind(this),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.getInterpolate());return m.key=c,u?(m.interimTile=u,m.refreshInterimChain(),l.replace(d,m)):l.set(d,m),m},e.prototype.getTileInternal=function(t,i,n,a,s){var o=null,l=ba(t,i,n),h=this.getKey();if(!this.tileCache.containsKey(l))o=this.createTile_(t,i,n,a,s,h),this.tileCache.set(l,o);else if(o=this.tileCache.get(l),o.key!=h){var u=o;o=this.createTile_(t,i,n,a,s,h),u.getState()==U.IDLE?o.interimTile=u.interimTile:o.interimTile=u,o.refreshInterimChain(),this.tileCache.replace(l,o)}return o},e.prototype.setRenderReprojectionEdges=function(t){if(this.renderReprojectionEdges_!=t){this.renderReprojectionEdges_=t;for(var i in this.tileCacheForProjection)this.tileCacheForProjection[i].clear();this.changed()}},e.prototype.setTileGridForProjection=function(t,i){{var n=vt(t);if(n){var a=nt(n);a in this.tileGridForProjection||(this.tileGridForProjection[a]=i)}}},e}(WA);function XA(r,e){r.getImage().src=e}const ec=qA;var HA=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),ZA=function(r){HA(e,r);function e(t){var i=t||{},n=i.imageSmoothing!==void 0?i.imageSmoothing:!0;i.interpolate!==void 0&&(n=i.interpolate);var a=i.projection!==void 0?i.projection:"EPSG:3857",s=i.tileGrid!==void 0?i.tileGrid:FA({extent:Hs(a),maxResolution:i.maxResolution,maxZoom:i.maxZoom,minZoom:i.minZoom,tileSize:i.tileSize});return r.call(this,{attributions:i.attributions,cacheSize:i.cacheSize,crossOrigin:i.crossOrigin,interpolate:n,opaque:i.opaque,projection:a,reprojectionErrorThreshold:i.reprojectionErrorThreshold,tileGrid:s,tileLoadFunction:i.tileLoadFunction,tilePixelRatio:i.tilePixelRatio,tileUrlFunction:i.tileUrlFunction,url:i.url,urls:i.urls,wrapX:i.wrapX!==void 0?i.wrapX:!0,transition:i.transition,attributionsCollapsible:i.attributionsCollapsible,zDirection:i.zDirection})||this}return e}(ec);const ic=ZA;var KA=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),rc='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.',QA=function(r){KA(e,r);function e(t){var i=t||{},n=i.imageSmoothing!==void 0?i.imageSmoothing:!0;i.interpolate!==void 0&&(n=i.interpolate);var a;i.attributions!==void 0?a=i.attributions:a=[rc];var s=i.crossOrigin!==void 0?i.crossOrigin:"anonymous",o=i.url!==void 0?i.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";return r.call(this,{attributions:a,attributionsCollapsible:!1,cacheSize:i.cacheSize,crossOrigin:s,interpolate:n,maxZoom:i.maxZoom!==void 0?i.maxZoom:19,opaque:i.opaque!==void 0?i.opaque:!0,reprojectionErrorThreshold:i.reprojectionErrorThreshold,tileLoadFunction:i.tileLoadFunction,transition:i.transition,url:o,wrapX:i.wrapX,zDirection:i.zDirection})||this}return e}(ic);const JA=QA;var t1=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),e1=function(r){t1(e,r);function e(t){var i=this,n=t||{},a=n.imageSmoothing!==void 0?n.imageSmoothing:!0;n.interpolate!==void 0&&(a=n.interpolate);var s=n.params||{},o="TRANSPARENT"in s?s.TRANSPARENT:!0;return i=r.call(this,{attributions:n.attributions,attributionsCollapsible:n.attributionsCollapsible,cacheSize:n.cacheSize,crossOrigin:n.crossOrigin,interpolate:a,opaque:!o,projection:n.projection,reprojectionErrorThreshold:n.reprojectionErrorThreshold,tileClass:n.tileClass,tileGrid:n.tileGrid,tileLoadFunction:n.tileLoadFunction,url:n.url,urls:n.urls,wrapX:n.wrapX!==void 0?n.wrapX:!0,transition:n.transition,zDirection:n.zDirection})||this,i.gutter_=n.gutter!==void 0?n.gutter:0,i.params_=s,i.v13_=!0,i.serverType_=n.serverType,i.hidpi_=n.hidpi!==void 0?n.hidpi:!0,i.tmpExtent_=qt(),i.updateV13_(),i.setKey(i.getKeyForParams_()),i}return e.prototype.getFeatureInfoUrl=function(t,i,n,a){var s=vt(n),o=this.getProjection(),l=this.getTileGrid();l||(l=this.getTileGridForProjection(s));var h=l.getZForResolution(i,this.zDirection),u=l.getTileCoordForCoordAndZ(t,h);if(!(l.getResolutions().length<=u[0])){var d=l.getResolution(u[0]),c=l.getTileCoordExtent(u,this.tmpExtent_),f=Gt(l.getTileSize(u[0]),this.tmpSize),p=this.gutter_;p!==0&&(f=yh(f,p,this.tmpSize),c=wr(c,d*p,c)),o&&o!==s&&(d=Or(o,s,t,d),c=Ls(c,s,o),t=Xr(t,s,o));var v={SERVICE:"WMS",VERSION:Ne,REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.params_.LAYERS};st(v,this.params_,a);var m=Math.floor((t[0]-c[0])/d),_=Math.floor((c[3]-t[1])/d);return v[this.v13_?"I":"X"]=m,v[this.v13_?"J":"Y"]=_,this.getRequestUrl_(u,f,c,1,o||s,v)}},e.prototype.getLegendUrl=function(t,i){if(this.urls[0]!==void 0){var n={SERVICE:"WMS",VERSION:Ne,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(i===void 0||i.LAYER===void 0){var a=this.params_.LAYERS,s=!Array.isArray(a)||a.length===1;if(!s)return;n.LAYER=a}if(t!==void 0){var o=this.getProjection()?this.getProjection().getMetersPerUnit():1,l=28e-5;n.SCALE=t*o/l}return st(n,i),ta(this.urls[0],n)}},e.prototype.getGutter=function(){return this.gutter_},e.prototype.getParams=function(){return this.params_},e.prototype.getRequestUrl_=function(t,i,n,a,s,o){var l=this.urls;if(l){if(o.WIDTH=i[0],o.HEIGHT=i[1],o[this.v13_?"CRS":"SRS"]=s.getCode(),"STYLES"in this.params_||(o.STYLES=""),a!=1)switch(this.serverType_){case ze.GEOSERVER:var h=90*a+.5|0;"FORMAT_OPTIONS"in o?o.FORMAT_OPTIONS+=";dpi:"+h:o.FORMAT_OPTIONS="dpi:"+h;break;case ze.MAPSERVER:o.MAP_RESOLUTION=90*a;break;case ze.CARMENTA_SERVER:case ze.QGIS:o.DPI=90*a;break;default:J(!1,52);break}var u=s.getAxisOrientation(),d=n;if(this.v13_&&u.substr(0,2)=="ne"){var c=void 0;c=n[0],d[0]=n[1],d[1]=c,c=n[2],d[2]=n[3],d[3]=c}o.BBOX=d.join(",");var f;if(l.length==1)f=l[0];else{var p=ii(Hd(t),l.length);f=l[p]}return ta(f,o)}},e.prototype.getTilePixelRatio=function(t){return!this.hidpi_||this.serverType_===void 0?1:t},e.prototype.getKeyForParams_=function(){var t=0,i=[];for(var n in this.params_)i[t++]=n+"-"+this.params_[n];return i.join("/")},e.prototype.updateParams=function(t){st(this.params_,t),this.updateV13_(),this.setKey(this.getKeyForParams_())},e.prototype.updateV13_=function(){var t=this.params_.VERSION||Ne;this.v13_=Tu(t,"1.3")>=0},e.prototype.tileUrlFunction=function(t,i,n){var a=this.getTileGrid();if(a||(a=this.getTileGridForProjection(n)),!(a.getResolutions().length<=t[0])){i!=1&&(!this.hidpi_||this.serverType_===void 0)&&(i=1);var s=a.getResolution(t[0]),o=a.getTileCoordExtent(t,this.tmpExtent_),l=Gt(a.getTileSize(t[0]),this.tmpSize),h=this.gutter_;h!==0&&(l=yh(l,h,this.tmpSize),o=wr(o,s*h,o)),i!=1&&(l=Rd(l,i,this.tmpSize));var u={SERVICE:"WMS",VERSION:Ne,REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};return st(u,this.params_),this.getRequestUrl_(t,l,o,i,n,u)}},e}(ec);const i1=e1;var r1=function(){function r(e){this.rbush_=new Pd(e),this.items_={}}return r.prototype.insert=function(e,t){var i={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3],value:t};this.rbush_.insert(i),this.items_[nt(t)]=i},r.prototype.load=function(e,t){for(var i=new Array(t.length),n=0,a=t.length;n<a;n++){var s=e[n],o=t[n],l={minX:s[0],minY:s[1],maxX:s[2],maxY:s[3],value:o};i[n]=l,this.items_[nt(o)]=l}this.rbush_.load(i)},r.prototype.remove=function(e){var t=nt(e),i=this.items_[t];return delete this.items_[t],this.rbush_.remove(i)!==null},r.prototype.update=function(e,t){var i=this.items_[nt(t)],n=[i.minX,i.minY,i.maxX,i.maxY];ha(n,e)||(this.remove(t),this.insert(e,t))},r.prototype.getAll=function(){var e=this.rbush_.all();return e.map(function(t){return t.value})},r.prototype.getInExtent=function(e){var t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]},i=this.rbush_.search(t);return i.map(function(n){return n.value})},r.prototype.forEach=function(e){return this.forEach_(this.getAll(),e)},r.prototype.forEachInExtent=function(e,t){return this.forEach_(this.getInExtent(e),t)},r.prototype.forEach_=function(e,t){for(var i,n=0,a=e.length;n<a;n++)if(i=t(e[n]),i)return i;return i},r.prototype.isEmpty=function(){return Cr(this.items_)},r.prototype.clear=function(){this.rbush_.clear(),this.items_={}},r.prototype.getExtent=function(e){var t=this.rbush_.toJSON();return he(t.minX,t.minY,t.maxX,t.maxY,e)},r.prototype.concat=function(e){this.rbush_.load(e.rbush_.all());for(var t in e.items_)this.items_[t]=e.items_[t]},r}();const Bh=r1,Kt={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"};function n1(r,e){return[[-1/0,-1/0,1/0,1/0]]}const dr={ARRAY_BUFFER:"arraybuffer",JSON:"json",TEXT:"text",XML:"xml"};var a1=!1;function s1(r,e,t,i,n,a,s){var o=new XMLHttpRequest;o.open("GET",typeof r=="function"?r(t,i,n):r,!0),e.getType()==dr.ARRAY_BUFFER&&(o.responseType="arraybuffer"),o.withCredentials=a1,o.onload=function(l){if(!o.status||o.status>=200&&o.status<300){var h=e.getType(),u=void 0;h==dr.JSON||h==dr.TEXT?u=o.responseText:h==dr.XML?(u=o.responseXML,u||(u=new DOMParser().parseFromString(o.responseText,"application/xml"))):h==dr.ARRAY_BUFFER&&(u=o.response),u?a(e.readFeatures(u,{extent:t,featureProjection:n}),e.readProjection(u)):s()}else s()},o.onerror=s,o.send()}function Nh(r,e){return function(t,i,n,a,s){var o=this;s1(r,e,t,i,n,function(l,h){o.addFeatures(l),a!==void 0&&a(l)},s||Sr)}}var nc=globalThis&&globalThis.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Le=function(r){nc(e,r);function e(t,i,n){var a=r.call(this,t)||this;return a.feature=i,a.features=n,a}return e}(oi),o1=function(r){nc(e,r);function e(t){var i=this,n=t||{};i=r.call(this,{attributions:n.attributions,interpolate:!0,projection:void 0,state:ya.READY,wrapX:n.wrapX!==void 0?n.wrapX:!0})||this,i.on,i.once,i.un,i.loader_=Sr,i.format_=n.format,i.overlaps_=n.overlaps===void 0?!0:n.overlaps,i.url_=n.url,n.loader!==void 0?i.loader_=n.loader:i.url_!==void 0&&(J(i.format_,7),i.loader_=Nh(i.url_,i.format_)),i.strategy_=n.strategy!==void 0?n.strategy:n1;var a=n.useSpatialIndex!==void 0?n.useSpatialIndex:!0;i.featuresRtree_=a?new Bh:null,i.loadedExtentsRtree_=new Bh,i.loadingExtentsCount_=0,i.nullGeometryFeatures_={},i.idIndex_={},i.uidIndex_={},i.featureChangeKeys_={},i.featuresCollection_=null;var s,o;return Array.isArray(n.features)?o=n.features:n.features&&(s=n.features,o=s.getArray()),!a&&s===void 0&&(s=new Yd(o)),o!==void 0&&i.addFeaturesInternal(o),s!==void 0&&i.bindFeaturesCollection_(s),i}return e.prototype.addFeature=function(t){this.addFeatureInternal(t),this.changed()},e.prototype.addFeatureInternal=function(t){var i=nt(t);if(!this.addToIndex_(i,t)){this.featuresCollection_&&this.featuresCollection_.remove(t);return}this.setupChangeEvents_(i,t);var n=t.getGeometry();if(n){var a=n.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(a,t)}else this.nullGeometryFeatures_[i]=t;this.dispatchEvent(new Le(Kt.ADDFEATURE,t))},e.prototype.setupChangeEvents_=function(t,i){this.featureChangeKeys_[t]=[ee(i,At.CHANGE,this.handleFeatureChange_,this),ee(i,rd.PROPERTYCHANGE,this.handleFeatureChange_,this)]},e.prototype.addToIndex_=function(t,i){var n=!0,a=i.getId();return a!==void 0&&(a.toString()in this.idIndex_?n=!1:this.idIndex_[a.toString()]=i),n&&(J(!(t in this.uidIndex_),30),this.uidIndex_[t]=i),n},e.prototype.addFeatures=function(t){this.addFeaturesInternal(t),this.changed()},e.prototype.addFeaturesInternal=function(t){for(var i=[],n=[],a=[],s=0,o=t.length;s<o;s++){var l=t[s],h=nt(l);this.addToIndex_(h,l)&&n.push(l)}for(var s=0,u=n.length;s<u;s++){var l=n[s],h=nt(l);this.setupChangeEvents_(h,l);var d=l.getGeometry();if(d){var c=d.getExtent();i.push(c),a.push(l)}else this.nullGeometryFeatures_[h]=l}if(this.featuresRtree_&&this.featuresRtree_.load(i,a),this.hasListener(Kt.ADDFEATURE))for(var s=0,f=n.length;s<f;s++)this.dispatchEvent(new Le(Kt.ADDFEATURE,n[s]))},e.prototype.bindFeaturesCollection_=function(t){var i=!1;this.addEventListener(Kt.ADDFEATURE,function(n){i||(i=!0,t.push(n.feature),i=!1)}),this.addEventListener(Kt.REMOVEFEATURE,function(n){i||(i=!0,t.remove(n.feature),i=!1)}),t.addEventListener(Si.ADD,function(n){i||(i=!0,this.addFeature(n.element),i=!1)}.bind(this)),t.addEventListener(Si.REMOVE,function(n){i||(i=!0,this.removeFeature(n.element),i=!1)}.bind(this)),this.featuresCollection_=t},e.prototype.clear=function(t){if(t){for(var i in this.featureChangeKeys_){var n=this.featureChangeKeys_[i];n.forEach(Wt)}this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){var a=function(l){this.removeFeatureInternal(l)}.bind(this);this.featuresRtree_.forEach(a);for(var s in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[s])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};var o=new Le(Kt.CLEAR);this.dispatchEvent(o),this.changed()},e.prototype.forEachFeature=function(t){if(this.featuresRtree_)return this.featuresRtree_.forEach(t);this.featuresCollection_&&this.featuresCollection_.forEach(t)},e.prototype.forEachFeatureAtCoordinateDirect=function(t,i){var n=[t[0],t[1],t[0],t[1]];return this.forEachFeatureInExtent(n,function(a){var s=a.getGeometry();if(s.intersectsCoordinate(t))return i(a)})},e.prototype.forEachFeatureInExtent=function(t,i){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(t,i);this.featuresCollection_&&this.featuresCollection_.forEach(i)},e.prototype.forEachFeatureIntersectingExtent=function(t,i){return this.forEachFeatureInExtent(t,function(n){var a=n.getGeometry();if(a.intersectsExtent(t)){var s=i(n);if(s)return s}})},e.prototype.getFeaturesCollection=function(){return this.featuresCollection_},e.prototype.getFeatures=function(){var t;return this.featuresCollection_?t=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(t=this.featuresRtree_.getAll(),Cr(this.nullGeometryFeatures_)||nd(t,pp(this.nullGeometryFeatures_))),t},e.prototype.getFeaturesAtCoordinate=function(t){var i=[];return this.forEachFeatureAtCoordinateDirect(t,function(n){i.push(n)}),i},e.prototype.getFeaturesInExtent=function(t){return this.featuresRtree_?this.featuresRtree_.getInExtent(t):this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]},e.prototype.getClosestFeatureToCoordinate=function(t,i){var n=t[0],a=t[1],s=null,o=[NaN,NaN],l=1/0,h=[-1/0,-1/0,1/0,1/0],u=i||w0;return this.featuresRtree_.forEachInExtent(h,function(d){if(u(d)){var c=d.getGeometry(),f=l;if(l=c.closestPointXY(n,a,o,l),l<f){s=d;var p=Math.sqrt(l);h[0]=n-p,h[1]=a-p,h[2]=n+p,h[3]=a+p}}}),s},e.prototype.getExtent=function(t){return this.featuresRtree_.getExtent(t)},e.prototype.getFeatureById=function(t){var i=this.idIndex_[t.toString()];return i!==void 0?i:null},e.prototype.getFeatureByUid=function(t){var i=this.uidIndex_[t];return i!==void 0?i:null},e.prototype.getFormat=function(){return this.format_},e.prototype.getOverlaps=function(){return this.overlaps_},e.prototype.getUrl=function(){return this.url_},e.prototype.handleFeatureChange_=function(t){var i=t.target,n=nt(i),a=i.getGeometry();if(!a)n in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(i),this.nullGeometryFeatures_[n]=i);else{var s=a.getExtent();n in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[n],this.featuresRtree_&&this.featuresRtree_.insert(s,i)):this.featuresRtree_&&this.featuresRtree_.update(s,i)}var o=i.getId();if(o!==void 0){var l=o.toString();this.idIndex_[l]!==i&&(this.removeFromIdIndex_(i),this.idIndex_[l]=i)}else this.removeFromIdIndex_(i),this.uidIndex_[n]=i;this.changed(),this.dispatchEvent(new Le(Kt.CHANGEFEATURE,i))},e.prototype.hasFeature=function(t){var i=t.getId();return i!==void 0?i in this.idIndex_:nt(t)in this.uidIndex_},e.prototype.isEmpty=function(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&Cr(this.nullGeometryFeatures_):this.featuresCollection_?this.featuresCollection_.getLength()===0:!0},e.prototype.loadFeatures=function(t,i,n){for(var a=this.loadedExtentsRtree_,s=this.strategy_(t,i,n),o=function(d,c){var f=s[d],p=a.forEachInExtent(f,function(v){return De(v.extent,f)});p||(++l.loadingExtentsCount_,l.dispatchEvent(new Le(Kt.FEATURESLOADSTART)),l.loader_.call(l,f,i,n,function(v){--this.loadingExtentsCount_,this.dispatchEvent(new Le(Kt.FEATURESLOADEND,void 0,v))}.bind(l),function(){--this.loadingExtentsCount_,this.dispatchEvent(new Le(Kt.FEATURESLOADERROR))}.bind(l)),a.insert(f,{extent:f.slice()}))},l=this,h=0,u=s.length;h<u;++h)o(h);this.loading=this.loader_.length<4?!1:this.loadingExtentsCount_>0},e.prototype.refresh=function(){this.clear(!0),this.loadedExtentsRtree_.clear(),r.prototype.refresh.call(this)},e.prototype.removeLoadedExtent=function(t){var i=this.loadedExtentsRtree_,n;i.forEachInExtent(t,function(a){if(ha(a.extent,t))return n=a,!0}),n&&i.remove(n)},e.prototype.removeFeature=function(t){if(t){var i=nt(t);i in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[i]:this.featuresRtree_&&this.featuresRtree_.remove(t);var n=this.removeFeatureInternal(t);n&&this.changed()}},e.prototype.removeFeatureInternal=function(t){var i=nt(t),n=this.featureChangeKeys_[i];if(n){n.forEach(Wt),delete this.featureChangeKeys_[i];var a=t.getId();return a!==void 0&&delete this.idIndex_[a.toString()],delete this.uidIndex_[i],this.dispatchEvent(new Le(Kt.REMOVEFEATURE,t)),t}},e.prototype.removeFromIdIndex_=function(t){var i=!1;for(var n in this.idIndex_)if(this.idIndex_[n]===t){delete this.idIndex_[n],i=!0;break}return i},e.prototype.setLoader=function(t){this.loader_=t},e.prototype.setUrl=function(t){J(this.format_,7),this.url_=t,this.setLoader(Nh(t,this.format_))},e}(Xs);const ac=o1;/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */function Zs(r,e,t){if(!r)throw new Error("Can not instantiate base class: ol/source/Source");return r.setAttributions(e.attributions),r}function l1(r,e,t){if(!r)throw new Error("Can not instantiate base class: ol/source/Tile");return Zs(r,e),r}function h1(r,e,t){if(!r)throw new Error("Can not instantiate base class: ol/source/UrlTile");return l1(r,e),e.url&&r.setUrl(e.url),r}function sc(r,e,t){if(!r)throw new Error("Can not instantiate base class: ol/source/TileImage");return h1(r,e),r}function u1(r,e,t){return r||(r=new i1(Ae(e))),sc(r,e),r}function oc(r,e,t){return r||(r=new ic(Ae(e))),sc(r,e),r}function d1(r,e,t){return r||(r=new JA(Ae(e))),e.attributions||(e.attributions=rc),oc(r,e),r}function c1(r,e,t){if(!r)throw new Error("Can not instantiate base class: ol/source/Image");return Zs(r,e),r}function f1(r,e,t){return r||(r=new CA(Ae(e))),c1(r,e),e.url&&r.setUrl(e.url),r}function p1(r,e,t){return r||(r=new ac(Ae({...e,features:new Yd}))),Zs(r,e),jd(r.getFeaturesCollection(),e.features,t),r}/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */function v1(r,e,t){return r||(r=new Bd),r.setColor(e.color),t.connector.forceRender(),r}function m1(r,e,t){return r||(r=new Nd),r.setColor(e.color),r.setWidth(e.width),t.connector.forceRender(),r}function g1(r,e,t){if(!r)throw new Error("Can not instantiate base class: ol/style/Image");return r.setOpacity(e.opacity),r.setRotateWithView(e.rotateWithView),r.setRotation(e.rotation),r.setScale(e.scale),r}function _1(r){return r.toLowerCase().replace(/_/,"-")}function y1(r,e,t){if(!r){const i=e.img||e.src;r=new $d(Ae({...e,img:void 0,src:i,imgSize:e.imgSize?oA(e.imgSize):void 0,anchor:e.anchor?Jn(e.anchor):void 0,anchorOrigin:e.anchorOrigin?_1(e.anchorOrigin):void 0}))}return g1(r,e),t.connector.forceRender(),r}function b1(r,e,t){return r||(r=new ix),r.setImage(e.image?t.lookup.get(e.image):void 0),r.setFill(e.fill?t.lookup.get(e.fill):void 0),r.setStroke(e.stroke?t.lookup.get(e.stroke):void 0),t.connector.forceRender(),r}/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */function x1(r,e,t){if(!r)throw new Error("Existing map instance must be provided");return jd(r.getLayers(),e.layers,t),r.setView(t.lookup.get(e.view)),r}function A1(r,e,t){return r||(r=new Ry({projection:e.projection})),r.setCenter(e.center?Jn(e.center):[0,0]),r.setRotation(e.rotation||0),r.setZoom(e.zoom||0),r}function C1(r,e,t){return r||(r=new hd(Jn(e.coordinates))),r.setCoordinates(Jn(e.coordinates)),r}function w1(r,e,t){return r||(r=new F0),r.setGeometry(t.lookup.get(e.geometry)),r.setStyle(t.lookup.get(e.style)),r}const E1={"ol/Feature":w1,"ol/Map":x1,"ol/View":A1,"ol/layer/Image":uA,"ol/layer/Tile":lA,"ol/layer/Vector":hA,"ol/source/ImageWMS":f1,"ol/source/OSM":d1,"ol/source/TileWMS":u1,"ol/source/Vector":p1,"ol/source/XYZ":oc,"ol/geom/Point":C1,"ol/style/Icon":y1,"ol/style/Fill":v1,"ol/style/Stroke":m1,"ol/style/Style":b1};function zh(r,e){const t=r.type;if(!t)throw new Error("Configuration object must have a type");if(!r.id)throw new Error("Configuration object must have an ID");let i=e.lookup.get(r.id);const n=E1[t];if(!n)throw new Error(`Unsupported configuration object type: ${t}`);return i=n(i,r,e),e.lookup.put(r.id,i),i.id=r.id,i.typeName=t,i}/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */class I1{constructor(){this.map=new Map}get(e){return this.map.get(e)}put(e,t){this.map.set(e,t)}}class M1{constructor(){this.map=new Map,this.registry=new FinalizationRegistry(e=>{this.map.delete(e)})}get(e){const t=this.map.get(e);return t?t.deref():void 0}put(e,t){if(this.map.has(e))return;const i=new WeakRef(t);this.map.set(e,i),this.registry.register(t,e)}}const T1=window.WeakRef&&window.FinalizationRegistry;function S1(){return T1?new M1:new I1}function O1(r,e){return r.find(t=>{const i=t.getSource&&t.getSource();return i&&i instanceof ac&&i.getFeatures().includes(e)})}/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */Lu("EPSG:4326");(function(){function r(i){i.$connector={lookup:S1(),synchronize(n){const a={synchronize:zh,lookup:this.lookup,mapElement:i,connector:i.$connector};n.forEach(s=>{s.type==="ol/Map"&&this.lookup.put(s.id,i.configuration),zh(s,a)})},forceRender(){this._forceRenderTimeout||(this._forceRenderTimeout=setTimeout(()=>{this._forceRenderTimeout=null,i.configuration.getLayers().getArray().forEach(n=>n.changed())}))}},i.configuration.on("moveend",n=>{const a=i.configuration.getView(),s=a.getCenter(),o=a.getRotation(),l=a.getZoom(),h=a.calculateExtent(),u=new CustomEvent("map-view-moveend",{detail:{center:s,rotation:o,zoom:l,extent:h}});i.dispatchEvent(u)}),i.configuration.on("singleclick",n=>{const a=n.coordinate,s=n.pixel,l=i.configuration.getFeaturesAtPixel(s).map(u=>{const d=O1(i.configuration.getLayers().getArray(),u);return{feature:u,layer:d}}),h=new CustomEvent("map-click",{detail:{coordinate:a,features:l,originalEvent:n.originalEvent}});if(i.dispatchEvent(h),l.length>0){const u=l[0],d=new CustomEvent("map-feature-click",{detail:{feature:u.feature,layer:u.layer,originalEvent:n.originalEvent}});i.dispatchEvent(d)}})}function e(i){Lu(i)}function t(i,n){Dt.defs(i,n),Gp(Dt)}window.Vaadin.Flow.mapConnector={init:r,setUserProjection:e,defineProjection:t}})();const R1={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"};function L1(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function lc(r){return r.replace(/[\u0660-\u0669]/g,function(e){const t="\\u0"+e.charCodeAt(0).toString(16);return R1[t]})}function hc(r,e){const t=e.toLocaleTimeString(r),i=/[^\d\u0660-\u0669]/,n=t.match(new RegExp(`${i.source}+$`,"g"))||t.match(new RegExp(`^${i.source}+`,"g"));return n&&n[0].trim()}function P1(r){let e=Ks.toLocaleTimeString(r);const t=uc(r);t&&e.startsWith(t)&&(e=e.replace(t,""));const i=e.match(/[^\u0660-\u0669\s\d]/);return i&&i[0]}function Gh(r,e){if(!e)return null;const t=e.split(/\s*/).map(L1).join("\\s*"),i=new RegExp(t,"i"),n=r.match(i);if(n)return n[0]}const Ks=new Date("August 19, 1975 23:15:30"),F1=new Date("August 19, 1975 05:15:30");function uc(r){return hc(r,Ks)}function k1(r){return hc(r,F1)}function Va(r){return parseInt(lc(r))}function D1(r){return r=lc(r),r.length===1?r+="00":r.length===2&&(r+="0"),parseInt(r)}function B1(r,e,t,i){let n=r;if(r.endsWith(t)?n=r.replace(" "+t,""):r.endsWith(i)&&(n=r.replace(" "+i,"")),e){let a=e<10?"0":"";a+=e<100?"0":"",a+=e,n+="."+a}else n+=".000";return r.endsWith(t)?n=n+" "+t:r.endsWith(i)&&(n=n+" "+i),n}(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Time Picker")};function e(t,i,n=0){t()?i():setTimeout(()=>e(t,i,200),n)}window.Vaadin.Flow.timepickerConnector={initLazy:t=>r(function(i){i.$connector||(i.$connector={},i.$connector.setLocale=r(function(n){let a;i.value&&i.value!==""&&(a=i.i18n.parseTime(i.value));try{Ks.toLocaleTimeString(n)}catch{throw n="en-US",new Error("vaadin-time-picker: The locale "+n+" is not supported, falling back to default locale setting(en-US).")}const s=uc(n),o=k1(n),l=P1(n),h=function(){return i.step&&i.step<60},u=function(){return i.step&&i.step<1};let d,c;i.i18n={formatTime:r(function(f){if(!f)return;const p=new Date;p.setHours(f.hours),p.setMinutes(f.minutes),p.setSeconds(f.seconds!==void 0?f.seconds:0);let v=p.toLocaleTimeString(n,{hour:"numeric",minute:"numeric",second:h()?"numeric":void 0});return u()&&(v=B1(v,f.milliseconds,o,s)),v}),parseTime:r(function(f){if(f&&f===d&&c)return c;if(!f)return;const p=Gh(f,o),v=Gh(f,s),m=f.replace(p||"","").replace(v||"","").trim(),_=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+l+")?","g");let g=_.exec(m);if(g){g=Va(g[0].replace(l,"")),p!==v&&(g===12&&p&&(g=0),g!==12&&v&&(g+=12));const y=_.exec(m),b=y&&_.exec(m),x=/[[\.][\d\u0660-\u0669]{1,3}$/;let A=b&&u()&&x.exec(m);return A&&A.index<=b.index&&(A=void 0),c=g!==void 0&&{hours:g,minutes:y?Va(y[0].replace(l,"")):0,seconds:b?Va(b[0].replace(l,"")):0,milliseconds:y&&b&&A?D1(A[0].replace(".","")):0},d=f,c}})},a&&e(()=>i.$,()=>{const f=i.i18n.formatTime(a);i.inputElement.value!==f&&(i.inputElement.value=f,i.$.comboBox.value=f)})}))})(t)}})();window.Vaadin.Flow.virtualListConnector={initLazy:function(r){if(r.$connector)return;const e=20;let t=[0,0];r.$connector={},r.$connector.placeholderItem={__placeholder:!0};const i=function(){const a=[...r.children].filter(u=>"__virtualListIndex"in u).map(u=>u.__virtualListIndex),s=Math.min(...a),o=Math.max(...a);let l=Math.max(0,s-e),h=Math.min(o+e,r.items.length);if(t[0]!=l||t[1]!=h){t=[l,h];const u=1+h-l;r.$server.setRequestedRange(l,u)}},n=function(){r.__requestDebounce=tu.debounce(r.__requestDebounce,eu.after(50),i)};requestAnimationFrame(()=>i),r.patchVirtualListRenderer=function(){if(!r.renderer||r.renderer.__virtualListConnectorPatched)return;const a=r.renderer,s=(o,l,h)=>{o.__virtualListIndex=h.index,h.item===void 0?l.$connector.placeholderElement?o.__hasComponentRendererPlaceholder||(o.innerHTML="",delete o._$litPart$,o.appendChild(l.$connector.placeholderElement.cloneNode(!0)),o.__hasComponentRendererPlaceholder=!0):a.call(l,o,l,{...h,item:l.$connector.placeholderItem}):(o.__hasComponentRendererPlaceholder&&(o.innerHTML="",o.__hasComponentRendererPlaceholder=!1),a.call(l,o,l,h)),n()};s.__virtualListConnectorPatched=!0,s.__rendererId=a.__rendererId,r.renderer=s},r._createPropertyObserver("renderer","patchVirtualListRenderer",!0),r.patchVirtualListRenderer(),r.items=[],r.$connector.set=function(a,s){r.items.splice(a,s.length,...s),r.items=[...r.items]},r.$connector.clear=function(a,s){const o=Math.min(s,r.items.length-a);r.$connector.set(a,[...Array(o)])},r.$connector.updateData=function(a){const s=a.reduce((o,l)=>(o[l.key]=l,o),{});r.items=r.items.map(o=>o&&(s[o.key]||o))},r.$connector.updateSize=function(a){const s=a-r.items.length;s>0?r.items=[...r.items,...Array(s)]:s<0&&(r.items=r.items.slice(0,a))},r.$connector.setPlaceholderItem=function(a={},s){a.__placeholder=!0,r.$connector.placeholderItem=a;const o=Object.entries(a).find(([l])=>l.endsWith("_nodeid"));r.$connector.placeholderElement=o?Vaadin.Flow.clients[s].getByNodeId(o[1]):null}}};const rC=function(r,e=!1){const t=document.createElement("template");t.innerHTML=r,document.head[e?"insertBefore":"appendChild"](t.content,document.head.firstChild)};export{rC as addCssBlock};
