const js_step = function(){
  const stepArr = [
    {'index': '0', 'title': '下載'},
    {'index': '1', 'title': '驗證'},
    {'index': '2', 'title': '完成'}
  ];

  var step = '0';

  const get = function(){
    return step;
  };
  const set = function(value) {
    return step = value;
  };
  return {
    list: stepArr,
    get,
    set
  }
}();