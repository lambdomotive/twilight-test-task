import { InfectionDto } from './infection.dto';

export class TwilightCyberAPIResultDTO {
  search_id: string;
  search_consumed_credits: number;
  credits_left: number;
  next: string;
  total_items_count: number;
  items_count: number;
  data: InfectionDto[];
}
