import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const SignUp = () => {
  return (
    <View className="flex-1 items-center justify-center gap-y-4 ">
      <Text className="mb-4 text-2xl font-bold">SignUp Screen</Text>
      <TextInput
        placeholder="full name"
        className="my-1/2 rounded-xl border border-4 text-center "
      />

      <TouchableOpacity
        className="rounded-lg bg-blue-500 px-6 py-3"
        onPress={() => console.log('Button pressed')}>
        <Text className="font-semibold text-white" onPress={() => console.log(' pressed')}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
