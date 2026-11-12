let currentLang="en";
const langToggle=document.getElementById("langToggle");
const mainNav=document.getElementById("mainNav");
document.getElementById("menuToggle").addEventListener("click",()=>mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mainNav.classList.remove("open")));
function setLanguage(lang){
 currentLang=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";document.body.classList.toggle("ar",lang==="ar");
 document.querySelectorAll("[data-en][data-ar]").forEach(el=>{el.innerHTML=el.dataset[lang]});
 langToggle.textContent=lang==="en"?"عربي":"English";
 document.getElementById("guestName").placeholder=lang==="ar"?"اسمك":"Your name";
 document.getElementById("message").placeholder=lang==="ar"?"اكتب تفاصيل رحلتك":"Tell us about your plans";
 const select=document.getElementById("service");
 [...select.options].forEach((o,i)=>o.textContent=lang==="ar"?["رحلة سياحية","انتقالات خاصة","برنامج سياحي مخصص"][i]:["Tour","Private transportation","Custom itinerary"][i]);
}
langToggle.addEventListener("click",()=>setLanguage(currentLang==="en"?"ar":"en"));
document.getElementById("year").textContent=new Date().getFullYear();
document.querySelectorAll(".tour-book").forEach(a=>a.addEventListener("click",()=>{document.getElementById("service").value="Tour";document.getElementById("message").value=(currentLang==="ar"?"مهتم برحلة: ":"I'm interested in: ")+a.dataset.tour;}));
document.querySelectorAll(".ride-book").forEach(a=>a.addEventListener("click",()=>{document.getElementById("service").value="Private transportation";document.getElementById("message").value=(currentLang==="ar"?"أرغب في حجز سيارة: ":"I'd like to book: ")+a.dataset.car;}));
document.getElementById("bookingForm").addEventListener("submit",e=>{
 e.preventDefault();const name=document.getElementById("guestName").value.trim(),service=document.getElementById("service").value,date=document.getElementById("travelDate").value||(currentLang==="ar"?"لم يتم تحديده":"Not specified"),msg=document.getElementById("message").value.trim()||(currentLang==="ar"?"أرغب في معرفة التفاصيل والأسعار.":"I'd like to know details and pricing.");
 const body=currentLang==="ar"?`مرحباً Glory Tours، اسمي ${name}.\nنوع الطلب: ${service}\nالتاريخ: ${date}\nالتفاصيل: ${msg}`:`Hello Glory Tours, my name is ${name}.\nRequest: ${service}\nDate: ${date}\nDetails: ${msg}`;
 const phone=document.getElementById("whatsappTarget").value;window.open(`https://wa.me/${phone}?text=${encodeURIComponent(body)}`,"_blank","noopener");
});
