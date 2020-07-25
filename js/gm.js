var barberia = {lat: -33.4199, lng: -70.6629};
$('.mapz')
      .gmap3({
        center:barberia,
        zoom:16,
        mapTypeControl:false,
        streetViewControl: false,
        zoomControl: true,
        fullscreenControl: true,
        mapTypeId: "finest", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "finest"]
        }
      })
      .marker([
        {position: barberia, icon: "https://maps.google.com/mapfiles/marker_grey.png"},
      ])
      .infowindow({
        position: barberia,
        content: "Santiago's Finest Barbershop / Fermin Vivaceta 957, Local 19."
      })
      .then(function (infowindow) {
        infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
      })
      .styledmaptype(
        "finest",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#ffc905"},{"lightness":40}]},
          {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#333333"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#333333"},{"lightness":18}]},
          {"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#333333"},{"lightness":16}]},
          {"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
        ],
        {name: "finest"}
      );     