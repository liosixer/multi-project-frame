module.exports = {
    presets: [
        [
            '@babel/preset-react',
            {
                useBuiltIns: 'usage',
                corejs: 3
            },
        ],
        '@babel/preset-typescript'
    ]
}
