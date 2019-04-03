/**详情容器*/
Vue.component('detail', {
    props: {
        data: {type: Object},
        labelSpan: {type: Number, default: 4},
        valueSpan: {type: Number, default: 8},
        showClose: {type: Boolean, default: true}
    },
    provide() {
        return {
            $_detail_data: this.data,
            $_detail_labelSpan: this.labelSpan,
            $_detail_valueSpan: this.valueSpan,
        };
    },
    template: `<div class="detail">
                 <slot></slot>
                 <slot name="close" v-if="showClose">
                    <row>
                        <i-col span="24" style="text-align: center">
                            <i-button @click="window.close()">关闭</i-button>
                        </i-col>
                    </row>
                 </slot>
              </div>`
});


let childComponentMixIn = {
    props: {
        data: {type: Object, default() {return this.$_detail_data}},
        name: {type: String,},
        value: {
            default() {
                if (this.data && this.name) {
                    return window.jsonpath
                        ? jsonpath.value(this.data, `$.${this.name}`)
                        : this.data[this.name];
                }
            }
        }
    },
    inject: ['$_detail_data', '$_detail_labelSpan', '$_detail_valueSpan'],
};

/**详情展开*/
Vue.component('detail-header', {
    template: '<div class="detail-header"><slot></slot></div>'
});

/**详情项*/
Vue.component('detail-item', {
    mixins: [childComponentMixIn],
    props: {
        label: {type: String, required: true},
        labelSpan: {type: Number, default() {return this.$_detail_labelSpan}},
        value: {type: [String, Boolean, Number], default: childComponentMixIn.props.value.default},
        valueSpan: {type: Number, default() {return this.$_detail_valueSpan}},
    },
    template: `<div>
                    <i-col class="detail-item-label" :span="labelSpan">{{label}}</i-col>
                    <i-col class="detail-item-value" :span="valueSpan">{{value}}</i-col>
                </div>`
});

/**详情表格*/
Vue.component('detail-table', {
    mixins: [childComponentMixIn],
    props: {
        label: {type: Object, required: true},
        value: {type: Array, default: childComponentMixIn.props.value.default}
    },
    inject: ['$_detail_data'],
    template: '<i-table v-bind="label" v-bind:data="value"></i-table>'
});