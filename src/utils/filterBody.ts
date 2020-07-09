

/**
 * Filtered the request body for be sure
 * nothing wrong can be pass.
 *
 * @export
 * @param {Object} body - Request body
 * @param {any[]} whitelist - Element who want to whitelist
 * @returns {Object} body - Request body filtered
 */
export function filteredBody(body, whitelist, prefix = '') {
  const items = {};

  Object.keys(body).forEach(key => {
    const repairKey = prefix ? key.replace(prefix, '') : key;
    if (whitelist.indexOf(key) >= 0) {
      items[repairKey] = body[key];
    }
  });
  return items;
}
