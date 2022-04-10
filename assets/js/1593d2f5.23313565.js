"use strict";(self.webpackChunkscifracx_github_io=self.webpackChunkscifracx_github_io||[]).push([[5407],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return f},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){return function(t){var n=p(t.components);return r.createElement(e,i({},t,{components:n}))}},p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,d=s["".concat(o,".").concat(f)]||s[f]||m[f]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={slug:"symbolics",title:"Symbolic Fractional Differentiation and Integration!",authors:["ErikQQY"],tags:["features","SciFracX","fractional calculus"]},c=void 0,u={permalink:"/blog/symbolics",editUrl:"https://github.com/SciFracX/scifracx.github.io/blob/master/blog/2022-02-28-symbolics.mdx",source:"@site/blog/2022-02-28-symbolics.mdx",title:"Symbolic Fractional Differentiation and Integration!",description:"It is very happy to share that FractionalCalculus.jl is now supporting symbolic fractional differentiation and integration!!!",date:"2022-02-28T00:00:00.000Z",formattedDate:"February 28, 2022",tags:[{label:"features",permalink:"/blog/tags/features"},{label:"SciFracX",permalink:"/blog/tags/sci-frac-x"},{label:"fractional calculus",permalink:"/blog/tags/fractional-calculus"}],readingTime:.375,truncated:!1,authors:[{name:"Qingyu Qu",title:"SciFracX maintainer",url:"https://github.com/ErikQQY",imageURL:"https://github.com/ErikQQY.png",key:"ErikQQY"}],frontMatter:{slug:"symbolics",title:"Symbolic Fractional Differentiation and Integration!",authors:["ErikQQY"],tags:["features","SciFracX","fractional calculus"]},nextItem:{title:"SciFracX announcement in Discourse",permalink:"/blog/scifracx-on-discourse"}},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"It is very happy to share that FractionalCalculus.jl is now supporting symbolic fractional differentiation and integration!!!"),(0,i.mdx)("p",null,"With the help of ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/JuliaSymbolics/SymbolicUtils.jl"},"SymbolicUtils.jl"),", it is easy to first declare rules and apply defined rules to the expression"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-julia"},"julia> using FractionalCalculus, SymbolicUtils\njulia> @syms x\n")),(0,i.mdx)("p",null,"All we need to use are ",(0,i.mdx)("inlineCode",{parentName:"p"},"semidiff")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"semiint")," functions to compute fractional differentiation and integration."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-julia"},"julia> semidiff(log(x))\nlog(4x) / sqrt(\u03c0x)\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-julia"},"julia> semiint(x^2)\n0.6018022224509401(x^2.5)\n")),(0,i.mdx)("p",null,"Bingo!! Enjoy yourself~"))}m.isMDXComponent=!0}}]);