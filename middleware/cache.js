const cache = {};
const TTL = 60 * 1000; // 1 minute

function clearCache() {
    Object.keys(cache).forEach(key => {
        delete cache[key];
    });
}

function cacheMiddleware(req, res, next) {
    const key = req.originalUrl;
    const cached = cache[key];

    if (cached) {
        const age = Date.now() - cached.createdAt;

        if (age < TTL) {
            res.set('X-Cache', 'HIT');
            return res.json(cached.data);
        }

        // Expired, remove it
        delete cache[key];
    }

    res.set('X-Cache', 'MISS');

    // Intercept res.json to store the response in cache
    const originalJson = res.json.bind(res);

    res.json = (data) => {
        cache[key] = {
            data: data,
            createdAt: Date.now()
        };

        return originalJson(data);
    };

    next();
}

module.exports = {
    cache,
    cacheMiddleware,
    clearCache
};