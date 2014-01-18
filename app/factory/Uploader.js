'use strict';

angular.module('blokiApp')
  .factory('Uploader', function ($rootScope) {
    // Service logic
    var percentComplete = 0;
    var lastImageUrl = '';

    // Public API here
    return {
      getUrl: function(){
        return lastImageUrl;
      },
      getPercentage : function(){
        return percentComplete;
      },
      uploadFile : function( fileElementId ){
        if(window.FormData == 'undefined'){
          return;
        }

        var data = new FormData();

        var xhr = new XMLHttpRequest();
        xhr.addEventListener('progress', updateProgress, false);
        //xhr.addEventListener('load', transferComplete, false);
        //xhr.addEventListener('error', transferFailed, false);
        //xhr.addEventListener('abort', transferCanceled, false);

        xhr.onreadystatechange = function(){
          console.log( xhr.readyState );
          if(xhr.readyState == 4 && xhr.status == 200){

            percentComplete = 100;  
            lastImageUrl = JSON.parse(xhr.response).path; 
            console.log('lasturl : ' + lastImageUrl);
            console.log('perc: ' + percentComplete);
            
            $rootScope.$broadcast('updateUrl');
            
          }
        };
          

        function updateProgress(evt){
          console.log(evt);
          if (evt.lengthComputable) {
            angular.copy(Math.floor(evt.loaded/ evt.total), percentComplete );
            percentComplete = evt.loaded / evt.total;
            
          } else {
            // Unable to compute progress information since the total size is unknown
          }
        }

        function transferFailed(){
          percentComplete = 0;
        }
        function transferCanceled(){
          percentComplete = 0;
        }
        console.log(document.getElementById(fileElementId));
        data.append('image', document.getElementById(fileElementId).files[0] );
        
        xhr.open('POST', '/upload', true);
        xhr.setRequestHeader('enctype','multipart/form-data');
        xhr.responseType = 'json';
        xhr.send(data);
      }
    };
  });
