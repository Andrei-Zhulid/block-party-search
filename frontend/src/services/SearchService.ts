import axios, { AxiosInstance } from 'axios';
import IBlockParty from '../../../common/interfaces/IBlockParty';

class SearchService {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({ baseURL: process.env.VUE_APP_SEARCH_API });
  }

  public async search(query?: string): Promise<IBlockParty[]> {
    try {
      return await this.http
        .get(`?query=${query ?? ''}`)
        .then(({ data }) => data);
    } catch (error) {
      console.log('SearchService.search() error', error);
    }

    return [];
  }
}

export default new SearchService();
