import * as React from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  Container,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TestCategoryItem from "@/components/TestCategoryItem";
import AppStatistic from "@/components/AppStatistic";
import HomeNavbar from "@/components/HomeNavbar";
import { LinkIcon } from "./SvgIcons/Icons";
import Link from "next/link";
import CustomButton from "@/components/commond/CustomButton";

export const metadata = {
  title: "Qizil qaldirg'och",
  description: "Abiturientlar uchun test sinovlari",
  generator: "Next.js",
  applicationName: "Qizil qaldirg'och",
  referrer: "origin-when-cross-origin",
  keywords: ["Abiturient", "Testlar", "DTM", "dtm", "test sinovlari"],
  authors: [
    { name: "Ravshan Jumaqulov" },
    { name: "Ravshan Jumaqulov", url: "https://t.me/ravshan_jumaqulov" },
  ],
  creator: "Ravshan Jumaqulov",
  publisher: "Ravshan Jumaqulov",
  url: "https://swallow.net",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // openGraph: {
  //   images: "/swallow.png",
  // },
  images: [
    {
      url: "/swallow.png",
      width: 800,
      height: 600,
    },
    {
      url: "/swallow.png",
      width: 1800,
      height: 1600,
      alt: "My custom alt",
    },
  ],
  type: "website",
};

interface TestsInterface {
  id: number;
  savol: string;
  javoblar: { id: number; javob: string; status: boolean }[];
}
const tests: TestsInterface[] = [
  {
    id: 1,
    savol: "Qo'qon xonligi qanchon tashkil topgan?",
    javoblar: [
      {
        id: 1,
        javob: "1732 - yilda",
        status: false,
      },
      {
        id: 1,
        javob: "1709 - yilda",
        status: false,
      },
      {
        id: 1,
        javob: "1746 - yilda",
        status: false,
      },
      {
        id: 1,
        javob: "XVIII - IXX asrlarda",
        status: false,
      },
    ],
  },
];

export default function HomePage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <HomeNavbar />
      <Box
        component={"section"}
        sx={{
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:
            "url(https://remini.ai/images/blurs/section=hero.webp)",
          py: { xd: 6, md: 10 },
          px: 2.5,
          width: "100%",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: 40, md: 80 },
              textAlign: { xs: "left", md: "center" },
              letterSpacing: "-0.04em",
            }}
          >
            O`z bilimingizni tekshirishingiz uchun yagona platforma
          </Typography>
          <Box sx={{ mt: { xs: 2.5, md: 5 }, maxWidth: 640, mx: "auto" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: 16, md: 24 },
                textAlign: { xs: "left !important", md: "center" },
              }}
            >
              Ushbu platformadan foydalangan holda siz turli xil yo`nalishlarda
              o`z bilimingizni baholashingiz, o`zingizni sinab ko`rishingiz
              imkoniyati yaratilgan.
            </Typography>
          </Box>
          <CustomButton
            component={Link}
            title="Hozir boshlash"
            href="/app"
            endIcon={<LinkIcon sx={{ fill: "#000" }} />}
            sx={{
              mt: 5,
              py: 2,
              px: 3,
              mx: { sm: "auto" },
              borderRadius: 50,
              color: "#fff",
              backgroundColor: "hsla(0,0%,100%,.1)",
              border: "2px solid transparent",
              "&:hover": {
                border: "2px solid hsla(0,0%,100%,.1) !important",
                backgroundColor: "hsla(0,0%,100%,.1)",
              },
            }}
          />
          <Box sx={{ mt: 8 }}>
            <Box sx={{ mb: 2, pl: 4 }}>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", fontWeight: 600 }}
              >
                Product Demo
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                p: 2.5,
                borderRadius: 10,
                border: "2px solid hsla(0,0%,100%,.1)",
                rowGap: { xs: 2.5, lg: 3 },
                backgroundColor: "#000",
              }}
            >
              <Grid2
                container
                spacing={4}
                sx={{ flexDirection: { md: "row-reverse" } }}
              >
                <Grid2 xs={12} md={4}>
                  <Box
                    sx={{
                      backgroundColor: "hsla(0,0%,100%,.05)",
                      borderRadius: "25px",
                      height: "100%",
                    }}
                  >
                    <Avatar
                      sx={{ width: 100, height: 100, mx: "auto" }}
                      src={`/smile${Math.floor(Math.random() * 7) + 1}.png`}
                    />
                    <Typography variant="subtitle2" sx={{ mx: "auto" }}>
                      Foydalanuvchi
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: "50%",
                          borderRight: "1px solid hsla(0,0%,100%,.6)",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", pr: 2 }}
                        >
                          Testlar soni
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "50%",
                          borderLeft: "1px solid hsla(0,0%,100%,.6)",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "left", pl: 2 }}
                        >
                          Ajratilgan vaqt
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 0.5,
                      }}
                    >
                      <Box sx={{ width: "50%" }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ textAlign: "right", pr: 2 }}
                        >
                          5
                        </Typography>
                      </Box>
                      <Box sx={{ width: "50%" }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ textAlign: "left", pl: 2, fontSize: 30 }}
                        >
                          &#8734;
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid2>
                <Grid2 xs={12} md={8}>
                  <Box sx={{ maxHeight: "80vh", overflowY: "auto", rowGap: 2 }}>
                    {/* {tests.map((el: TestsInterface, index: number) => {
                      return <TestItem key={index} item={el} />;
                    })} */}
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        component={"section"}
        sx={{
          backgroundImage: {
            xs: "url(https://remini.ai/images/lines/section=platform.webp)",
            md: "url(https://remini.ai/images/blurs/section=features.webp)",
          },
          backgroundPosition: { xs: "50%", md: "100%" },
          backgroundSize: { xs: "cover", md: "contain" },
          backgroundRepeat: "no-repeat",
          py: 12,
          px: 2.5,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", lg: "row" },
            alignItems: "center",
            justifyContent: "space-around",
            gap: "2rem",
          }}
        >
          <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
            <Box
              component={"img"}
              src="https://images.prismic.io/remini-marketing-website/d4e548d5-6064-4e07-a982-ea39937a4c2f_ai-photos-home.webp?auto=compress%2Cformat&fit=max&w=1440"
              loading="lazy"
              decoding="async"
              height={"1600"}
              width={"1300"}
              sx={{
                maxWidth: "100%",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", lg: "430px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                mb: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography
                component={"span"}
                sx={{
                  mr: 1,
                  display: "inline",
                  borderRadius: 40,
                  backgroundColor: "rgb(255, 58, 92)",
                  px: "14px",
                  py: "6px",
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "left",
                  lineHeight: 1.25,
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                New
              </Typography>
              <Typography
                component={"span"}
                sx={{
                  mr: 1,
                  display: "inline",
                  fontSize: 14,
                  textAlign: "left",
                  lineHeight: 1.25,
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "transparent",
                  background: "linear-gradient(to right, #913aff, #c2adff)",
                  backgroundClip: "text",
                }}
              >
                My Test
              </Typography>
            </Box>
            <Typography
              component={"h2"}
              variant="subtitle2"
              sx={{
                color: "#fff",
                fontSize: { xs: 40, md: 80, lg: 56 },
                fontWeight: 500,
                textAlign: {
                  xs: "left",
                  sm: "center",
                  md: "center",
                  lg: "left",
                },
                lineHeight: 1.25,
                letterSpacing: "-0.04em",
                cursor: "default",
                mx: "auto",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Bilimingizni tekshirish hamda rivojlanish
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: { xs: 2.5, md: 4 },
                fontSize: { xs: 16, md: 20 },
                lineHeight: { xs: 1.5, md: 1.65 },
                letterSpacing: { xs: "0.02em", md: "-0.01em" },
                mx: { sm: "auto" },
                textAlign: {
                  xs: "left",
                  sm: "center",
                  md: "center",
                  lg: "left",
                },
              }}
            >
              Bajargan topshiriqlaringiz bilimingiz baholash hamda IQ
              darajanizni shakllantiradi.
            </Typography>
            <Button
              component={Link}
              href="/app"
              endIcon={<LinkIcon sx={{ fill: "#fff" }} />}
              sx={{
                py: 2,
                px: 3,
                mx: { sm: "auto" },
                borderRadius: 80,
                mt: { xs: 3, md: 7 },
                color: "#fff",
                backgroundColor: "hsla(0,0%,100%,.1)",
                border: "2px solid transparent",
                transitionProperty:
                  "color,background-color,border-color,text-decoration-color,fill,stroke",
                transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
                transitionDuration: "0.15s",
                "&:hover": {
                  border: "2px solid hsla(0,0%,100%,.1) !important",
                  backgroundColor: "hsla(0,0%,100%,.1)",
                },
              }}
            >
              Hoziroq sinab ko`rish
            </Button>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          px: 2.5,
          width: "100%",
          backgroundImage:
            "url(https://remini.ai/images/blurs/section=businesses.webp)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <Container>
          <Typography
            sx={{
              display: "inline-block",
              fontSize: 14,
              textAlign: "left",
              lineHeight: 1.25,
              letterSpacing: "0.1em",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "transparent",
              background: "linear-gradient(to right, #913aff, #c2adff)",
              backgroundClip: "text",
            }}
          >
            Levels
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: 40, md: 80 },
              textAlign: { xs: "left", sm: "center", md: "center !important" },
              letterSpacing: "-0.04em",
              mx: "auto",
            }}
          >
            IQ ko`rsatkichingizni bosqichma bosqich oshirish
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: { xs: 2.5, md: 4 },
              fontSize: { xs: 16, md: 24 },
              lineHeight: { xs: 1.5, md: 1.65 },
              letterSpacing: { xs: "0.02em", md: "-0.01em" },
              mx: { sm: "auto" },
              textAlign: {
                xs: "left",
                sm: "center",
                md: "center",
                lg: "center",
              },
              maxWidth: 640,
            }}
          >
            Topshiriqlarni endi bajarib boshlagan talabalaarga oson toifasidagi
            testlar beriladi hamda testlarni ishlash jarayonida qiyin toifadagi
            savollargacha qadamma-qadam ko`tarilib borishadi.
          </Typography>
          <Box
            sx={{
              mt: { xs: 8, md: 10 },
              gap: { sx: 4, md: 6 },
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(3, minmax(0, 1fr))",
              },
            }}
          >
            <TestCategoryItem
              img="https://images.prismic.io/remini-marketing-website/8ce06fe3-83ba-438b-854d-d45431b81b6c_Solution%3Deducation.png?auto=compress%2Cformat&fit=max&w=256"
              title="Oddiy"
              des="Boshlovchilar uchun sodda va anchagina oson bo'lgan savollar
        joylashtirilgan bo'lim!"
            />
            <TestCategoryItem
              img="https://images.prismic.io/remini-marketing-website/aa7e6973-10f4-4532-b127-f410ed473d9f_Solution%3Dprinting_services.png?auto=compress%2Cformat&fit=max&w=256"
              title="O'rta"
              des="Ushbu bo'lim savollari Oddiy bo'lim savollariga nisbatan biroz murakkabroq bo'ladi!"
            />
            <TestCategoryItem
              img="https://images.prismic.io/remini-marketing-website/309793ad-00cf-453b-a14a-10e7a1cb4d2d_Solution%3Dmagazines.png?auto=compress%2Cformat&fit=max&w=256"
              title="Qiyin"
              des="Ushbu bo'limga tegishli savollar anchayin murakkab bo'lib talabani mushohadaga undaydi!"
            />
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          py: { xs: 8, md: 10, lg: 12 },
          px: 2.5,
          width: "100%",
          backgroundImage:
            "url(https://remini.ai/images/lines/section=reviews.webp)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <Container>
          <Typography
            sx={{
              display: "inline-block",
              fontSize: 14,
              textAlign: "left",
              lineHeight: 1.25,
              letterSpacing: "0.1em",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "transparent",
              background: "linear-gradient(to right, #913aff, #c2adff)",
              backgroundClip: "text",
            }}
          >
            Our users
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: 40, md: 80 },
              textAlign: { xs: "left", sm: "center", md: "center !important" },
              letterSpacing: "-0.04em",
              mx: "auto",
            }}
          >
            Minglab insonlar foydalanadi
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: { xs: 2.5, md: 4 },
              fontSize: { xs: 16, md: 24 },
              lineHeight: { xs: 1.5, md: 1.65 },
              letterSpacing: { xs: "0.02em", md: "-0.01em" },
              mx: { sm: "auto" },
              textAlign: {
                xs: "left",
                sm: "center",
                md: "center",
                lg: "center",
              },
              maxWidth: 640,
            }}
          >
            Bugungacha dasturdan minglab insonlar foydalanib kelmoqda. Insonlar
            turli sohalarda o`zlanining bilimlarini ham tekshirib ko`rish hamda
            bilmaganlarni o`rganish maqsadida platformadan foydalanib
            kelishmoqda!
          </Typography>
          <Box
            sx={{
              mt: { xs: 6, md: "107px" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-around",
            }}
          >
            <AppStatistic status="2M+" des="active students" />
            <AppStatistic status="100+" des="active teachers" />
            <AppStatistic status="5M+" des="Tests" />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
