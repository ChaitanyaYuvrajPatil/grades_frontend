import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  FormLabel
} from '@mui/material';

const SubjectForm = () => {
  const [subjectScores, setSubjectScores] = useState({
    math: '',
    science: '',
    history: '',
  });

  const handleChange = (e) => {
    setSubjectScores((prevScores) => ({
      ...prevScores,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Subject scores:', subjectScores);
  };

  return (
    <Box width={500} mx="auto">
      <Typography variant="h3" align="center" style={{marginTop:"100px"}} gutterBottom>
        Fill Subject Scores
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl margin="normal" variant="outlined" style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
            <FormLabel style={{ marginRight: "10px", width:"200px" }}>Maths</FormLabel>
            <OutlinedInput
                id="math-score"
                name="math"
                type="string"
                value={subjectScores.math}
                onChange={handleChange}
                label="Math Score"
            />
        </FormControl>

        <FormControl margin="normal" variant="outlined" style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
            <FormLabel style={{ marginRight: "10px", width:"200px" }}>Maths</FormLabel>
            <OutlinedInput
                id="math-score"
                name="math"
                type="string"
                value={subjectScores.math}
                onChange={handleChange}
                label="Math Score"
            />
        </FormControl>
       
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Save Scores
        </Button>
      </form>
    </Box>
  );
};

export default SubjectForm;
