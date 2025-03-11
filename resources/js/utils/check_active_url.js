const checkActiveUrl = (url, path) => {
    return url.includes(path) || path.includes(url) || path.includes(url.split("?")[0])
}

export { checkActiveUrl };
