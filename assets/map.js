document.addEventListener("DOMContentLoaded", async function () {
  console.log("DOMContentLoaded");
  let e = L.map("map").setView([4.351766, -76.106492], 13),
    o = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      }
    );
  e.addLayer(o), (e.options.minZoom = 13), (e.options.maxZoom = 18);
  let t = {
      minZoom: 13,
      minNativeZoom: 14,
      maxZoom: 18,
      tms: !1,
      attribution: "Pythoma",
      updateWhenIdle: !1,
      interactive: !1,
    },
    a = new L.tileLayer("ortomosaicosSatelitales/2020/{z}/{x}/{y}.png", t),
    i = new L.tileLayer("ortomosaicosSatelitales/2023/{z}/{x}/{y}.png", t),
    r = new L.tileLayer("ortomosaicosDrones/{z}/{x}/{y}.png", { options: t });
  (r.id = "orto"),
    e.on("layeradd", function (o) {
      "orto" === o.layer.id
        ? e.setView([4.4376046, -75.47339], 17)
        : e.setView([4.351766, -76.106492], 13);
    }),
    e.addLayer(a),
    L.control
      .layers({
        "Imagen Satelital 2020": a,
        "Imagen Satelita 2023": i,
        "Ortomosaico Dron": r,
      })
      .addTo(e);
});
