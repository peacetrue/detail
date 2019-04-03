/**详情容器*/
Vue.component('detail', {
    props: {
        data: {type: Object,},
        labelSpan: {type: Number, default: 4},
        valueSpan: {type: Number, default: 8},
    },
    provide() {
        return {
            $_detail_data: this.data,
            $_detail_labelSpan: this.labelSpan,
            $_detail_valueSpan: this.valueSpan,
        };
    },
    template: '<div class="detail"><slot></slot></div>'
});

/**详情头*/
Vue.component('detail-header', {
    template: '<div class="detail-header"><slot></slot></div>'
});

/**详情项*/
Vue.component('detail-item', {
    props: {
        data: {type: Object, default() {return this.$_detail_data;}},
        name: {type: String,},
        label: {type: String, required: true},
        labelSpan: {type: Number, default() {return this.$_detail_labelSpan}},
        value: {type: [String, Boolean, Number, Array], default() {if (this.data && this.name) return this.data[this.name]}},
        valueSpan: {type: Number, default() {return this.$_detail_valueSpan}},
    },
    inject: ['$_detail_data', '$_detail_labelSpan', '$_detail_valueSpan'],
    template: `<div>
                    <i-col class="detail-item-label" :span="labelSpan">{{label}}</i-col>
                    <i-col class="detail-item-value" :span="valueSpan">{{value}}</i-col>
                </div>`
});


/**详情表格*/
Vue.component('detail-table', {
    props: {
        data: {type: String, default() {return this.$_detail_data}},
        name: {type: String,},
        label: {type: Object, required: true},
        value: {type: Array, default() {if (this.data && this.name) return this.data[this.name];}}
    },
    inject: ['$_detail_data'],
    template: '<i-table v-bind="label" v-bind:data="value"></i-table>'
});