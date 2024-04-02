var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

document.getElementById('fontSelector').addEventListener('change', function () {
  $('.apply-font').css('fontFamily', this.value);
});
function page_onload() {
  $('.apply-font').css('fontFamily', 'bharani');
  window.localStorage.setItem("template_id", 'template1');
  set_template('template1');
}

function clear_page() {
  window.localStorage.clear();
  location.reload();
}

function close_templates() {
  $('.template').css('display', 'none');
}

function close_preview() {
  $('.preview').css('display', 'none');
}

function set_template(temp_id) {
  window.localStorage.setItem("template_id", temp_id);
  close_templates();
  if (temp_id === "template1") {
    $('.template-section-1').css('display', 'block');
    $('#preview').attr('src', './img/template1.jpg');
  } else if (temp_id === "template2") {
    $('.template-section-2').css('display', 'block');
    $('#preview').attr('src', './img/template2.jpg');
  } else if (temp_id === "template3") {
    $('.template-section-3').css('display', 'block');
    $('#preview').attr('src', './img/template3.jpg');
  } else if (temp_id === "template4") {
    $('.template-section-4').css('display', 'block');
    $('#preview').attr('src', './img/template4.jpg');
  } else if (temp_id === "template5") {
    $('.template-section-5').css('display', 'block');
    $('#preview').attr('src', './img/template5.jpg');
  } else if (temp_id === "template6") {
    $('.template-section-6').css('display', 'block');
    $('#preview').attr('src', './img/template6.jpg');
  }
  $('#preview').css('display', 'block');
}

function frmid(id) {
  return document.getElementById(id);
}

function template1content() {
  var tlbrkdata = frmid('inptlbrk').value;
  var tlplacedata = frmid('inptlplace').value;
  var placedata = frmid('inpplace').value;
  var headlinedata = frmid('inpheadline').value;
  var contentdata1 = frmid('inpcontent1').value;
  var contentdata2 = frmid('inpcontent2').value;
  var contentdata3 = frmid('inpcontent3').value;
  var contentdata4 = frmid('inpcontent4').value;
  var datedata = frmid('inpdate').value;
  var inpheadlinefontsize = frmid('inpheadline-font-size').value + "px";
  var inpcontentfontsize = frmid('inpcontent-font-size').value + "px";
  
  datedata = datedata.toString().split("-")[2] + " " + month[parseInt(datedata.split("-")[1])] + " " + datedata.split("-")[0];

  var tn_1 = frmid('tn-1');
  var tn_2 = frmid('tn-2');
  var place = frmid('place');
  var headline = frmid('headline');
  var content1 = frmid('content1');
  var content2 = frmid('content2');
  var content3 = frmid('content3');
  var content4 = frmid('content4');
  var date = frmid('date');

  var color_tlbrk = frmid('color_tlbrk').value;
  var color_tlplace = frmid('color_tlplace').value;
  var color_place = frmid('color_place').value;
  var headline_color = frmid('color_headline').value;
  var color_content1 = frmid('color_content1').value;
  var color_content2 = frmid('color_content2').value;
  var color_content3 = frmid('color_content3').value;
  var color_content4 = frmid('color_content4').value;
  var color_date = frmid('color_date').value;

  tn_1.innerHTML = tlbrkdata;
  tn_1.style.color = color_tlbrk;

  tn_2.innerHTML = tlplacedata;
  tn_2.style.color = color_tlplace;

  place.innerHTML = placedata;
  place.style.color = color_place;

  headline.innerHTML = headlinedata;
  headline.style.color = headline_color;
  headline.style.fontSize = inpheadlinefontsize

  content1.innerHTML = contentdata1;
  content1.style.color = color_content1;

  content2.innerHTML = contentdata2;
  content2.style.color = color_content2;

  content3.innerHTML = contentdata3;
  content3.style.color = color_content3;

  content4.innerHTML = contentdata4;
  content4.style.color = color_content4;

  $('#headline').css({ 'font-size': inpheadlinefontsize, 'text-align': 'center' });
  $('.content').css({ 'font-size': inpcontentfontsize });

  date.innerHTML = datedata;
  date.style.color = color_date;
}

function template2content() {
  var date = frmid('date2');
  var datedata = frmid('inpdate2').value;
  var content = frmid('content');
  var indru = frmid('indru');
  var contentdata = frmid('inpcontent').value;
  var indrudata = frmid('inpindru').value;
  var inpcontentfontsize = frmid('t-2-inpcontent-font-size').value + "px";
  var inpindrufontsize = frmid('t-2-inpindru-font-size').value + "px";

  date.innerHTML = datedata.toString().split("-")[1] + "/" + datedata.split("-")[2];
  content.innerHTML = contentdata;
  indru.innerHTML = indrudata;
  $('#content').css({ 'font-size': inpcontentfontsize });
  $('#indru').css({ 'font-size': inpindrufontsize });
}

function template3content() {
  var inpnews1 = frmid('inpnews1').value;
  var inpnews2 = frmid('inpnews2').value;
  var inpnews3 = frmid('inpnews3').value;
  var inpnews4 = frmid('inpnews4').value;
  var fontsize = frmid('t-3-inpcontent-font-size').value + "px";
  var t_3headfontsize = frmid('t-3-headline-font-size').value + "px";


  frmid('cont1').innerHTML = inpnews1;
  frmid('cont2').innerHTML = inpnews2;
  frmid('cont3').innerHTML = inpnews3;
  frmid('cont4').innerHTML = inpnews4;
  
  $('#t-3-headline').css("fontSize", t_3headfontsize);
  $("#cont1").css("fontSize", fontsize);
  $("#cont2").css("fontSize", fontsize);
  $("#cont3").css("fontSize", fontsize);
  $("#cont4").css("fontSize", fontsize);
  time_conv();
}

function template4content() {
  var contentdata1 = frmid('t-4-inpcontent1').value;
  var contentdata2 = frmid('t-4-inpcontent2').value;
  var contentdata3 = frmid('t-4-inpcontent3').value;
  var t_4_inpdate = frmid('t-4-inpdate').value;

  t_4_inpdate = t_4_inpdate.toString().split("-")[2] + " " + month[parseInt(t_4_inpdate.split("-")[1])] + " " + t_4_inpdate.split("-")[0];

  var inpcontentfontsize = frmid('t-4-inpcontent-font-size').value + "px";

  var content1 = frmid('t-4-content1');
  var content2 = frmid('t-4-content2');
  var content3 = frmid('t-4-content3');
  
  var t_4_date = frmid('t-4-date');

  var color_content1 = frmid('t-4-color_content1').value;
  var color_content2 = frmid('t-4-color_content2').value;
  var color_content3 = frmid('t-4-color_content3').value;
  
  content1.innerHTML = contentdata1;
  content1.style.color = color_content1;
  
  content2.innerHTML = contentdata2;
  content2.style.color = color_content2;
  
  content3.innerHTML = contentdata3;
  content3.style.color = color_content3;
  
  t_4_date.innerHTML = t_4_inpdate;
  
  $('#template4-content').css({ 'font-size': inpcontentfontsize });
}

function template5content() {
  var t_5_heading = frmid('t-5-inpheadline').value;
  var contentdata1 = frmid('t-5-inpcontent1').value;
  var contentdata2 = frmid('t-5-inpcontent2').value;
  var contentdata3 = frmid('t-5-inpcontent3').value;
  var contentdata4 = frmid('t-5-inpcontent4').value;
  var inpdate = frmid('t-5-inpdate').value;
  var inpheadlinefontsize = frmid('t-5-inpheadline-font-size').value + "px";
  var inpcontentfontsize = frmid('t-5-inpcontent-font-size').value + "px";

  inpdate = inpdate.toString().split("-")[2] + " " + month[parseInt(inpdate.split("-")[1])] + " " + inpdate.split("-")[0];

  var headline = frmid('t-5-heading');
  var content1 = frmid('t-5-content1');
  var content2 = frmid('t-5-content2');
  var content3 = frmid('t-5-content3');
  var content4 = frmid('t-5-content4');
  var date = frmid('t-5-date');

  var headline_color = frmid('t-5-color_headline').value;
  var color_content1 = frmid('t-5-color_content1').value;
  var color_content2 = frmid('t-5-color_content2').value;
  var color_content3 = frmid('t-5-color_content3').value;
  var color_content4 = frmid('t-5-color_content4').value;

  date.innerHTML = inpdate;

  headline.innerHTML = t_5_heading;
  headline.style.color = headline_color;
  headline.style.fontSize = inpheadlinefontsize

  content1.innerHTML = contentdata1;
  content1.style.color = color_content1;

  content2.innerHTML = contentdata2;
  content2.style.color = color_content2;

  content3.innerHTML = contentdata3;
  content3.style.color = color_content3;

  content4.innerHTML = contentdata4;
  content4.style.color = color_content4;

  $('#t-5-heading').css({ 'font-size': inpheadlinefontsize });
  $('.t-5-content').css({ 'font-size': inpcontentfontsize });

}

function template6content() { 
  var t_6_heading = frmid('t-6-inpheadline').value;
  var contentdata1 = frmid('t-6-inpcontent1').value;
  var contentdata2 = frmid('t-6-inpcontent2').value;
  var contentdata3 = frmid('t-6-inpcontent3').value;
  var contentdata4 = frmid('t-6-inpcontent4').value;
  var inpdate = frmid('t-6-inpdate').value;
  var inpheadlinefontsize = frmid('t-6-inpheadline-font-size').value + "px";
  
  var headline = frmid('t-6-heading');
  var content1 = frmid('t-6-content1');
  var content2 = frmid('t-6-content2');
  var content3 = frmid('t-6-content3');
  var content4 = frmid('t-6-content4');
  var inpcontentfontsize = frmid('t-6-inpcontent-font-size').value + "px";
  
  var year = frmid('t-6-year');
  var month = frmid('t-6-month');
  var date = frmid('t-6-date');

  var headline_color = frmid('t-6-color_headline').value;
  var color_content1 = frmid('t-6-color_content1').value;
  var color_content2 = frmid('t-6-color_content2').value;
  var color_content3 = frmid('t-6-color_content3').value;
  var color_content4 = frmid('t-6-color_content4').value;

  var mls = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

  date.innerHTML = inpdate.split("-")[2];
  month.innerHTML = mls[parseInt(inpdate.split("-")[1])];
  year.innerHTML = inpdate.split("-")[0];

  headline.innerHTML = t_6_heading;
  headline.style.color = headline_color;
  headline.style.fontSize = inpheadlinefontsize

  content1.innerHTML = contentdata1;
  content1.style.color = color_content1;

  content2.innerHTML = contentdata2;
  content2.style.color = color_content2;

  content3.innerHTML = contentdata3;
  content3.style.color = color_content3;

  content4.innerHTML = contentdata4;
  content4.style.color = color_content4;

  $('#t-6-heading').css({ 'font-size': inpheadlinefontsize });
  $('.t6-content').css({ 'font-size': inpcontentfontsize });

}

function hide_ta(id){
  if(frmid(id).checked){
    $('#take_action'+id).css('display', 'block');
  }else{
    $('#take_action'+id).css('display', 'none');
  }
}


function load_image() {
  var id = window.localStorage.getItem('template_id')
  window[id + "content"]();
  preview(id);
  $('.preview').css('display', 'block');
}

function preview(id) {
  html2canvas(document.getElementById(id)).then(function (canvas) {
    var imageData = canvas.toDataURL('image/jpeg');
    var link = document.createElement('a');
    link.href = imageData;
    frmid('preview').src = imageData;
  });
}

function extract() {
  var id = localStorage.getItem("template_id")
  html2canvas(document.getElementById(id), { scale: 5, }).then(function (canvas) {
    var imageData = canvas.toDataURL('image/jpeg');
    var link = document.createElement('a');
    $('#preview').attr('src', imageData);
    link.href = imageData;
    link.download = 'Image.jpg';
    link.click();
  });
}

function input_image(input, id) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#' + id).attr('src', e.target.result);
      $('.' + id).css('background-image', "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(" + e.target.result + ")");
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function t_4_main_image(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.t-4-main_img').css('background-image', "url(" + e.target.result + ")");
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function t_6_main_image(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.t-6-main_img').css('background-image', "url(" + e.target.result + ")");
    };
    reader.readAsDataURL(input.files[0]);
  }
}


function convertDateFormat(inputDate) {
  var dateObject = new Date(inputDate);
  var day = dateObject.getDate();
  var month = dateObject.toLocaleString('default', { month: 'short' });
  var year = dateObject.getFullYear();
  var convertedDate = day + ' ' + month.toUpperCase() + ' ' + year;
  return convertedDate;
}

function time_conv() {
  var time = $('#timedate').val();
  if (time) { } else { alert("Fill time and date"); $('#timedate').focus(); }
  var date = convertDateFormat(time.split("T")[0]);
  var parts = time.split("T")[1].split(':');
  var hours = parseInt(parts[0], 10);
  var minutes = parts[1];
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  var timeString = hours + ':' + minutes + ' ' + ampm;
  frmid('datetime-date').innerHTML = date;
  frmid('datetime-time').innerHTML = timeString;
}

