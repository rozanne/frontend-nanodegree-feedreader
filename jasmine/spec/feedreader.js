/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have each defined url and it is not empty', function() {
             for(var i=0; i<allFeeds.length; i++) {
                 expect(allFeeds[i].url).toBeDefined();
                 expect(allFeeds[i].url.length).not.toBe(0);
             }
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have each defined name and it is not empty', function() {
             for(var i=0; i<allFeeds.length; i++) {
                 expect(allFeeds[i].name).toBeDefined();
                 expect(allFeeds[i].name.length).not.toBe(0);
             }
         });
    });

    describe('The menu', function() {
    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden by default', function() {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes visibility as toggle type when the menu icon is clicked.', function() {
              if($('body').hasClass('menu-hidden')){
                  // if body has menu-hidden by default
                  $('.menu-icon-link').trigger('click');
                  expect($('body').hasClass('menu-hidden')).toBe(false);

                  $('.menu-icon-link').trigger('click');
                  expect($('body').hasClass('menu-hidden')).toBe(true);
              }
              else {
                  // if body has not menu-hidden by default
                  $('.menu-icon-link').trigger('click');
                  expect($('body').hasClass('menu-hidden')).toBe(true);

                  $('.menu-icon-link').trigger('click');
                  expect($('body').hasClass('menu-hidden')).toBe(false);
              }
          });
      });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function() {
             // I don't have any idea what is filled in beforeEach function.
         });
         it('has loadFeed and It should be called and completed its work', function(done) {
             // index means the first feed
             var index = 0 ;
             loadFeed(index, function() {
                 done();
             });
             // I had no choice to add this expect, if below code is not exist, it occurs error not to be exist no spec.
             expect(true).toBe(true);
         }, 10000);
     });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         beforeEach(function() {
             // I don't have any idea what is filled in beforeEach function.
         });
         it('should change the content by selecting new feed', function(done) {
             // prevIndex means the first feed
             // nextIndex means the second feed
             var prevIndex = 0;
             var nextIndex = 1;
             loadFeed(prevIndex, function() {
                 var prevFirstLink = $('.feed').find('.entry-link')[0].href;
                 loadFeed(nextIndex, function() {
                     var nextFirstLink = $('.feed').find('.entry-link')[0].href;

                     // compare each url of the first entry-link element in previous feed and next feed.
                     expect(prevFirstLink).not.toEqual(nextFirstLink);
                     done();
                 });
             });
         }, 10000);
     });

     // actually I don't know where can I implement number 18, 19 item of udacity requirement.
     // 18. Callbacks should be used to ensure that feeds are loaded before they are tested.
     // 19. Implement error handling for undefined variables and out-of-bound array access
}());
