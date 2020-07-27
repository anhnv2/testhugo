CMS.registerPreviewStyle('/admin/style.css');

CMS.registerEditorComponent({
  id: 'youtube',
  label: 'Youtube',
  fields: [{ name: 'id', label: 'Youtube Video ID', widget: 'string' }],
  pattern: /^{{<\s*youtube\s+\"?(\S+)\"?\s*>}}$/,
  fromBlock: function(match) {
    return {
      id: match[1],
    };
  },
  toBlock: function(obj) {
    return '{{< youtube "' + obj.id + '" >}}';
  },
  toPreview: function(obj) {
    return (
      '<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="//www.youtube.com/embed/' +
      obj.id +
      '" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" allowfullscreen title="YouTube Video"></iframe></div>'
    );
  },
});
