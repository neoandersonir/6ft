import { writable } from 'svelte/store';

export const Links = writable(
    {
        count: 1,
        data: []
    }
);
