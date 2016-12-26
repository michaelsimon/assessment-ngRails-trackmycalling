(function() {

  'use strict'

  function NoteFactory($http, $state) {

    return {
      getNotes: getNotes,
      createNote: createNote
    }

    function getNotes() {
      return $http.get('/jobs/' + $state.params.id + '/notes')
      .then(handleResponse)
      .then(handleError)
    }

    function createNote(note) {

      var req = {
        method: 'POST',
        url: '/jobs/' + $state.params.id + '/notes',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          note: note
        }
      }
      return $http(req)
      .catch(handleError)
    }

    function handleResponse(response) {
      return response.data
    }

    function handleError(error) {
      return error
    }
  }

  angular
  .module('app')
  .factory('NoteFactory', NoteFactory);
}())









// function NoteFactory($http) {
//
//   getNotes = function() {
//     return $http({method: 'GET', url: '/notes/'});
//   };
//
//   getNote = function(jobId, id) {
//     return $http({method: 'GET', url: '/jobs/' + jobId + '/notes/' + id});
//   };
//
//   createNote = function(note) {
//     return $http({
//       method: 'POST',
//       url: '/jobs/' + note.job_id + '/notes/',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       data: {
//         note: note
//       }
//     });
//   };
//
//   updateNote = function(note) {
//     return $http({
//       method: 'PATCH',
//       url: '/jobs/' + note.job_id + '/notes/' + note.id,
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       data: {
//         note: note
//       }
//     });
//   };
//
//   deleteNote = function(note) {
//     return $http({
//       method: 'DELETE',
//       url: '/jobs/' + note.job_id + '/notes/' + note.id,
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       data: {
//         note: note
//       }
//     });
//   };
//
// }
//
// //
// // angular
// // .module('app')
// // .factory('NoteFactory', NoteFactory);