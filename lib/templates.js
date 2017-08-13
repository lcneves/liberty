'use strict';

const pug = require('pug-runtime');


module.exports['shell'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (user) {;pug_debug_line = 1;pug_debug_filename = "views\u002Fshell.pug";
pug_html = pug_html + "\u003Csurface id=\"shell\"\u003E";
;pug_debug_line = 1;pug_debug_filename = "views\u002Fincludes\u002Fheader.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fincludes\u002Fheader.pug";
pug_html = pug_html + "\u003Ch1 id=\"logo\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fincludes\u002Fheader.pug";
pug_html = pug_html + "Livre\u003C\u002Fh1\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fincludes\u002Fheader.pug";
if (user) {
;pug_debug_line = 5;pug_debug_filename = "views\u002Fincludes\u002Fheader.pug";
pug_html = pug_html + "\u003Cp id=\"welcome\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fincludes\u002Fheader.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Welcome, ' + user.name) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 1;pug_debug_filename = "views\u002Fincludes\u002Ftext.pug";
pug_html = pug_html + "\u003Cdiv id=\"text-container\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fincludes\u002Ftext.pug";
pug_html = pug_html + "\u003Cp class=\"text-justify\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fincludes\u002Ftext.pug";
pug_html = pug_html + "Livre will be a network of free ideas!\u003C\u002Fp\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fincludes\u002Ftext.pug";
pug_html = pug_html + "\u003Cp class=\"text-justify\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fincludes\u002Ftext.pug";
pug_html = pug_html + "The project is under active and intense development. Check it out at github.com\u002Flcneves\u002Flivre.\u003C\u002Fp\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fincludes\u002Ftext.pug";
pug_html = pug_html + "\u003Cp class=\"text-justify\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fincludes\u002Ftext.pug";
pug_html = pug_html + "The user interface will be fully 3D, based on the w3d technology, under development by the same author at w3d.io.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 1;pug_debug_filename = "views\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv id=\"footer\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "Copyright 2017 Lucas Neves\u003C\u002Fp\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "Open-source under Apache license 2.0\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsurface\u003E";}.call(this,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};
