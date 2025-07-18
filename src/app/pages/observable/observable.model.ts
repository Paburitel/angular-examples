export interface Observer {
  next: (value: any) => unknown,
  complete: (value: any) => unknown,
  error: (value: any) => unknown
}

export interface UnSubscriber {
  unsubscribe: () => unknown
}

export type Producer = (observer: Observer) => UnSubscriber;

export class MyObservable {
  constructor(public prod: Producer) {
  }

  subscribe(ob: Observer): UnSubscriber {
    return this.prod(ob);
  }
}

export class MyObservableHot {
  private observable: MyObservable;
  private unSubscriber: UnSubscriber;
  private subscribes: Observer[] = [];

  constructor(public prod: Producer) {
    this.observable = new MyObservable(prod);
    this.unSubscriber = this.observable.subscribe({
      next: (value) => {
        console.log('next', value);
        this.next(value);
      },
      complete: (value) => {
        console.log('complete', value)
      },
      error: (value) => {
        console.log('error', value);
        this.error(value);
      },
    })
  }

  subscribe(ob: Observer): UnSubscriber {
    const getUnSubscriber = (o: Observer) => () => {
      this.unSubscribe(o);
    }
    this.subscribes.push(ob);
    return {unsubscribe: getUnSubscriber(ob)}
  }

  private next(value: any): void {
    this.subscribes.forEach(({next}) => {
      next(value);
    });
  }

  private error(value: any): void {
    this.subscribes.forEach(({error}) => {
      error(value);
    });
    this.unSubscriber.unsubscribe();
    this.subscribes = [];
  }

  private unSubscribe(ob: Observer): void {
    this.subscribes = this.subscribes.filter((o) => o !== ob);
// if (!this.subscribes.length) {
// this.unSubscriber.unsubscribe();
// }
  }
}

