({
    baseUrl: "js/lib",
    paths: {
        app: '../app',
        jquery: "jquery-1.8.3.min",
        view: '../app/view',
    },
    // name: "../app/main",
    // out: "main-built.js",
    dir: "build",
    inlineText: true,
    stubModules: ['text'],
    skipDirOptimize: true,
    removeCombined: true,
    modules: [
        {
            name: 'app/util/image_loader'
        },
        {
            name: 'app/main',
            exclude: ['app/util/image_loader']
        }
    ]
    
})
