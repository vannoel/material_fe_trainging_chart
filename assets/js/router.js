const js_router = function() {
  const routeArr = [
    {'index': 'index',                  'path': './index.html'},
    {'index': 'account_login',          'path': './login.html'},

    {'index': 'home',                   'path': './home.html'},
    {'index': 'dashboard',              'path': './dashboard.html'},
    {'index': 'chart_line',             'path': './chart_line.html'},
    {'index': 'chart_area',             'path': './chart_area.html'},
    {'index': 'chart_histogram',        'path': './chart_histogram.html'},
    {'index': 'chart_bar',              'path': './chart_bar.html'},
    {'index': 'chart_pnd',              'path': './chart_pnd.html'},
    {'index': 'chart_radar',            'path': './chart_radar.html'},
    {'index': 'chart_scatter',          'path': './chart_scatter.html'},
    {'index': 'chart_mixed',            'path': './chart_mixed.html'},
    {'index': 'table_list',             'path': './table_list.html'},
    {'index': 'table_prof',             'path': './table_prof.html'},
    {'index': 'system_config',          'path': './system_configures.html'},
    {'index': 'system_change_password', 'path': './system_change_password.html'},
  ];
  const menuArr = [
    {
      'index': 'dashboard',
      'path': 'dashboard', // come without children
      'title': '儀表板'
    },
    {
      'index': 'chart',
      'title': '統計圖',
      'defaultCollapsed': false, // come with  children
      'children': [
        {
          'index': 'chart_line',
          'path': 'chart_line',
          'title': '線性圖'
        },
        {
          'index': 'chart_area',
          'path': 'chart_area',
          'title': '面積圖'
        },
        {
          'index': 'chart_histogram',
          'path': 'chart_histogram',
          'title': '直方圖'
        },
        {
          'index': 'chart_bar',
          'path': 'chart_bar',
          'title': '長條圖'
        },
        {
          'index': 'chart_pnd',
          'path': 'chart_pnd',
          'title': '圓餅/甜圈圖'
        },
        {
          'index': 'chart_radar',
          'path': 'chart_radar',
          'title': '雷達圖'
        },
        {
          'index': 'chart_scatter',
          'path': 'chart_scatter',
          'title': '點狀圖'
        },
        {
          'index': 'chart_mixed',
          'path': 'chart_mixed',
          'title': '複合圖'
        },
      ]
    },
    {
      'index': 'table',
      'title': '表格',
      'defaultCollapsed': false,
      'children': [
        {
          'index': 'table_list',
          'path': 'table_list',
          'title': '清單型'
        },
        {
          'index': 'table_prof',
          'path': 'table_prof',
          'title': '資料型'
        }
      ]
    },
    {
      'index': 'system',
      'title': '系統設定',
      'defaultCollapsed': true,
      'children': [
        {
          'index': 'system_config',
          'path': 'system_config',
          'title': '環境設定'
        },
        {
          'index': 'system_change_password',
          'path': 'system_change_password',
          'title': '修改密碼'
        }
      ]
    }
  ];

  const get = function(index) {
    var ret = {
      'index': '',
      'path': ''
    };
    for(var i=0; i < routeArr.length; i++)
    {
      if(routeArr[i].index === index)
      {
        ret = routeArr[i];
        return ret;
      };
    };
    return ret;
  };

  return {
    menu: menuArr,
    get
  };
}();