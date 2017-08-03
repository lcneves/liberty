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
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fincludes\u002Ftext.pug";
pug_html = pug_html + "Livre will be a network of free ideas!\u003C\u002Fp\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fincludes\u002Ftext.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fincludes\u002Ftext.pug";
pug_html = pug_html + "The project is under active and intense development. Check out the documentation at docs.livre.media\u003C\u002Fp\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fincludes\u002Ftext.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fincludes\u002Ftext.pug";
pug_html = pug_html + "Cat ipsum dolor sit amet, tuxedo cats always looking dapper or fall over dead (not really but gets sypathy) paw at beetle and eat it before it gets away. Meow to be let out brown cats with pink ears sweet beast, behind the couch, and find empty spot in cupboard and sleep all day rub face on everything wake up human for food at 4am. Lick arm hair i am the best yet eat and than sleep on your face. Loves cheeseburgers jump five feet high and sideways when a shadow moves poop in the plant pot chase mice. Licks your face licks paws yet present belly, scratch hand when stroked has closed eyes but still sees you i'm going to lap some water out of my master's cup meow and nap all day be a nyan cat, feel great about it, be annoying 24\u002F7 poop rainbows in litter box all day. Lick the plastic bag destroy couch as revenge and stares at human while pushing stuff off a table leave hair everywhere. Meoooow please stop looking at your phone and pet me hide at bottom of staircase to trip human, thug cat rub face on everything, and curl into a furry donut pooping rainbow while flying in a toasted bread costume in space. Climb leg ask to go outside and ask to come inside and ask to go outside and ask to come inside and munch on tasty moths and Gate keepers of hell hide when guests come over, for hiss at vacuum cleaner. Have my breakfast spaghetti yarn find a way to fit in tiny box steal the warm chair right after you get up behind the couch chew foot drink water out of the faucet, or scratch the box. Make meme, make cute face scratch leg; meow for can opener to feed me or eat half my food and ask for more stare out the window but lick plastic bags, for lick plastic bags. Play time.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 1;pug_debug_filename = "views\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv id=\"footer\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "Copyright 2017 Lucas Neves\u003C\u002Fp\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "UI under Apache license 2.0\u003C\u002Fh4\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsurface\u003E";}.call(this,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};
