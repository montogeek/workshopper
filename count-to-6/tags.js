console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(str, ...arg) {
  let escaped = str[0]
  for (var i = 0; i < arg.length; i++) {
    escaped += replace(arg[i]) + str[i + 1]
  }
  return escaped;
}

function replace(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
}
