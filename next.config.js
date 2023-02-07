const { withFaust } = require('@faustjs/next');



const nextConfig = {
    images: {
        domains: ['bplgtest.wpengine.com'],
    },
};

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust(nextConfig);
