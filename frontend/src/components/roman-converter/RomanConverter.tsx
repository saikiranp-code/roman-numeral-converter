import React, { useState } from "react";
import {
  TextField,
  Button,
  Text,
  Flex,
  Heading,
  View,
} from "@adobe/react-spectrum";
import { fetchRomanNumeral } from "../../services/apiService";
import { validateRomanConverterInput } from "../../utils/validation";

const RomanConverter: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [romanNumeral, setRomanNumeral] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (value: string) => {
    setInput(value);
    setError(null); // Clear error when input changes
  };

  const handleConvert = async () => {
    // Input validation using a utility function
    const validationError = validateRomanConverterInput(input);
    if (validationError) {
      setRomanNumeral(null);
      setError(validationError);
      return;
    }

    try {
      const result = await fetchRomanNumeral(input);
      setRomanNumeral(result.output);
      setError(null);
    } catch (err: any) {
      setRomanNumeral(null);
      setError(err.message);
    }
  };

  return (
    <Flex justifyContent={"center"}>
      <Flex direction={"column"} alignItems={"start"}>
        <Heading level={2}>Roman numeral converter</Heading>
        <View minHeight={85}>
          <TextField
            label="Enter a number"
            width={280}
            value={input}
            onChange={handleInputChange}
            type="number"
            name="romanInput"
            errorMessage={error || " "}
            validationState={error ? "invalid" : undefined}
          />
        </View>
        <Button
          UNSAFE_style={{
            cursor: `${!input || input?.length < 1 ? "not-allowed" : "pointer"}`,
          }}
          variant="secondary"
          onPress={handleConvert}
          marginTop="size-100"
          isDisabled={!input || input?.length < 1}
        >
          Convert to roman numeral
        </Button>
        <Text marginTop="size-300">
          <strong>Roman Numeral: </strong>
          {romanNumeral && romanNumeral.length > 0 ? romanNumeral : undefined}
        </Text>
      </Flex>
    </Flex>
  );
};

export default RomanConverter;
