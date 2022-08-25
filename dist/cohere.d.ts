import * as models from "./models";
interface CohereService {
    init(key: string, version?: string): void;
    generate(config: models.generateRequest): Promise<models.cohereResponse<models.generateResponse>>;
    classify(config: models.classifyRequest): Promise<models.cohereResponse<models.classifyResponse>>;
    tokenize(config: models.tokenizeRequest): Promise<models.cohereResponse<models.tokenizeResponse>>;
    embed(config: models.embedRequest): Promise<models.cohereResponse<models.embedResponse>>;
    extract(config: models.extractRequest): Promise<models.cohereResponse<models.extractResponse>>;
}
declare class Cohere implements CohereService {
    init(key: string, version?: string): void;
    private makeRequest;
    /** Generates realistic text conditioned on a given input.
     * See: https://docs.cohere.ai/generate-reference
     */
    generate(config: models.generateRequest): Promise<models.cohereResponse<models.generateResponse>>;
    /** Returns a list of tokens for the specified text.
     * See: https://docs.cohere.ai/tokenize-reference
     */
    tokenize({ text, }: models.tokenizeRequest): Promise<models.cohereResponse<models.tokenizeResponse>>;
    /** Returns text embeddings. An embedding is a list of floating point numbers that captures semantic
     * information about the text that it represents.
     * See: https://docs.cohere.ai/embed-reference
     */
    embed(config: models.embedRequest): Promise<models.cohereResponse<models.embedResponse>>;
    /**
     * Classifies text as one of the given labels. Returns a confidence score for each label.
     * See: https://docs.cohere.ai/classify-reference
     */
    classify(config: models.classifyRequest): Promise<models.cohereResponse<models.classifyResponse>>;
    /**
     * (Beta) Extract entities from text, by providing examples
     */
    extract(config: models.extractRequest): Promise<models.cohereResponse<models.extractResponse>>;
}
declare const cohere: Cohere;
export = cohere;