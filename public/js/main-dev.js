$(document).ready(function () {
  // Google Maps
  if ($("#gmap").length > 0) {
    var myLatlng = new google.maps.LatLng(43.5571948, 2.1153791);
    var myOptions = {
      zoom: 16,
      center: myLatlng,
      disableDefaultUI: true,
      navigationControl: false,

      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("gmap"), myOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "7 Route de Soulet 81580 Soual, france"
    });
  }

  if ($("#gmap-contact").length > 0) {
    var myLatlng = new google.maps.LatLng(43.5571948, 2.1153791);
    var myOptions = {
      zoom: 16,
      center: myLatlng,
      disableDefaultUI: true,
      navigationControl: false,

      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("gmap-contact"), myOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "7 Route de Soulet 81580 Soual, france"
    });
  }

  // owl-carousel
  if ($(".owl-carousel").length > 0) {
    var owl = $(".owl-carousel");

    owl.owlCarousel({
      items: 1,
      loop: true,
      center: true,
      rewind: true
    });
  }
});

function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    headerEl = document.getElementById('js-header');

  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  } else {
    headerEl.classList.remove("smaller");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);