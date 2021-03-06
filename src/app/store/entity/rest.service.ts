import { Restangular } from 'ng2-restangular';
import { Observable } from 'rxjs/Observable';

import { BaseEntity } from './entity.model';

export abstract class RESTService<T extends BaseEntity, L extends Array<T>> {

  protected constructor(private restangularService: Restangular) { }

  get(id: string): Observable<T> {
    return this.restangularService.one(id).get();
  }

  list(): Observable<L> { return this.restangularService.getList(); }

  create(obj: T): Observable<T> { return this.restangularService.post(obj); }

  update(obj: T): Observable<T> {
    return this.restangularService.one(obj.id).put(obj);
  }

  delete(obj: T) { return this.restangularService.one(obj.id).delete(); }

}
