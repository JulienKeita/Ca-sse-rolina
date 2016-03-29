// SOIREES SERVICE
function soireesService($http) {
    return {
        get : function() {
            return $http.get('/soirees');
        },
        update : function(id, data){
            return $http.put('/soirees/' + id, data);
        },
        create : function(data) {
            return $http.post('/soirees', data);
        },
        delete : function(id) {
            return $http.delete('/soirees/' + id);
        }
    }
};
