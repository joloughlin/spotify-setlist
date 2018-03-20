import { createWithToggle } from './createWithToggle';

export const withModal = createWithToggle({
  initialState: false,
  stateName: 'isModalOpen',
  toggleName: 'toggleModal',
});
