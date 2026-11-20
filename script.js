(function(){
var btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
function close(){menu.classList.remove('open');btn.setAttribute('aria-expanded','false');}
if(btn&&menu){
btn.addEventListener('click',function(){var o=menu.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});
menu.addEventListener('click',function(e){if(e.target.tagName==='A')close();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.classList.contains('open')){close();btn.focus();}});
}
var f=document.getElementById('cf'),st=document.getElementById('status');
if(!f)return;
function check(id,msg,test){var el=document.getElementById(id),er=document.getElementById(id+'-e'),ok=test(el.value.trim());
if(ok){el.removeAttribute('aria-invalid');er.hidden=true;er.textContent='';}
else{el.setAttribute('aria-invalid','true');er.hidden=false;er.textContent=msg;}return ok;}
f.addEventListener('submit',function(e){e.preventDefault();st.textContent='';
var r=[check('name','Please enter your full name.',function(v){return v.length>1;}),
check('email','Please enter a valid email address, for example name@example.com.',function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);}),
check('msg','Please briefly describe your matter.',function(v){return v.length>4;})];
var bad=r.indexOf(false);
if(bad>-1){var ids=['name','email','msg'];document.getElementById(ids[bad]).focus();st.textContent='The form has '+r.filter(function(x){return !x;}).length+' error(s). Please correct the highlighted fields.';return;}
st.textContent='Thank you. Your request has been received and an attorney will respond within one business day.';f.reset();});
})();
