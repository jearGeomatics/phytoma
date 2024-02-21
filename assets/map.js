document.addEventListener("DOMContentLoaded", async function () {
  console.log("DOMContentLoaded");
  let map = L.map("map").setView([4.351766, -76.106492], 13);
  let osm = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    }
  );

  map.addLayer(osm);
  map.options.minZoom = 13;
  map.options.maxZoom = 18;

  let ortoSatelital2020 = new L.tileLayer(
    "ortomosaicosSatelitales/2020/{z}/{x}/{y}.png",
    {
      minZoom: 13,
      minNativeZoom: 14,
      maxZoom: 18,
      tms: false,
      attribution: "Pythoma",
      updateWhenIdle: false,
      interactive: false,
    }
  );
  let ortoSatelital2023 = new L.tileLayer(
    "ortomosaicosSatelitales/2023/{z}/{x}/{y}.png",
    {
      minZoom: 13,
      minNativeZoom: 14,
      maxZoom: 18,
      tms: false,
      attribution: "Pythoma",
      updateWhenIdle: false,
      interactive: false,
    }
  );
  map.addLayer(ortoSatelital2020);
  let satelitesGroup = {
    "Imagen Satelital 2020": ortoSatelital2020,
    "Imagen Satelita 2023": ortoSatelital2023,
  };
  let layerControl = L.control.layers(satelitesGroup).addTo(map);
});
