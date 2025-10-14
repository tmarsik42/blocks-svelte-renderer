import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch(`/api/dummydata`);
    const dummydata = await res.json();

    return { dummydata };
};
