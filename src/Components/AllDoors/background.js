import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { PerspectiveCamera, Scene, WebGLRenderer, Vector3, BufferGeometry, BufferAttribute, PointsMaterial, Points } from 'three';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);
    const starGeometry = new BufferGeometry();

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 2000;
      positions[i3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i3 + 2] = Math.random() * 2000 - 1000;
    }

    starGeometry.setAttribute('position', new BufferAttribute(positions, 3));

    const starMaterial = new PointsMaterial({ size: 2, color: 0xcda45e });
    const stars = new Points(starGeometry, starMaterial);
    scene.add(stars);

    let lastScrollY = 0;
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = scrollY;

      if (scrollDirection === 'down') {
        stars.position.y = -scrollY * 0.1; // Move stars down
      } else {
        stars.position.y = scrollY * -0.1; // Move stars up
      }
    };

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;

      const moveX = (mouseX - windowHalfX) * 0.1;
      const moveY = (mouseY - windowHalfY) * -0.1;

      stars.position.x = moveX;
      stars.position.y = moveY;
    };

    const handleMouseLeave = () => {
      stars.position.x = 0;
      stars.position.y = 0;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute',top: 0, left: 0, zIndex: -1 }}>
        <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />
      </div>
      {/* Render your other components/content here */}
    </div>
  );
};

export default BackgroundAnimation;
