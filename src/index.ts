declare var environment: any;

export function Debug() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = function(...args: any) {
      if (environment.production) {
        return;
      }
      method.apply(this, args);
    };
  };
}
