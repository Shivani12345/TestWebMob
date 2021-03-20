import React from 'react'
import Background from '../components/Background'
import Paragraph from '../components/Paragraph'
import RecyclerviewList, { DataSource } from 'react-native-recyclerview-list';
 
import Apis from '../api/apis'
export default function Dashboard({ navigation }) {
  
  const [name, setName] = useState({ value: ''})
  const [email, setEmail] = useState({ value: '' })
  const [password, setPassword] = useState({ value: '' })
  const [profilepic, setProfile] = useState({ value: '' })
  const [token, setToken] = useState({ value: '' })
  const [dataresponse, setResponse] = useState({ value: '' })
 

  
    let username = await AsyncStorage.getItem("username");
    let email = await AsyncStorage.getItem("email");
    let password = await AsyncStorage.getItem("password");


    let photo = await AsyncStorage.getItem("profile_pic");
    let uid = await AsyncStorage.getItem("id");
    let token = await AsyncStorage.getItem("token");


      setName({ name  })
      setEmail({ email })
      setPassword({ password})
      setProfile({ photo  })
      setToken({ uid })


      Apis.GetUserList(token).
      then((res) => {
  
        if (res.meta.status === "ok") {
          setResponse(res.data.users)
        }
  
        else  if (res.meta.status === "fail") {
            alert(res.meta.message)
            console.warn("error" + res.meta.message);
        
        }
      }).catch((error) => {
        console.warn("err", error.message)
      });
      
      

  return (
    <Background>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <RecyclerviewList
      style={{ flex: 1 }}
      dataSource={
        dataresponse
      }
      renderItem={({item, index}) => (
        <TouchableOpacity>
       <Image
        style={styles.image}
        source={require(item.profile_pic)}
      />
        <Text>{item.username}</Text>
      )} />
      </TouchableOpacity>
      )} />
    </Background>
  )


  const styles = StyleSheet.create({
  
    image: {
      width: 30,
      height: 30,
    },
  })

}
