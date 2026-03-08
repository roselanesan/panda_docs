// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Panda Key System',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/roselanesan/panda_docs' }],
        sidebar: [
            {
                label: 'VSS',
                items: [
                    { label: 'VSS Overview', slug: 'vss/vss-overview' },
                ],
            },
            {
                label: 'Client Libraries',
                items: [
                    { label: 'V4-HyperGuard', slug: 'client-libraries/v4-hyperguard' },
                    { label: 'V3 Library', slug: 'client-libraries/v3-library' },
                    { label: 'Legacy v2.5', slug: 'client-libraries/legacy-v2-5' },
                ],
            },
            {
                label: 'Web API',
                items: [
                    { label: 'Overview', slug: 'web-api/overview' },
                    { label: 'Dashboard API', slug: 'web-api/dashboard-api' },
                ],
            },
        ],
		}), react()],
});