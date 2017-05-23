'use strict';

const pug = require('pug-runtime');


module.exports['header'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (user) {;pug_debug_line = 1;pug_debug_filename = "views\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fheader.pug";
pug_html = pug_html + "\u003Ch1 id=\"logo\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fheader.pug";
pug_html = pug_html + "Livre\u003C\u002Fh1\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fheader.pug";
if (user) {
;pug_debug_line = 5;pug_debug_filename = "views\u002Fheader.pug";
pug_html = pug_html + "\u003Cp id=\"welcome\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fheader.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Welcome, ' + user.name) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};