'use strict';

const assert = require('assert');
const bugVersions = require('.');

let pkgCount = 0;
let versionCount = 0;
for (const name in bugVersions) {
  pkgCount++;
  const versions = bugVersions[name];
  assert(versions);
  for (const version in versions) {
    versionCount++;
    const item = versions[version];
    assert(item);
    assert(item.version);
    assert(typeof item.version === 'string');
    assert(item.reason)
    assert(typeof item.reason === 'string');
  }
}

console.log('Total: %d bug pkgs and %d bug versions', pkgCount, versionCount);
