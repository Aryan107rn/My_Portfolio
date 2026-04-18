import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three-stdlib";
import { RenderPass } from "three-stdlib";
import { UnrealBloomPass } from "three-stdlib";

export default function StellarFlux() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const STAR_COUNT = 10000;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(STAR_COUNT * 3);
    const scales = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4000;
      positions[i * 3 + 2] = -Math.random() * 4000;
      scales[i] = Math.random();
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

    let speed = 6;
    let targetSpeed = 6;

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: 0 },
      },
      vertexShader: `
        attribute float aScale;
        varying float vScale;
        varying float vDepth;

        void main() {
          vScale = aScale;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDepth = -mvPosition.z;
          float size = (1.0 + aScale * 2.0) * (400.0 / vDepth);
          size *= 1.0 + smoothstep(0.0, 1.0, vDepth / 2000.0);
          gl_PointSize = size;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vScale;
        varying float vDepth;

        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          float glow = 0.08 / dist;
          glow *= smoothstep(0.5, 0.0, dist);
          vec3 colorA = vec3(0.6, 0.7, 1.0);
          vec3 colorB = vec3(0.8, 0.5, 1.0);
          float mixVal = smoothstep(0.0, 3000.0, vDepth);
          vec3 color = mix(colorA, colorB, mixVal);
          float flicker = 0.8 + vScale * 0.6;
          gl_FragColor = vec4(color * glow * flicker, 1.0);
        }
      `,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.8,
      1.4,
      0.03
    );
    composer.addPass(bloom);

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };

    const onScroll = () => {
      targetSpeed = 25;
      setTimeout(() => (targetSpeed = 6), 200);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("wheel", onScroll);

    let animId;
    function animate(time) {
      animId = requestAnimationFrame(animate);

      speed += (targetSpeed - speed) * 0.05;

      material.uniforms.uTime.value = time;
      material.uniforms.uSpeed.value = speed;

      const positions = stars.geometry.attributes.position.array;

      for (let i = 0; i < STAR_COUNT; i++) {
        let z = positions[i * 3 + 2];
        z += speed + (4000 + z) * 0.002;
        if (z > 5) {
          positions[i * 3] = (Math.random() - 0.5) * 4000;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 4000;
          z = -4000;
        }
        positions[i * 3 + 2] = z;
      }

      stars.geometry.attributes.position.needsUpdate = true;

      camera.position.x += (mouseX - camera.position.x) * 0.025;
      camera.position.y += (-mouseY - camera.position.y) * 0.025;
      camera.lookAt(scene.position);

      composer.render();
    }

    animate();

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("resize", handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}