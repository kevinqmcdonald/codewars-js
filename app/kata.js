// app/kata.js

exports.domainName = (url) => {
  let regex = new RegExp("https?:\\/\\/(w{3})*|w{3}\\.");
  let matches = url.match(regex);
  while(matches) {
    url = url.substr(regex.lastIndex + matches[0].length);
    matches = url.match(regex);
  }

  regex = new RegExp("[a-zA-Z0-9\\-]+");
  return url.match(regex)[0];
}
