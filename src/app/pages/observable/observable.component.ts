import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MyObservable, MyObservableHot, Observer, UnSubscriber} from './observable.model';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableComponent {
}

/**
 * +++++++++++++++++ COLD +++++++++++++++++
 * */

const observable = new MyObservable((observer: Observer) => {
  const interval = setInterval(() => {
    const data = +Math.random().toFixed(3) * 1000;
    observer.next(data);
  }, 3000);
  setTimeout(() => {
    observer.error('Error');
  }, 15 * 1000)

  return {
    unsubscribe: () => {
      clearInterval(interval);
    }
  }
});

const sub1 = observable.subscribe({
  next: (data) => {
    console.log('sub1 - ', data)
  },
  error: (err) => {
    console.log('sub1 - Error', err);
    sub1.unsubscribe();
  },
  complete: () => {
  }
});

let sub2: UnSubscriber;
setTimeout(() => {
  sub2 = observable.subscribe({
    next: (data) => {
      console.log('sub2 - ', data)
    },
    error: (err) => {
      console.log('sub2 - Error', err);
// sub2.unsubscribe();
    },
    complete: () => {
    }
  });
}, 5000);


/**
 * +++++++++++++++++ HOT +++++++++++++++++
 * */

const observableHot = new MyObservableHot((observer: Observer) => {
  const interval = setInterval(() => {
    const data = +Math.random().toFixed(3) * 1000;
    observer.next(data);
  }, 3000);
  setTimeout(() => {
    observer.error('Error');
  }, 15 * 1000)

  return {
    unsubscribe: () => {
      clearInterval(interval);
    }
  }
});

const sub_hot_1 = observableHot.subscribe({
  next: (data) => {
    console.log('sub_hot_2 - ', data)
  },
  error: (err) => {
    console.log('sub_hot_2 - Error', err);
    sub_hot_1.unsubscribe();
  },
  complete: () => {
  }
});

let sub_hot_2: UnSubscriber;
setTimeout(() => {
  sub_hot_2 = observableHot.subscribe({
    next: (data) => {
      console.log('sub_hot_2 - ', data)
    },
    error: (err) => {
      console.log('sub_hot_2 - Error', err);
// sub2.unsubscribe();
    },
    complete: () => {
    }
  });
}, 5000)
