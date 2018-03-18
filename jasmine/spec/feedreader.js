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

         // check "allFeeds" variable is defined and has items
         it('are defined', function() {
             expect(allFeeds).toBeDefined();
             expect(allFeeds.length).not.toBe(0);
         });


         // check each url of "allFeeds" is defined and not empty
         it('have each defined url and it is not empty', function() {
             for(var i=0; i<allFeeds.length; i++) {
                 expect(allFeeds[i].url).toBeDefined();
                 expect(allFeeds[i].url.length).not.toBe(0);
             }
         });

         // check each name of "allFeeds" is defined and not empty
         it('have each defined name and it is not empty', function() {
             for(var i=0; i<allFeeds.length; i++) {
                 expect(allFeeds[i].name).toBeDefined();
                 expect(allFeeds[i].name.length).not.toBe(0);
             }
         });
    });

    describe('The menu', function() {
        // check the slide menu is hidden by default
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // check the slide menu changes visibility by clicking as toggle
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

    describe('Initial Entries', function() {
         beforeEach(function() {
             // I don't have any idea what is filled in beforeEach function.
         });

         // check asynchronous operation of loadFeed works ell and make entry within feed.
         it('has loadFeed and It should be called and completed its work', function(done) {
             // index means the first feed
             var index = 0 ;
             loadFeed(index, function() {
                 expect($('.feed').find('.entry-link').length).not.toBe(0);
                 done();
             });
         }, 10000);
     });

    describe('New Feed Selection', function() {
         beforeEach(function() {
             // I don't have any idea what is filled in beforeEach function.
         });

         // check the content is changed by selecting new feed
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
