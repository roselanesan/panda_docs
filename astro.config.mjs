// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.pandadevelopment.net',
    base: '/panda_docs',
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
            {
                label: 'Tutorials',
                items: [
                    { label: 'Getting Started', slug: 'tutorials/getting-started' },
                    { label: 'General Settings', slug: 'tutorials/general-settings' },
                    { label: 'Apperance', slug: 'tutorials/apperance' },
                    { label: 'Security', slug: 'tutorials/security' },
                    { label: 'Monetization', slug: 'tutorials/monetization' },
                    { label: 'Key Management', slug: 'tutorials/key-management' },
                    { label: 'Virtual Storage', slug: 'tutorials/virtual-storage' },
                    { label: 'Service Ads', slug: 'tutorials/service-ads' },
                    { label: 'Contributors', slug: 'tutorials/contributors' },
                    { label: 'Discord Integration', slug: 'tutorials/discord-integration' },
                    { label: 'Referral Program', slug: 'tutorials/referral-program' },
                    { label: 'Panda AI', slug: 'tutorials/panda-ai' },
                    { label: 'Webhook & Analytics', slug: 'tutorials/webhook-analytics' },
                    { label: 'Account Settings', slug: 'tutorials/account-settings' }, 
                ],
            }
        ],
		}), react()],
});