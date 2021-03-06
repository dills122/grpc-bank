# gRPC Bank

[![CodeFactor](https://www.codefactor.io/repository/github/dills122/grpc-bank/badge)](https://www.codefactor.io/repository/github/dills122/grpc-bank)

This app gives a basic demo and working demo for node.js gRPC.

## Expected Functionality

* Clients
  * `Get` - get a client's record
  * `Update` - update a client's record
  * `Create` - create a client
  * `archive` - delete a client
* Accounts
  * `Get` - get an account
  * `Create` - create an account
* Transactions
  * `Create` - create a transaction


### Note

The server might fail on first build due to the proto imports, if so run the command below
```bash
mkdir js # if you don't have the dir yet, it is for generated code by gRPC
protoc --proto_path=./src/protos src/protos/transaction.proto --js_out=js
```

Checkout my other repo with some tooling for gRPC [Here](https://github.com/dills122/grpc-playground)
