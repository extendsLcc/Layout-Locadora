/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#xe000;',
			'icon-users' : '&#xe001;',
			'icon-user' : '&#xe002;',
			'icon-clock' : '&#xe003;',
			'icon-calendar' : '&#xe004;',
			'icon-arrow-right' : '&#xe005;',
			'icon-arrow-left' : '&#xe006;',
			'icon-checkmark' : '&#xe007;',
			'icon-books' : '&#xe008;',
			'icon-youtube' : '&#xe009;',
			'icon-movie' : '&#xe00a;',
			'icon-search' : '&#xe00b;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};