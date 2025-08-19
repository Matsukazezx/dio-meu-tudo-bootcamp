import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";
import { URL } from "url";

export const serviceFilterEpisodes = async (
  podcastUrl: string | undefined
): Promise<PodcastTransferModel> => {
  try {
    // Se a URL vier indefinida, já retorna 400
    if (!podcastUrl) {
      return {
        statusCode: StatusCode.BadRequest,
        body: { message: "Parâmetro 'podcastName' não informado" },
      };
    }

    // Extrai query param com segurança
    const url = new URL(podcastUrl, "http://localhost");
    const podcastName = url.searchParams.get("podcastName") || "";

    // Busca no repositório
    const data = await repositoryPodcast(podcastName);

    return {
      statusCode: data.length ? StatusCode.OK : StatusCode.NoContent,
      body: data,
    };
  } catch (err) {
    return {
      statusCode: StatusCode.InternalServerError,
      body: { message: "Erro interno ao buscar podcasts", error: String(err) },
    };
  }
};
