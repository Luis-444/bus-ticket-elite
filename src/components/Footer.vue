<template>
    <div class="space-x-2">
        <a target="_blanck" class="text-blue-500" v-for="net in social_nets" :key="net" :href="net.link">{{ net.name }}</a>
    </div>
</template>
<script setup>
    const social_nets = [
        {
            name: 'facebook',
            link: 'https://www.facebook.com/',
        },
        {
            name: 'twitter',
            link: 'https://twitter.com/'
        },
        {
            name: 'instagram',
            link: 'https://www.instagram.com/'
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/'
        },
        {
            name: 'youtube',
            link: 'https://www.youtube.com/'
        }
    ]
</script>