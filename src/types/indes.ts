export const httpMethods = [
    "POST",
    "PUT",
    "GET",
    "PATCH",
    "HEAD",
    "OPTIONS",
    "DELETE"
]

export const httpErrors = {
    badRequest: 400,
    forbidden: 403,
    notFound: 404,
    methodNotAllow: 405,
    unauthorized: 401
}

export type HttpMethodType = typeof httpMethods[number]

export type ResponseType = {
    code: number;
    data: unknown;
}