import { AddService } from './add.service';
describe('AddService', () => {
  let service: AddService;

  beforeEach(() => {
    this.service = new AddService();
  });

  it('should initialize value to 0', () => {
    expect(this.service.value()).toEqual(0);
  });

  it('should return 1 when add 1', () => {
    this.service.add(1);
    expect(this.service.value()).toEqual(1);
  });

  it('should return 2 when add 1 twice', () => {
    this.service.add(1);
    this.service.add(1);
    expect(this.service.value()).toEqual(2);
  });

  it('should return 7 when add 1 twice and add 5', () => {
    this.service.add(1);
    this.service.add(1);
    this.service.add(5);
    expect(this.service.value()).toEqual(7);
  });
  
});