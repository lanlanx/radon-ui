webpackJsonp([21,33],{2:function(e,n,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.rdMark=void 0;var r=a(3),c=l(r);n.rdMark=c.default},3:function(e,n,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=a(4),c=l(r);n.default={functional:!0,render:function(e,n){var a="",l=!0,r=!1,u=void 0;try{for(var d,i=(0,c.default)(n.children);!(l=(d=i.next()).done);l=!0){var t=d.value;a+=t.text}}catch(e){r=!0,u=e}finally{try{!l&&i.return&&i.return()}finally{if(r)throw u}}return e("div",{class:["marked"],domProps:{innerHTML:window.marked(a)}})}}},246:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=a(2),r=a(5),c=[{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]},{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]},{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]}];n.default={data:function(){return{code:{one:'<rd-cascader :cascader="cascader"></rd-cascader>'},cascader:{options:c,valueArr:[]}}},components:{rdCascader:r.rdCascader,rdMark:l.rdMark}}},609:function(e,n,a){var l,r;l=a(246);var c=a(637);r=l=l||{},"object"!=typeof l.default&&"function"!=typeof l.default||(r=l=l.default),"function"==typeof r&&(r=r.options),r.render=c.render,r.staticRenderFns=c.staticRenderFns,e.exports=l},637:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;return n("div",{staticClass:"ex-content"},[n("div",{staticClass:"ex-card"},[n("rd-mark",["\n# Cascader 级联选择\n级联选择框。\n\n## 何时使用\n\n - 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。\n - 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。\n - 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。\n    "])," ",n("p",[n("rd-cascader",{attrs:{cascader:e.cascader}})])," ",n("rd-mark",["\n# API\n\n## cascader \ncascader 是级联组件的数据对象，它有选项数组 options 和 结果数组 valueArr\n\n```javascript\ncascader: {\n    options: options,\n    valueArr: []\n}\n```\n\n```html\n"+e._s(e.code.one)+"\n```\n\n## options\noptions 带选取的级联数据\n```\nconst options = [{\n    // label 是级联选项展示值\n    label: '中国',\n\n    // value 是对象自定义属性\n    value: 'china',\n    // 也可以自定义其他属性\n    sku: '2234234',\n    id: 'j4jb345jb34j5',\n\n    // 该对象的子选项数组\n    children: [{\n        value: 'sichuan',\n        label: '四川',\n        children: [{\n            value: 'chegndu',\n            label: '成都'\n        }, {\n            value: 'deyang',\n            label: '德阳'\n        }]\n    }]\n}]\n```\n## valueArr\n选择结果数组\n\n```\n// 比如一次选择 美国 加利福尼亚 洛杉矶 valueArr会得到这样的数组\nvalueArr: [{\n    value: 'America',\n    label: '美国'\n}, {\n    value: 'California',\n    label: '加利福尼亚'\n}, {\n    value: 'Los Angeles',\n    label: '洛杉矶'\n}]\n```\n    "])," ",n("rd-mark",["\n## 完整示例代码\n```javascript\nconst options = [{\n    value: 'china',\n    label: '中国',\n    children: [{\n        value: 'sichuan',\n        label: '四川',\n        children: [{\n            value: 'chegndu',\n            label: '成都'\n        }, {\n            value: 'deyang',\n            label: '德阳'\n        }]\n    }]\n}, {\n    value: 'America',\n    label: '美国',\n    children: [{\n        value: 'California',\n        label: '加利福尼亚',\n        children: [{\n            value: 'lake',\n            label: '湖'\n        }, {\n            value: 'Los Angeles',\n            label: '洛杉矶'\n        }]\n    }, {\n        value: 'Delaware',\n        label: '特拉华',\n        children: [{\n            value: 'Dover',\n            label: '多佛'\n        }]\n    }]\n}]\n\nexport default {\n    template: '"+e._s(e.code.one)+"',\n    data () {\n        return {\n            cascader: {\n                options: options,\n                valueArr: []\n            }\n        }\n    },\n    components: {\n        rdCascader\n    }\n}\n```\n    "])])])},staticRenderFns:[]}}});
//# sourceMappingURL=21.f0e22cf7082efba262ad.js.map