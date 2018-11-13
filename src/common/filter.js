import Vue from 'vue'
//字符串截取过滤器
Vue.filter("filterText", function(text, len) {
	if(text && text.length > len && len && len > 0) {
		return text.substring(0, len) + "...";
	} else {
		return text;
	}
})
Vue.filter('successTimeFormats', function(val) {
    if (val) {
        var date = new Date(val);
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        let h = date.getHours();
        let m = date.getMinutes(); 
        val = M + '/' + D + ' ' + h + ':' + m;
    }
    return val;
});
Vue.filter('optionSelect',function(val) {
	switch (val) {
	  case 0:
	    return 'A';
	  case 1:
	    return 'B';
	  case 2:
	    return 'C';
	  case 3:
	    return 'D';
	  case 4:
	    return 'F';
	  case 5:
	    return 'G'
	}
})
