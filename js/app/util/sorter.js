define(['can'], function(can) {
    var qsort = function(A, less_eq) {
        _partition = function(p, r) {
            var x = A[r];
            var i = p-1;
            for (var j=p ; j < r; j++) {
                if (less_eq(A[j], A[r])) {
                    i++;
                    var temp = A[i];
                    A[i] = A[j];
                    A[j] = temp;
                }
            }
            i++
            A[r] = A[i];
            A[i] = x;
            return i;
        }
        _qsort = function(p, r) {
            if (p < r ) {
                var q = _partition(p, r);
                _qsort(p, q-1);
                _qsort(q+1, r);
            }
        }
        _qsort(0, A.length-1);
        return A;
    };
    return qsort;
});
