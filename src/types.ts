import type { GraphQLSchema } from 'graphql';

export type EnumSerializeFn = (value: any) => string | null;
export type EnumParserFn = (value: any) => string | null;
export type EnumValueMap = { [ClientValue: string]: string };

export enum EnumValueFormat {
  CamelCase,
  PascalCase,
  SnakeCase,
  ScreamingSnakeCase,
  KebabCase,
}

export interface EnumValueFormats {
  client: EnumValueFormat;
  clientEnums?: Record<string, EnumValueFormat>;
  server: EnumValueFormat;
  serverEnums?: Record<string, EnumValueFormat>;
}

export interface EnumSerializerArgs {
  schema: GraphQLSchema;
  /* serialization options */
  serializer?: Record<string, EnumSerializeFn>;
  /* shorthand options */
  enumValueMap?: Record<string, EnumValueMap>;
  valueFormat?: EnumValueFormats;
}

export interface EnumParserArgs {
  schema: GraphQLSchema;
  /* parsing options */
  parser?: Record<string, EnumParserFn>;
  /* shorthand options */
  enumValueMap?: Record<string, EnumValueMap>;
  valueFormat?: EnumValueFormats;
}

export interface EnumApolloLinkArgs {
  schema: GraphQLSchema;
  /* serialization options */
  serializer?: Record<string, EnumSerializeFn>;
  /* parsing options */
  parser?: Record<string, EnumParserFn>;
  /* shorthand options */
  enumValueMap?: Record<string, EnumValueMap>;
  valueFormat?: EnumValueFormats;
}
