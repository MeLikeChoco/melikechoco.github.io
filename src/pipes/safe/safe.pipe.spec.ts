import { TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {

  let pipe: SafePipe;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [SafePipe],
      imports: [BrowserModule]
    });

    pipe = TestBed.inject(SafePipe);

  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should produce a SafeResourceUrl', () => {

    const srcUrl = "steampunk.css";

    expect(pipe.transform(srcUrl)).toBeTruthy();

  });

});
