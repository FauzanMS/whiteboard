import React from 'react';
import { Whiteboard } from './lib';
import {saveAs} from 'file-saver';
import styles from './app.module.scss';

const App = () => {
  const [files, setFiles] = React.useState({});
  const [canvasJSON, setCanvasJSON] = React.useState({});
  const src = { "version": "4.6.0", "objects": [{ "type": "path", "version": "4.6.0", "originX": "left", "originY": "top", "left": 268.1, "top": 147.24, "width": 356.55, "height": 256.1, "fill": null, "stroke": "#ff0019", "strokeWidth": 5, "strokeDashArray": null, "strokeLineCap": "round", "strokeDashOffset": 0, "strokeLineJoin": "round", "strokeUniform": false, "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "erasable": true, "path": [["M", 395.4173194748359, 261.2534780948843], ["Q", 395.4223194748359, 261.2484780948843, 395.4223194748359, 260.74991229699333], ["Q", 395.4223194748359, 260.25134649910234, 399.41648431801605, 254.26855692441035], ["Q", 403.4106491611962, 248.28576734971833, 411.3989788475565, 237.8158855940073], ["Q", 419.38730853391684, 227.3460038382963, 429.3727206418672, 215.87899048680327], ["Q", 439.3581327498176, 204.41197713531025, 448.345003646973, 193.94209537959924], ["Q", 457.33187454412837, 183.47221362388822, 464.3216630196937, 174.99659505974122], ["Q", 471.31145149525895, 166.52097649559423, 475.8048869438366, 161.0367527187932], ["Q", 480.29832239241426, 155.5525289419922, 481.7961342086069, 153.55826575042818], ["Q", 483.2939460247994, 151.5640025588642, 483.7932166301969, 150.56687096308218], ["Q", 484.2924872355944, 149.5697393673002, 484.2924872355944, 150.0683051651912], ["Q", 484.2924872355944, 150.56687096308218, 484.2924872355944, 152.0625683567552], ["Q", 484.2924872355944, 153.5582657504282, 481.7961342086069, 165.02527910192123], ["Q", 479.29978118161927, 176.49229245341422, 474.30707512764405, 198.42918756061823], ["Q", 469.31436907366884, 220.36608266782227, 464.32166301969363, 242.3029777750263], ["Q", 459.3289569657184, 264.2398728822303, 455.8340627279358, 281.68967580841536], ["Q", 452.33916849015316, 299.1394787346004, 450.34208606856305, 312.1021894797664], ["Q", 448.345003646973, 325.06490022493244, 446.84719183078045, 332.54338719329746], ["Q", 445.3493800145879, 340.0218741616624, 445.3493800145879, 343.51183474689947], ["Q", 445.3493800145879, 347.00179533213645, 450.8413566739606, 347.99892692791843], ["Q", 456.3333333333333, 348.99605852370047, 470.3129102844639, 348.99605852370047], ["Q", 484.2924872355944, 348.99605852370047, 507.2589350838804, 348.4974927258095], ["Q", 530.2253829321663, 347.99892692791843, 552.6925601750547, 346.5032295342454], ["Q", 575.1597374179431, 345.00753214057244, 589.6385849744712, 342.51470315111743], ["Q", 604.1174325309993, 340.0218741616624, 612.605032822757, 338.52617676798945], ["Q", 621.0926331145149, 337.0304793743164, 624.5875273522976, 336.03334777853445], ["Q", 628.0824215900802, 335.0362161827524, 624.0882567469, 334.5376503848614], ["Q", 620.0940919037199, 334.03908458697043, 598.6254558716266, 334.5376503848614], ["Q", 577.1568198395332, 335.0362161827524, 536.2166301969365, 339.52330836377143], ["Q", 495.2764405543399, 344.01040054479046, 452.33916849015316, 352.98458490682845], ["Q", 409.40189642596647, 361.9587692688665, 377.9478482859227, 370.9329536309045], ["Q", 346.49380014587894, 379.90713799294247, 326.5229759299781, 386.3884933655255], ["Q", 306.5521517140773, 392.8698487381085, 295.5681983953319, 396.35980932334553], ["Q", 284.58424507658646, 399.8497699085825, 279.59153902261124, 402.3425988980375], ["Q", 274.59883296863603, 404.83542788749253, 272.601750547046, 405.3339936853835], ["L", 270.5996681254559, 405.8375594832745]] }, { "type": "path", "version": "4.6.0", "originX": "left", "originY": "top", "left": 686.49, "top": 198.05, "width": 144.79, "height": 174.37, "fill": null, "stroke": "#ff0019", "strokeWidth": 5, "strokeDashArray": null, "strokeLineCap": "round", "strokeDashOffset": 0, "strokeLineJoin": "round", "strokeUniform": false, "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "erasable": true, "path": [["M", 689.9919766593727, 244.30224096659032], ["Q", 689.9919766593727, 244.29724096659032, 689.4927060539751, 243.79867516869933], ["Q", 688.9934354485777, 243.30010937080831, 688.9934354485777, 241.80441197713532], ["Q", 688.9934354485777, 240.30871458346232, 689.4927060539751, 236.32018820033431], ["Q", 689.9919766593727, 232.3316618172063, 693.9861415025529, 226.3488722425143], ["Q", 697.9803063457331, 220.36608266782227, 706.4679066374908, 214.88185889102127], ["Q", 714.9555069292487, 209.39763511422026, 725.4401896425966, 205.90767452898325], ["Q", 735.9248723559446, 202.41771394374626, 746.90882567469, 201.91914814585527], ["Q", 757.8927789934354, 201.42058234796426, 767.3789204959883, 201.42058234796426], ["Q", 776.8650619985413, 201.42058234796426, 783.3555798687089, 201.42058234796426], ["Q", 789.8460977388767, 201.42058234796426, 795.837345003647, 200.92201655007324], ["Q", 801.8285922684172, 200.42345075218225, 805.8227571115974, 200.92201655007324], ["Q", 809.8169219547775, 201.42058234796426, 812.8125455871626, 203.91341133741926], ["Q", 815.8081692195477, 206.40624032687427, 817.8052516411378, 209.89620091211128], ["Q", 819.8023340627279, 213.38616149734827, 820.3016046681255, 220.8646484657133], ["Q", 820.8008752735229, 228.3431354340783, 818.8037928519329, 239.3115829876803], ["Q", 816.8067104303428, 250.28003054128231, 809.8169219547775, 264.2398728822303], ["Q", 802.8271334792122, 278.1997152231784, 790.8446389496717, 293.65525495779934], ["Q", 778.8621444201312, 309.11079469242037, 765.8811086797957, 321.5749396396954], ["Q", 752.9000729394602, 334.03908458697043, 743.9132020423049, 342.01613735322644], ["Q", 734.9263311451496, 349.99319011948245, 728.9350838803794, 354.97884809839246], ["Q", 722.943836615609, 359.9645060773025, 718.9496717724289, 363.45446666253946], ["Q", 714.9555069292487, 366.94442724777645, 712.9584245076586, 368.93869043934046], ["Q", 710.9613420860685, 370.9329536309045, 710.462071480671, 371.43151942879547], ["Q", 709.9628008752735, 371.93008522668646, 712.9584245076586, 372.42865102457745], ["Q", 715.9540481400437, 372.9272168224685, 725.4401896425966, 373.4257826203595], ["Q", 734.9263311451496, 373.9243484182505, 750.4037199124726, 374.42291421614146], ["Q", 765.8811086797957, 374.92148001403245, 781.8577680525163, 374.92148001403245], ["Q", 797.8344274252371, 374.92148001403245, 815.8081692195478, 373.9243484182505], ["L", 833.7869110138585, 372.9222168224685]] }, { "type": "path", "version": "4.6.0", "originX": "left", "originY": "top", "left": 1018, "top": 302.62, "width": 0.01, "height": 0, "fill": null, "stroke": "#ff0019", "strokeWidth": 5, "strokeDashArray": null, "strokeLineCap": "round", "strokeDashOffset": 0, "strokeLineJoin": "round", "strokeUniform": false, "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "erasable": true, "path": [["M", 1020.504117432531, 305.1222683092924], ["L", 1020.514117432531, 305.1222683092924]] }, { "type": "path", "version": "4.6.0", "originX": "left", "originY": "top", "left": 972.07, "top": 236.81, "width": 108.85, "height": 135.61, "fill": null, "stroke": "#ff0019", "strokeWidth": 5, "strokeDashArray": null, "strokeLineCap": "round", "strokeDashOffset": 0, "strokeLineJoin": "round", "strokeUniform": false, "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "erasable": true, "path": [["M", 980.5674690007294, 277.20758362739633], ["Q", 980.5674690007294, 277.20258362739634, 980.0681983953318, 277.20258362739634], ["Q", 979.5689277899344, 277.20258362739634, 979.5689277899344, 275.70688623372337], ["Q", 979.5689277899344, 274.21118884005034, 979.5689277899344, 271.71835985059533], ["Q", 979.5689277899344, 269.2255308611403, 979.5689277899344, 264.2398728822303], ["Q", 979.5689277899344, 259.25421490332036, 980.0681983953318, 254.26855692441035], ["Q", 980.5674690007294, 249.2828989455003, 983.5630926331145, 245.7929383602633], ["Q", 986.5587162654996, 242.3029777750263, 994.5470459518599, 240.8072803813533], ["Q", 1002.5353756382202, 239.3115829876803, 1011.0229759299781, 239.3115829876803], ["Q", 1019.510576221736, 239.3115829876803, 1027.9981765134937, 239.3115829876803], ["Q", 1036.4857768052516, 239.3115829876803, 1044.474106491612, 239.3115829876803], ["Q", 1052.4624361779722, 239.3115829876803, 1059.4522246535375, 239.3115829876803], ["Q", 1066.4420131291029, 239.3115829876803, 1071.434719183078, 240.8072803813533], ["Q", 1076.4274252370533, 242.3029777750263, 1078.9237782640407, 244.7958067644813], ["Q", 1081.4201312910284, 247.28863575393632, 1082.4186725018235, 250.7785963391733], ["Q", 1083.4172137126186, 254.26855692441032, 1083.4172137126186, 259.75278070121135], ["Q", 1083.4172137126186, 265.23700447801235, 1078.9237782640407, 272.7154914463773], ["Q", 1074.430342815463, 280.19397841474233, 1064.94420131291, 287.67246538310735], ["Q", 1055.4580598103573, 295.15095235147237, 1045.472647702407, 301.6323077240554], ["Q", 1035.4872355944565, 308.1136630966384, 1027.4989059080963, 312.10218947976637], ["Q", 1019.510576221736, 316.0907158628944, 1015.5164113785559, 317.5864132565674], ["Q", 1011.5222465353756, 319.0821106502404, 1009.025893508388, 320.07924224602243], ["Q", 1006.5295404814004, 321.0763738418044, 1005.5309992706054, 321.5749396396954], ["Q", 1004.5324580598103, 322.0735054375864, 1005.0317286652079, 322.0735054375864], ["Q", 1005.5309992706054, 322.0735054375864, 1006.0302698760029, 322.0735054375864], ["Q", 1006.5295404814004, 322.0735054375864, 1009.5251641137855, 322.0735054375864], ["Q", 1012.5207877461706, 322.0735054375864, 1017.0142231947484, 323.07063703336837], ["Q", 1021.5076586433261, 324.0677686291504, 1025.0025528811088, 325.06490022493244], ["Q", 1028.4974471188914, 326.0620318207144, 1029.995258935084, 327.0591634164964], ["Q", 1031.4930707512765, 328.05629501227844, 1032.4916119620716, 329.0534266080604], ["Q", 1033.4901531728665, 330.0505582038424, 1032.9908825674688, 331.5462555975154], ["Q", 1032.4916119620714, 333.04195299118845, 1029.4959883296863, 336.53191357642544], ["Q", 1026.5003646973012, 340.0218741616624, 1020.0098468271335, 345.5060979384634], ["Q", 1013.5193289569658, 350.99032171526443, 1006.5295404814004, 355.97597969417444], ["Q", 999.5397520058351, 360.96163767308445, 993.5485047410649, 364.4515982583215], ["Q", 987.5572574762947, 367.9415588435585, 983.5630926331146, 369.93582203512244], ["Q", 979.5689277899344, 371.93008522668646, 978.0711159737418, 372.9272168224685], ["Q", 976.5733041575493, 373.9243484182505, 975.5747629467542, 374.42291421614146], ["L", 974.5712217359592, 374.92648001403245]] }, { "type": "path", "version": "4.6.0", "originX": "left", "originY": "top", "left": 696.47, "top": 440.22, "width": 140.42, "height": 159.37, "fill": null, "stroke": "#ff0019", "strokeWidth": 5, "strokeDashArray": null, "strokeLineCap": "round", "strokeDashOffset": 0, "strokeLineJoin": "round", "strokeUniform": false, "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "erasable": true, "path": [["M", 727.9415426695842, 442.72142852720856], ["Q", 727.9365426695842, 442.72642852720855, 726.4387308533917, 445.21925751666356], ["Q", 724.9409190371991, 447.71208650611857, 720.4474835886215, 454.1934418787016], ["Q", 715.9540481400437, 460.6747972512846, 711.460612691466, 467.15615262386757], ["Q", 706.9671772428884, 473.6375079964506, 704.9700948212983, 477.62603437957864], ["Q", 702.9730123997082, 481.6145607627066, 701.9744711889132, 483.60882395427063], ["Q", 700.9759299781182, 485.60308714583465, 700.4766593727206, 486.60021874161663], ["Q", 699.9773887673231, 487.5973503373986, 700.9759299781181, 487.5973503373986], ["Q", 701.9744711889132, 487.5973503373986, 708.464989059081, 487.5973503373986], ["Q", 714.9555069292487, 487.5973503373986, 728.9350838803794, 487.5973503373986], ["Q", 742.9146608315099, 487.5973503373986, 759.3905908096281, 489.0930477310716], ["Q", 775.8665207877461, 490.5887451247446, 787.8490153172866, 493.58013991209066], ["Q", 799.8315098468271, 496.57153469943665, 809.31765134938, 502.55432427412865], ["Q", 818.8037928519329, 508.53711384882064, 826.7921225382933, 516.5141666150766], ["Q", 834.7804522246536, 524.4912193813327, 837.2768052516411, 531.4711405518067], ["Q", 839.7731582786287, 538.4510617222807, 838.7746170678337, 546.9266802864277], ["Q", 837.7760758570387, 555.4022988505748, 832.2840991976659, 563.8779174147218], ["Q", 826.7921225382933, 572.3535359788688, 816.8067104303428, 578.8348913514517], ["Q", 806.8212983223924, 585.3162467240347, 793.3409919766593, 589.8033389050538], ["Q", 779.8606856309264, 594.2904310860728, 765.8811086797957, 597.2818258734187], ["Q", 751.9015317286652, 600.2732206607648, 739.9190371991247, 601.2703522565467], ["Q", 727.9365426695842, 602.2674838523287, 713.4576951130562, 601.7689180544378], ["L", 698.9738475565281, 601.2653522565467]] }, { "type": "path", "version": "4.6.0", "originX": "left", "originY": "top", "left": 725.43, "top": 460.17, "width": 296.58, "height": 11.97, "fill": null, "stroke": "#ff0019", "strokeWidth": 5, "strokeDashArray": null, "strokeLineCap": "round", "strokeDashOffset": 0, "strokeLineJoin": "round", "strokeUniform": false, "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "erasable": true, "path": [["M", 727.9315426695842, 462.6690604428486], ["Q", 727.9365426695842, 462.6690604428486, 730.9321663019693, 462.6690604428486], ["Q", 733.9277899343545, 462.6690604428486, 746.90882567469, 462.6690604428486], ["Q", 759.8898614150255, 462.6690604428486, 791.3439095550693, 463.1676262407396], ["Q", 822.797957695113, 463.6661920386306, 864.7366885485047, 465.1618894323036], ["Q", 906.6754194018964, 466.6575868259766, 938.1294675419401, 469.1504158154316], ["Q", 969.583515681984, 471.6432448048866, 997.0433989788476, 473.13894219855956], ["L", 1024.5082822757113, 474.6396395922326]] }, { "type": "path", "version": "4.6.0", "originX": "left", "originY": "top", "left": 826.28, "top": 464.16, "width": 246.65, "height": 205.41, "fill": null, "stroke": "#ff0019", "strokeWidth": 5, "strokeDashArray": null, "strokeLineCap": "round", "strokeDashOffset": 0, "strokeLineJoin": "round", "strokeUniform": false, "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "erasable": true, "path": [["M", 1075.4338840262583, 466.6575868259766], ["Q", 1075.4288840262582, 466.6575868259766, 1074.9296134208607, 466.6575868259766], ["Q", 1074.430342815463, 466.6575868259766, 1070.436177972283, 466.6575868259766], ["Q", 1066.4420131291029, 466.6575868259766, 1056.4566010211524, 467.6547184217586], ["Q", 1046.471188913202, 468.6518500175406, 1031.4930707512765, 473.6375079964506], ["Q", 1016.5149525893509, 478.6231659753606, 1001.5368344274252, 486.10165294372564], ["Q", 986.5587162654996, 493.58013991209066, 973.0784099197665, 503.05289007201964], ["Q", 959.5981035740335, 512.5256402319486, 950.6112326768782, 521.9983903918776], ["Q", 941.6243617797228, 531.4711405518067, 936.1323851203501, 539.9467591159537], ["Q", 930.6404084609774, 548.4223776801007, 926.6462436177972, 557.8951278400298], ["Q", 922.652078774617, 567.3678779999588, 921.653537563822, 576.3420623619968], ["Q", 920.654996353027, 585.3162467240347, 920.1557257476295, 591.2990362987267], ["Q", 919.656455142232, 597.2818258734187, 920.1557257476295, 602.2674838523287], ["Q", 920.654996353027, 607.2531418312387, 925.1484318016046, 614.2330630017127], ["Q", 929.6418672501824, 621.2129841721868, 938.6287381473378, 629.1900369384427], ["Q", 947.6156090444931, 637.1670897046988, 957.101750547046, 641.6541818857179], ["Q", 966.5878920495988, 646.1412740667369, 975.0754923413567, 647.6369714604098], ["Q", 983.5630926331145, 649.1326688540828, 992.0506929248724, 649.6312346519738], ["Q", 1000.5382932166302, 650.1298004498649, 1006.5295404814004, 646.6398398646279], ["Q", 1012.5207877461706, 643.1498792793908, 1018.0127644055433, 634.1756949173528], ["Q", 1023.5047410649161, 625.2015105553148, 1025.501823486506, 614.2330630017128], ["Q", 1027.4989059080963, 603.2646154481108, 1026.9996353026986, 591.2990362987268], ["Q", 1026.5003646973012, 579.3334571493427, 1023.0054704595186, 568.8635753936317], ["Q", 1019.510576221736, 558.3936936379207, 1011.5222465353756, 551.9123382653377], ["Q", 1003.5339168490153, 545.4309828927547, 991.5514223194748, 541.4424565096267], ["Q", 979.5689277899344, 537.4539301264987, 964.5908096280087, 537.4539301264987], ["Q", 949.6126914660831, 537.4539301264987, 934.1353026987599, 544.4338512969728], ["Q", 918.6579139314368, 551.4137724674467, 902.6812545587162, 565.8721806062857], ["Q", 886.7045951859956, 580.3305887451247, 874.722100656455, 594.7889968839638], ["Q", 862.7396061269146, 609.2474050228028, 855.7498176513493, 620.2158525764048], ["Q", 848.7600291757841, 631.1843001300068, 843.2680525164114, 640.1584844920449], ["Q", 837.7760758570387, 649.1326688540828, 833.282640408461, 660.5996822055758], ["L", 828.7842049598833, 672.0716955570689]] }, { "type": "path", "version": "4.6.0", "originX": "left", "originY": "top", "left": 383.94, "top": 440.45, "width": 229.67, "height": 151.34, "fill": null, "stroke": "#ff0019", "strokeWidth": 5, "strokeDashArray": null, "strokeLineCap": "round", "strokeDashOffset": 0, "strokeLineJoin": "round", "strokeUniform": false, "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "erasable": true, "path": [["M", 535.2230889861415, 443.7185601229906], ["Q", 535.2180889861415, 443.7235601229906, 535.2180889861415, 443.2249943250996], ["Q", 535.2180889861415, 442.72642852720855, 533.2210065645514, 444.72069171877257], ["Q", 531.2239241429613, 446.7149549103366, 521.7377826404085, 456.18770507026557], ["Q", 512.2516411378556, 465.6604552301946, 492.28081692195474, 484.6059555500526], ["Q", 472.30999270605395, 503.5514558699106, 452.33916849015316, 522.4969561897686], ["Q", 432.36834427425237, 541.4424565096267, 420.88512035010945, 553.4080356590107], ["Q", 409.40189642596647, 565.3736148083947, 402.9113785557987, 572.8521017767597], ["Q", 396.42086068563094, 580.3305887451247, 392.9259664478483, 584.3191151282527], ["Q", 389.4310722100656, 588.3076415113808, 387.93326039387307, 590.3019047029447], ["Q", 386.4354485776805, 592.2961678945088, 386.4354485776805, 592.7947336923999], ["Q", 386.4354485776805, 593.2932994902908, 386.9347191830781, 593.2932994902908], ["Q", 387.43398978847557, 593.2932994902908, 391.42815463165573, 593.2932994902908], ["Q", 395.4223194748359, 593.2932994902908, 409.40189642596647, 593.2932994902908], ["Q", 423.381473377097, 593.2932994902908, 446.34792122538295, 593.2932994902908], ["Q", 469.31436907366884, 593.2932994902908, 494.27789934354485, 593.2932994902908], ["Q", 519.2414296134209, 593.2932994902908, 541.2093362509117, 593.2932994902908], ["Q", 563.1772428884026, 593.2932994902908, 576.6575492341357, 593.2932994902908], ["Q", 590.1378555798688, 593.2932994902908, 597.6269146608315, 593.7918652881817], ["Q", 605.1159737417943, 594.2904310860728, 608.1115973741794, 594.2904310860728], ["Q", 611.1072210065645, 594.2904310860728, 612.1057622173596, 594.2904310860728], ["Q", 613.1043034281546, 594.2904310860728, 613.6035740335521, 594.2904310860728], ["Q", 614.1028446389497, 594.2904310860728, 615.1013858497447, 594.2904310860728], ["L", 616.1049270605397, 594.2904310860728]] }, { "type": "path", "version": "4.6.0", "originX": "left", "originY": "top", "left": 591.63, "top": 490.36, "width": 3.99, "height": 287.9, "fill": null, "stroke": "#ff0019", "strokeWidth": 5, "strokeDashArray": null, "strokeLineCap": "round", "strokeDashOffset": 0, "strokeLineJoin": "round", "strokeUniform": false, "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "erasable": true, "path": [["M", 598.1261852662291, 493.57513991209066], ["Q", 598.1261852662291, 493.58013991209066, 598.1261852662291, 493.0815741141996], ["Q", 598.1261852662291, 492.5830083163086, 598.1261852662291, 497.07010049732764], ["Q", 598.1261852662291, 501.55719267834667, 598.1261852662291, 516.5141666150766], ["Q", 598.1261852662291, 531.4711405518067, 597.6269146608315, 556.8979962442477], ["Q", 597.127644055434, 582.3248519366888, 595.6298322392414, 609.7459708206939], ["Q", 594.1320204230489, 637.1670897046988, 594.1320204230489, 661.5968138013578], ["Q", 594.1320204230489, 686.0265378980168, 594.1320204230489, 707.4648672073299], ["Q", 594.1320204230489, 728.9031965166429, 594.1320204230489, 741.8659072618088], ["Q", 594.1320204230489, 754.8286180069749, 594.1320204230489, 761.8085391774489], ["Q", 594.1320204230489, 768.788460347923, 594.1320204230489, 772.776986731051], ["Q", 594.1320204230489, 776.765513114179, 594.1320204230489, 778.759776305743], ["L", 594.1320204230489, 780.759039497307]] }] }
  let source = "https://i.postimg.cc/RhKvknyD/page1-41.png";
  React.useEffect(()=>{
    if(Object.values(files).length >0){
    for (let i = 0; i < Object.values(files).length; i++){
      saveAs(Object.values(files)[i], `page${i+1}.png`);
      }
    }
    if (Object.values(files).length >0)
    window.location.reload();
  },[files])

  React.useEffect(() => {
    const json = async()=>{
    if (Object.values(canvasJSON).length > 0) {
      const response = await fetch("http://localhost:4000/api/v1/canvas",{
        method:'POST',
        headers:{
          'Content-type' : 'application/json'
        },
        body : JSON.stringify({
          body: Object.values(canvasJSON)[0]
        })
      })
    }
  }
  json();
  }, [canvasJSON])

  const color = [
    {
      title: 'red',
      color: '#ff0019'
    },
    {
      title: 'yellow',
      color: '#ffc400'
    },
    {
      title: 'black',
      color: '#000000'
    },
    {
      title: 'green',
      color: '#59ff0d'
    },
    {
      title: 'pink',
      color:'#f700ff'
    },
    {
      title: 'purple',
      color: '#8000ff'
    },
    {
      title: 'cyan',
      color: '#00c9c3'
    },
    {
      title: 'blue',
      color: '#021ff7'
    },
  ]

  const width = window.innerWidth;
  const height = window.innerHeight;
  let number = Math.floor((Math.random() * 100) + 1);
  
  return (
    <div className={styles.app}>
      <main>
        <Whiteboard aspectRatio={width/(height-120)} setFiles={setFiles} color={color} setJSON={setCanvasJSON} src={source} />
      </main>
    </div>
  );
};

export default App;
