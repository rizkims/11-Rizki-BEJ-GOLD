function CreateStoreHandler(req, res){
    try{
        res.status(200).json({
            message : 'Data saved successfully'
        });
    }
    catch (error){
        res.status(500).json({
            message : 'server error ' + error.message
        });
    }
    return
}

function GetStoreHandler(req, res){
    try{
        res.status(200).json({
            message : 'success',
            data : [{
                'id':1,
                'name':'bejo',
            },
            {
                'id':2,
                'name':'joko',
            }]
        });
    }
    catch (error){
        res.status(500).json({
            message : 'server error ' + error.message
        });
    }
    return
}

function UpdateStoreHandler(req, res){
    try{
        res.status(200).json({
            message : 'Data updated successfully'
        });
    }
    catch (error){
        res.status(500).json({
            message : 'server error ' + error.message
        });
    }
    return
}

function DeleteStoreHandler(req, res){
    try{
        res.status(200).json({
            message : 'Data deleted successfully'
        });
    }
    catch (error){
        res.status(500).json({
            message : 'server error ' + error.message
        });
    }
    return
}