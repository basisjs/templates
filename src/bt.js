basis.require('basis.template.html');
//;;;basis.require('basis.devpanel');

var srcMap = [];
var tmplMap = [];

function templateWrapper(src){
  var index = srcMap.indexOf(src);
  if (index != -1)
    return tmplMap[index];

  var template = new basis.template.html.Template(src);

  srcMap.push(src);
  tmplMap.push(template);

  return template;
}

global['bt'] = module.exports = basis.object.extend(templateWrapper, {
  init: function(config){
    if (!config)
      return this;

    if (config.noConflict)
    {
      delete window.bt;
      return this;
    }
  },

  template: templateWrapper
});

// hide basis from global
delete window.basis;