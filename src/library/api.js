export const getAllProducts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
        next: { revalidate: 0 }
    });
    return res.json();
};

export const getSingleProduct = async (id) => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
        next: { revalidate: 0 }
    });
    return res.json();
};
