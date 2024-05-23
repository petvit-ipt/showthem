export const presets = [
    [
        '@babel/preset-env',
        {
            targets: {
                browsers: ['last 2 versions', 'not dead']
            },
            modules: false // Ensure that Babel doesn't transform ES modules
        }
    ]
];
