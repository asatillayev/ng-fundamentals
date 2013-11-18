'use strict';

eventsApp.factory('eventData', function () {
    return{
        event: {
            name: 'Event one',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarter',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/app/img/Jellyfish.jpg',

            sessions: [
                {
                    creatorName: 'James Gosling',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'You will learn something big about Angular JS World',
                    upVoteCount: 0,
                    name: "Directives MasterClass"
                },
                {
                    creatorName: 'Jameel Bekov',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'Introduction to Angular JS.',
                    upVoteCount: 0,
                    name: "Scopes For Fun"
                },
                {
                    creatorName: 'Bratana ansater',
                    duration: 3,
                    level: 'Advanced',
                    abstract: 'Testing angularjs',
                    upVoteCount: 0,
                    name: "Scopes For Fun"
                },
                {
                    creatorName: 'John Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'From setting up work environment to deployig the app on cloud servers',
                    upVoteCount: 0,
                    name: 'Angular best practices'
                }
            ]

        }
    }
})