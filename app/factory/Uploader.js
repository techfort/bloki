'use strict';

angular.module('blokiApp')
  .factory('Uploader', function () {
    // Service logic
    var percentComplete = 0;

    // Public API here
    return {
      
      uploadFile : function( fileElementId ){
        if(window.FormData == 'undefined'){
          return;
        }

        var xhr = new XMLHttpRequest();
        xhr.addEventListener('progress', updateProgress, false);
        xhr.addEventListener('load', transferComplete, false);
        xhr.addEventListener('error', transferFailed, false);
        xhr.addEventListener('abort', transferCanceled, false);

        function updateProgress(evt){
          if (evt.lengthComputable) {
            percentComplete = evt.loaded / evt.total;
            
          } else {
            // Unable to compute progress information since the total size is unknown
          }
        }
        function transferComplete(){}
        function transferFailed(){}
        function transferCanceled(){}

        xhr.open();
      },
      getPercentage : function(){
        return percentComplete;
      }
    };
  });
