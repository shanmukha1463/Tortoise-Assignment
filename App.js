import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, IMAGES, SIZES} from './assets';

const DisplayIcon = ({source, title}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          height: 70,
          width: 90,
          borderRadius: 5,
          backgroundColor: COLORS.lightGray2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={source} style={{height: 60, width: 60}} />
      </TouchableOpacity>
      <Text
        style={{
          paddingTop: 5,
          fontSize: 12,
          color: COLORS.lightGray,
          textTransform: 'capitalize',
        }}>
        {title}
      </Text>
    </View>
  );
};

function renderWelcomeInfo() {
  return (
    <View
      style={{
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 15,
      }}>
      <View>
        <Text style={{color: COLORS.secondary, fontSize: 15}}>
          Welcome back,
        </Text>
        <Text style={{color: COLORS.black, fontSize: 25, fontWeight: 'bold'}}>
          Rahul Kumar
        </Text>
      </View>
      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'white',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={IMAGES.tortoise}
          style={{height: 30, width: 30, tintColor: COLORS.primary}}
        />
      </TouchableOpacity>
    </View>
  );
}

const Card = ({
  icons,
  title,
  subTitle,
  titleHighlight,
  mute,
  style,
  logo,
  bgImage,
}) => {
  // console.log(typeof icons === 'undefined');
  return (
    <View style={[styles.card, style]}>
      <View style={{flex: typeof icons == 'undefined' ? 4 : 3}}>
        <Image
          source={bgImage}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
          borderTopLeftRadius={25}
          borderTopRightRadius={25}
        />
        {logo && (
          <Image
            source={logo}
            style={{
              width: 60,
              height: 60,
              position: 'absolute',
              bottom: 10,
              left: 10,
            }}
            resizeMode="contain"
          />
        )}
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
            margin: 10,
            position: 'absolute',
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.lightGray,
          }}>
          <Image
            source={mute ? IMAGES.mute : IMAGES.sound}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: typeof icons === 'undefined' ? 1 : 2.5,
          paddingHorizontal: 20,
        }}>
        <View style={{paddingVertical: 20}}>
          <Text
            style={{
              textTransform: 'uppercase',
              color: COLORS.lightGray,
              fontWeight: 'bold',
            }}>
            {subTitle}
          </Text>
          <Text
            style={{
              paddingTop: 10,
              fontWeight: 'bold',
              fontSize: 20,
              color: COLORS.black,
            }}>
            {title}
            <Text style={{color: COLORS.primary}}> {titleHighlight}</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {icons?.map((item, index) => {
            return (
              <DisplayIcon
                key={`icon-${index}`}
                source={item.source}
                title={item.title}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const App = () => {
  const icons = [
    {
      source: IMAGES.truck,
      title: 'Priority Delivery',
    },
    {
      source: IMAGES.charger,
      title: 'Free charger',
    },
    {
      source: IMAGES.gift,
      title: 'tortoise Merch',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        {renderWelcomeInfo()}
        <Card
          icons={icons}
          title={'Save up for the next iPhone and'}
          titleHighlight={' get 10% Cashback!'}
          subTitle={'Iphone Savings Plan'}
          bgImage={IMAGES.background1}
          mute
        />
        <Card
          title={'Save up for the next Vacation and'}
          titleHighlight={' get 10% Cashback!'}
          subTitle={'Make My Trip Savings Plan'}
          style={{marginBottom: 20, paddingBottom: 15}}
          logo={IMAGES.my}
          bgImage={IMAGES.background2}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  card: {
    backgroundColor: 'white',
    height: SIZES.height * 0.8,
    borderRadius: 25,
    shadowOffset: 10,
    shadowRadius: 10,
    shadowOpacity: 15,
    elevation: 2,
    marginHorizontal: 15,
    marginTop: 20,
  },
});

export default App;
