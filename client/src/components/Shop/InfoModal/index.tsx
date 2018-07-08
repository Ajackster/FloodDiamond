import * as React from 'react';
import styled from 'react-emotion';
import Modal from '../../UI/Modal';
import DiamondInfo from './DiamondInfo';
import { Diamond } from '../../../lib/interfaces';
import CollapsibleItem from '../../UI/CollapsibleItem';
import SupplierInfo from './SupplierInfo';

const ModalContent = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export interface InfoModalProps {
  diamond: Diamond | null;
  onInfoModalClose: () => void;
}

class InfoModal extends React.Component<InfoModalProps> {
  public render() {
    return this.props.diamond ? (
      <Modal width={500} height={500} onClose={this.props.onInfoModalClose}>
        <ModalContent>
          <DiamondInfo diamond={this.props.diamond} />
          <CollapsibleItem title='Supplier'>
            <SupplierInfo supplierId={this.props.diamond.supplierId} />
          </CollapsibleItem>
        </ModalContent>
      </Modal>
    ) : null;
  }
}

export default InfoModal;
