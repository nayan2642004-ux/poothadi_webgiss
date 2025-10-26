var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_poothadi_1 = new ol.format.GeoJSON();
var features_poothadi_1 = format_poothadi_1.readFeatures(json_poothadi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poothadi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poothadi_1.addFeatures(features_poothadi_1);
var lyr_poothadi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poothadi_1, 
                style: style_poothadi_1,
                popuplayertitle: 'poothadi',
                interactive: true,
                title: '<img src="styles/legend/poothadi_1.png" /> poothadi'
            });
var format_KL_Wards_2 = new ol.format.GeoJSON();
var features_KL_Wards_2 = format_KL_Wards_2.readFeatures(json_KL_Wards_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KL_Wards_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KL_Wards_2.addFeatures(features_KL_Wards_2);
var lyr_KL_Wards_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KL_Wards_2, 
                style: style_KL_Wards_2,
                popuplayertitle: 'KL_Wards',
                interactive: true,
    title: 'KL_Wards<br />\
    <img src="styles/legend/KL_Wards_2_0.png" /> ATHIRATTUKUNNU<br />\
    <img src="styles/legend/KL_Wards_2_1.png" /> CHEENGODE<br />\
    <img src="styles/legend/KL_Wards_2_2.png" /> CHEEYAMBAM<br />\
    <img src="styles/legend/KL_Wards_2_3.png" /> CHERUKUNNU<br />\
    <img src="styles/legend/KL_Wards_2_4.png" /> CHUNDAKOLLY<br />\
    <img src="styles/legend/KL_Wards_2_5.png" /> GANDHINAGAR<br />\
    <img src="styles/legend/KL_Wards_2_6.png" /> IRULAM<br />\
    <img src="styles/legend/KL_Wards_2_7.png" /> KELAMANGALAM<br />\
    <img src="styles/legend/KL_Wards_2_8.png" /> KENICHIRA<br />\
    <img src="styles/legend/KL_Wards_2_9.png" /> KOLERI<br />\
    <img src="styles/legend/KL_Wards_2_10.png" /> KOTTAKOLLY<br />\
    <img src="styles/legend/KL_Wards_2_11.png" /> KOTTAVAYAL<br />\
    <img src="styles/legend/KL_Wards_2_12.png" /> MANALVAYAL<br />\
    <img src="styles/legend/KL_Wards_2_13.png" /> MARIYANAD<br />\
    <img src="styles/legend/KL_Wards_2_14.png" /> MOODAKOLLY<br />\
    <img src="styles/legend/KL_Wards_2_15.png" /> NADAVAYAL<br />\
    <img src="styles/legend/KL_Wards_2_16.png" /> NELLIKKARA<br />\
    <img src="styles/legend/KL_Wards_2_17.png" /> PAPLASSERI<br />\
    <img src="styles/legend/KL_Wards_2_18.png" /> POOTHADI<br />\
    <img src="styles/legend/KL_Wards_2_19.png" /> THAZAMUNDA<br />\
    <img src="styles/legend/KL_Wards_2_20.png" /> THOOTHALERI<br />\
    <img src="styles/legend/KL_Wards_2_21.png" /> VAKERI<br />\
    <img src="styles/legend/KL_Wards_2_22.png" /> VALAVAYAL<br />\
    <img src="styles/legend/KL_Wards_2_23.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_poothadi_1.setVisible(true);lyr_KL_Wards_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_poothadi_1,lyr_KL_Wards_2];
lyr_poothadi_1.set('fieldAliases', {'fid': 'fid', 'admin_level': 'admin_level', 'boundary': 'boundary', 'local_authority:IN': 'local_authority:IN', 'name': 'name', 'name:ml': 'name:ml', 'type': 'type', 'wikidata': 'wikidata', });
lyr_KL_Wards_2.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_poothadi_1.set('fieldImages', {'fid': 'TextEdit', 'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'local_authority:IN': 'TextEdit', 'name': 'TextEdit', 'name:ml': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_KL_Wards_2.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_poothadi_1.set('fieldLabels', {'fid': 'no label', 'admin_level': 'no label', 'boundary': 'no label', 'local_authority:IN': 'no label', 'name': 'no label', 'name:ml': 'no label', 'type': 'no label', 'wikidata': 'no label', });
lyr_KL_Wards_2.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_KL_Wards_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});