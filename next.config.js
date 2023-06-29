const { withFaust } = require('@faustjs/next');



const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['bplgtest.wpengine.com', 'api.producthunt.com'],
    },
};

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust(nextConfig);
