import { NamedApiResource } from '@interfaces';

export interface ApiPaginatedResponse {
  count: number;
  next: string;
  previous: string;
  results: NamedApiResource[];
}
