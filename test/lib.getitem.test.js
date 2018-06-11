var remove = require('../lib/getitem.js').remove;
var assert = require('assert');

describe('getitem', function(){
  let path;
  let value;
  let hash;

  describe('remove', function(){
    describe('remove tag from missing', function(){
      beforeEach(function(){
        hash = {tags: {}};
        value = 'bar';
        path = 'tags.tag';
        remove(path, value, hash);
      });

      it('should not crash', function(){
        assert.deepEqual(hash, {tags: {}})
      });
    });

    describe('remove tag from empty', function(){
      beforeEach(function(){
        hash = {tags:{tag:[]}}
        value = 'bar';
        path = 'tags.tag';
        remove(path, value, hash);
      });

      it('should not crash', function(){
        assert.deepEqual(hash, {tags: {tag: []}})
      });
    });

    describe('remove non-existant tag from list of one', function(){
      beforeEach(function(){
        hash = {tags: {tag: ['foo']}}
        value = 'bar';
        path = 'tags.tag';
        remove(path, value, hash);
      });

      it('should still have one', function(){
        assert.deepEqual(hash, {tags: {tag: ['foo']}})
      });
    });
  });
});
