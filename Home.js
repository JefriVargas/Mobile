import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const books = [{id:'1',title:'',imageUri:require('./images/cover1.jpg')},{id:'2',title:'',imageUri:require('./images/cover2.jpg')},
 {id:'3',title:'',imageUri:require('./images/cover3.jpg')},{id:'4',title:'',imageUri:require('./images/cover8.jpg')},{id:'5',title:'',imageUri:require('./images/cover10.jpg')},
 {id:'6',title:'',imageUri:require('./images/cover11.jpg')},{id:'7',title:'',imageUri:require('./images/cover12.jpg')},{id:'8',title:'',imageUri:require('./images/cover13.jpg')},{id:'9',title:'',imageUri:require('./images/cover14.jpg')},
 {id:'10',title:'',imageUri:require('./images/cover15.jpg')}];

const HomeScreen = () => {

  // Función para renderizar cada libro
  const renderBook = ({ item }) => (
    <View style={styles.bookItem}>
      <Image source={item.imageUri} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Lista de Libros */}
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={item => item.id}
        horizontal={true}
        // Establece esto a `true` si quieres una lista horizontal
        showsVerticalScrollIndicator={false}
        // Puedes agregar más propiedades de estilo y comportamiento aquí si es necesario
        contentContainerStyle={styles.listContainer}
      />

      {/* Imagen Pequeña */}
      <Image
        source={require('./images/segunda_imagen_libros.png')}
        style={styles.smallImage}
      />

      {/* Título */}
      <Text style={styles.title}>BookMate</Text>

      {/* Botones */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center', // Puedes quitar esto para que la lista tome el ancho completo
    // justifyContent: 'center', // Ajusta esto para el comportamiento de scroll deseado
  },
  listContainer: {
    paddingHorizontal: 10, // Añade algo de padding si es necesario
  },
  bookItem: {
    marginBottom: 10,
    alignItems: 'center', // Centrar los ítems horizontalmente
  },
  bookImage: {
    width: 100, // Ajusta el ancho según tus necesidades
    height: 150, // Ajusta la altura según tus necesidades
    resizeMode: 'contain', // Esto asegura que la imagen se escale adecuadamente
  },
  bookTitle: {
    marginTop: 5,
    fontSize: 16, // Ajusta esto según necesites
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigImage: {
    width: '100%',
    height: 200, // Ajusta esto según tus necesidades
  },
  smallImage: {
    width: 150, // Ajusta el ancho
    height: 100, // Ajusta la altura
  },
  title: {
    fontSize: 45,
    marginVertical: 20,
    color: 'grey',
  },
  button: {
    marginTop: 20,
    width: 300, // Ancho del botón
    backgroundColor: 'grey', // Color de fondo gris
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white', // Ajusta el color del texto aquí
    fontSize: 18, // Ajusta el tamaño del texto aquí
  },
});

export default HomeScreen;
