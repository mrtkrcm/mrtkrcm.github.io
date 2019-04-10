module.exports = {
  apps: [
    {
      name: 'MCHCMS',
      script: 'src/server/index.js',
      env: {
        NODE_ENV: 'production',
        autorestart: false, // let docker handles restarts
        vizion: false
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
