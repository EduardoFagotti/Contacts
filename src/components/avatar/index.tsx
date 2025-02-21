import {
  Image,
  ImageProps,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { style } from "./styles";

const variants = {
  size: {
    medium: { width: 54, height: 54, borderRadius: 18 },
    large: { width: 100, height: 100, borderRadius: 32 },
  },
  text: {
    medium: { fontSize: 24 },
    large: { fontSize: 52 },
  },
};

type Props = {
  name: string;
  image?: ImageProps | null;
  variant?: "medium" | "large";
  containerStyle?: StyleProp<ViewStyle>;
};

export function Avatar({
  image,
  name,
  variant = "medium",
  containerStyle,
}: Props) {
  return (
    <View style={containerStyle}>
      {image ? (
        <Image source={image} style={variants.size[variant]} />
      ) : (
        <View style={[style.letter, variants.size[variant]]}>
          <Text style={[style.text, variants.text[variant]]}>
            {name[0].toLocaleUpperCase()}
          </Text>
        </View>
      )}
    </View>
  );
}
