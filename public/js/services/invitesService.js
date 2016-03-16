// TODO SERVICE
function invitesService($http) {
    return {
        get : function() {
            return $http.get('/invites');
        },
        update : function(id, data){
            return $http.put('/invites/' + id, data);
        },
        create : function(data) {
            return $http.post('/invites', data);
        },
        delete : function(id) {
            return $http.delete('/invites/' + id);
        }
    }
};
