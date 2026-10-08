(function() {
    // === INITIALIZATION ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
        antialias: true,
        alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x050505, 1);
    camera.position.set(0, 0, 25);

    // === CUSTOM CURSOR FOLLOW ===
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorBlur = document.querySelector('.cursor-blur');

    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = `${mouseX - 4}px`;
        cursorDot.style.top = `${mouseY - 4}px`;
        cursorBlur.style.left = `${mouseX - 20}px`;
        cursorBlur.style.top = `${mouseY - 20}px`;
    });

    // === LIGHTING ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00d2ff, 1.5, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7c3aed, 1, 100);
    pointLight2.position.set(-20, -10, 10);
    scene.add(pointLight2);

    // === 3D CYBER CITY - Modular Skyscrapers ===
    function createSkyscraper(x, z, width, height) {
        const geo = new THREE.BoxGeometry(width, height, width);
        const mat = new THREE.MeshStandardMaterial({ 
            color: 0x0066ff,
            emissive: 0x0044aa,
            emissiveIntensity: 0.3,
            transparent: true,
            opacity: 0.9
        });
        const tower = new THREE.Mesh(geo, mat);
        tower.position.set(x, height / 2, z);
        tower.receiveShadow = true;
        scene.add(tower);

        // Add windows
        const winGeo = new THREE.BoxGeometry(width * 0.9, height * 0.1, width * 0.9);
        const winMat = new THREE.MeshStandardMaterial({ 
            color: 0x00d2ff,
            emissive: 0x00aaff,
            emissiveIntensity: 0.7
        });
        const windows = new THREE.Mesh(winGeo, winMat);
        windows.position.set(x, height * 0.7, z);
        scene.add(windows);

        return tower;
    }

    const towers = [];
    for (let i = -3; i <= 3; i++) {
        for (let j = -3; j <= 3; j++) {
            if (Math.random() > 0.6) {
                const height = 5 + Math.random() * 20;
                towers.push(createSkyscraper(i * 15, j * 15, 2 + Math.random() * 3, height));
            }
        }
    }

    // === FLOATING PARTICLE ORBS - Skill Representations ===
    const particleOrbs = [];
    const orbPositions = [
        { x: -30, y: 10, z: -10, label: 'IoT' },
        { x: -10, y: 5, z: -25, label: 'Backend' },
        { x: 15, y: 15, z: -15, label: 'Web' },
        { x: 25, y: -5, z: -5, label: 'Database' }
    ];

    orbPositions.forEach((pos, idx) => {
        const particlesGeo = new THREE.BufferGeometry();
        const count = 150;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i += 3) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 2 + Math.random() * 3;
            positions[i] = Math.cos(angle) * radius;
            positions[i + 1] = Math.sin(angle) * radius;
            positions[i + 2] = (Math.random() - 0.5) * radius;
        }
        particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particlesMat = new THREE.PointsMaterial({
            color: idx % 2 === 0 ? 0x00d2ff : 0x7c3aed,
            size: 0.08,
            transparent: true,
            opacity: 0.8
        });
        const particleCloud = new THREE.Points(particlesGeo, particlesMat);
        particleCloud.position.set(pos.x, pos.y, pos.z);
        particleCloud.userData = { label: pos.label, speed: 0.01 + Math.random() * 0.02 };
        scene.add(particleCloud);
        particleOrbs.push(particleCloud);
    });

    // === CYBER GRID FLOOR ===
    const gridHelper = new THREE.GridHelper(200, 80, 0x00d2ff, 0x00aaff);
    gridHelper.position.y = -15;
    scene.add(gridHelper);

    // === TORUS KNOT - Central Artifact ===
    const knotGeo = new THREE.TorusKnotGeometry(8, 3, 256, 16);
    const knotMat = new THREE.MeshStandardMaterial({
        color: 0x00d2ff,
        emissive: 0x00aaff,
        emissiveIntensity: 0.7,
        wireframe: true
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    knot.position.set(0, 0, 0);
    scene.add(knot);

    // === DATA STREAM PARTICLES ===
    const streamCount = 2000;
    const streamGeo = new THREE.BufferGeometry();
    const streamPos = new Float32Array(streamCount * 3);
    for (let i = 0; i < streamCount * 3; i += 3) {
        streamPos[i] = (Math.random() - 0.5) * 200;
        streamPos[i + 1] = (Math.random() - 0.5) * 200;
        streamPos[i + 2] = (Math.random() - 0.5) * 200;
    }
    streamGeo.setAttribute('position', new THREE.BufferAttribute(streamPos, 3));
    const streamMat = new THREE.PointsMaterial({
        color: 0x00ffff,
        size: 0.02,
        transparent: true,
        opacity: 0.5
    });
    const dataStream = new THREE.Points(streamGeo, streamMat);
    scene.add(dataStream);

    // === ANIMATION LOOP ===
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.01;

        // Camera movement (subtle rotation + follow cursor)
        camera.position.x += (mouseX * 0.0001 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 0.0001 + 10 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        // Rotate Knot
        knot.rotation.x = time * 0.2;
        knot.rotation.y = time * 0.3;

        // Floating towers
        towers.forEach((t, i) => {
            t.position.y += Math.sin(time + i) * 0.02;
        });

        // Particle Orbs
        particleOrbs.forEach((orb, i) => {
            orb.rotation.x += orb.userData.speed;
            orb.rotation.y += orb.userData.speed * 0.7;
            orb.position.y += Math.sin(time * 2 + i) * 0.03;
        });

        // Data stream flow
        const positions = dataStream.geometry.attributes.position.array;
        for (let i = 0; i < streamCount * 3; i += 3) {
            positions[i + 1] += Math.sin(time + positions[i] * 0.01) * 0.03;
            if (positions[i + 1] > 100) positions[i + 1] = -100;
        }
        dataStream.geometry.attributes.position.needsUpdate = true;

        // Dynamic lights
        pointLight1.position.set(
            Math.sin(time) * 15,
            Math.cos(time * 0.7) * 10,
            Math.cos(time) * 15
        );

        renderer.render(scene, camera);
    }

    // === HANDLE RESIZE ===
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
})();

// ============ PROJECT FILTERS ============
(function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-category]');

    // Filter buttons click handler
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
})();
