.then((url) => {
            console.log(document);
            this.hidden = true;
            let tableRow = ``;
            tableRow += `<tr class="rolling" >`;
            tableRow += `<td class="book"><a href=${url}; download=${document.bookName} target='_blank'><i class="fa fa-arrow-down"  style="color:green"></i> </a></td>`;
            tableRow += `<td class="bookName"> ${document.bookName}</td>`;
            tableRow += `<td class="bookAuthor"> ${document.bookAuthor}</td>`;
            tableRow += `<td class="university"> ${document.university}</td>`;
            tableRow += `<td class="faculty"> ${document.faculty} </td>`;
            tableRow += `<td class="department"> ${document.department} </td>`;
            tableRow += `<td class="level"> ${document.level} </td>`;
            tableRow += `<td class="semester"> ${document.semester} </td>`;
            tableRow += `<td class="uploader"> ${document.uploader}</td>`;
            tableRow += `</tr>`;
            table.innerHTML += tableRow;
          })
          .catch((error) => {
            console.log(error);
          });