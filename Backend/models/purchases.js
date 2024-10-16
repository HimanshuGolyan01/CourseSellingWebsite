const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        
       
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,  
        
       
    }
});

const Purchases = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchases;
