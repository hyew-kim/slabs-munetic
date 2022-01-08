import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import { useLocation } from 'react-router-dom';
import UserTableCell from './User/UserTableCell';
import AdminUserTableCell from './AdminUser/AdminUserTableCell';
import LessonTableCell from './Lesson/LessonTableCell';
import { useUserUpdate, useUser } from '../../contexts/user';
import { Link } from 'react-router-dom';

export interface MUITableRowProps {
  numSelected: number;
  rowCount: number;
  isItemSelected: boolean;
  labelId: string;
  row: any;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

export default function MUITableRow({
  isItemSelected,
  labelId,
  row,
  handleClick,
}: MUITableRowProps) {
  const path = useLocation().pathname;

  const setUser = useUserUpdate();
  const user = useUser() as any;

  const modalHandler = () => {
    if (setUser) setUser(row);
  };
  return (
    <TableRow
      component={Link}
      to={`${row.id}`}
      hover
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.id}
      selected={isItemSelected}
      sx={{
        '& th': {
          fontSize: '1.25rem',
        },
      }}
      onClick={modalHandler}
    >
      <TableCell padding="checkbox">
        <Checkbox
          onClick={(event: any) => handleClick(event, row.id)}
          color="primary"
          checked={isItemSelected}
          inputProps={{
            'aria-labelledby': labelId,
          }}
        />
      </TableCell>

      <TableCell
        component="th"
        id={labelId}
        align="left"
        scope="row"
        padding="none"
      >
        {row.id}
      </TableCell>
      {path === '/users' && <UserTableCell row={row} />}
      {path === '/admin_users' && <AdminUserTableCell row={row} />}
      {(path === '/lessons' || path === `/users/${user!.id}`) && (
        <LessonTableCell row={row} />
      )}
    </TableRow>
  );
}
