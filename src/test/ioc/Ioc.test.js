import iocInstance from '../../main/ioc/Ioc';
import { Ioc } from '../../main/ioc/Ioc';

test('Ioc instance', () => {
  expect(iocInstance instanceof Ioc).toBe(true);
});

test('validate method register()', () => {
  expect(typeof iocInstance.register).toBe('function');
});
