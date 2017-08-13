var anim;
var animData = {
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    autoloadSegments: true,
    rendererSettings: {
        progressiveLoad:false
    },
    path: 'data.json'
};
anim = bodymovin.loadAnimation(animData);