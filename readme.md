# Protobufs Tutorial
### I have tried `protobufs` - based on my understanding they are replacement of `JSON / XML` serialization techniques. They are lightweight compared to these counterparts and follow a schema. The schema is language agnostic and can be used to create schema file in our favourite language using `protoc` binary.

## Installation of protoc
### I have installed `protoc` on my linux machine using the following command

>`sudo apt install protobuf-compiler`

## Running this project
### Run the command `npm install` to install the dependencies
### To generate employee protobuf file using protoc run the following command

>`protoc --js_out=import_style=commonjs,binary:. employees.proto`

### To serialize the objects and store the same in a file, run `npm run serialize`
### To deserialize the objects from file and print to the console, run `npm run deserialize`

## Next steps
### We can generate the protobuf for different languages and try to serialize & deserialize the objects. I will try the same for C++, Java & Go next.