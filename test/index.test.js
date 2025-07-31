const assert = require('node:assert');
const test = require('node:test');

const bugVersions = require('..');
const pkg = require('../package.json');

test('should get bug-versions', () => {
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
      assert(item.version || item.dependencies);
      if (item.version) {
        assert(typeof item.version === 'string');
      } else if (item.dependencies) {
        assert(typeof item.dependencies === 'object');
        assert(Object.keys(item.dependencies).length > 0);
      }

      assert(item.reason)
      assert(typeof item.reason === 'string');
    }
  }

  console.log('Total: %d bug pkgs and %d bug versions', pkgCount, versionCount);
  assert(pkgCount > 0);
  assert(versionCount > 0);
});

test('should get "config" field from package.json', () => {
  assert(pkg.config['unsafe-node-versions']);
  // console.log('unsafe-node-versions: %s', JSON.stringify(pkg.config['unsafe-node-versions'], null, 2));
  assert(pkg.config['unsafe-alinode-versions']);
  // console.log('unsafe-alinode-versions: %s', JSON.stringify(pkg.config['unsafe-alinode-versions'], null, 2));
});
