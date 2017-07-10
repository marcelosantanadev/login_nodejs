jQuery.postToServer = function (config, callback) {
  $.ajax({
    url: config.route,
    type: 'POST',
    data: {json: JSON.stringify(config.data)},
    dataType: 'json',
    success: function (data) {
      if (callback && typeof(callback) === 'function') {
        callback(null, data);
      }
    },
    error: function (data) {
      if (callback && typeof(callback) === 'function') {
        callback(data, null);
      }
    }
  });
};

jQuery.putToServer = function (config, callback) {
  $.ajax({
    url: config.route,
    type: 'PUT',
    data: {json: JSON.stringify(config.data)},
    dataType: 'json',
    success: function (data) {
      if (callback && typeof(callback) === 'function') {
        callback(null, data);
      }
    },
    error: function (data) {
      if (callback && typeof(callback) === 'function') {
        callback(data, null);
      }
    }
  });
};

jQuery.getToServer = function (config, callback) {
  $.ajax({
    url: config.route,
    type: 'GET',
    beforeSend: function (req) {
      req.setRequestHeader("auth", config.headers.auth)
    },
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
      if (callback && typeof(callback) === 'function') {
        callback(null, data);
      }
    },
    error: function (data) {
      if (callback && typeof(callback) === 'function') {
        callback(data, null);
      }
    },
    timeout: 5000
  });
};