import axios, { AxiosInstance } from 'axios';
import IBlockParty from '../../../common/interfaces/IBlockParty';
import IApiResponse from '../interfaces/IApiResponse';
import IApiResponseBlockParty from '../interfaces/IApiResponseBlockParty';

class SearchService {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: process.env.DATA_ENDPOINT,
      headers: { 'Accept-Encoding': 'application/json' }
    });
  }

  private convert(item: IApiResponseBlockParty): IBlockParty {
    return <IBlockParty>{
      id: item.id,
      district: item.bezirk,
      description: item.bezeichnung,
      address: item.strasse,
      postcode: item.plz,
      days: item.tage,
      time: item.zeiten,
      url: item.www,
      remarks: item.bemerkungen
    }
  }

  public async search(query?: string): Promise<IBlockParty[]> {
    try {
      return await this.http
        .get(`all.json?q=${query ?? ''}`)
        .then(({ data }) => (data as IApiResponse).index.map(item => this.convert(item)));
    } catch (error) {
      console.log('SearchService.search() error', error);
    }

    return [];
  }
}

export default new SearchService();
