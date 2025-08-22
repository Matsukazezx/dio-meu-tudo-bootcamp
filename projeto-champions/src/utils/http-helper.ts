import type { HttpResponse } from "../models/http-response-model.js";

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};


export const created = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: { message: "Criado com sucesso" }
  };
};

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export const badRequest = async (message = "Bad request"): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: { message }
  };
};

