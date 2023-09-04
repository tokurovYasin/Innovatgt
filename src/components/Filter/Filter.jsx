import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { styled } from "styled-components";
// import ImgFilter from "../../assets/img/filterBg.jpeg";

const FilterPage = styled.div`
  // background-image: url("");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
`;
const Container = styled.div`

  width: 1220px;

  background-repeat: no-repeat;
  margin: auto;

  max-width: 1220px;
  padding: 0 15px;
  margin: 0 auto;

`;

const Search_text = styled.div`
  margin: 50px 0;
  font-size: 30px;
`;
const MainImageBox = styled.div`
  width: 45%;
  padding-left: 70%;
`;
const Search_filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;
`;
const Filter = () => {
  const [bookType, setBookType] = React.useState("");
  const [genreBook, setGenreBook] = React.useState("");
  const [bookStatus, setBookStatus] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setBookType(event.target.value);
  };

  const handleChange1 = (event) => {
    setGenreBook(event.target.value);
  };

  const handleChange2 = (event) => {
    setBookStatus(event.target.value);
  };
  const handleChange3 = (event) => {
    setLocation(event.target.value);
  };
  return (
    <FilterPage>
      <Container>
        <Container>
          <Search_text>
            <h2 className="search_text_h2">Фильтрация</h2>
          </Search_text>

          <Search_filter>
            <div className="Filter_1">
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 230, color: "Primary" }}
              >
                <InputLabel id="demo-simple-select-label">Тип книги</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={bookType}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Комиксы</MenuItem>
                  <MenuItem value={20}>Манги</MenuItem>
                  <MenuItem value={30}>Ранобэ</MenuItem>
                  <MenuItem value={31}>Новеллы</MenuItem>
                  <MenuItem value={32}>Самопомощи</MenuItem>
                  <MenuItem value={33}>Научные</MenuItem>
                  <MenuItem value={34}>Поучительные</MenuItem>
                  <MenuItem value={35}> Литературные </MenuItem>
                  <MenuItem value={36}> Лингвистические </MenuItem>
                  <MenuItem value={37}> Технические </MenuItem>
                  <MenuItem value={38}> Информативные </MenuItem>
                  <MenuItem value={39}> Религиозные </MenuItem>
                  <MenuItem value={40}> Иллюстрированные </MenuItem>
                  <MenuItem value={41}> Лектронные </MenuItem>
                  <MenuItem value={42}> Поэтические </MenuItem>
                  <MenuItem value={43}> Биографические </MenuItem>
                  <MenuItem value={44}> Дидактические </MenuItem>
                  <MenuItem value={45}> Художественные </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="Filter_1">
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 230, color: "Primary" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Жанр книги
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={genreBook}
                  label="Age"
                  onChange={handleChange1}
                >
                  <MenuItem value={10}>Фэнтези</MenuItem>
                  <MenuItem value={20}>антастика</MenuItem>
                  <MenuItem value={30}>Детективы</MenuItem>
                  <MenuItem value={31}>Любовные романы</MenuItem>
                  <MenuItem value={32}>Эротика</MenuItem>
                  <MenuItem value={33}>Триллеры</MenuItem>
                  <MenuItem value={34}>Ужасы</MenuItem>
                  <MenuItem value={35}> Приключения </MenuItem>
                  <MenuItem value={36}> Проза </MenuItem>
                  <MenuItem value={37}> Поэзия </MenuItem>
                  <MenuItem value={38}> Бизнес литература </MenuItem>
                  <MenuItem value={39}> Психология </MenuItem>
                  <MenuItem value={40}> Искусство и культура </MenuItem>
                  <MenuItem value={41}> Научная литература </MenuItem>
                  <MenuItem value={42}> Хобби и досуг </MenuItem>
                  <MenuItem value={43}> зучение языков </MenuItem>
                  <MenuItem value={44}> Икомпьютерная литература </MenuItem>
                  <MenuItem value={45}> История </MenuItem>
                  <MenuItem value={46}> Общество </MenuItem>
                  <MenuItem value={47}> Мэмуары </MenuItem>
                  <MenuItem value={48}> Красота и здоровье </MenuItem>
                  <MenuItem value={49}> Книги для дошкольников </MenuItem>
                  <MenuItem value={50}> Внеклассное чтение </MenuItem>
                  <MenuItem value={51}>Детские приключенческие книги</MenuItem>
                  <MenuItem value={52}> Книги для школьников </MenuItem>
                  <MenuItem value={53}> Школьные учебники </MenuItem>
                  <MenuItem value={54}> Энциклопедия </MenuItem>
                  <MenuItem value={55}> Детские детективы </MenuItem>
                  <MenuItem value={56}> Книги для подростков </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="Filter_1">
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 230, color: "Primary" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Статус книги
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={bookStatus}
                  label="Age"
                  onChange={handleChange2}
                >
                  <MenuItem value={10}>Обмен</MenuItem>
                  <MenuItem value={20}>Аренда</MenuItem>
                  <MenuItem value={30}>Даром</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="Filter_1">
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 230, color: "Primary" }}
              >
                <InputLabel id="demo-simple-select-label">Локация</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={location}
                  label="Age"
                  onChange={handleChange3}
                >
                  <MenuItem value={10}>Бишкек</MenuItem>
                  <MenuItem value={20}>Ак-джол</MenuItem>
                  <MenuItem value={30}>Ала-бука</MenuItem>
                  <MenuItem value={31}>Ала-тоо</MenuItem>
                  <MenuItem value={32}>Аламедин</MenuItem>
                  <MenuItem value={33}>Александровка</MenuItem>
                  <MenuItem value={34}>Алмалуу </MenuItem>
                  <MenuItem value={35}> Ананьево </MenuItem>
                  <MenuItem value={36}> Араван </MenuItem>
                  <MenuItem value={37}> Арашан </MenuItem>
                  <MenuItem value={38}> Арчалы</MenuItem>
                  <MenuItem value={39}> Ат-башы </MenuItem>
                  <MenuItem value={40}> Бает</MenuItem>
                  <MenuItem value={41}> Баетов </MenuItem>
                  <MenuItem value={42}> Базар-коргон</MenuItem>
                  <MenuItem value={43}> Байтик </MenuItem>
                  <MenuItem value={44}> Бакай-ата </MenuItem>
                </Select>
              </FormControl>
            </div>
          </Search_filter>
        </Container>
        <MainImageBox>
          {/*<img width="500" />*/}
        </MainImageBox>
      </Container>
    </FilterPage>
  );
};

export default Filter;
/* image 15 */
