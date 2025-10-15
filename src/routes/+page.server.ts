export const load = async ({ fetch }) => {
    const res = await fetch(`/api/dummydata`);
    const dummydata = await res.json();

    return { dummydata };
};
