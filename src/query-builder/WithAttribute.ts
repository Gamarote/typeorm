import { Alias } from "./Alias";

export class WithAttribute {
  /**
   * The query
   */
  query: string;

  /**
   * Flag identifying if the query is recursive
   */
  isRecursive: boolean;

  /**
   * Alias of the query.
   */
  alias: Alias;
}