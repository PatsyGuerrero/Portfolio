import React, {Component, useRef}from 'react';
import * as THREE from 'three';
// const doc = window.document;
// class Iconos extends Component {
//     componentDidMount() {
//       var scene = new THREE.Scene();
//       var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//       var renderer = new THREE.WebGLRenderer();
//       renderer.setSize( window.innerWidth, window.innerHeight );
//       // document.body.appendChild( renderer.domElement );
//       // use ref as a mount point of the Three.js scene instead of the document.body
//       this.mount.appendChild( renderer.domElement );
//       console.log(this, 'atstatstasatstats')
//       var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//       var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//       var cube = new THREE.Mesh( geometry, material );
//       scene.add( cube );
//       camera.position.z = 5;
//       var animate = function () {
//         requestAnimationFrame( animate );
//         cube.rotation.x += 0.01;
//         cube.rotation.y += 0.01;
//         renderer.render( scene, camera );
//       };
//       animate();
//     }
//     render() {
//       return (
//         <div ref={ref => (this.mount = ref)} />
//       )
//     }
//   }
function Iconos () {
    let mount = useRef(null);
    // contenerdor de los iconos
    // const iconosContainer = document.getElementsByClassName('holaa')[0];
    // import * as THREE from 'three';
    const t = 0;
    const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const camera = new THREE.PerspectiveCamera( 45, 1, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( 200, 200 );
    const elem = useRef(null);
    console.log(window.innerWidth, 'tttt')
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    function animate() {
        requestAnimationFrame( animate );
        // renderer.render( scene, camera );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
    animate();
    React.useEffect(() => {
        // const myDiv = document.createElement("div");
        // var newContent = document.createTextNode("Hola!¿Qué tal?");
        try{
            mount.removeChild(renderer.domElement)
        }catch(e){
            console.log('no habia hijo')
        }
        mount.appendChild(renderer.domElement);
        // const elem = useRef(myDiv);
        // console.log(elem.current)
        // myDiv.appendChild(renderer.domElement);
        // console.log(myDiv,'yyyyyyy')
        // const elem = renderer.domElement;
        // console.log(iconosContainer, 'asttatstats', typeof renderer.domElement)
        // Component.mount.appendChild( renderer.domElement );
        // iconosContainer.append(renderer.domElement)
        
    }, [])
    
    return (
        // <Elem />
        <div ref={ref => (mount = ref)} />
        // <div ref ={elem} />
            
    );
};

export default Iconos;