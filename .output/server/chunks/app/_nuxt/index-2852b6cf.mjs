import { u as useHead } from './index-6a088328.mjs';
import { _ as _export_sfc, d as useNuxtApp, a as useRuntimeConfig } from '../server.mjs';
import { defineComponent, ref, computed, h, useSSRContext, resolveComponent, inject, reactive, mergeProps, unref } from 'vue';
import { r as encodeParam, l as hasProtocol, t as withLeadingSlash, j as joinURL, p as parseURL, n as defu, v as encodePath } from '../../nitro/node-server.mjs';
import __nuxt_component_0$2 from './Icon-66bb9a30.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import '@unhead/shared';
import 'unhead';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './index-3937fc2a.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$PpjMK8FPZY = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$PpjMK8FPZY, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: true },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: { type: Boolean, default: void 0 },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_0$1 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      src: src.value,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _sfc_main$5 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobile = inject("isMobile");
    const heroText = reactive({
      headline: "Full-Stack Web Developer. \n",
      line1: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main-color my-hero" }, _attrs))} data-v-8cb66732><div class="avatar" data-v-8cb66732>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "me-big.png",
        alt: ""
      }, null, _parent));
      _push(`</div><div class="headline-container" data-v-8cb66732>`);
      if (unref(isMobile)) {
        _push(`<h1 data-v-8cb66732>Hi, I&#39;m <span data-v-8cb66732>Eden</span></h1>`);
      } else {
        _push(`<h1 data-v-8cb66732>Hello, I&#39;m <span data-v-8cb66732>Eden</span></h1>`);
      }
      _push(`<h2 data-v-8cb66732>${ssrInterpolate(unref(heroText).line1)}</h2><h3 data-v-8cb66732> B.S.c Computer Science Student. <br data-v-8cb66732> Currently seeking a dynamic role as a Full-Stack Developer. </h3><div class="social-links" data-v-8cb66732><a href="https://github.com/Eden-Cohen1" target="_blank" data-v-8cb66732>`);
      _push(ssrRenderComponent(_component_Icon, { name: "uiw:github" }, null, _parent));
      _push(`</a><a href="https://www.linkedin.com/in/eden-co/" target="_blank" data-v-8cb66732>`);
      _push(ssrRenderComponent(_component_Icon, { name: "bi:linkedin" }, null, _parent));
      _push(`</a></div></div></main>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-8cb66732"]]);
const _sfc_main$4 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobile = inject("isMobile");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "secondary-color section about" }, _attrs))} data-v-8686a9f7><div class="text" data-v-8686a9f7><h1 data-v-8686a9f7>ABOUT ME</h1><p data-v-8686a9f7> Highly motivated and dedicated computer science student pursuing a <b data-v-8686a9f7>full-stack developer position</b>.<br data-v-8686a9f7> Committed to continuous learning and adept at embracing challenges.<br data-v-8686a9f7> Eager to contribute to team success by leveraging my skills and adapting to evolving technologies. </p><button class="primary" data-v-8686a9f7>Download CV</button></div><div style="${ssrRenderStyle(!unref(isMobile) ? null : { display: "none" })}" class="picture" data-v-8686a9f7>`);
      _push(ssrRenderComponent(_component_NuxtImg, { src: "full-stack.png" }, null, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8686a9f7"]]);
const _sfc_main$3 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = {
      waveCave: {
        headline: "Wave Cave",
        subHeadline: "Social media website for surfers and waves-forecast service.",
        description: "This project was made with the purpuse of learning JS, HTML, CSS, Mongoose and Nodejs, before advancing to a frontend framework like Vue.js.",
        tech: ["Javascript", "HTML", "CSS", "Express", "MongoDB"],
        img: "waveCave.png",
        links: {
          git: "https://github.com/Eden-Cohen1/Wave-Cave",
          youtube: false,
          website: "https://wave-cave.onrender.com/"
        }
      },
      shapeShift: {
        headline: "Shape Shift",
        subHeadline: "Workout menegment and tracking windows application.",
        description: "This project was made with the purpuse of learning OOP, C#, and data manegment.",
        tech: ["C#", ".NET Win-Forms"],
        img: "shapeShift.jpg",
        links: {
          git: "https://github.com/Eden-Cohen1/Workout-Manager",
          youtube: false,
          website: false
        }
      },
      protoWebsite: {
        headline: "Protofolio Website",
        subHeadline: "The website you are looking at \u{1F609}",
        description: "This project was made with the purpuse of learning Vue.js, Nuxt3. i've learned how to properly build and orginze a project with a frontend framework.",
        tech: ["Javascript", "Vue.js", "Nuxt3", "HTML", "CSS"],
        img: "protofolio.png",
        links: {
          git: "https://github.com/Eden-Cohen1/Protofolio-Website",
          youtube: false,
          website: false
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main-color section projects" }, _attrs))} data-v-9358d297><h1 data-v-9358d297>PROTOFOLIO</h1><div class="cards" data-v-9358d297><!--[-->`);
      ssrRenderList(projects, (project) => {
        _push(`<div class="card" data-v-9358d297><div class="card-right" data-v-9358d297><h2 class="card-title" data-v-9358d297>${ssrInterpolate(project.headline)}</h2><div class="card-desc" data-v-9358d297><b data-v-9358d297>${ssrInterpolate(project.subHeadline)}</b><p data-v-9358d297>${ssrInterpolate(project.description)}</p><div class="projcard-tagbox" data-v-9358d297><!--[-->`);
        ssrRenderList(project.tech, (tech) => {
          _push(`<span class="projcard-tag" data-v-9358d297>${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></div><div class="icons" data-v-9358d297><a${ssrRenderAttr("href", project.links.git)} target="_blank" data-v-9358d297>`);
        _push(ssrRenderComponent(_component_Icon, { name: "mdi:github" }, null, _parent));
        _push(`</a><a${ssrRenderAttr("href", project.links.youtube)} target="_blank" style="${ssrRenderStyle(project.links.youtube ? null : { display: "none" })}" data-v-9358d297>`);
        _push(ssrRenderComponent(_component_Icon, { name: "teenyicons:youtube-outline" }, null, _parent));
        _push(`</a><a${ssrRenderAttr("href", project.links.website)} style="${ssrRenderStyle(project.links.website ? null : { display: "none" })}" target="_blank" data-v-9358d297><button class="primary" data-v-9358d297>View Website</button></a></div></div><div class="card-left" data-v-9358d297><img${ssrRenderAttr("src", project.img)} alt="" data-v-9358d297></div></div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9358d297"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$2;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "secondary-color section skills" }, _attrs))} data-v-11825577><h1 data-v-11825577>TECH SKILLS</h1><div class="tech-icons" data-v-11825577>`);
  _push(ssrRenderComponent(_component_Icon, { name: "logos:vue" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "logos:nuxt-icon" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "vscode-icons:file-type-js-official" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "devicon:nodejs" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:mongodb" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:html" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "devicon:css3" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "logos:python" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:flask-light" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:cpp" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:c" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:cs" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:bootstrap" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "logos:element" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "skill-icons:mysql-light" }, null, _parent));
  _push(`</div></main>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-11825577"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main-color section contact" }, _attrs))} data-v-40d36b2a><h1 data-v-40d36b2a>CONTACT ME</h1><form class="contact-form" data-v-40d36b2a><input name="name" type="text" class="feedback-input" placeholder="Name" data-v-40d36b2a><input name="email" type="text" class="feedback-input" placeholder="Email" data-v-40d36b2a><textarea name="text" class="feedback-input" placeholder="Comment" data-v-40d36b2a></textarea><input type="submit" value="SEND" data-v-40d36b2a></form></main>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-40d36b2a"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_default = resolveComponent("default");
  const _component_Hero = __nuxt_component_0;
  const _component_About = __nuxt_component_1;
  const _component_Projects = __nuxt_component_2;
  const _component_Skills = __nuxt_component_3;
  const _component_Contact = __nuxt_component_4;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-72039fb7>`);
  _push(ssrRenderComponent(_component_default, null, null, _parent));
  _push(`<section id="home" data-v-72039fb7>`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(`</section><section id="about" data-v-72039fb7>`);
  _push(ssrRenderComponent(_component_About, null, null, _parent));
  _push(`</section><section id="projects" data-v-72039fb7>`);
  _push(ssrRenderComponent(_component_Projects, null, null, _parent));
  _push(`</section><section id="skills" data-v-72039fb7>`);
  _push(ssrRenderComponent(_component_Skills, null, null, _parent));
  _push(`</section><section id="contact" data-v-72039fb7>`);
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(`</section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-72039fb7"]]);

export { index as default };
//# sourceMappingURL=index-2852b6cf.mjs.map
