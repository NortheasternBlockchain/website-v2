module.exports = {
    siteMetadata: {
        siteUrl: `https://www.northeasternblockchain.xyz`,
    },
    pathPrefix: '/',
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Northeastern Blockchain website',
                short_name: 'Northeastern Blockchain',
                start_url: '/',
                display: 'standalone',
                icon: 'src/images/logo.png',
            },
        },
    ],
};
