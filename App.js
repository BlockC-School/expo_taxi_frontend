import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Account from './components/Account';
import Input from './components/Input';
import Submit from './components/Submit';
export default function App() {
  const [text, onChangeText] = useState(null);
  const [number, onChangeNumber] = useState(null);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('./assets/texi.png')}
          resizeMode="center"
          style={styles.image}
        ></Image>
        <Text style={styles.textTitle}>Welcome back</Text>
        <Text style={styles.textBody}>Login in to your existant account</Text>
        <View style={{ marginTop: 20 }} />
        <Input name="Email" icon="user" />
        <Input name="Password" icon="lock" pass={true} />
        <View style={{ width: '90%' }}>
          <Text style={([styles.textbody], { alignSelf: 'flex-end' })}>
            Forgot Password?
          </Text>
        </View>
        <Submit title="LOG IN" color="#0148a4" />
        <Text style={styles.textBody}>Or connect using</Text>
        <View style={{ flexDirection: 'row' }}>
          <Account color="#3b5c8f" icon="facebook" title="Facebook" />
          <Account color="#ec482f" icon="google" title="Google" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}
        >
          <Text style={styles.textBody}>Don't Have an account </Text>
          <Text style={([styles.textBody], { color: 'blue' })}> Sign Up</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 10,
  },
  textTitle: {
    fontSize: 40,
    marginVertical: 10,
  },
  textBody: {
    fontSize: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'blue',
  },
});
