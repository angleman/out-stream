# out-stream

stdout or -o command line file write stream (stream2 for node 0.8.x) 

## Use Case

Assist with pipable shell. Also see [in-stream](https://github.com/angleman/in-stream)

## Install

```sh
npm install out-stream
```

## Usage

**myapp**:

```js
#!/usr/local/bin/node
outStream = require('out-stream')
process.stdin.pipe(outStream)
```

```sh
ls | ./myapp
// myapp
// sample.txt

ls | ./myapp -o sample.txt
```

**sample.txt** after first run

```
myapp
```

**sample.txt** after second run

```
myapp
sample.txt
```

Remember to ```chmod a+x myapp``` to make it executable

## License

### MIT
