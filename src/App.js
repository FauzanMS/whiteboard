import React from 'react';
import { Whiteboard } from './lib';
import {saveAs} from 'file-saver';
import styles from './app.module.scss';

const App = () => {
  const [files, setFiles] = React.useState({});
  const [resendFiles, setResendFiles] = React.useState(false);

  const [canvasJSON, setCanvasJSON] = React.useState({});

  let source = "https://i.postimg.cc/Dw97bv23/image-7.png";
  
  React.useEffect(()=>{
    if(Object.values(files).length >0){
      if(resendFiles){
        
      }
    for (let i = 0; i < Object.values(files).length; i++){
      saveAs(Object.values(files)[i], `page${i+1}.png`);
      }
    }

    if (Object.values(files).length >0)
    window.location.reload();
  },[files, resendFiles])

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

  const width = window.innerWidth > 610 ? 610 : window.innerWidth;
  const height = window.innerHeight > 670 ? 670 : window.innerHeight;
  let number = Math.floor((Math.random() * 100) + 1);

  const pdfUrl = "https://stemboard-stagging.s3.amazonaws.com/545148257444/545156996004/Cg4I956t4IUOEKS3ju_uDw/1662020088490.blob"
  
  return (
    <div className={styles.app}>
      <main>
        <Whiteboard aspectRatio={width/(height)} setFiles={setFiles} setResendFiles={setResendFiles} color={color} pdf={pdfUrl} setJSON={setCanvasJSON} pdfUrl={pdfUrl} resend={true} />
      </main>
    </div>
  );
};

export default App;
