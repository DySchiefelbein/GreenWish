const mapResultsForFancybox = (response) => {
    const result = response.data.map(item => ({
        id: item.id,
        src: item.url,
        caption: item.title,
        thumb: item.thumbnailUrl
    }));
    return result;
}

export default mapResultsForFancybox;