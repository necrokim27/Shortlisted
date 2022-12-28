ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMapStandard_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SHORTLISTED_PORT2_3 = new ol.format.GeoJSON();
var features_SHORTLISTED_PORT2_3 = format_SHORTLISTED_PORT2_3.readFeatures(json_SHORTLISTED_PORT2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHORTLISTED_PORT2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHORTLISTED_PORT2_3.addFeatures(features_SHORTLISTED_PORT2_3);cluster_SHORTLISTED_PORT2_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SHORTLISTED_PORT2_3
});
var lyr_SHORTLISTED_PORT2_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_SHORTLISTED_PORT2_3, 
                style: style_SHORTLISTED_PORT2_3,
                interactive: true,
                title: '<img src="styles/legend/SHORTLISTED_PORT2_3.png" /> SHORTLISTED_PORT2'
            });
var format_SHORTLISTED_QUARRY_4 = new ol.format.GeoJSON();
var features_SHORTLISTED_QUARRY_4 = format_SHORTLISTED_QUARRY_4.readFeatures(json_SHORTLISTED_QUARRY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHORTLISTED_QUARRY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHORTLISTED_QUARRY_4.addFeatures(features_SHORTLISTED_QUARRY_4);cluster_SHORTLISTED_QUARRY_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SHORTLISTED_QUARRY_4
});
var lyr_SHORTLISTED_QUARRY_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_SHORTLISTED_QUARRY_4, 
                style: style_SHORTLISTED_QUARRY_4,
                interactive: true,
                title: '<img src="styles/legend/SHORTLISTED_QUARRY_4.png" /> SHORTLISTED_QUARRY'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMapStandard_2.setVisible(true);lyr_SHORTLISTED_PORT2_3.setVisible(true);lyr_SHORTLISTED_QUARRY_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_OpenStreetMapStandard_2,lyr_SHORTLISTED_PORT2_3,lyr_SHORTLISTED_QUARRY_4];
lyr_SHORTLISTED_PORT2_3.set('fieldAliases', {'F_': 'F_', 'QUARRY_LOC': 'QUARRY_LOC', 'Y': 'Y', 'X': 'X', 'COMPANY': 'COMPANY', 'QUARRY_TO': 'QUARRY_TO', 'PORT_NAME': 'PORT_NAME', 'LAT': 'LAT', 'LONG': 'LONG', 'PORT_TO_26': 'PORT_TO_26', 'F11': 'F11', });
lyr_SHORTLISTED_QUARRY_4.set('fieldAliases', {'F_': 'F_', 'QUARRY_LOC': 'QUARRY_LOC', 'Y': 'Y', 'X': 'X', 'COMPANY': 'COMPANY', 'QUARRY_TO': 'QUARRY_TO', 'PORT_NAME': 'PORT_NAME', 'LAT': 'LAT', 'LONG': 'LONG', 'PORT_TO_26': 'PORT_TO_26', 'F11': 'F11', });
lyr_SHORTLISTED_PORT2_3.set('fieldImages', {'F_': 'TextEdit', 'QUARRY_LOC': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'COMPANY': 'TextEdit', 'QUARRY_TO': 'TextEdit', 'PORT_NAME': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'PORT_TO_26': 'TextEdit', 'F11': 'TextEdit', });
lyr_SHORTLISTED_QUARRY_4.set('fieldImages', {'F_': 'TextEdit', 'QUARRY_LOC': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'COMPANY': 'TextEdit', 'QUARRY_TO': 'TextEdit', 'PORT_NAME': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'PORT_TO_26': 'TextEdit', 'F11': 'TextEdit', });
lyr_SHORTLISTED_PORT2_3.set('fieldLabels', {'F_': 'inline label', 'QUARRY_LOC': 'inline label', 'Y': 'inline label', 'X': 'inline label', 'COMPANY': 'inline label', 'QUARRY_TO': 'inline label', 'PORT_NAME': 'header label', 'LAT': 'inline label', 'LONG': 'inline label', 'PORT_TO_26': 'inline label', 'F11': 'inline label', });
lyr_SHORTLISTED_QUARRY_4.set('fieldLabels', {'F_': 'inline label', 'QUARRY_LOC': 'inline label', 'Y': 'inline label', 'X': 'inline label', 'COMPANY': 'header label', 'QUARRY_TO': 'inline label', 'PORT_NAME': 'inline label', 'LAT': 'inline label', 'LONG': 'inline label', 'PORT_TO_26': 'inline label', 'F11': 'inline label', });
lyr_SHORTLISTED_QUARRY_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});