# Angular DEBUG Decorator

## Introduction

You can apply @Debug() decorator on your Angular application methods to mark them to be executed in debug mode only.

When you build application for production using `ng build --prod` command, all methods marked with @Debug() decorator will not be exeucted in production mode.

So no more `if(environment.production){}` code block in your source code.