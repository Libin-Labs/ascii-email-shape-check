import * as api from '@lp-labs/ascii-email-shape-check';
import { hasEmailShape } from '@lp-labs/ascii-email-shape-check';
console.log(hasEmailShape('person@example.com'));
// @ts-expect-error invalid argument must be rejected by declarations
api.hasEmailShape(2);
