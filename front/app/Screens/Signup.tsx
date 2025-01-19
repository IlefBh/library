import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Modal, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Link } from 'expo-router';

interface VerifyEmailPopupProps {
  visible: boolean;
  onClose: () => void;
  onVerify: (otp: string) => void;
}

const VerifyEmailPopup = ({ visible, onClose, onVerify }: VerifyEmailPopupProps) => {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    if (otp.length === 6) {
      onVerify(otp); // Pass the OTP to the parent component for verification
    } else {
      Alert.alert('Error', 'Please enter a valid 6-digit OTP.');
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Verify Email</Text>
          <Text style={styles.modalSubtitle}>Enter the 6-digit OTP sent to your email.</Text>

          <TextInput
            style={styles.otpInput}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            maxLength={6}
          />

          <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [isVerifyEmailVisible, setIsVerifyEmailVisible] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    setIsVerifyEmailVisible(true);
    // if (!name || !email || !phoneNumber || !password) {
    //   Alert.alert('Error', 'Please fill in all fields.');
    //   return;
    // }

    // // Basic email validation
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   Alert.alert('Error', 'Please enter a valid email address.');
    //   return;
    // }

    // // Basic phone number validation (adjust regex as needed)
    // const phoneRegex = /^\d{8}$/; // 8-digit phone number
    // if (!phoneRegex.test(phoneNumber)) {
    //   Alert.alert('Error', 'Please enter a valid 8-digit phone number.');
    //   return;
    // }

    // try {
    //   // Make API call to register endpoint
    //   const response = await fetch('http://localhost:5000/auth/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       number: phoneNumber,
    //       password,
    //       role: 'client', // Default role for signup
    //     }),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     // Registration successful, redirect to VerifyEmail screen
    //     Alert.alert('Success', 'Account created successfully! Please check your email to verify your account.');
    //     setIsVerifyEmailVisible(true);
    //   } else {
    //     // Handle errors from the backend
    //     Alert.alert('Error', data.msg || 'Registration failed. Please try again.');
    //     setIsVerifyEmailVisible(true);
    //   }
    // } catch (error) {
    //   console.error('Signup error:', error);
    //   Alert.alert('Error', 'An error occurred. Please try again.');
    // }
  };

  const pickImage = async () => {
    console.log('pickImage function called'); // Debugging

    // Request permission to access the media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log('Image picker result:', result); // Debugging

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri; // Access the URI from the first asset
      setProfilePicture(uri);
      console.log('Profile picture set:', uri); // Debugging
    }
  };

  const handleVerifyOtp = (otp: string) => {
    // Simulate OTP verification (replace with your actual verification logic)
    const validOtp = '123456'; // Replace with the OTP sent to the user
    if (otp === validOtp) {
      Alert.alert('Success', 'Email verified successfully!');
      setIsVerifyEmailVisible(false);
      router.push('./SignIn'); // Redirect to sign-in screen
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/images/file.png')}
        style={styles.logo}
      />
      <View style={styles.profilePictureWrapper}>
        <TouchableOpacity style={styles.profilePictureContainer} onPress={pickImage}>
          {profilePicture ? (
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
          ) : (
            <Text>Profile Picture</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.signInText}>
        Have an account?
        <Link href="./Signin" asChild>
          <TouchableOpacity>
            <Text style={styles.signInLink}> Sign in</Text>
          </TouchableOpacity>
        </Link>
      </Text>

      {/* OTP Verification Popup */}
      <VerifyEmailPopup
        visible={isVerifyEmailVisible}
        onClose={() => setIsVerifyEmailVisible(false)}
        onVerify={handleVerifyOtp}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 150,
    height: 80,
    marginBottom: 40,
    alignSelf: 'center',
  },
  profilePictureWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePictureContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  signupButton: {
    height: 50,
    backgroundColor: '#1C1C5F',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInText: {
    textAlign: 'center',
    color: '#666',
  },
  signInLink: {
    color: '#1C1C5F',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  otpInput: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  verifyButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#1C1C5F',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#BE1E1E',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#BE1E1E',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpPage;