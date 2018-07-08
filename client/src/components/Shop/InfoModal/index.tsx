import * as React from 'react';
import styled, { css } from 'react-emotion';
import Modal from '../../UI/Modal';
import Button from '../../UI/Button';
import DiamondInfo from './DiamondInfo';
import { Diamond } from '../../../lib/interfaces';
import SupplierInfo from './SupplierInfo';

const ModalContent = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ModalClass = css`
  padding: 0;
`;

const Name = styled('div')`
  position: relative;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  color: #fff;
  background-color: #0080ff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled('div')`
  position: absolute;
  right: 10px;
  top: 1px;
  cursor: pointer;
  color: #eee;
  &:hover {
    color: #fff;
  }
`;

const BuyButtonContainer = styled('div')`
  position: absolute;
  right: 10px;
  top: 45px;
  cursor: pointer;
  .ui-button-view {
    background-color: #0080ff;
    color: white;
  }
`;

export interface InfoModalProps {
  diamond: Diamond | null;
  onInfoModalClose: () => void;
  onBuyClick: (diamond: Diamond) => void;
}

class InfoModal extends React.Component<InfoModalProps> {
  public render() {
    const { diamond } = this.props;
    return diamond ? (
      <Modal width={500} height={500} onClose={this.props.onInfoModalClose} modalClass={ModalClass}>
        <Name>
          {diamond.name} | {diamond.carat} ct | {diamond.price} USD
          <CloseButton onClick={this.props.onInfoModalClose}>
            <span className={'fa fa-times'}></span>
          </CloseButton>
          <BuyButtonContainer>
            <Button text='Buy' onClick={() => this.props.onBuyClick(this.props.diamond as Diamond)} />
          </BuyButtonContainer>
        </Name>
        <ModalContent>
          <DiamondInfo diamond={diamond} />
          <SupplierInfo supplierId={diamond.supplierId} />
        </ModalContent>
      </Modal>
    ) : null;
  }
}

export default InfoModal;
