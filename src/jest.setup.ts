import '@testing-library/jest-dom';
import 'jest-extended';
import { configure } from '@testing-library/react';
import { testIdAttribute } from './components/test-selector';

configure({ testIdAttribute });
