// PLATS SERVICE
function soireeService($http) {
    return {
        get : function() {
            return $http.get('/soiree');
        },
        update : function(id, data){
            return $http.put('/soiree/' + id, data);
        },
        create : function(data) {
            return $http.post('/soiree', data);
        },
        delete : function(id) {
            return $http.delete('/soiree/' + id);
        }
    }
};
