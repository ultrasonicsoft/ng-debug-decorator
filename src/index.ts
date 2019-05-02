
let environment: any;
declare var process: any;

export function setupEnvironment(env: any) {
  environment = env;
}

export function Debug() {
  let flag: boolean;

  if (environment) {
    flag = environment.production;
  } else if (process && process!.env!.NODE_ENV === "production") {
    flag = true;
  }
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = function (...args: any) {
      if (flag) {
        return;
      }
      method.apply(this, args);
    };
  };
}
