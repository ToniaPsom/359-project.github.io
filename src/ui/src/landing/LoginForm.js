import { 
    Button,
    Stack,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    FormErrorMessage,
    InputGroup,
    Text,
    InputRightElement
} from '@chakra-ui/react'
import LoginControl from './LoginControl';







const LoginForm = ({ submitForm }) =>{

    const { handleChange, handleSubmit, values, errors, setValues, isSubmitting } = LoginControl(
        submitForm
    );

    return(
        <form method= "POST" onSubmit={handleSubmit} noValidate>


            <Stack spacing= '40px' width='500px'>
            <Text fontSize='5xl' >Login</Text>
            <FormControl isRequired id= "username">
                <FormLabel>Username</FormLabel>
                <Input 
                    type= "text" 
                    name= "username"
                    autoComplete= "on"
                    value= {values.username}
                    onChange= {handleChange} 
                    placeholder= "Username"
                    minLength="8"
                    />
            </FormControl>

            <FormControl isRequired id= "password" >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input 
                    name= "password"
                    autoComplete= "off"
                    value= {values.password}
                    onChange= {handleChange} 
                    placeholder= "Password"
                    />
                </InputGroup>
            </FormControl>

            <Text>{ errors.error }</Text>
            
            {isSubmitting ? 
            <Button
                mt={2}
                colorScheme="teal"
                type="submit"
                isLoading
            >
                Submit
            </Button>
            :
            <Button
                mt={2}
                colorScheme="teal"
                type="submit"
            >
                Submit
            </Button>

}
            </Stack>

        </form>
        
    );
}

export default LoginForm;