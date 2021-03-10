import { add } from './add';
import { sub } from './sub';

export function addsub(a, b, c) {
    return sub(add(a, b), c);
}
