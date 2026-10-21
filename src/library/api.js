export const getAllProducts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return res.json();
};

