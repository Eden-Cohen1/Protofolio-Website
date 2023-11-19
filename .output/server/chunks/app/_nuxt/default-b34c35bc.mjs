import __nuxt_component_0 from './Icon-66bb9a30.mjs';
import { useSSRContext, computed, provide, ref, mergeProps, unref, onUnmounted } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import './index-3937fc2a.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><ul class="main-color horizontal ws-black"><li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#projects">Projects</a></li><li><a href="#skills">Skills</a></li><li><a href="#contact">Contact</a></li></ul><h4>Eden Cohen</h4><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "main-color vertical ws-black" }, _attrs))} data-v-f138d97c><li data-v-f138d97c><a href="#home" data-v-f138d97c>`);
  _push(ssrRenderComponent(_component_Icon, { name: "uil:home-alt" }, null, _parent));
  _push(`</a></li><li data-v-f138d97c><a href="#about" data-v-f138d97c>`);
  _push(ssrRenderComponent(_component_Icon, { name: "uil:map-marker-question" }, null, _parent));
  _push(`</a></li><li data-v-f138d97c><a href="#projects" data-v-f138d97c>`);
  _push(ssrRenderComponent(_component_Icon, { name: "uil:github-alt" }, null, _parent));
  _push(`</a></li><li data-v-f138d97c><a href="#skills" data-v-f138d97c>`);
  _push(ssrRenderComponent(_component_Icon, { name: "uil:java-script" }, null, _parent));
  _push(`</a></li><li data-v-f138d97c><a href="#contact" data-v-f138d97c>`);
  _push(ssrRenderComponent(_component_Icon, { name: "uil:message" }, null, _parent));
  _push(`</a></li></ul>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f138d97c"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main-color section footer" }, _attrs))} data-v-a41735ec><h2 data-v-a41735ec>Social Links</h2><ul data-v-a41735ec><li class="whatsapp" data-v-a41735ec><a href="https://wa.me/+972536241757" target="_blank" data-v-a41735ec>`);
  _push(ssrRenderComponent(_component_Icon, { name: "formkit:whatsapp" }, null, _parent));
  _push(`</a></li><li class="github" data-v-a41735ec><a href="https://github.com/Eden-Cohen1" target="_blank" data-v-a41735ec>`);
  _push(ssrRenderComponent(_component_Icon, { name: "uiw:github" }, null, _parent));
  _push(`</a></li><li class="linkdin" data-v-a41735ec><a href="https://www.linkedin.com/in/eden-co/" target="_blank" data-v-a41735ec>`);
  _push(ssrRenderComponent(_component_Icon, { name: "bi:linkedin" }, null, _parent));
  _push(`</a></li></ul></main>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a41735ec"]]);
function screenWidth() {
  const width = ref(0);
  function update(event) {
    width.value = window.innerWidth;
  }
  onUnmounted(() => {
    window.addEventListener("resize", update);
    update();
  });
  return { width };
}
function scrolling() {
  const scroll = ref();
  let scrollTimer;
  function update() {
    scroll.value = true;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      scroll.value = false;
    }, 1500);
  }
  onUnmounted(() => {
    document.addEventListener("scroll", update);
    update();
  });
  return { scroll };
}
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { width } = screenWidth();
    const isMobile = computed(() => {
      return width.value <= 680;
    });
    provide("isMobile", isMobile);
    const { scroll } = scrolling();
    const isScrolling = computed(() => scroll.value);
    const darkMode = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_Navbar = __nuxt_component_1;
      const _component_Sidebar = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: "navigation",
        ref: "screenSize",
        style: unref(width) ? null : { display: "none" }
      }, _attrs))} data-v-b884b961><button class="themeBtn" data-v-b884b961>`);
      if (unref(darkMode)) {
        _push(ssrRenderComponent(_component_Icon, { name: "uil:moon" }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, { name: "uil:sun" }, null, _parent));
      }
      _push(`</button>`);
      if (!unref(isMobile)) {
        _push(`<div class="navbar" data-v-b884b961>`);
        _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="${ssrRenderClass({ sidebar: true, hidden: unref(isScrolling) })}" data-v-b884b961>`);
        _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
        _push(`</div>`);
      }
      ssrRenderSlot(_ctx.$slots, "default", { isMobile: unref(isMobile) }, null, _push, _parent);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b884b961"]]);

export { _default as default };
//# sourceMappingURL=default-b34c35bc.mjs.map
