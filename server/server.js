const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

var workouts = [
  {
    id: "id2",
    date: "2020-10-17",
    type: "TYPE_RUNNING",
    kilometrage: "7",
    comment: "cmnt2",
  },
  {
    id: "id8",
    date: "2020-10-15",
    type: "TYPE_CYCLING",
    kilometrage: "30",
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
  },

  {
    id: "id4",
    date: "2020-09-09",
    type: "TYPE_WALKING",
    kilometrage: "3",
    comment: "cmnt4",
  },
  {
    id: "id1",
    date: "1021-10-29",
    type: "TYPE_RUNNING",
    kilometrage: "3",
    comment: "cmnt1",
  },
  {
    id: "id5",
    date: "2020-03-21",
    type: "TYPE_SKIING",
    kilometrage: "10",
    comment: "cmnt5",
  },
  {
    id: "id3",
    date: "2020-04-11",
    type: "TYPE_WALKING",
    kilometrage: "2",
    comment: "cmnt3",
  },
  {
    id: "id7",
    date: "2020-03-22",
    type: "TYPE_CYCLING",
    kilometrage: "20",
    comment: "cmnt7",
  },
  {
    id: "id6",
    date: "2020-03-25",
    type: "TYPE_SKIING",
    kilometrage: "12",
    comment: "cmnt6",
  },
];

app.get("/", (req, res) => {
  res.send("Workouts API!");
});

app.get("/workouts", (req, res) => {
  res.send(workouts);
});

app.post("/workouts", (req, res) => {
  const workout = req.body;
  workouts.push(workout);
  res.send(workout);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
