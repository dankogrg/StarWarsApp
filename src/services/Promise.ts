export const PromiseAll = async (
    promises: Array<Promise<any>>,
): Promise<any[]> => {
    return await Promise.all(promises);
};
