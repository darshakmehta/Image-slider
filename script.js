function ImageSliderController($scope, $timeout) {
  
  $scope.imageList = [
  'https://www.amobee.com/wp-content/uploads/2018/08/SuccessStoryHero.jpg',
  'https://www.amobee.com/wp-content/uploads/2018/10/evian-upload.jpg',
  'https://www.amobee.com/wp-content/uploads/2018/10/NorthFace-Upload.jpg',
  'https://www.amobee.com/wp-content/uploads/2018/10/Spotfiy-upload.jpg',
  'https://www.amobee.com/wp-content/uploads/2018/10/Lexus-upload.jpg',
  'https://www.amobee.com/wp-content/uploads/2018/09/Airbnb-upload.jpg',
  'https://www.amobee.com/wp-content/uploads/2018/10/Fiat-uplaod.jpg',
  'https://www.amobee.com/wp-content/uploads/2018/10/Dell-upload.jpg'
  ];

  $scope.currentIndex = 0;
  $scope.currentImage = $scope.imageList[$scope.currentIndex];
  $scope.interval = 3000;

  $scope.backwardImage = function() {
    if($scope.currentIndex > 0) {
      $scope.currentIndex -= 1;
    } else {
      $scope.currentIndex = $scope.imageList.length - 1;
    }
    $scope.currentImage = $scope.imageList[$scope.currentIndex];
  };

  $scope.forwardImage = function() {
    $scope.currentIndex = (($scope.currentIndex + 1) % $scope.imageList.length);
    $scope.currentImage = $scope.imageList[$scope.currentIndex];
  };

  var slideImage = $timeout(function slide() {
      $scope.forwardImage();
      slideImage = $timeout(slide, $scope.interval);
  }, $scope.interval);
  
}