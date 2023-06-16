import convict from 'convict';

let convictConfigurationProvider: convict.Config<any> | undefined;

export function initializeAndValidate(schema: unknown) {
  convictConfigurationProvider = convict(schema);
  convictConfigurationProvider.validate();
}

export function reset() {
  convictConfigurationProvider = undefined;
}

export function getValue(keyName: string): string {
  if (convictConfigurationProvider === undefined) {
    throw new Error('Configuration has not been initialized yet');
  }

  // TODO: we need to change any to generic and accept the schema type from the consumer
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return convictConfigurationProvider.get(keyName) as string;
}