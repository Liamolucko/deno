const wasm = await WebAssembly.instantiateStreaming(
  await fetch("http://localhost:4545/add.wasm"),
);

const result = wasm.instance.exports.add(1, 3);
console.log("1 + 3 =", result);
if (result != 4) {
  throw Error("bad");
}
