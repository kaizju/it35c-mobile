import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { supabase } from "../lib/supabaseClient";
const Login: React.FC = () => {
    const navigation = useIonRouter();
    const doLogin = () => {
        navigation.push('/app', 'forward', 'replace');
    }
    const signinWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location}app`
            }
        })
    }
    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Login
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-Padding">
                <IonButton expand="full" onClick={signinWithGoogle}>
                    <IonIcon icon={logoGoogle} />
                    Continue with Google
                </IonButton>
            </IonContent>
        </IonPage>
    )



};

export default Login;