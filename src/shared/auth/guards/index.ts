export * from './gql-auth.guard';
export * from './jwt-auth.guard';

export interface AuthUser {
  email: string;
  sub: string;
  expiresIn: number;
  iat: number;
}
