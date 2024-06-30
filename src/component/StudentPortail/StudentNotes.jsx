import React from "react";

const StudentNotes = () => {
  return (
    <>
      <table
        className="table table-striped border border-start-0 border-end-0 w-100"
        style={{ marginTop: "-12rem" }}
      >
        <thead>
          <tr className="border-1 text-center border-secondary border-start-0 border-end-0 h-12 fw-bolder">
            <td className="text-start">Matière</td>
            <td>Note 1</td>
            <td>Note 2</td>
            <td>Note 3</td>
            <td>Note 4</td>
            <td>Note </td>
            <td>Note 5</td>
            <td>Note 6</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-1 text-center border-secondary border-start-0 border-end-0 h-12">
            <td className="text-start">Mathématiques</td>
            <td>18</td>
            <td>14</td>
            <td>18</td>
            <td>20</td>
            <td>10</td>
            <td>19</td>
            <td classNam>12</td>
          </tr>
          <tr className="border-1 text-center border-secondary border-start-0 border-end-0 h-12">
            <td className="text-start">Machine Learning</td>
            <td>11</td>
            <td>15</td>
            <td>18</td>
            <td>17</td>
            <td>15</td>
            <td>14</td>
            <td>19</td>
          </tr>
          <tr className="border-1 text-center border-secondary border-start-0 border-end-0 h-12">
            <td className="text-start">Framework Web</td>
            <td>15</td>
            <td>20</td>
            <td>13</td>
            <td>16</td>
            <td>17</td>
            <td>09</td>
            <td>13</td>
          </tr>
          <tr className="border-1 border-secondary border-start-0 border-end-0 h-12 text-center">
            <td className="text-start">Programmation Java</td>
            <td>14</td>
            <td>13</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>17</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default StudentNotes;
