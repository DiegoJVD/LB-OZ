
function useUtils() {

    const libraToOnza = (libra) => {
        const onza = ((libra - Math.trunc(libra))*16).toFixed(0);
        return `${Math.trunc(libra)} lbs ${onza} oz`;
    }
    return { 
        libraToOnza,
    }
}

export default useUtils