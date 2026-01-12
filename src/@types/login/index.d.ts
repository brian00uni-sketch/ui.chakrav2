declare module 'auth-types' {

    export interface LoginType { 
        username: string,
        password: string
    }

    export interface TokenType { 
        access_token: string,
        token_type: string
    }
}