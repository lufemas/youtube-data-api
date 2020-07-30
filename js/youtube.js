  /**
   * Sample JavaScript code for youtube.channels.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyCl4YQZX9y2GoDplmROblW1jRFNPukx6QI");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  async function reqVideoData(ytID) {
    return gapi.client.youtube.videos.list({
      "part": [
        "snippet,contentDetails,statistics"
      ],
      "id": [
        ytID
      ]
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });

              
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "98135616017-hrhcokbio5fupf00srliiume94s7igtl.apps.googleusercontent.com"});
  });