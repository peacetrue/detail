/**详情容器*/
Vue.component('detail', {
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
        labelSpan: {type: Number, default: 4},
        value: {type: [String, Boolean, Number, Array], required: true},
        valueSpan: {type: Number, default: 8},
    },
    template: `<div>
                    <i-col class="detail-item-label" :span="labelSpan">{{label}}</i-col>
                    <i-col class="detail-item-value" :span="valueSpan">{{value}}</i-col>
                </div>`
});
