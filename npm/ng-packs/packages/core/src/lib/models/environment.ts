import { AuthConfig } from 'angular-oauth2-oidc';
import { ABP } from './common';

export interface Environment {
  apis: Apis;
  application: ApplicationInfo;
  hmr?: boolean;
  test?: boolean;
  localization?: { defaultResourceName?: string };
  oAuthConfig?: AuthConfig & { impersonation?: Impersonation };
  production: boolean;
  remoteEnv?: RemoteEnv;
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}
export interface ApplicationInfo {
  name: string;
  baseUrl?: string;
  logoUrl?: string;
}
export interface HasAdditional {
  [key: string]: string;
}
export interface ApiConfig extends Partial<HasAdditional> {
  url: string;
  rootNamespace?: string;
}

export interface Apis {
  [key: string]: Partial<ApiConfig>;
  default: ApiConfig;
}

export type customMergeFn = (localEnv: Partial<Environment>, remoteEnv: any) => Environment;

export interface RemoteEnv {
  url: string;
  mergeStrategy: 'deepmerge' | 'overwrite' | customMergeFn;
  method?: string;
  headers?: ABP.Dictionary<string>;
}

export interface Impersonation {
  tenantImpersonation?: boolean;
  userImpersonation?: boolean;
}
