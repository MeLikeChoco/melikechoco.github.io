import { KeyValue, KeyValuePipe } from '@angular/common';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'keyvalueKeepOrder'
})
export class KeyValueKeepOrderPipe extends KeyValuePipe {

  private preseveOrder(_: KeyValue<any, any>, __: KeyValue<any, any>): number {
    return 0;
  }

  override transform<K, V>(input: ReadonlyMap<K, V>, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): KeyValue<K, V>[];
  override transform<K extends number, V>(input: Record<K, V>, compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number): KeyValue<string, V>[];
  override transform<K extends string, V>(input: Record<K, V> | ReadonlyMap<K, V>, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): KeyValue<K, V>[];
  override transform(input: null | undefined, compareFn?: (a: KeyValue<unknown, unknown>, b: KeyValue<unknown, unknown>) => number): null;
  override transform<K, V>(input: ReadonlyMap<K, V> | null | undefined, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): KeyValue<K, V>[] | null;
  override transform<K extends number, V>(input: Record<K, V> | null | undefined, compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number): KeyValue<string, V>[] | null;
  override transform<K extends string, V>(input: Record<K, V> | ReadonlyMap<K, V> | null | undefined, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): KeyValue<K, V>[] | null;
  override transform(input: any, compareFn?: any): any {
    return super.transform(input, compareFn ?? this.preseveOrder);
  }

}
