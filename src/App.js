import React from 'react';
import { Whiteboard } from './lib';
import {saveAs} from 'file-saver';
import styles from './app.module.scss';

const App = () => {
  const [files, setFiles] = React.useState({});
  const [canvasJSON, setCanvasJSON] = React.useState({});
  const src = { "version": "4.6.0", "objects": [{ "type": "path", "version": "4.6.0", "originX": "left", "originY": "top", "left": 191.28, "top": 128.2, "width": 396.76, "height": 373.37, "fill": null, "stroke": "#ff0019", "strokeWidth": 5, "strokeDashArray": null, "strokeLineCap": "round", "strokeDashOffset": 0, "strokeLineJoin": "round", "strokeUniform": false, "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "erasable": true, "path": [["M", 193.78468122731087, 383.8045951526851], ["Q", 193.78968122731087, 383.8095951526851, 194.35065269470215, 384.728669436357], ["Q", 194.91162416209346, 385.6477437200289, 198.6254579709924, 390.4508104706674], ["Q", 202.3392917798913, 395.2538772213059, 211.5407820991848, 406.2879560646352], ["Q", 220.74227241847828, 417.3220349079645, 234.06534476902175, 433.2293098128388], ["Q", 247.38841711956522, 449.1365847177131, 258.3663170855978, 462.35670523275076], ["Q", 269.34421705163044, 475.57682574778846, 275.3954471919848, 482.960575077627], ["Q", 281.4466773323391, 490.3443244074656, 285.40722963084346, 494.94228193924243], ["Q", 289.3677819293478, 499.5402394710193, 291.38572095788044, 501.55494352261053], ["Q", 293.40365998641306, 503.5696475742018, 294.0373550497967, 503.9071505876013], ["Q", 294.6710501131804, 504.2446536010008, 295.88388612995976, 501.9547566569369], ["Q", 297.0967221467391, 499.66485971287307, 301.95328575631845, 490.8661716702285], ["Q", 306.80984936589783, 482.06748362758384, 317.7461908174598, 464.61803322976857], ["Q", 328.68253226902175, 447.1685828319533, 344.67021908967394, 421.9407726216715], ["Q", 360.6579059103261, 396.71296241138975, 380.0114215353261, 366.43024364091264], ["Q", 399.3649371603261, 336.14752487043546, 417.4666604166446, 308.96993726777043], ["Q", 435.568383672963, 281.79234966510546, 450.36660828797716, 260.86393779878034], ["Q", 465.1648329029913, 239.9355259324552, 475.87262535095215, 225.7158269443059], ["Q", 486.58041779891306, 211.49612795615656, 493.39259027398157, 203.49706618216476], ["Q", 500.20476274905, 195.498004408173, 505.8430403419163, 189.9004836157164], ["Q", 511.4813179347826, 184.30296282325983, 516.2158233808434, 180.22943866766323], ["Q", 520.9503288269043, 176.15591451206663, 525.6120954596479, 172.49778862724412], ["Q", 530.2738620923914, 168.8396627424216, 534.9174592391305, 165.18673190308164], ["Q", 539.5610563858696, 161.53380106374166, 544.4851392663044, 157.50441577920694], ["Q", 549.4092221467391, 153.4750304946722, 554.0034847259521, 149.9674848666844], ["Q", 558.5977473051652, 146.45993923869662, 562.8933242300283, 143.52617611586533], ["Q", 567.1889011548914, 140.59241299303406, 570.9494978033979, 138.40636371510973], ["Q", 574.7100944519043, 136.2203144371854, 577.5331212748652, 134.96372953389806], ["Q", 580.3561480978261, 133.70714463061074, 582.2442529097848, 132.99836700506717], ["Q", 584.1323577217433, 132.2895893795236, 585.4698388472848, 131.96764868392393], ["Q", 586.8073199728261, 131.6457079883243, 588.6720509736435, 131.17319464210587], ["L", 590.5417819744608, 130.69568129588745]] }] };
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
  //   const json = async()=>{
  //   if (Object.values(canvasJSON).length > 0) {
  //     const response = await fetch("http://localhost:4000/api/v1/canvas",{
  //       method:'POST',
  //       headers:{
  //         'Content-type' : 'application/json'
  //       },
  //       body : JSON.stringify({
  //         body: Object.values(canvasJSON)[0]
  //       })
  //     })
  //   }
  // }
  // json();
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
  
  return (
    <div className={styles.app}>
      <main>
        <Whiteboard aspectRatio={width/(height-100)} setFiles={setFiles} color={color} setJSON={setCanvasJSON} src={src} />
      </main>
    </div>
  );
};

export default App;
