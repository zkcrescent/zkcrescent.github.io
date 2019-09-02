(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{244:function(t,e,a){"use strict";a.r(e);var s=a(38),o=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"kustomize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kustomize","aria-hidden":"true"}},[t._v("#")]),t._v(" kustomize")]),t._v(" "),a("p",[t._v("根据 "),a("code",[t._v("Declarative Application Management(可定义的应用管理工具)")]),t._v(" 的思想实现的管理 K8S 集群的一套最佳实践, 音同 "),a("code",[t._v("customize")])]),t._v(" "),a("h2",{attrs:{id:"主要特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要特点","aria-hidden":"true"}},[t._v("#")]),t._v(" 主要特点")]),t._v(" "),a("ul",[a("li",[t._v("可做任何类型的配置，包括定制的，现成的，有状态的，无状态的")]),t._v(" "),a("li",[t._v("支持普遍性的自定义（应该翻译成符合标准的全部自定义），记录每次创建的版本")]),t._v(" "),a("li",[t._v("暴露原生的 k8s API，而不出隐藏掉")]),t._v(" "),a("li",[t._v("平滑的版本控制和迁移，支持审计检查")]),t._v(" "),a("li",[t._v("同其他工具联合时能够感觉像是一体的（ 与其他工具的联合时契合度较高 ）")]),t._v(" "),a("li",[t._v("回避模板中的交叉重复和领域中语言特殊性等等问题（解释：模板重复，语言限制）")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("DAM")]),t._v(" "),a("p",[t._v("The central idea is that a toolbox of composable configuration tools should manipulate configuration data in the form of declarative API resource specifications, which serve as a "),a("a",{attrs:{href:"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/architecture/declarative-application-management.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("declarative data model"),a("OutboundLink")],1),t._v(", not express configuration as code or some other representation that is restrictive, non-standard, and/or difficult to manipulate.")])]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",[t._v("配置的有无状态应该是只配置文件是否依赖其他，比如istio依赖envoy，没有看到详细说明 "),a("br"),t._v("\n暴露 k8s API是指 kustomize 在更新配置的时候先生成一份 k8s 的标准配置文件然后 apply")])]),t._v(" "),a("h2",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),a("p",[a("code",[t._v("kustomization")]),t._v(" + "),a("code",[t._v("patches")]),t._v(" + "),a("code",[t._v("resources")])]),t._v(" "),a("h3",{attrs:{id:"基础：-kustomization-kustomization-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础：-kustomization-kustomization-yaml","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础： kustomization ( kustomization.yaml )")]),t._v(" "),a("p",[t._v("应用部署的集合定义，包括 "),a("code",[t._v("label")]),t._v(", "),a("code",[t._v("resource")]),t._v(", "),a("code",[t._v("configMap")]),t._v(", "),a("code",[t._v("secret")]),t._v(" 等，相当于程序中的 command 部分(包括 main 和 subcommand)，提供最终目标（需要一个什么样的东西）")]),t._v(" "),a("h3",{attrs:{id:"组件：patches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件：patches","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件：patches")]),t._v(" "),a("p",[t._v("相当于写代码的某个package，可以被 "),a("code",[t._v("kustomization")]),t._v(" 引用, 用于完善内容, 比如可以定义 "),a("code",[t._v("deploment")]),t._v(" 的 "),a("code",[t._v("replias")]),t._v(", "),a("code",[t._v("deploment")]),t._v(" 中的 "),a("code",[t._v("containers")])]),t._v(" "),a("h3",{attrs:{id:"资源-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源-resources","aria-hidden":"true"}},[t._v("#")]),t._v(" 资源: resources")]),t._v(" "),a("p",[t._v("定义基础的需求类型，比如 "),a("code",[t._v("deploment")]),t._v(", "),a("code",[t._v("ds")]),t._v(", "),a("code",[t._v("pod")]),t._v(", "),a("code",[t._v("service")]),t._v(" 等等 k8s 的相关资源定义, 可以被 "),a("code",[t._v("kustomization")]),t._v(" 引用，相当于程序 cmd 的不同参数")]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/kustomize-kr.jpg",alt:"K+R"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/kustomize-example.jpg",alt:"K+P+R"}})]),t._v(" "),a("h5",{attrs:{id:"这篇文章的来由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这篇文章的来由","aria-hidden":"true"}},[t._v("#")]),t._v(" 这篇文章的来由")]),t._v(" "),a("p",[t._v("因为考虑做阿里云（基于K8S）产线的一些针对中小企业的产品，然后从市面上寻找了几个知名的管理工具，包括了"),a("code",[t._v("heroku")]),t._v(","),a("code",[t._v("open shift")]),t._v(", "),a("code",[t._v("kustomize")]),t._v(", "),a("code",[t._v("helm")]),t._v("，然后我主要负责 "),a("code",[t._v("kustomize")]),t._v(" 相关的情况了解和以及做一些总结用于会议交流，于是有了这篇文章")])])},[],!1,null,null,null);e.default=o.exports}}]);