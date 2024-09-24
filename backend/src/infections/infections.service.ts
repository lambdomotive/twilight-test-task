import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

import { API_KEY, BASE_URL, INFECTIONS_URL } from 'src/utils/constants';
import { PayloadDTO } from './dto/payload.dto';
import { TwilightCyberAPIResultDTO } from './dto/twilightCyberAPIResult.dto';

@Injectable()
export class InfectionsService {
  constructor(private readonly httpService: HttpService) {}

  async getInfections(payload: PayloadDTO) {
    const criterias: PayloadDTO = { domains: payload.domains };

    if (payload.infection_date_from) {
      criterias.infection_date_from = payload.infection_date_from;
    }
    if (payload.infection_date_to) {
      criterias.infection_date_to = payload.infection_date_to;
    }
    if (payload.next) {
      criterias.next = payload.next;
    }
    if (payload.size) {
      criterias.size = payload.size;
    }

    try {
      const response = this.httpService.post<TwilightCyberAPIResultDTO>(
        `${BASE_URL}${INFECTIONS_URL}`,
        JSON.stringify(criterias),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        },
      );
      const data = response.pipe(map((resp) => resp.data));
      return data;
    } catch (err) {
      return err;
      // console.log('error:', err);
    }
  }
}
