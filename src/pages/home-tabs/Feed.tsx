import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle } from "@ionic/react";


const Feed: React.FC = () => {

    const games = [
        {name: 'Pokemon Yellow'},
        {name: 'Mega Man X'},
        {name: 'The Legend of Zelda'},
        {name: 'Pac-Man'},
        {name: 'Super Mario World'},
        {name: 'BomberMan'}
    ]
  return (
    <IonPage>
        <IonHeader>
            <IonButtons>
                <IonMenuButton></IonMenuButton>
                <IonTitle>Feed</IonTitle>
            </IonButtons>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonList>
            {games.map((item,index)=>
            <IonItem key={index}>
<IonLabel>{item.name}</IonLabel>
            </IonItem>
            )}
            </IonList>
           
        </IonContent>
    </IonPage>
  )
};

export default Feed;