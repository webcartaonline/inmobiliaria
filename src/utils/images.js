const imageModules = import.meta.glob('../assets/img/flats/*.{png,jpg,jpeg,webp,svg}', {
    eager: true,
    import: 'default'
});

const images = Object.fromEntries(
    Object.entries(imageModules).map(([path, module]) => [path.split('/').pop(), module])
);

export default images;

