// PLATS SERVICE
function platsService($http) {
    return {
        get : function() {
            return $http.get('/plats');
        },
        update : function(id, data){
            return $http.put('/plats/' + id, data);
        },
        create : function(data) {
            return $http.post('/plats', data);
        },
        delete : function(id) {
            return $http.delete('/plats/' + id);
        }
    }
};
