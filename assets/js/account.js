const js_account = function(){
  const checkLoginStatus = function() {
    /*
      TODO: check token from localstorage and backend
    */
    return false;
  };
  const login = function(token) {
    var vault = JSON.stringify({
      'token': token
    });
    localStorage.setItem('vault', vault);
  };
  const logout = function() {
    localStorage.clear();
  };

  return {
    checkLoginStatus,
    login,
    logout
  };
}();