/**详情容器*/
Vue.component('detail', {
    props: {
        labelSpan: {type: Number, default: 4},
        valueSpan: {type: Number, default: 8},
    },
    provide() {
        return {
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
        label: {type: String, required: true},
        labelSpan: {type: Number, default() {return this.$_detail_labelSpan}},
        value: {type: [String, Boolean, Number, Array]},
        valueSpan: {type: Number, default() {return this.$_detail_valueSpan}},
    },
    inject: ['$_detail_labelSpan', '$_detail_valueSpan'],
    template: `<div>
                    <i-col class="detail-item-label" :span="labelSpan">{{label}}</i-col>
                    <i-col class="detail-item-value" :span="valueSpan">{{value}}</i-col>
                </div>`
});
