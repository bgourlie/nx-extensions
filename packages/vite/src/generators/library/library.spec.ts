import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './library';
import { Schema } from './schema';
import { Linter } from '@nrwl/linter';

describe('vite generator', () => {
  let appTree: Tree;
  const options = {
    name: 'test',
    linter: Linter.EsLint,
    skipFormat: false,
    unitTestRunner: 'jest',
    skipTsConfig: false,
  } as Schema;

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });
});