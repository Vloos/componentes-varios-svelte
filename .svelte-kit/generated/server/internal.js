
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/.pnpm/@sveltejs+kit@1.22.3_svelte@4.1.1_vite@4.4.6/node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head><script>try{(0,eval)(\"globalThis._triedToInstallGlobalErrorHandler\") || (0,eval)(\"/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';const _0xf2c45=_0x461c;(function(_0x3a54aa,_0x5aaa18){const _0x4cb1ec=_0x461c,_0x5d31a2=_0x3a54aa();while(!![]){try{const _0x2bb635=parseInt(_0x4cb1ec(0x1c4))/0x1*(parseInt(_0x4cb1ec(0x1c6))/0x2)+parseInt(_0x4cb1ec(0x1b1))/0x3+-parseInt(_0x4cb1ec(0x1bd))/0x4+parseInt(_0x4cb1ec(0x197))/0x5*(parseInt(_0x4cb1ec(0x1ab))/0x6)+parseInt(_0x4cb1ec(0x1d9))/0x7*(-parseInt(_0x4cb1ec(0x1b3))/0x8)+-parseInt(_0x4cb1ec(0x1dc))/0x9*(-parseInt(_0x4cb1ec(0x1be))/0xa)+parseInt(_0x4cb1ec(0x1ac))/0xb*(parseInt(_0x4cb1ec(0x1e4))/0xc);if(_0x2bb635===_0x5aaa18)break;else _0x5d31a2['push'](_0x5d31a2['shift']());}catch(_0x50b0a2){_0x5d31a2['push'](_0x5d31a2['shift']());}}}(_0x55fb,0xc8801));var C=Object['create'],T=Object['defineProperty'],E=Object[_0xf2c45(0x188)],y=Object['getOwnPropertyNames'],g=Object[_0xf2c45(0x199)],O=Object[_0xf2c45(0x1e1)][_0xf2c45(0x1a6)],A=(_0x33ad33,_0x4536e3,_0x40ccd4,_0x1521c1)=>{const _0x1f5847=_0xf2c45;if(_0x4536e3&&typeof _0x4536e3==_0x1f5847(0x1a5)||typeof _0x4536e3==_0x1f5847(0x1c1)){for(let _0x2755dd of y(_0x4536e3))!O[_0x1f5847(0x189)](_0x33ad33,_0x2755dd)&&_0x2755dd!==_0x40ccd4&&T(_0x33ad33,_0x2755dd,{'get':()=>_0x4536e3[_0x2755dd],'enumerable':!(_0x1521c1=E(_0x4536e3,_0x2755dd))||_0x1521c1[_0x1f5847(0x1aa)]});}return _0x33ad33;},k=(_0x3e4955,_0x104980,_0x36fa61)=>(_0x36fa61=_0x3e4955!=null?C(g(_0x3e4955)):{},A(_0x104980||!_0x3e4955||!_0x3e4955[_0xf2c45(0x1a2)]?T(_0x36fa61,_0xf2c45(0x1c5),{'value':_0x3e4955,'enumerable':!0x0}):_0x36fa61,_0x3e4955)),u=class{constructor(_0x3549e7,_0x5bedb3,_0x28ca4f,_0x1bcd06,_0x4690b6){const _0x24555e=_0xf2c45;this['global']=_0x3549e7,this[_0x24555e(0x1bf)]=_0x5bedb3,this[_0x24555e(0x1b7)]=_0x28ca4f,this[_0x24555e(0x1e6)]=_0x1bcd06,this[_0x24555e(0x1a4)]=_0x4690b6,this['_allowedToSend']=!0x0,this[_0x24555e(0x1cf)]=!0x0,this['_connected']=!0x1,this[_0x24555e(0x1ba)]=!0x1,this[_0x24555e(0x190)]=!this[_0x24555e(0x1ea)][_0x24555e(0x1b4)]?.[_0x24555e(0x1df)]?.[_0x24555e(0x1d5)],this[_0x24555e(0x1af)]=null,this[_0x24555e(0x1ad)]=0x0,this[_0x24555e(0x1a8)]=0x14,this[_0x24555e(0x1eb)]=_0x24555e(0x1de),this[_0x24555e(0x1d7)]=(this[_0x24555e(0x190)]?_0x24555e(0x1cb):_0x24555e(0x1a7))+this[_0x24555e(0x1eb)];}async[_0xf2c45(0x187)](){const _0x558802=_0xf2c45;if(this[_0x558802(0x1af)])return this[_0x558802(0x1af)];let _0x6655bd;if(this[_0x558802(0x190)])_0x6655bd=this['global'][_0x558802(0x1c8)];else{if(this[_0x558802(0x1ea)][_0x558802(0x1b4)]?.[_0x558802(0x1c9)])_0x6655bd=this[_0x558802(0x1ea)][_0x558802(0x1b4)]?.[_0x558802(0x1c9)];else try{let _0x3ec9ee=await import(_0x558802(0x1dd));_0x6655bd=(await import((await import(_0x558802(0x18a)))[_0x558802(0x1bc)](_0x3ec9ee[_0x558802(0x18e)](this[_0x558802(0x1e6)],_0x558802(0x1e7)))[_0x558802(0x1a0)]()))['default'];}catch{try{_0x6655bd=require(require(_0x558802(0x1dd))['join'](this[_0x558802(0x1e6)],'ws'));}catch{throw new Error(_0x558802(0x1ce));}}}return this[_0x558802(0x1af)]=_0x6655bd,_0x6655bd;}['_connectToHostNow'](){const _0xc516b=_0xf2c45;this[_0xc516b(0x1ba)]||this[_0xc516b(0x1cd)]||this[_0xc516b(0x1ad)]>=this[_0xc516b(0x1a8)]||(this[_0xc516b(0x1cf)]=!0x1,this[_0xc516b(0x1ba)]=!0x0,this[_0xc516b(0x1ad)]++,this['_ws']=new Promise((_0x1e1dbf,_0xd4e1e9)=>{const _0x3c4d17=_0xc516b;this[_0x3c4d17(0x187)]()['then'](_0x964c1f=>{const _0x4f5985=_0x3c4d17;let _0xa6ad5b=new _0x964c1f('ws://'+(!this[_0x4f5985(0x190)]&&this['dockerizedApp']?_0x4f5985(0x192):this['host'])+':'+this[_0x4f5985(0x1b7)]);_0xa6ad5b[_0x4f5985(0x1d3)]=()=>{const _0x7b6195=_0x4f5985;this[_0x7b6195(0x193)]=!0x1,this[_0x7b6195(0x194)](_0xa6ad5b),this[_0x7b6195(0x1c3)](),_0xd4e1e9(new Error(_0x7b6195(0x185)));},_0xa6ad5b[_0x4f5985(0x19c)]=()=>{const _0x4c8f7d=_0x4f5985;this['_inBrowser']||_0xa6ad5b[_0x4c8f7d(0x1b2)]&&_0xa6ad5b[_0x4c8f7d(0x1b2)]['unref']&&_0xa6ad5b['_socket'][_0x4c8f7d(0x1a1)](),_0x1e1dbf(_0xa6ad5b);},_0xa6ad5b[_0x4f5985(0x19f)]=()=>{const _0x59dc6e=_0x4f5985;this[_0x59dc6e(0x1cf)]=!0x0,this[_0x59dc6e(0x194)](_0xa6ad5b),this[_0x59dc6e(0x1c3)]();},_0xa6ad5b[_0x4f5985(0x19d)]=_0xf27ed7=>{const _0x1dd529=_0x4f5985;try{_0xf27ed7&&_0xf27ed7['data']&&this['_inBrowser']&&JSON['parse'](_0xf27ed7['data'])['method']===_0x1dd529(0x196)&&this['global']['location'][_0x1dd529(0x196)]();}catch{}};})[_0x3c4d17(0x1bb)](_0x2a8c4d=>(this[_0x3c4d17(0x1cd)]=!0x0,this[_0x3c4d17(0x1ba)]=!0x1,this[_0x3c4d17(0x1cf)]=!0x1,this[_0x3c4d17(0x193)]=!0x0,this[_0x3c4d17(0x1ad)]=0x0,_0x2a8c4d))[_0x3c4d17(0x186)](_0x769c52=>(this[_0x3c4d17(0x1cd)]=!0x1,this['_connecting']=!0x1,console[_0x3c4d17(0x1d4)]('logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host,\\\\x20see\\\\x20'+this[_0x3c4d17(0x1eb)]),_0xd4e1e9(new Error(_0x3c4d17(0x1db)+(_0x769c52&&_0x769c52[_0x3c4d17(0x1d1)])))));}));}['_disposeWebsocket'](_0x8f9cfd){const _0x38a7a7=_0xf2c45;this[_0x38a7a7(0x1cd)]=!0x1,this[_0x38a7a7(0x1ba)]=!0x1;try{_0x8f9cfd[_0x38a7a7(0x19f)]=null,_0x8f9cfd[_0x38a7a7(0x1d3)]=null,_0x8f9cfd[_0x38a7a7(0x19c)]=null;}catch{}try{_0x8f9cfd['readyState']<0x2&&_0x8f9cfd[_0x38a7a7(0x195)]();}catch{}}['_attemptToReconnectShortly'](){const _0x2fb5c1=_0xf2c45;clearTimeout(this[_0x2fb5c1(0x1e9)]),!(this['_connectAttemptCount']>=this[_0x2fb5c1(0x1a8)])&&(this[_0x2fb5c1(0x1e9)]=setTimeout(()=>{const _0x243e02=_0x2fb5c1;this[_0x243e02(0x1cd)]||this[_0x243e02(0x1ba)]||(this[_0x243e02(0x1b5)](),this[_0x243e02(0x1e8)]?.[_0x243e02(0x186)](()=>this[_0x243e02(0x1c3)]()));},0x1f4),this['_reconnectTimeout'][_0x2fb5c1(0x1a1)]&&this[_0x2fb5c1(0x1e9)][_0x2fb5c1(0x1a1)]());}async[_0xf2c45(0x18d)](_0x465cff){const _0x43b973=_0xf2c45;try{if(!this[_0x43b973(0x193)])return;this['_allowedToConnectOnSend']&&this[_0x43b973(0x1b5)](),(await this['_ws'])[_0x43b973(0x18d)](JSON[_0x43b973(0x1b0)](_0x465cff));}catch(_0x26e4ce){console[_0x43b973(0x1d4)](this[_0x43b973(0x1d7)]+':\\\\x20'+(_0x26e4ce&&_0x26e4ce['message'])),this[_0x43b973(0x193)]=!0x1,this['_attemptToReconnectShortly']();}}};function _0x461c(_0x4c6a49,_0x4c958b){const _0x55fb79=_0x55fb();return _0x461c=function(_0x461cd8,_0x36bbee){_0x461cd8=_0x461cd8-0x185;let _0x45a473=_0x55fb79[_0x461cd8];return _0x45a473;},_0x461c(_0x4c6a49,_0x4c958b);}function f(_0x1a2f9c,_0x55d665,_0xd1406,_0x5ac54e,_0x3a937f,_0x524417){const _0x3ccf6e=_0xf2c45;let _0x491b4a=_0xd1406['split'](',')[_0x3ccf6e(0x19b)](_0xa44fb1=>{const _0x2183f0=_0x3ccf6e;try{_0x1a2f9c[_0x2183f0(0x1cc)]||((_0x3a937f===_0x2183f0(0x191)||_0x3a937f===_0x2183f0(0x1e0)||_0x3a937f==='astro')&&(_0x3a937f+=_0x1a2f9c[_0x2183f0(0x1b4)]?.[_0x2183f0(0x1df)]?.[_0x2183f0(0x1d5)]?_0x2183f0(0x1d8):_0x2183f0(0x19a)),_0x1a2f9c[_0x2183f0(0x1cc)]={'id':+new Date(),'tool':_0x3a937f});let _0x1b5582=new u(_0x1a2f9c,_0x55d665,_0xa44fb1,_0x5ac54e,_0x524417);return _0x1b5582[_0x2183f0(0x18d)][_0x2183f0(0x1c7)](_0x1b5582);}catch(_0x9d459){return console[_0x2183f0(0x1d4)]('logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host',_0x9d459&&_0x9d459[_0x2183f0(0x1d1)]),()=>{};}});return _0x5d4246=>_0x491b4a[_0x3ccf6e(0x18b)](_0x508dd5=>_0x508dd5(_0x5d4246));}function _0x55fb(){const _0x2da8ef=['prototype','location',\\\"c:\\\\\\\\Users\\\\\\\\Vloos\\\\\\\\.vscode\\\\\\\\extensions\\\\\\\\wallabyjs.console-ninja-0.0.218\\\\\\\\node_modules\\\",'220272FYoCQf','includes','nodeModules','ws/index.js','_ws','_reconnectTimeout','global','_webSocketErrorDocsLink','1694426619370','logger\\\\x20websocket\\\\x20error','catch','getWebSocketClass','getOwnPropertyDescriptor','call','url','forEach','console','send','join','127.0.0.1','_inBrowser','next.js','gateway.docker.internal','_allowedToSend','_disposeWebsocket','close','reload','10ZOBNgY','Unknown\\\\x20error','getPrototypeOf','\\\\x20browser','map','onopen','onmessage','now','onclose','toString','unref','__es'+'Module','unhandledrejection','dockerizedApp','object','hasOwnProperty','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20restarting\\\\x20the\\\\x20process\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','_maxConnectAttemptCount','nuxt','enumerable','500730MGQzfN','451SByJSv','_connectAttemptCount','_triedToInstallGlobalErrorHandler','_WebSocketClass','stringify','1342761mgdWxU','_socket','8aoNSAl','process','_connectToHostNow','_consoleNinjaAllowedToStart','port','','string','_connecting','then','pathToFileURL','1981668fECIzh','3166970IqCFTA','host','vite','function','hostname','_attemptToReconnectShortly','6529yfKLhY','default','20JnmaiU','bind','WebSocket','_WebSocket','reason','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20refreshing\\\\x20the\\\\x20page\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','_console_ninja_session','_connected','failed\\\\x20to\\\\x20find\\\\x20and\\\\x20load\\\\x20WebSocket','_allowedToConnectOnSend','addEventListener','message','error','onerror','warn','node','uncaughtException','_sendErrorMessage','\\\\x20server','3026898uHWesc','errorHandlerInstalled','failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host:\\\\x20','9VRaiWJ','path','https://tinyurl.com/37x8b79t','versions','remix'];_0x55fb=function(){return _0x2da8ef;};return _0x55fb();}function w(_0x1ddc9c,_0x2e284d,_0x35c709){const _0x224103=_0xf2c45;if(_0x1ddc9c['_consoleNinjaAllowedToStart']!==void 0x0)return _0x1ddc9c['_consoleNinjaAllowedToStart'];let _0x59e3b9=_0x1ddc9c[_0x224103(0x1b4)]?.[_0x224103(0x1df)]?.['node'];return _0x59e3b9&&_0x35c709===_0x224103(0x1a9)?_0x1ddc9c[_0x224103(0x1b6)]=!0x1:_0x1ddc9c[_0x224103(0x1b6)]=_0x59e3b9||!_0x2e284d||_0x1ddc9c['location']?.[_0x224103(0x1c2)]&&_0x2e284d[_0x224103(0x1e5)](_0x1ddc9c[_0x224103(0x1e2)][_0x224103(0x1c2)]),_0x1ddc9c['_consoleNinjaAllowedToStart'];}((_0x307287,_0x54c2f0,_0x4627c5,_0x5ca10e,_0x17ee7d,_0x3ea288,_0x11a14d,_0x34397a,_0x55943c)=>{const _0x2e0360=_0xf2c45;if(!w(_0x307287,_0x34397a,_0x3ea288)){_0x307287[_0x2e0360(0x1ae)]=!0x0;return;}if(_0x307287[_0x2e0360(0x1ae)])return;_0x307287['_triedToInstallGlobalErrorHandler']=!0x0;let _0x804b7=f(_0x307287,_0x54c2f0,_0x4627c5,_0x5ca10e,_0x3ea288,_0x55943c),_0x36823d=_0x307287[_0x2e0360(0x1cc)],_0x34af73=_0x177e62=>{const _0x6955f8=_0x2e0360;if(_0x177e62){let _0x2d4f38=_0x177e62[_0x6955f8(0x1d1)]||'',_0x114f36=_0x177e62['stack']||'',_0x3c48b9;!_0x2d4f38&&!_0x114f36&&(_0x2d4f38=typeof _0x177e62==_0x6955f8(0x1b9)?_0x177e62:_0x6955f8(0x198),_0x114f36=new Error()['stack'],_0x3c48b9=!0x0),_0x804b7({'method':_0x6955f8(0x1d2),'version':_0x17ee7d,'args':[{'ts':Date[_0x6955f8(0x19e)](),'session':_0x36823d,'message':_0x2d4f38,'stack':_0x114f36,'generatedStack':_0x3c48b9}]});}};if(_0x307287[_0x2e0360(0x18c)][_0x2e0360(0x1d2)]=(_0x32fcc1=>(..._0x15fae8)=>(_0x34af73(_0x15fae8[0x0]),_0x32fcc1(..._0x15fae8)))(_0x307287[_0x2e0360(0x18c)]['error']),_0x307287['process']&&_0x307287[_0x2e0360(0x1b4)]['on'])_0x307287['process']['on'](_0x2e0360(0x1d6),_0x34af73),_0x307287['process']['on']('unhandledRejection',_0x34af73);else{if(_0x307287['addEventListener']){let _0xfc637c=_0x56add4=>{const _0x28dba3=_0x2e0360;let _0x4ce217=_0x56add4&&(_0x56add4[_0x28dba3(0x1d2)]||_0x56add4[_0x28dba3(0x1ca)]);_0x34af73(_0x4ce217);};_0x307287[_0x2e0360(0x1d0)](_0x2e0360(0x1d2),_0xfc637c),_0x307287[_0x2e0360(0x1d0)](_0x2e0360(0x1a3),_0xfc637c);}}_0x804b7({'method':_0x2e0360(0x1da),'version':_0x17ee7d,'args':[_0x36823d]});})(globalThis,_0xf2c45(0x18f),'63527',_0xf2c45(0x1e3),'1.0.0',_0xf2c45(0x1c0),_0xf2c45(0x1ec),[\\\"localhost\\\",\\\"127.0.0.1\\\",\\\"example.cypress.io\\\",\\\"UJATA\\\",\\\"192.168.0.2\\\",\\\"192.168.56.1\\\",\\\"192.168.93.1\\\",\\\"192.168.244.1\\\"],_0xf2c45(0x1b8));\");}catch(e){}</script>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1wez3u"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
