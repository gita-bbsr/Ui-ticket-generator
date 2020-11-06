import TextField from "@material-ui/core/TextField";

export const Step2 = ({
    nextStep, 
    update}: any) => {

    const handleKeyPress = (e: any) => {
        if(e.key === 'Enter'){
            nextStep(e);
        }
    }
    
    return (
        <TextField 
            fullWidth 
            id="outlined-basic" 
            label="Step2..." 
            variant="outlined" 
            onChange={update} 
            onKeyPress={handleKeyPress}
        />

    );
}

export default Step2;