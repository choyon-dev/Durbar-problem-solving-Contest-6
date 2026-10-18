
function toQueryString(params) {
  let result = [];
  let entries = Object.entries(params);

  for (let i = 0; i < entries.length; i++) {
    let key = entries[i][0];
    let value = entries[i][1];

    let pair = encodeURIComponent(key) + "=" + encodeURIComponent(value);

    result.push(pair);
  }

  return result.join("&");
}

// let test = toQueryString({ search: "hello world", page: 1 });

let test = toQueryString({ sort: "asc", limit: 10 });

console.log(test);