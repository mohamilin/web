import "@/styles/globals.css";
import '@/styles/styles.css';

import { LocalizationProvider } from "@/src/locales";
import { schemeConfig } from "@/src/theme/scheme-config";
import { ThemeProvider } from "@/src/theme/theme-provider";
import { ProgressBar } from "@/src/components/progress-bar";
import { MotionLazy } from "@/src/components/animate/motion-lazy";
import {
  SettingsDrawer,
  defaultSettings,
  SettingsProvider,
} from "@/src/components/settings";
import InitColorSchemeScript from "@mui/system/InitColorSchemeScript";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};


export default function App({ Component, pageProps }) {
  return (
    <>
      <InitColorSchemeScript
        defaultMode={schemeConfig.defaultMode}
        modeStorageKey={schemeConfig.modeStorageKey}
      />
      <LocalizationProvider>
        <SettingsProvider settings={defaultSettings}>
          <ThemeProvider>
            <MotionLazy>
              <ProgressBar />
              <SettingsDrawer />
              <Component {...pageProps} />
            </MotionLazy>
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </>
  );
}
