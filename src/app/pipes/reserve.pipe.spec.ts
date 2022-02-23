import { ReservePipe } from './reserve.pipe';

fdescribe('ReservePipe', () => {
  it('create an instance', () => {
    const pipe = new ReservePipe();
    expect(pipe).toBeTruthy();
  });

  it('should tranform "roma" to "amor"', () => {
    const pipe = new ReservePipe();
    const rta = pipe.transform("roma");
    expect(rta).toEqual("amor");
  })

  it('should tranform "123" to "321"', () => {
    const pipe = new ReservePipe();
    const rta = pipe.transform("123");
    expect(rta).toEqual("321");
  })
});
