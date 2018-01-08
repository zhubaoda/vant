import Vue from 'vue'
//字符串截取过滤器
Vue.filter("filterText", function(text, len) {
	if(text && text.length > len && len && len > 0) {
		return text.substring(0, len) + "...";
	} else {
		return text;
	}
})
