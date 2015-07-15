function defineFunc(){
    gdescribe('group1', 'groupfile3 group1', function(){
        it('test1', function(){}); 
        it('test2', function(){}); 
    })
    gdescribe('group2', 'groupfile3 group2', function(){
        it('test1', function(){}); 
        it('test2', function(){}); 
    })

    gdescribe('group3', 'groupfile3 group3', function(){
        it('test1', function(){}); 
        it('test2', function(){}); 
    })
    
//execute the group ,which is in karma.conf.js file. 
    executeGroup(); 
}
